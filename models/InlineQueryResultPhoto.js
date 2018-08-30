const InlineKeyboardMarkup = require('./InlineKeyboardMarkup');


module.exports = function InlineQueryResultPhoto(data) {

    /* Class members */

    let type = data['type'] ? data['type'] : null; /* Type of the result, must be * photo * */
    let photo_url = data['photo_url'] ? data['photo_url'] : null; /* A valid URL of the photo. Photo must be in ** jpeg ** format. Photo size must not exceed 5MB */
    let thumb_url = data['thumb_url'] ? data['thumb_url'] : null; /* URL of the thumbnail for the photo */
    let id = data['id'] ? data['id'] : null; /* Unique identifier for this result, 1-64 bytes */
    let photo_width = data['photo_width'] ? data['photo_width'] : null; /* * Optional *. Width of the photo */
    let photo_height = data['photo_height'] ? data['photo_height'] : null; /* * Optional *. Height of the photo */
    let input_message_content = data['input_message_content'] ? data['input_message_content'] : null; /* * Optional *. Content of the message to be sent instead of the photo */
    let description = data['description'] ? data['description'] : null; /* * Optional *. Short description of the result */
    let caption = data['caption'] ? data['caption'] : null; /* * Optional *. Caption of the photo to be sent, 0-200 characters */
    let parse_mode = data['parse_mode'] ? data['parse_mode'] : null; /* * Optional *. Send <a href="#markdown-style">* Markdown *</a> or <a href="#html-style">* HTML *</a>, if you want Tele... */
    let reply_markup = data['reply_markup'] ? new InlineKeyboardMarkup(data['reply_markup']) : null; /* * Optional *. <a href="/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message */
    let title = data['title'] ? data['title'] : null; /* * Optional *. Title for the result */

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

        "photo_url": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                photo_url = value;
            },
            get: function () {
                return photo_url;
            },
        },

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

        "photo_width": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                photo_width = value;
            },
            get: function () {
                return photo_width;
            },
        },

        "photo_height": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                photo_height = value;
            },
            get: function () {
                return photo_height;
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

        "description": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                description = value;
            },
            get: function () {
                return description;
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
                    'photo_url': this.photo_url,
                    'thumb_url': this.thumb_url,
                    'id': this.id,
                    'photo_width': this.photo_width,
                    'photo_height': this.photo_height,
                    'input_message_content': this.input_message_content,
                    'description': this.description,
                    'caption': this.caption,
                    'parse_mode': this.parse_mode,
                    'reply_markup': this.reply_markup.toArray(deep - 1),
                    'title': this.title,
                };
            },
        },
    });

}
