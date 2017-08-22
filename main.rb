require "sinatra"
require "csv"
require "pry"
require 'json'
require "net/http"
require "uri"







# Homepage
get '/' do 
	erb :index
end

post '/save_painting' do
	stuffToRead = params["saveArt"]
	saveLine = Time.now.to_s.chomp + "," + stuffToRead.chomp	
	File.open("saves.txt", "a") do |line|
		line.puts saveLine.chomp
	end
	erb :imgsaved
end


# JSON.parse	
	# endstuffToRead.length.times do |i|
		# if i == ""
		# 	saveLine +="white\","
		# else	
		# 	saveLine += ("\""+i+"\",")
	
	 # end
	# endstuffToRead.length.times do |i|
		# if i == ""
		# 	saveLine +="white\","
		# else	
		# 	saveLine += ("\""+i+"\",")
	
	 # end