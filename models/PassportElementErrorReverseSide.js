module.exports = function PassportElementErrorReverseSide(data) {

    /* Class members */

    let source = data['source'] ? data['source'] : null; /* Error source, must be * reverse_side * */
    let type = data['type'] ? data['type'] : null; /* The section of the user&#39;s Telegram Passport which has the issue, one of “driver_license”, “identity_card” */
    let file_hash = data['file_hash'] ? data['file_hash'] : null; /* Base64-encoded hash of the file with the reverse side of the document */
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
