module.exports = function Location(data) {

    /* Class members */

    let longitude = data['longitude'] ? data['longitude'] : null; /* Longitude as defined by sender */
    let latitude = data['latitude'] ? data['latitude'] : null; /* Latitude as defined by sender */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "longitude": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                longitude = value;
            },
            get: function () {
                return longitude;
            },
        },

        "latitude": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                latitude = value;
            },
            get: function () {
                return latitude;
            },
        },

    });


    /* toArray */

    Object.defineProperties(this, {
        'toArray': {
            enumerable: false,
            modificable: false,
            value: function (deep = -1) {

                if (deep === 0) {
                    return {};
                }

                return {
                    'longitude': this.longitude,
                    'latitude': this.latitude,
                };
            },
        },
    });

}
