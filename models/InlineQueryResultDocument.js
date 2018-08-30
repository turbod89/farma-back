const InlineKeyboardMarkup = require('./InlineKeyboardMarkup');


module.exports = function InlineQueryResultDocument(data) {

    /* Class members */

    let mime_type = data['mime_type'] ? data['mime_type'] : null; /* Mime type of the content of the file, either “application/pdf” or “application/zip” */
    let type = data['type'] ? data['type'] : null; /* Type of the result, must be * document * */
    let title = data['title'] ? data['title'] : null; /* Title for the result */
    let id = data['id'] ? data['id'] : null; /* Unique identifier for this result, 1-64 bytes */
    let document_url = data['document_url'] ? data['document_url'] : null; /* A valid URL for the file */
    let parse_mode = data['parse_mode'] ? data['parse_mode'] : null; /* * Optional *. Send <a href="#markdown-style">* Markdown *</a> or <a href="#html-style">* HTML *</a>, if you want Tele... */
    let caption = data['caption'] ? data['caption'] : null; /* * Optional *. Caption of the document to be sent, 0-200 characters */
    let description = data['description'] ? data['description'] : null; /* * Optional *. Short description of the result */
    let reply_markup = data['reply_markup'] ? new InlineKeyboardMarkup(data['reply_markup']) : null; /* * Optional *. Inline keyboard attached to the message */
    let input_message_content = data['input_message_content'] ? data['input_message_content'] : null; /* * Optional *. Content of the message to be sent instead of the file */
    let thumb_url = data['thumb_url'] ? data['thumb_url'] : null; /* * Optional *. URL of the thumbnail (jpeg only) for the file */
    let thumb_width = data['thumb_width'] ? data['thumb_width'] : null; /* * Optional *. Thumbnail width */
    let thumb_height = data['thumb_height'] ? data['thumb_height'] : null; /* * Optional *. Thumbnail height */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "mime_type": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                mime_type = value;
            },
            get: function () {
                return mime_type;
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

        "document_url": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                document_url = value;
            },
            get: function () {
                return document_url;
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

        "thumb_width": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                thumb_width = value;
            },
            get: function () {
                return thumb_width;
            },
        },

        "thumb_height": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                thumb_height = value;
            },
            get: function () {
                return thumb_height;
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
                    'mime_type': this.mime_type,
                    'type': this.type,
                    'title': this.title,
                    'id': this.id,
                    'document_url': this.document_url,
                    'parse_mode': this.parse_mode,
                    'caption': this.caption,
                    'description': this.description,
                    'reply_markup': this.reply_markup.toArray(deep - 1),
                    'input_message_content': this.input_message_content,
                    'thumb_url': this.thumb_url,
                    'thumb_width': this.thumb_width,
                    'thumb_height': this.thumb_height,
                };
            },
        },
    });

}
