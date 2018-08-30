const KeyboardButton = require('./KeyboardButton');


module.exports = function ReplyKeyboardMarkup(data) {

    /* Class members */

    let keyboard = data['keyboard'] ? data['keyboard'].map( element => element.map( element => new KeyboardButton(element) ) ) : null; /* Array of button rows, each represented by an Array of <a href="#keyboardbutton">KeyboardButton</a> objects */
    let resize_keyboard = data['resize_keyboard'] ? data['resize_keyboard'] : null; /* * Optional *. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if ... */
    let one_time_keyboard = data['one_time_keyboard'] ? data['one_time_keyboard'] : null; /* * Optional *. Requests clients to hide the keyboard as soon as it&#39;s been used. The keyboard will still be availab... */
    let selective = data['selective'] ? data['selective'] : null; /* * Optional *. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are ... */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "keyboard": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                keyboard = value;
            },
            get: function () {
                return keyboard;
            },
        },

        "resize_keyboard": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                resize_keyboard = value;
            },
            get: function () {
                return resize_keyboard;
            },
        },

        "one_time_keyboard": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                one_time_keyboard = value;
            },
            get: function () {
                return one_time_keyboard;
            },
        },

        "selective": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                selective = value;
            },
            get: function () {
                return selective;
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
                    'keyboard': this.keyboard.map( element => element.map( element => element.toArray(deep - 1) ) ),
                    'resize_keyboard': this.resize_keyboard,
                    'one_time_keyboard': this.one_time_keyboard,
                    'selective': this.selective,
                };
            },
        },
    });

}
