const PhotoSize = require('./PhotoSize');
const MaskPosition = require('./MaskPosition');


module.exports = function Sticker(data) {

    /* Class members */

    let file_id = data['file_id'] ? data['file_id'] : null; /* Unique identifier for this file */
    let width = data['width'] ? data['width'] : null; /* Sticker width */
    let height = data['height'] ? data['height'] : null; /* Sticker height */
    let thumb = data['thumb'] ? new PhotoSize(data['thumb']) : null; /* * Optional *. Sticker thumbnail in the .webp or .jpg format */
    let emoji = data['emoji'] ? data['emoji'] : null; /* * Optional *. Emoji associated with the sticker */
    let set_name = data['set_name'] ? data['set_name'] : null; /* * Optional *. Name of the sticker set to which the sticker belongs */
    let mask_position = data['mask_position'] ? new MaskPosition(data['mask_position']) : null; /* * Optional *. For mask stickers, the position where the mask should be placed */
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

        "emoji": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                emoji = value;
            },
            get: function () {
                return emoji;
            },
        },

        "set_name": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                set_name = value;
            },
            get: function () {
                return set_name;
            },
        },

        "mask_position": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                mask_position = value;
            },
            get: function () {
                return mask_position;
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
                    'thumb': this.thumb.toArray(deep - 1),
                    'emoji': this.emoji,
                    'set_name': this.set_name,
                    'mask_position': this.mask_position.toArray(deep - 1),
                    'file_size': this.file_size,
                };
            },
        },
    });

}
