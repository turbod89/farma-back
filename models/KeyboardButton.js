module.exports = function KeyboardButton(data) {

    /* Class members */

    let text = data['text'] ? data['text'] : null; /* Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed */
    let request_contact = data['request_contact'] ? data['request_contact'] : null; /* * Optional *. If * True *, the user&#39;s phone number will be sent as a contact when the button is pressed. Availabl... */
    let request_location = data['request_location'] ? data['request_location'] : null; /* * Optional *. If * True *, the user&#39;s current location will be sent when the button is pressed. Available in priv... */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "text": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                text = value;
            },
            get: function () {
                return text;
            },
        },

        "request_contact": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                request_contact = value;
            },
            get: function () {
                return request_contact;
            },
        },

        "request_location": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                request_location = value;
            },
            get: function () {
                return request_location;
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
                    'text': this.text,
                    'request_contact': this.request_contact,
                    'request_location': this.request_location,
                };
            },
        },
    });

}
