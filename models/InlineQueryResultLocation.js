const InlineKeyboardMarkup = require('./InlineKeyboardMarkup');


module.exports = function InlineQueryResultLocation(data) {

    /* Class members */

    let type = data['type'] ? data['type'] : null; /* Type of the result, must be * location * */
    let latitude = data['latitude'] ? data['latitude'] : null; /* Location latitude in degrees */
    let longitude = data['longitude'] ? data['longitude'] : null; /* Location longitude in degrees */
    let title = data['title'] ? data['title'] : null; /* Location title */
    let id = data['id'] ? data['id'] : null; /* Unique identifier for this result, 1-64 Bytes */
    let thumb_height = data['thumb_height'] ? data['thumb_height'] : null; /* * Optional *. Thumbnail height */
    let reply_markup = data['reply_markup'] ? new InlineKeyboardMarkup(data['reply_markup']) : null; /* * Optional *. <a href="/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message */
    let input_message_content = data['input_message_content'] ? data['input_message_content'] : null; /* * Optional *. Content of the message to be sent instead of the location */
    let thumb_url = data['thumb_url'] ? data['thumb_url'] : null; /* * Optional *. Url of the thumbnail for the result */
    let thumb_width = data['thumb_width'] ? data['thumb_width'] : null; /* * Optional *. Thumbnail width */
    let live_period = data['live_period'] ? data['live_period'] : null; /* * Optional *. Period in seconds for which the location can be updated, should be between 60 and 86400. */

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

        "latitude": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                latitude = value;
            },
            get: function () {
                return latitude;
            },
        },

        "longitude": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                longitude = value;
            },
            get: function () {
                return longitude;
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

        "live_period": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                live_period = value;
            },
            get: function () {
                return live_period;
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
                    'latitude': this.latitude,
                    'longitude': this.longitude,
                    'title': this.title,
                    'id': this.id,
                    'thumb_height': this.thumb_height,
                    'reply_markup': this.reply_markup.toArray(deep - 1),
                    'input_message_content': this.input_message_content,
                    'thumb_url': this.thumb_url,
                    'thumb_width': this.thumb_width,
                    'live_period': this.live_period,
                };
            },
        },
    });

}
