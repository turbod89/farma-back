const InlineKeyboardMarkup = require('./InlineKeyboardMarkup');


module.exports = function InlineQueryResultMpeg4Gif(data) {

    /* Class members */

    let thumb_url = data['thumb_url'] ? data['thumb_url'] : null; /* URL of the static thumbnail (jpeg or gif) for the result */
    let type = data['type'] ? data['type'] : null; /* Type of the result, must be * mpeg4_gif * */
    let mpeg4_url = data['mpeg4_url'] ? data['mpeg4_url'] : null; /* A valid URL for the MP4 file. File size must not exceed 1MB */
    let id = data['id'] ? data['id'] : null; /* Unique identifier for this result, 1-64 bytes */
    let mpeg4_height = data['mpeg4_height'] ? data['mpeg4_height'] : null; /* * Optional *. Video height */
    let mpeg4_duration = data['mpeg4_duration'] ? data['mpeg4_duration'] : null; /* * Optional *. Video duration */
    let mpeg4_width = data['mpeg4_width'] ? data['mpeg4_width'] : null; /* * Optional *. Video width */
    let title = data['title'] ? data['title'] : null; /* * Optional *. Title for the result */
    let caption = data['caption'] ? data['caption'] : null; /* * Optional *. Caption of the MPEG-4 file to be sent, 0-200 characters */
    let parse_mode = data['parse_mode'] ? data['parse_mode'] : null; /* * Optional *. Send <a href="#markdown-style">* Markdown *</a> or <a href="#html-style">* HTML *</a>, if you want Tele... */
    let reply_markup = data['reply_markup'] ? new InlineKeyboardMarkup(data['reply_markup']) : null; /* * Optional *. <a href="/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message */
    let input_message_content = data['input_message_content'] ? data['input_message_content'] : null; /* * Optional *. Content of the message to be sent instead of the video animation */

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

        "mpeg4_url": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                mpeg4_url = value;
            },
            get: function () {
                return mpeg4_url;
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

        "mpeg4_height": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                mpeg4_height = value;
            },
            get: function () {
                return mpeg4_height;
            },
        },

        "mpeg4_duration": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                mpeg4_duration = value;
            },
            get: function () {
                return mpeg4_duration;
            },
        },

        "mpeg4_width": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                mpeg4_width = value;
            },
            get: function () {
                return mpeg4_width;
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
                    'mpeg4_url': this.mpeg4_url,
                    'id': this.id,
                    'mpeg4_height': this.mpeg4_height,
                    'mpeg4_duration': this.mpeg4_duration,
                    'mpeg4_width': this.mpeg4_width,
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
