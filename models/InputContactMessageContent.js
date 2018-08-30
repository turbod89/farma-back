module.exports = function InputContactMessageContent(data) {

    /* Class members */

    let phone_number = data['phone_number'] ? data['phone_number'] : null; /* Contact&#39;s phone number */
    let first_name = data['first_name'] ? data['first_name'] : null; /* Contact&#39;s first name */
    let last_name = data['last_name'] ? data['last_name'] : null; /* * Optional *. Contact&#39;s last name */
    let vcard = data['vcard'] ? data['vcard'] : null; /* * Optional *. Additional data about the contact in the form of a <a href="https://en.wikipedia.org/wiki/VCard">vCard<... */

    /* Getters and Setters*/

    Object.defineProperties(this, {

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

        "first_name": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                first_name = value;
            },
            get: function () {
                return first_name;
            },
        },

        "last_name": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                last_name = value;
            },
            get: function () {
                return last_name;
            },
        },

        "vcard": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                vcard = value;
            },
            get: function () {
                return vcard;
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
                    'phone_number': this.phone_number,
                    'first_name': this.first_name,
                    'last_name': this.last_name,
                    'vcard': this.vcard,
                };
            },
        },
    });

}
