module.exports = function InputLocationMessageContent(data) {

    /* Class members */

    let latitude = data['latitude'] ? data['latitude'] : null; /* Latitude of the location in degrees */
    let longitude = data['longitude'] ? data['longitude'] : null; /* Longitude of the location in degrees */
    let live_period = data['live_period'] ? data['live_period'] : null; /* * Optional *. Period in seconds for which the location can be updated, should be between 60 and 86400. */

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

        "live_period": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                live_period = value;
            },
            get: function () {
                return live_period;
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
                    'live_period': this.live_period,
                };
            },
        },
    });

}
