module.exports = function PassportFile(data) {

    /* Class members */

    let file_id = data['file_id'] ? data['file_id'] : null; /* Unique identifier for this file */
    let file_size = data['file_size'] ? data['file_size'] : null; /* File size */
    let file_date = data['file_date'] ? data['file_date'] : null; /* Unix time when the file was uploaded */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "file_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                file_id = value;
            },
            get: function () {
                return file_id;
            },
        },

        "file_size": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                file_size = value;
            },
            get: function () {
                return file_size;
            },
        },

        "file_date": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                file_date = value;
            },
            get: function () {
                return file_date;
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
                    'file_id': this.file_id,
                    'file_size': this.file_size,
                    'file_date': this.file_date,
                };
            },
        },
    });

}
