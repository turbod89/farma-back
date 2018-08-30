module.exports = function InputMediaPhoto(data) {

    /* Class members */

    let type = data['type'] ? data['type'] : null; /* Type of the result, must be * photo * */
    let media = data['media'] ? data['media'] : null; /* File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for T... */
    let caption = data['caption'] ? data['caption'] : null; /* * Optional *. Caption of the photo to be sent, 0-200 characters */
    let parse_mode = data['parse_mode'] ? data['parse_mode'] : null; /* * Optional *. Send <a href="#markdown-style">* Markdown *</a> or <a href="#html-style">* HTML *</a>, if you want Tele... */

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

        "media": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                media = value;
            },
            get: function () {
                return media;
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
                    'media': this.media,
                    'caption': this.caption,
                    'parse_mode': this.parse_mode,
                };
            },
        },
    });

}
