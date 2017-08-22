require "sinatra"
require "csv"
require "pry"
require 'json'
require "net/http"
require "uri"



def readSaves
	  saves = [] #Array to hold information of saves in 2 arrays
	  date = []  #Array to hold save time information
	  data = []	 #Array to hold save color information
	CSV.foreach("saves.txt", {headers: true, return_headers: false}) do |row|			
	  date.push(row["Date"].chomp)
	  # data.push(row["Data"].chomp)
	end
	saves.push(date)
	saves.push(data)
 return saves
end

def createLoadList 
 	saves = [] #Array to hold information of saves in 2 arrays
	date = []  #Array to hold save time information
	data = []	 #Array to hold save color information
	CSV.foreach("saves.txt", {headers: true, return_headers: false}) do |row|			
	  date.push(row["Date"].chomp)
	  				data.push(row["Data"].chomp)
	end
	saves.push(date)
	saves.push(data)# function to create a form with a drop down list of saves
	listForm = "<form action=\"/load_paintings\"> <select name=\"Paintings\">"
	date.each do |date|
		listForm += "<option value =\"" + date + "\">" + date + "</option>"
	end
	listForm += "</select><br><br><input type=\"submit\"></form>"
	return listForm
end


# <form action="/action_page.php">
#   <select name="cars">
#     <option value="volvo">Volvo</option>
#     <option value="saab">Saab</option>
#     <option value="fiat">Fiat</option>
#     <option value="audi">Audi</option>
#   </select>
#   <br><br>
#   <input type="submit">
# </form>