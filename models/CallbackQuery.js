const User = require('./User');
const Message = require('./Message');


module.exports = function CallbackQuery(data) {

    /* Class members */

    let id = data['id'] ? data['id'] : null; /* Unique identifier for this query */
    let from = data['from'] ? new User(data['from']) : null; /* Sender */
    let chat_instance = data['chat_instance'] ? data['chat_instance'] : null; /* Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful ... */
    let message = data['message'] ? new Message(data['message']) : null; /* * Optional *. Message with the callback button that originated the query. Note that message content and message date ... */
    let inline_message_id = data['inline_message_id'] ? data['inline_message_id'] : null; /* * Optional *. Identifier of the message sent via the bot in inline mode, that originated the query. */
    let data = data['data'] ? data['data'] : null; /* * Optional *. Data associated with the callback button. Be aware that a bad client can send arbitrary data in this fi... */
    let game_short_name = data['game_short_name'] ? data['game_short_name'] : null; /* * Optional *. Short name of a <a href="#games">Game</a> to be returned, serves as the unique identifier for the game */

    /* Getters and Setters*/

    Object.defineProperties(this, {

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

        "from": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                from = value;
            },
            get: function () {
                return from;
            },
        },

        "chat_instance": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                chat_instance = value;
            },
            get: function () {
                return chat_instance;
            },
        },

        "message": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                message = value;
            },
            get: function () {
                return message;
            },
        },

        "inline_message_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                inline_message_id = value;
            },
            get: function () {
                return inline_message_id;
            },
        },

        "data": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                data = value;
            },
            get: function () {
                return data;
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
                    'id': this.id,
                    'from': this.from.toArray(deep - 1),
                    'chat_instance': this.chat_instance,
                    'message': this.message.toArray(deep - 1),
                    'inline_message_id': this.inline_message_id,
                    'data': this.data,
                    'game_short_name': this.game_short_name,
                };
            },
        },
    });

}
