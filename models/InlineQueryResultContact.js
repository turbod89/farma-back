const InlineKeyboardMarkup = require('./InlineKeyboardMarkup');


module.exports = function InlineQueryResultContact(data) {

    /* Class members */

    let type = data['type'] ? data['type'] : null; /* Type of the result, must be * contact * */
    let phone_number = data['phone_number'] ? data['phone_number'] : null; /* Contact&#39;s phone number */
    let first_name = data['first_name'] ? data['first_name'] : null; /* Contact&#39;s first name */
    let id = data['id'] ? data['id'] : null; /* Unique identifier for this result, 1-64 Bytes */
    let last_name = data['last_name'] ? data['last_name'] : null; /* * Optional *. Contact&#39;s last name */
    let thumb_height = data['thumb_height'] ? data['thumb_height'] : null; /* * Optional *. Thumbnail height */
    let reply_markup = data['reply_markup'] ? new InlineKeyboardMarkup(data['reply_markup']) : null; /* * Optional *. <a href="/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message */
    let input_message_content = data['input_message_content'] ? data['input_message_content'] : null; /* * Optional *. Content of the message to be sent instead of the contact */
    let thumb_url = data['thumb_url'] ? data['thumb_url'] : null; /* * Optional *. Url of the thumbnail for the result */
    let thumb_width = data['thumb_width'] ? data['thumb_width'] : null; /* * Optional *. Thumbnail width */
    let vcard = data['vcard'] ? data['vcard'] : null; /* * Optional *. Additional data about the contact in the form of a <a href="https://en.wikipedia.org/wiki/VCard">vCard<... */

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

        "phone_number": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                phone_number = value;
            },
            get: function () {
                return phone_number;
            },
        },

        "first_name": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                first_name = value;
            },
            get: function () {
                return first_name;
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

        "last_name": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                last_name = value;
            },
            get: function () {
                return last_name;
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

        "vcard": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                vcard = value;
            },
            get: function () {
                return vcard;
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
                    'phone_number': this.phone_number,
                    'first_name': this.first_name,
                    'id': this.id,
                    'last_name': this.last_name,
                    'thumb_height': this.thumb_height,
                    'reply_markup': this.reply_markup.toArray(deep - 1),
                    'input_message_content': this.input_message_content,
                    'thumb_url': this.thumb_url,
                    'thumb_width': this.thumb_width,
                    'vcard': this.vcard,
                };
            },
        },
    });

}
