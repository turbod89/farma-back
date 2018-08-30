const User = require('./User');
const OrderInfo = require('./OrderInfo');


module.exports = function PreCheckoutQuery(data) {

    /* Class members */

    let id = data['id'] ? data['id'] : null; /* Unique query identifier */
    let from = data['from'] ? new User(data['from']) : null; /* User who sent the query */
    let currency = data['currency'] ? data['currency'] : null; /* Three-letter ISO 4217 <a href="/bots/payments#supported-currencies">currency</a> code */
    let total_amount = data['total_amount'] ? data['total_amount'] : null; /* Total price in the * smallest units * of the currency (integer, ** not ** float/double). For example, for a price of ... */
    let invoice_payload = data['invoice_payload'] ? data['invoice_payload'] : null; /* Bot specified invoice payload */
    let shipping_option_id = data['shipping_option_id'] ? data['shipping_option_id'] : null; /* * Optional *. Identifier of the shipping option chosen by the user */
    let order_info = data['order_info'] ? new OrderInfo(data['order_info']) : null; /* * Optional *. Order info provided by the user */

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

        "currency": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                currency = value;
            },
            get: function () {
                return currency;
            },
        },

        "total_amount": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                total_amount = value;
            },
            get: function () {
                return total_amount;
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

        "shipping_option_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                shipping_option_id = value;
            },
            get: function () {
                return shipping_option_id;
            },
        },

        "order_info": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                order_info = value;
            },
            get: function () {
                return order_info;
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
                    'currency': this.currency,
                    'total_amount': this.total_amount,
                    'invoice_payload': this.invoice_payload,
                    'shipping_option_id': this.shipping_option_id,
                    'order_info': this.order_info.toArray(deep - 1),
                };
            },
        },
    });

}
