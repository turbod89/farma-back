const InlineKeyboardMarkup = require('./InlineKeyboardMarkup');


module.exports = function InlineQueryResultGif(data) {

    /* Class members */

    let thumb_url = data['thumb_url'] ? data['thumb_url'] : null; /* URL of the static thumbnail for the result (jpeg or gif) */
    let type = data['type'] ? data['type'] : null; /* Type of the result, must be * gif * */
    let gif_url = data['gif_url'] ? data['gif_url'] : null; /* A valid URL for the GIF file. File size must not exceed 1MB */
    let id = data['id'] ? data['id'] : null; /* Unique identifier for this result, 1-64 bytes */
    let gif_height = data['gif_height'] ? data['gif_height'] : null; /* * Optional *. Height of the GIF */
    let gif_duration = data['gif_duration'] ? data['gif_duration'] : null; /* * Optional *. Duration of the GIF */
    let gif_width = data['gif_width'] ? data['gif_width'] : null; /* * Optional *. Width of the GIF */
    let title = data['title'] ? data['title'] : null; /* * Optional *. Title for the result */
    let caption = data['caption'] ? data['caption'] : null; /* * Optional *. Caption of the GIF file to be sent, 0-200 characters */
    let parse_mode = data['parse_mode'] ? data['parse_mode'] : null; /* * Optional *. Send <a href="#markdown-style">* Markdown *</a> or <a href="#html-style">* HTML *</a>, if you want Tele... */
    let reply_markup = data['reply_markup'] ? new InlineKeyboardMarkup(data['reply_markup']) : null; /* * Optional *. <a href="/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message */
    let input_message_content = data['input_message_content'] ? data['input_message_content'] : null; /* * Optional *. Content of the message to be sent instead of the GIF animation */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "thumb_url": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                thumb_url = value;
            },
            get: function () {
                return thumb_url;
            },
        },

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

        "gif_url": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                gif_url = value;
            },
            get: function () {
                return gif_url;
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

        "gif_height": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                gif_height = value;
            },
            get: function () {
                return gif_height;
            },
        },

        "gif_duration": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                gif_duration = value;
            },
            get: function () {
                return gif_duration;
            },
        },

        "gif_width": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                gif_width = value;
            },
            get: function () {
                return gif_width;
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
                    'thumb_url': this.thumb_url,
                    'type': this.type,
                    'gif_url': this.gif_url,
                    'id': this.id,
                    'gif_height': this.gif_height,
                    'gif_duration': this.gif_duration,
                    'gif_width': this.gif_width,
                    'title': this.title,
                    'caption': this.caption,
                    'parse_mode': this.parse_mode,
                    'reply_markup': this.reply_markup.toArray(deep - 1),
                    'input_message_content': this.input_message_content,
                };
            },
        },
    });

}
