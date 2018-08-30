const ShippingAddress = require('./ShippingAddress');


module.exports = function OrderInfo(data) {

    /* Class members */

    let name = data['name'] ? data['name'] : null; /* * Optional *. User name */
    let phone_number = data['phone_number'] ? data['phone_number'] : null; /* * Optional *. User&#39;s phone number */
    let email = data['email'] ? data['email'] : null; /* * Optional *. User email */
    let shipping_address = data['shipping_address'] ? new ShippingAddress(data['shipping_address']) : null; /* * Optional *. User shipping address */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "name": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                name = value;
            },
            get: function () {
                return name;
            },
        },

        "phone_number": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                phone_number = value;
            },
            get: function () {
                return phone_number;
            },
        },

        "email": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                email = value;
            },
            get: function () {
                return email;
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
                    'name': this.name,
                    'phone_number': this.phone_number,
                    'email': this.email,
                    'shipping_address': this.shipping_address.toArray(deep - 1),
                };
            },
        },
    });

}
