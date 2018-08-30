module.exports = function EncryptedCredentials(data) {

    /* Class members */

    let data = data['data'] ? data['data'] : null; /* Base64-encoded encrypted JSON-serialized data with unique user&#39;s payload, data hashes and secrets required for <a... */
    let hash = data['hash'] ? data['hash'] : null; /* Base64-encoded data hash for data authentication */
    let secret = data['secret'] ? data['secret'] : null; /* Base64-encoded secret, encrypted with the bot&#39;s public RSA key, required for data decryption */

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

        "hash": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                hash = value;
            },
            get: function () {
                return hash;
            },
        },

        "secret": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                secret = value;
            },
            get: function () {
                return secret;
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
                    'data': this.data,
                    'hash': this.hash,
                    'secret': this.secret,
                };
            },
        },
    });

}
