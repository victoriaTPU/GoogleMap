import requests
import csv

url = "https://restcountries.com/v3.1/all"

response = requests.get(url)
data = response.json()

capitals_coordinates = {} # словарь ключ: значение

#print(data[0])

for country in data: #парсим ответ от API и обрабатываем

    country_name = country.get("name").get("common")
    capital = country.get("capital")
    latlng = country.get("latlng")
    
    if capital and latlng: #проверка существования
        capitals_coordinates[country_name] = {
            "capital": capital[0],
            "latitude": latlng[0],
            "longitude": latlng[1]
        }
        
print(capitals_coordinates)
  

with open("Coordinates.csv", "w", newline="", encoding="utf-8") as csvfile:
    fieldnames = ["Country", "Capital", "Latitude", "Longitude"]
    
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    
    writer.writeheader()
    
    for country, info in capitals_coordinates.items():
        writer.writerow({
            "Country": country,
            "Capital": info["capital"],
            "Latitude": info["latitude"],
            "Longitude": info["longitude"]
        })

print("Data has been written to Coordinates.csv file.")
