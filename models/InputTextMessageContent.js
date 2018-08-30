module.exports = function InputTextMessageContent(data) {

    /* Class members */

    let message_text = data['message_text'] ? data['message_text'] : null; /* Text of the message to be sent, 1-4096 characters */
    let parse_mode = data['parse_mode'] ? data['parse_mode'] : null; /* * Optional *. Send <a href="#markdown-style">* Markdown *</a> or <a href="#html-style">* HTML *</a>, if you want Tele... */
    let disable_web_page_preview = data['disable_web_page_preview'] ? data['disable_web_page_preview'] : null; /* * Optional *. Disables link previews for links in the sent message */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "message_text": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                message_text = value;
            },
            get: function () {
                return message_text;
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

        "disable_web_page_preview": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                disable_web_page_preview = value;
            },
            get: function () {
                return disable_web_page_preview;
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
                    'message_text': this.message_text,
                    'parse_mode': this.parse_mode,
                    'disable_web_page_preview': this.disable_web_page_preview,
                };
            },
        },
    });

}
