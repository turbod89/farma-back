module.exports = function PassportElementErrorDataField(data) {

    /* Class members */

    let source = data['source'] ? data['source'] : null; /* Error source, must be * data * */
    let type = data['type'] ? data['type'] : null; /* The section of the user&#39;s Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_l... */
    let field_name = data['field_name'] ? data['field_name'] : null; /* Name of the data field which has the error */
    let data_hash = data['data_hash'] ? data['data_hash'] : null; /* Base64-encoded data hash */
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

        "field_name": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                field_name = value;
            },
            get: function () {
                return field_name;
            },
        },

        "data_hash": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                data_hash = value;
            },
            get: function () {
                return data_hash;
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
                    'field_name': this.field_name,
                    'data_hash': this.data_hash,
                    'message': this.message,
                };
            },
        },
    });

}
