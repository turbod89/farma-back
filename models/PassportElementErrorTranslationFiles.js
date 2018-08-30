module.exports = function PassportElementErrorTranslationFiles(data) {

    /* Class members */

    let source = data['source'] ? data['source'] : null; /* Error source, must be * translation_files * */
    let type = data['type'] ? data['type'] : null; /* Type of element of the user&#39;s Telegram Passport which has the issue, one of “passport”, “driver_license”, “identi... */
    let file_hashes = data['file_hashes'] ? data['file_hashes'] : null; /* List of base64-encoded file hashes */
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

        "file_hashes": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                file_hashes = value;
            },
            get: function () {
                return file_hashes;
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
                    'file_hashes': this.file_hashes,
                    'message': this.message,
                };
            },
        },
    });

}
