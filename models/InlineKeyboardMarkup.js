const InlineKeyboardButton = require('./InlineKeyboardButton');


module.exports = function InlineKeyboardMarkup(data) {

    /* Class members */

    let inline_keyboard = data['inline_keyboard'] ? data['inline_keyboard'].map( element => element.map( element => new InlineKeyboardButton(element) ) ) : null; /* Array of button rows, each represented by an Array of <a href="#inlinekeyboardbutton">InlineKeyboardButton</a> objects */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "inline_keyboard": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                inline_keyboard = value;
            },
            get: function () {
                return inline_keyboard;
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
                    'inline_keyboard': this.inline_keyboard.map( element => element.map( element => element.toArray(deep - 1) ) ),
                };
            },
        },
    });

}
