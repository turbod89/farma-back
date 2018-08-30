module.exports = function ShippingAddress(data) {

    /* Class members */

    let country_code = data['country_code'] ? data['country_code'] : null; /* ISO 3166-1 alpha-2 country code */
    let state = data['state'] ? data['state'] : null; /* State, if applicable */
    let city = data['city'] ? data['city'] : null; /* City */
    let street_line1 = data['street_line1'] ? data['street_line1'] : null; /* First line for the address */
    let street_line2 = data['street_line2'] ? data['street_line2'] : null; /* Second line for the address */
    let post_code = data['post_code'] ? data['post_code'] : null; /* Address post code */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "country_code": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                country_code = value;
            },
            get: function () {
                return country_code;
            },
        },

        "state": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                state = value;
            },
            get: function () {
                return state;
            },
        },

        "city": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                city = value;
            },
            get: function () {
                return city;
            },
        },

        "street_line1": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                street_line1 = value;
            },
            get: function () {
                return street_line1;
            },
        },

        "street_line2": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                street_line2 = value;
            },
            get: function () {
                return street_line2;
            },
        },

        "post_code": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                post_code = value;
            },
            get: function () {
                return post_code;
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
                    'country_code': this.country_code,
                    'state': this.state,
                    'city': this.city,
                    'street_line1': this.street_line1,
                    'street_line2': this.street_line2,
                    'post_code': this.post_code,
                };
            },
        },
    });

}
