module.exports = function LabeledPrice(data) {

    /* Class members */

    let label = data['label'] ? data['label'] : null; /* Portion label */
    let amount = data['amount'] ? data['amount'] : null; /* Price of the product in the * smallest units * of the <a href="/bots/payments#supported-currencies">currency</a> (int... */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "label": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                label = value;
            },
            get: function () {
                return label;
            },
        },

        "amount": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                amount = value;
            },
            get: function () {
                return amount;
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
                    'label': this.label,
                    'amount': this.amount,
                };
            },
        },
    });

}
