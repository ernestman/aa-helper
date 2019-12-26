import googlemaps
import time

gmaps = googlemaps.Client(key="AIzaSyAI3KS5AyUFYiAgV6Zzpj52R4OKX7z8Lkc")

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
