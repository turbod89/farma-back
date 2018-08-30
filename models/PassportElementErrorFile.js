module.exports = function PassportElementErrorFile(data) {

    /* Class members */

    let source = data['source'] ? data['source'] : null; /* Error source, must be * file * */
    let type = data['type'] ? data['type'] : null; /* The section of the user&#39;s Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental... */
    let file_hash = data['file_hash'] ? data['file_hash'] : null; /* Base64-encoded file hash */
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

        "file_hash": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                file_hash = value;
            },
            get: function () {
                return file_hash;
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
                    'file_hash': this.file_hash,
                    'message': this.message,
                };
            },
        },
    });

}
