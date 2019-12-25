export const reverseGeocode = (lat, lng) => {
    console.log("request made")
    return new Promise( (resolve, reject) => {
        let geocoder = new google.maps.Geocoder();
        let latlng = {
            lat: lat,
            lng: lng
        }
        setTimeout(geocoder.geocode, 1000, {"location": latlng}, function(results, status) {
            if (status === "OK") {
                resolve(results)
            } else {
                reject({"errors": status})
            }
        })
        // geocoder.geocode( {"location": latlng}, function(results, status) {
        //     if (status === "OK") {
        //         resolve(results)
        //     } else {
        //         reject({"errors": status})
        //     }
        // } )
    })
}

export const getDirections = (start, end, travel) => {
    return new Promise( (resolve, reject) => {
        let directionsService = new google.maps.DirectionsService();
        let request = {
            origin: start,
            destination: end,
            travelMode: travel
        }
        directionsService.route(request, function(results, status) {
            if (status === "OK") {
                resolve(results)
            } else {
                reject({"errors": status})
            }
        })
    })
}