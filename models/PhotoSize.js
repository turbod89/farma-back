module.exports = function PhotoSize(data) {

    /* Class members */

    let file_id = data['file_id'] ? data['file_id'] : null; /* Unique identifier for this file */
    let width = data['width'] ? data['width'] : null; /* Photo width */
    let height = data['height'] ? data['height'] : null; /* Photo height */
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
                    'file_size': this.file_size,
                };
            },
        },
    });

}
