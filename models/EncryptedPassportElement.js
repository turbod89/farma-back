const PassportFile = require('./PassportFile');


module.exports = function EncryptedPassportElement(data) {

    /* Class members */

    let type = data['type'] ? data['type'] : null; /* Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address... */
    let hash = data['hash'] ? data['hash'] : null; /* Base64-encoded element hash for using in <a href="#passportelementerrorunspecified">PassportElementErrorUnspecified</a> */
    let data = data['data'] ? data['data'] : null; /* * Optional *. Base64-encoded encrypted Telegram Passport element data provided by the user, available for “personal_d... */
    let phone_number = data['phone_number'] ? data['phone_number'] : null; /* * Optional *. User&#39;s verified phone number, available only for “phone_number” type */
    let email = data['email'] ? data['email'] : null; /* * Optional *. User&#39;s verified email address, available only for “email” type */
    let files = data['files'] ? data['files'].map( element => new PassportFile(element) ) : null; /* * Optional *. Array of encrypted files with documents provided by the user, available for “utility_bill”, “bank_state... */
    let front_side = data['front_side'] ? new PassportFile(data['front_side']) : null; /* * Optional *. Encrypted file with the front side of the document, provided by the user. Available for “passport”, “dr... */
    let reverse_side = data['reverse_side'] ? new PassportFile(data['reverse_side']) : null; /* * Optional *. Encrypted file with the reverse side of the document, provided by the user. Available for “driver_licen... */
    let selfie = data['selfie'] ? new PassportFile(data['selfie']) : null; /* * Optional *. Encrypted file with the selfie of the user holding a document, provided by the user; available for “pas... */
    let translation = data['translation'] ? data['translation'].map( element => new PassportFile(element) ) : null; /* * Optional *. Array of encrypted files with translated versions of documents provided by the user. Available if reque... */

    /* Getters and Setters*/

    Object.defineProperties(this, {

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

        "email": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                email = value;
            },
            get: function () {
                return email;
            },
        },

        "files": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                files = value;
            },
            get: function () {
                return files;
            },
        },

        "front_side": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                front_side = value;
            },
            get: function () {
                return front_side;
            },
        },

        "reverse_side": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                reverse_side = value;
            },
            get: function () {
                return reverse_side;
            },
        },

        "selfie": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                selfie = value;
            },
            get: function () {
                return selfie;
            },
        },

        "translation": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                translation = value;
            },
            get: function () {
                return translation;
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
                    'type': this.type,
                    'hash': this.hash,
                    'data': this.data,
                    'phone_number': this.phone_number,
                    'email': this.email,
                    'files': this.files.map( element => element.toArray(deep - 1) ),
                    'front_side': this.front_side.toArray(deep - 1),
                    'reverse_side': this.reverse_side.toArray(deep - 1),
                    'selfie': this.selfie.toArray(deep - 1),
                    'translation': this.translation.map( element => element.toArray(deep - 1) ),
                };
            },
        },
    });

}
