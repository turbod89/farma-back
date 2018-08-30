module.exports = function InlineKeyboardButton(data) {

    /* Class members */

    let text = data['text'] ? data['text'] : null; /* Label text on the button */
    let url = data['url'] ? data['url'] : null; /* * Optional *. HTTP or tg:// url to be opened when button is pressed */
    let callback_data = data['callback_data'] ? data['callback_data'] : null; /* * Optional *. Data to be sent in a <a href="#callbackquery">callback query</a> to the bot when button is pressed, 1-6... */
    let switch_inline_query = data['switch_inline_query'] ? data['switch_inline_query'] : null; /* * Optional *. If set, pressing the button will prompt the user to select one of their chats, open that chat and inser... */
    let switch_inline_query_current_chat = data['switch_inline_query_current_chat'] ? data['switch_inline_query_current_chat'] : null; /* * Optional *. If set, pressing the button will insert the bot‘s username and the specified inline query in the curren... */
    let callback_game = data['callback_game'] ? data['callback_game'] : null; /* * Optional *. Description of the game that will be launched when the user presses the button.<br><br>** NOTE: ** This... */
    let pay = data['pay'] ? data['pay'] : null; /* * Optional *. Specify True, to send a <a href="#payments">Pay button</a>.<br><br>** NOTE: ** This type of button ** m... */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "text": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                text = value;
            },
            get: function () {
                return text;
            },
        },

        "url": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                url = value;
            },
            get: function () {
                return url;
            },
        },

        "callback_data": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                callback_data = value;
            },
            get: function () {
                return callback_data;
            },
        },

        "switch_inline_query": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                switch_inline_query = value;
            },
            get: function () {
                return switch_inline_query;
            },
        },

        "switch_inline_query_current_chat": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                switch_inline_query_current_chat = value;
            },
            get: function () {
                return switch_inline_query_current_chat;
            },
        },

        "callback_game": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                callback_game = value;
            },
            get: function () {
                return callback_game;
            },
        },

        "pay": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                pay = value;
            },
            get: function () {
                return pay;
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
                    'text': this.text,
                    'url': this.url,
                    'callback_data': this.callback_data,
                    'switch_inline_query': this.switch_inline_query,
                    'switch_inline_query_current_chat': this.switch_inline_query_current_chat,
                    'callback_game': this.callback_game,
                    'pay': this.pay,
                };
            },
        },
    });

}
