import axios from "axios";

// const api_key = "AIzaSyAI3KS5AyUFYiAgV6Zzpj52R4OKX7z8Lkc";

// export const reverseGeocode = (lat, lng) => {
//     return axios.get(
//         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${api_key}`
//     )
// }

export const reverseGeocode = (lat, lng) => {
    return new Promise( (resolve, reject) => {
        let geocoder = new google.maps.Geocoder;
        let latlng = {
            lat: lat,
            lng: lng
        }
        geocoder.geocode( {"location": latlng}, function(results, status) {
            if (status === "OK") {
                resolve(results)
            } else {
                reject({"errors": "results could not be found"})
            }
        } )
    })
}