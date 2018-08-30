const PhotoSize = require('./PhotoSize');


module.exports = function Document(data) {

    /* Class members */

    let file_id = data['file_id'] ? data['file_id'] : null; /* Unique file identifier */
    let thumb = data['thumb'] ? new PhotoSize(data['thumb']) : null; /* * Optional *. Document thumbnail as defined by sender */
    let file_name = data['file_name'] ? data['file_name'] : null; /* * Optional *. Original filename as defined by sender */
    let mime_type = data['mime_type'] ? data['mime_type'] : null; /* * Optional *. MIME type of the file as defined by sender */
    let file_size = data['file_size'] ? data['file_size'] : null; /* * Optional *. File size */

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

        "thumb": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                thumb = value;
            },
            get: function () {
                return thumb;
            },
        },

        "file_name": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                file_name = value;
            },
            get: function () {
                return file_name;
            },
        },

        "mime_type": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                mime_type = value;
            },
            get: function () {
                return mime_type;
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
                    'thumb': this.thumb.toArray(deep - 1),
                    'file_name': this.file_name,
                    'mime_type': this.mime_type,
                    'file_size': this.file_size,
                };
            },
        },
    });

}
