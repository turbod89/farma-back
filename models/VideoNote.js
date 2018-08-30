const PhotoSize = require('./PhotoSize');


module.exports = function VideoNote(data) {

    /* Class members */

    let file_id = data['file_id'] ? data['file_id'] : null; /* Unique identifier for this file */
    let length = data['length'] ? data['length'] : null; /* Video width and height (diameter of the video message) as defined by sender */
    let duration = data['duration'] ? data['duration'] : null; /* Duration of the video in seconds as defined by sender */
    let thumb = data['thumb'] ? new PhotoSize(data['thumb']) : null; /* * Optional *. Video thumbnail */
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

        "length": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                length = value;
            },
            get: function () {
                return length;
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
                    'length': this.length,
                    'duration': this.duration,
                    'thumb': this.thumb.toArray(deep - 1),
                    'file_size': this.file_size,
                };
            },
        },
    });

}
