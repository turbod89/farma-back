module.exports = function Invoice(data) {

    /* Class members */

    let title = data['title'] ? data['title'] : null; /* Product name */
    let description = data['description'] ? data['description'] : null; /* Product description */
    let start_parameter = data['start_parameter'] ? data['start_parameter'] : null; /* Unique bot deep-linking parameter that can be used to generate this invoice */
    let currency = data['currency'] ? data['currency'] : null; /* Three-letter ISO 4217 <a href="/bots/payments#supported-currencies">currency</a> code */
    let total_amount = data['total_amount'] ? data['total_amount'] : null; /* Total price in the * smallest units * of the currency (integer, ** not ** float/double). For example, for a price of ... */

    /* Getters and Setters*/

    Object.defineProperties(this, {

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

        "description": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                description = value;
            },
            get: function () {
                return description;
            },
        },

        "start_parameter": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                start_parameter = value;
            },
            get: function () {
                return start_parameter;
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
                    'title': this.title,
                    'description': this.description,
                    'start_parameter': this.start_parameter,
                    'currency': this.currency,
                    'total_amount': this.total_amount,
                };
            },
        },
    });

}
