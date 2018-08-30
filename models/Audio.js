const PhotoSize = require('./PhotoSize');


module.exports = function Audio(data) {

    /* Class members */

    let file_id = data['file_id'] ? data['file_id'] : null; /* Unique identifier for this file */
    let duration = data['duration'] ? data['duration'] : null; /* Duration of the audio in seconds as defined by sender */
    let performer = data['performer'] ? data['performer'] : null; /* * Optional *. Performer of the audio as defined by sender or by audio tags */
    let title = data['title'] ? data['title'] : null; /* * Optional *. Title of the audio as defined by sender or by audio tags */
    let mime_type = data['mime_type'] ? data['mime_type'] : null; /* * Optional *. MIME type of the file as defined by sender */
    let file_size = data['file_size'] ? data['file_size'] : null; /* * Optional *. File size */
    let thumb = data['thumb'] ? new PhotoSize(data['thumb']) : null; /* * Optional *. Thumbnail of the album cover to which the music file belongs */

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

        "performer": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                performer = value;
            },
            get: function () {
                return performer;
            },
        },

        "title": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                title = value;
            },
            get: function () {
                return title;
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
                    'duration': this.duration,
                    'performer': this.performer,
                    'title': this.title,
                    'mime_type': this.mime_type,
                    'file_size': this.file_size,
                    'thumb': this.thumb.toArray(deep - 1),
                };
            },
        },
    });

}
