module.exports = function PassportElementErrorUnspecified(data) {

    /* Class members */

    let source = data['source'] ? data['source'] : null; /* Error source, must be * unspecified * */
    let type = data['type'] ? data['type'] : null; /* Type of element of the user&#39;s Telegram Passport which has the issue */
    let element_hash = data['element_hash'] ? data['element_hash'] : null; /* Base64-encoded element hash */
    let message = data['message'] ? data['message'] : null; /* Error message */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "source": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                source = value;
            },
            get: function () {
                return source;
            },
        },

        "type": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                type = value;
            },
            get: function () {
                return type;
            },
        },

        "element_hash": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                element_hash = value;
            },
            get: function () {
                return element_hash;
            },
        },

        "message": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                message = value;
            },
            get: function () {
                return message;
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
                    'source': this.source,
                    'type': this.type,
                    'element_hash': this.element_hash,
                    'message': this.message,
                };
            },
        },
    });

}
