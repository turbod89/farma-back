const Location = require('./Location');


module.exports = function Venue(data) {

    /* Class members */

    let location = data['location'] ? new Location(data['location']) : null; /* Venue location */
    let title = data['title'] ? data['title'] : null; /* Name of the venue */
    let address = data['address'] ? data['address'] : null; /* Address of the venue */
    let foursquare_id = data['foursquare_id'] ? data['foursquare_id'] : null; /* * Optional *. Foursquare identifier of the venue */
    let foursquare_type = data['foursquare_type'] ? data['foursquare_type'] : null; /* * Optional *. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium”... */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "location": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                location = value;
            },
            get: function () {
                return location;
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
                    'location': this.location.toArray(deep - 1),
                    'title': this.title,
                    'address': this.address,
                    'foursquare_id': this.foursquare_id,
                    'foursquare_type': this.foursquare_type,
                };
            },
        },
    });

}
