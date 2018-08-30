const PhotoSize = require('./PhotoSize');


module.exports = function Animation(data) {

    /* Class members */

    let file_id = data['file_id'] ? data['file_id'] : null; /* Unique file identifier */
    let width = data['width'] ? data['width'] : null; /* Video width as defined by sender */
    let height = data['height'] ? data['height'] : null; /* Video height as defined by sender */
    let duration = data['duration'] ? data['duration'] : null; /* Duration of the video in seconds as defined by sender */
    let thumb = data['thumb'] ? new PhotoSize(data['thumb']) : null; /* * Optional *. Animation thumbnail as defined by sender */
    let file_name = data['file_name'] ? data['file_name'] : null; /* * Optional *. Original animation filename as defined by sender */
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

        "width": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                width = value;
            },
            get: function () {
                return width;
            },
        },

        "height": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                height = value;
            },
            get: function () {
                return height;
            },
        },

        "duration": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                duration = value;
            },
            get: function () {
                return duration;
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
                    'width': this.width,
                    'height': this.height,
                    'duration': this.duration,
                    'thumb': this.thumb.toArray(deep - 1),
                    'file_name': this.file_name,
                    'mime_type': this.mime_type,
                    'file_size': this.file_size,
                };
            },
        },
    });

}
