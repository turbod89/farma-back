const User = require('./User');
const ShippingAddress = require('./ShippingAddress');


module.exports = function ShippingQuery(data) {

    /* Class members */

    let id = data['id'] ? data['id'] : null; /* Unique query identifier */
    let from = data['from'] ? new User(data['from']) : null; /* User who sent the query */
    let invoice_payload = data['invoice_payload'] ? data['invoice_payload'] : null; /* Bot specified invoice payload */
    let shipping_address = data['shipping_address'] ? new ShippingAddress(data['shipping_address']) : null; /* User specified shipping address */

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

        "from": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                from = value;
            },
            get: function () {
                return from;
            },
        },

        "invoice_payload": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                invoice_payload = value;
            },
            get: function () {
                return invoice_payload;
            },
        },

        "shipping_address": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                shipping_address = value;
            },
            get: function () {
                return shipping_address;
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
                    'from': this.from.toArray(deep - 1),
                    'invoice_payload': this.invoice_payload,
                    'shipping_address': this.shipping_address.toArray(deep - 1),
                };
            },
        },
    });

}
