module.exports = function InputVenueMessageContent(data) {

    /* Class members */

    let latitude = data['latitude'] ? data['latitude'] : null; /* Latitude of the venue in degrees */
    let longitude = data['longitude'] ? data['longitude'] : null; /* Longitude of the venue in degrees */
    let title = data['title'] ? data['title'] : null; /* Name of the venue */
    let address = data['address'] ? data['address'] : null; /* Address of the venue */
    let foursquare_id = data['foursquare_id'] ? data['foursquare_id'] : null; /* * Optional *. Foursquare identifier of the venue, if known */
    let foursquare_type = data['foursquare_type'] ? data['foursquare_type'] : null; /* * Optional *. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment... */

    /* Getters and Setters*/

    Object.defineProperties(this, {

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

        "title": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                title = value;
            },
            get: function () {
                return title;
            },
        },

        "address": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                address = value;
            },
            get: function () {
                return address;
            },
        },

        "foursquare_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                foursquare_id = value;
            },
            get: function () {
                return foursquare_id;
            },
        },

        "foursquare_type": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                foursquare_type = value;
            },
            get: function () {
                return foursquare_type;
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
                    'latitude': this.latitude,
                    'longitude': this.longitude,
                    'title': this.title,
                    'address': this.address,
                    'foursquare_id': this.foursquare_id,
                    'foursquare_type': this.foursquare_type,
                };
            },
        },
    });

}
