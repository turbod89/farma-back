const Sticker = require('./Sticker');


module.exports = function StickerSet(data) {

    /* Class members */

    let name = data['name'] ? data['name'] : null; /* Sticker set name */
    let title = data['title'] ? data['title'] : null; /* Sticker set title */
    let contains_masks = data['contains_masks'] ? data['contains_masks'] : null; /* * True *, if the sticker set contains masks */
    let stickers = data['stickers'] ? data['stickers'].map( element => new Sticker(element) ) : null; /* List of all set stickers */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "name": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                name = value;
            },
            get: function () {
                return name;
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

        "contains_masks": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                contains_masks = value;
            },
            get: function () {
                return contains_masks;
            },
        },

        "stickers": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                stickers = value;
            },
            get: function () {
                return stickers;
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
                    'name': this.name,
                    'title': this.title,
                    'contains_masks': this.contains_masks,
                    'stickers': this.stickers.map( element => element.toArray(deep - 1) ),
                };
            },
        },
    });

}
