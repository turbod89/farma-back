const EncryptedPassportElement = require('./EncryptedPassportElement');
const EncryptedCredentials = require('./EncryptedCredentials');


module.exports = function PassportData(data) {

    /* Class members */

    let data = data['data'] ? data['data'].map( element => new EncryptedPassportElement(element) ) : null; /* Array with information about documents and other Telegram Passport elements that was shared with the bot */
    let credentials = data['credentials'] ? new EncryptedCredentials(data['credentials']) : null; /* Encrypted credentials required to decrypt the data */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "data": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                data = value;
            },
            get: function () {
                return data;
            },
        },

        "credentials": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                credentials = value;
            },
            get: function () {
                return credentials;
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
                    'data': this.data.map( element => element.toArray(deep - 1) ),
                    'credentials': this.credentials.toArray(deep - 1),
                };
            },
        },
    });

}
