const InlineKeyboardMarkup = require('./InlineKeyboardMarkup');


module.exports = function InlineQueryResultArticle(data) {

    /* Class members */

    let type = data['type'] ? data['type'] : null; /* Type of the result, must be * article * */
    let title = data['title'] ? data['title'] : null; /* Title of the result */
    let input_message_content = data['input_message_content'] ? data['input_message_content'] : null; /* Content of the message to be sent */
    let id = data['id'] ? data['id'] : null; /* Unique identifier for this result, 1-64 Bytes */
    let reply_markup = data['reply_markup'] ? new InlineKeyboardMarkup(data['reply_markup']) : null; /* * Optional *. <a href="/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message */
    let thumb_height = data['thumb_height'] ? data['thumb_height'] : null; /* * Optional *. Thumbnail height */
    let hide_url = data['hide_url'] ? data['hide_url'] : null; /* * Optional *. Pass * True *, if you don&#39;t want the URL to be shown in the message */
    let description = data['description'] ? data['description'] : null; /* * Optional *. Short description of the result */
    let thumb_url = data['thumb_url'] ? data['thumb_url'] : null; /* * Optional *. Url of the thumbnail for the result */
    let thumb_width = data['thumb_width'] ? data['thumb_width'] : null; /* * Optional *. Thumbnail width */
    let url = data['url'] ? data['url'] : null; /* * Optional *. URL of the result */

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

        "hide_url": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                hide_url = value;
            },
            get: function () {
                return hide_url;
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
                    'title': this.title,
                    'input_message_content': this.input_message_content,
                    'id': this.id,
                    'reply_markup': this.reply_markup.toArray(deep - 1),
                    'thumb_height': this.thumb_height,
                    'hide_url': this.hide_url,
                    'description': this.description,
                    'thumb_url': this.thumb_url,
                    'thumb_width': this.thumb_width,
                    'url': this.url,
                };
            },
        },
    });

}
