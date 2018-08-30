const LabeledPrice = require('./LabeledPrice');


module.exports = function ShippingOption(data) {

    /* Class members */

    let id = data['id'] ? data['id'] : null; /* Shipping option identifier */
    let title = data['title'] ? data['title'] : null; /* Option title */
    let prices = data['prices'] ? data['prices'].map( element => new LabeledPrice(element) ) : null; /* List of price portions */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                id = value;
            },
            get: function () {
                return id;
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

        "prices": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                prices = value;
            },
            get: function () {
                return prices;
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
                    'id': this.id,
                    'title': this.title,
                    'prices': this.prices.map( element => element.toArray(deep - 1) ),
                };
            },
        },
    });

}
