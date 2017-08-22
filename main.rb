require "sinatra"
require "csv"
require "pry"
require 'json'
require "net/http"
require "uri"
require "date"

require_relative "functions.rb"

# Homepage
get '/' do 
	erb :index
end

post '/save_painting' do
	stuffToRead = params["saveArt"]
	# binding.pry
	saveLine = DateTime.now.strftime("%H:%M:%S").to_s.chomp + "," + stuffToRead.chomp
	#saveLine = Time.now.to_s.chomp + "," + stuffToRead.tr!("\"", "-").chomp	
	# binding.pry
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