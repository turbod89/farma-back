const InlineKeyboardMarkup = require('./InlineKeyboardMarkup');


module.exports = function InlineQueryResultCachedAudio(data) {

    /* Class members */

    let type = data['type'] ? data['type'] : null; /* Type of the result, must be * audio * */
    let id = data['id'] ? data['id'] : null; /* Unique identifier for this result, 1-64 bytes */
    let audio_file_id = data['audio_file_id'] ? data['audio_file_id'] : null; /* A valid file identifier for the audio file */
    let caption = data['caption'] ? data['caption'] : null; /* * Optional *. Caption, 0-200 characters */
    let parse_mode = data['parse_mode'] ? data['parse_mode'] : null; /* * Optional *. Send <a href="#markdown-style">* Markdown *</a> or <a href="#html-style">* HTML *</a>, if you want Tele... */
    let reply_markup = data['reply_markup'] ? new InlineKeyboardMarkup(data['reply_markup']) : null; /* * Optional *. <a href="/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message */
    let input_message_content = data['input_message_content'] ? data['input_message_content'] : null; /* * Optional *. Content of the message to be sent instead of the audio */

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

        "audio_file_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                audio_file_id = value;
            },
            get: function () {
                return audio_file_id;
            },
        },

        "caption": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                caption = value;
            },
            get: function () {
                return caption;
            },
        },

        "parse_mode": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                parse_mode = value;
            },
            get: function () {
                return parse_mode;
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

        "input_message_content": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                input_message_content = value;
            },
            get: function () {
                return input_message_content;
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
                    'audio_file_id': this.audio_file_id,
                    'caption': this.caption,
                    'parse_mode': this.parse_mode,
                    'reply_markup': this.reply_markup.toArray(deep - 1),
                    'input_message_content': this.input_message_content,
                };
            },
        },
    });

}
