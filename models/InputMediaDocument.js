module.exports = function InputMediaDocument(data) {

    /* Class members */

    let type = data['type'] ? data['type'] : null; /* Type of the result, must be * document * */
    let media = data['media'] ? data['media'] : null; /* File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for T... */
    let thumb = data['thumb'] ? data['thumb'] : null; /* * Optional *. Thumbnail of the file sent. The thumbnail should be in JPEG format and less than 200 kB in size. A thum... */
    let caption = data['caption'] ? data['caption'] : null; /* * Optional *. Caption of the document to be sent, 0-200 characters */
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

        "thumb": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                thumb = value;
            },
            get: function () {
                return thumb;
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
                    'thumb': this.thumb,
                    'caption': this.caption,
                    'parse_mode': this.parse_mode,
                };
            },
        },
    });

}
