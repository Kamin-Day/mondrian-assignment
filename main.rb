require "sinatra"
require "csv"
require "pry"
require_relative "functions.rb"
require 'json'
require "net/http"
require "uri"







# Homepage
get '/' do 
	erb :index
end

post '/save' do

arr = JSON.parse(the_string)

 # alert("Your art has been added to the gallery!")
end