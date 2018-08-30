const InlineKeyboardMarkup = require('./InlineKeyboardMarkup');


module.exports = function InlineQueryResultGame(data) {

    /* Class members */

    let type = data['type'] ? data['type'] : null; /* Type of the result, must be * game * */
    let id = data['id'] ? data['id'] : null; /* Unique identifier for this result, 1-64 bytes */
    let game_short_name = data['game_short_name'] ? data['game_short_name'] : null; /* Short name of the game */
    let reply_markup = data['reply_markup'] ? new InlineKeyboardMarkup(data['reply_markup']) : null; /* * Optional *. <a href="/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "type": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                type = value;
            },
            get: function () {
                return type;
            },
        },

        "id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                id = value;
            },
            get: function () {
                return id;
            },
        },

        "game_short_name": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                game_short_name = value;
            },
            get: function () {
                return game_short_name;
            },
        },

        "reply_markup": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                reply_markup = value;
            },
            get: function () {
                return reply_markup;
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
                    'type': this.type,
                    'id': this.id,
                    'game_short_name': this.game_short_name,
                    'reply_markup': this.reply_markup.toArray(deep - 1),
                };
            },
        },
    });

}
