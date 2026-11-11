#!/usr/bin/env ruby
# Controleert de kennisbank vóór een push: zet elke pagina met kramdown om naar
# HTML, zoals GitHub Pages dat met Jekyll doet, en kijkt of alles is omgezet en
# elke link naar een bestaand anker wijst. Jekyll zelf is hiervoor niet nodig.
#
#   ruby _scripts/check-kb.rb                      # alle pagina's in support/kb
#   ruby _scripts/check-kb.rb support/kb/grim-reader/*.md
#
# Staat in een map met underscore, zodat Jekyll hem niet mee publiceert.
# Eindigt met code 1 als er iets mis is.
require 'kramdown'

begin
  require 'kramdown-parser-gfm'
  INVOER = 'GFM' # wat GitHub Pages gebruikt
rescue LoadError
  INVOER = 'kramdown' # zonder de GFM-gem; voor tabellen, lijsten en ankers gelijk
end

ROOT = File.expand_path('..', __dir__)
bestanden = ARGV.empty? ? Dir[File.join(ROOT, 'support/kb/**/*.md')] : ARGV.map { |f| File.expand_path(f) }

def html_van(pad)
  bron = File.read(pad).sub(/\A---.*?---\n/m, '')
  Kramdown::Document.new(bron, input: INVOER).to_html
end

# Alles eerst omzetten, zodat links naar andere pagina's te controleren zijn.
pagina = {}
bestanden.sort.each { |pad| pagina[pad] = html_van(pad) }
ankers = pagina.transform_values { |html| html.scan(/id="([^"]+)"/).flatten }

def doel_van(pad, href)
  return pad if href.empty?
  bestand = href.end_with?('/') ? "#{href}index.html" : href
  File.expand_path(bestand.sub(/\.html\z/, '.md'), File.dirname(pad))
end

problemen = []
pagina.each do |pad, html|
  naam = pad.delete_prefix("#{ROOT}/")

  # Niet omgezette Markdown: losse sterretjes of ankerregels.
  html.each_line.with_index(1) do |regel, nr|
    next if regel.include?('<code>') || regel.include?('<pre>')
    problemen << "#{naam}: niet omgezet bij HTML-regel #{nr}: #{regel.strip[0, 80]}" if regel =~ /\*\*|\{: #/
  end

  html.scan(/href="([^"#:]*)#([^"]+)"/).each do |href, anker|
    doel = doel_van(pad, href)
    if !pagina.key?(doel)
      next unless File.exist?(doel) # buiten deze controle; dan niet beoordelen
      ankers[doel] = html_van(doel).scan(/id="([^"]+)"/).flatten
      pagina[doel] = :buiten
    end
    next if ankers[doel].include?(anker)

    problemen << "#{naam}: link naar #{href.empty? ? '' : href}##{anker} wijst naar een anker dat niet bestaat"
  end

  # group_by in plaats van tally: de Ruby op de Mac mini is 2.6.
  dubbel = ankers[pad].group_by(&:itself).select { |_, v| v.size > 1 }.keys
  problemen << "#{naam}: ankers komen dubbel voor: #{dubbel.join(', ')}" unless dubbel.empty?
end

gecontroleerd = pagina.count { |_, v| v != :buiten }
if problemen.empty?
  puts "#{gecontroleerd} pagina's in orde (invoer: #{INVOER})."
else
  puts problemen
  puts "#{problemen.size} problemen in #{gecontroleerd} pagina's (invoer: #{INVOER})."
  exit 1
end
