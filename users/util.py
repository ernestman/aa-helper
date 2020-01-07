import googlemaps
import time
import requests
import json

GOOGLE_API_KEY = "AIzaSyAI3KS5AyUFYiAgV6Zzpj52R4OKX7z8Lkc"

YELP_API_KEY = "Hq9KqeXiwgBE9bchih6_9bP3UEzxxAlOPXhN6OtETUXnJuS6mFKmvpWC-ONiv_YHxeFiNzagO9PhAhefmD5mgqZq5K6LbHdA8ewLwohVjdjXzEF6HTJ_yvs3sKgRXnYx"
YELP_HEADERS = {"Authorization": "Bearer " + YELP_API_KEY}

gmaps = googlemaps.Client(key=GOOGLE_API_KEY)

def routes_google_api(query_set):
    for route in query_set:
        time.sleep(0.28)
        start_geocode = gmaps.reverse_geocode((route.start_lat, route.start_lon))
        end_geocode = gmaps.reverse_geocode((route.end_lat, route.end_lon))
        directions = gmaps.directions(
            origin={"lat": route.start_lat, "lng": route.start_lon},
            destination={"lat": route.end_lat, "lng": route.end_lon},
            mode=route.travel_mode.lower()
        )[0]["legs"][0]
        route.start_city = list(filter(lambda item: len(item["address_components"]) == 4, start_geocode))[0]["formatted_address"][0:-5]
        route.end_city = list(filter(lambda item: len(item["address_components"]) == 4, end_geocode))[0]["formatted_address"][0:-5]
        route.time = directions["duration"]["text"]
        route.distance = directions["distance"]["text"]
    return query_set

def getYelpBusinesses(lat, lng):
    yelp_url = "https://api.yelp.com/v3/businesses/search"
    query_params = {
        "term": "food",
        "latitude": lat,
        "longitude": lng,
        "limit": 15,
        # "sort_by": "distance"
    }
    response = requests.get(
        url=yelp_url,
        params=query_params,
        headers=YELP_HEADERS
    )
    businesses_data = response.json()
    businesses_array = []

    for bus in businesses_data["businesses"]:
        business_obj = {}
        display_address = bus["location"]["display_address"]
        categories = map(lambda cat: cat["title"], bus["categories"])
        categories = ", ".join(categories)
        
        business_obj["name"] = bus["name"]
        business_obj["image_url"] = bus["image_url"]
        business_obj["is_closed"] = bus["is_closed"]
        business_obj["url"] = bus["url"]
        business_obj["review_count"] = bus["review_count"]
        business_obj["categories"] = categories
        business_obj["rating"] = bus["rating"]
        business_obj["price"] = bus["price"]
        business_obj["display_address"] = display_address[0]
        business_obj["display_phone"] = bus["display_phone"]
        business_obj["distance"] = bus["distance"]
        businesses_array.append(business_obj)

    return businesses_array