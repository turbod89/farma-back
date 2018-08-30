const InlineKeyboardMarkup = require('./InlineKeyboardMarkup');


module.exports = function InlineQueryResultVenue(data) {

    /* Class members */

    let type = data['type'] ? data['type'] : null; /* Type of the result, must be * venue * */
    let latitude = data['latitude'] ? data['latitude'] : null; /* Latitude of the venue location in degrees */
    let longitude = data['longitude'] ? data['longitude'] : null; /* Longitude of the venue location in degrees */
    let title = data['title'] ? data['title'] : null; /* Title of the venue */
    let address = data['address'] ? data['address'] : null; /* Address of the venue */
    let id = data['id'] ? data['id'] : null; /* Unique identifier for this result, 1-64 Bytes */
    let thumb_height = data['thumb_height'] ? data['thumb_height'] : null; /* * Optional *. Thumbnail height */
    let foursquare_type = data['foursquare_type'] ? data['foursquare_type'] : null; /* * Optional *. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment... */
    let reply_markup = data['reply_markup'] ? new InlineKeyboardMarkup(data['reply_markup']) : null; /* * Optional *. <a href="/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message */
    let input_message_content = data['input_message_content'] ? data['input_message_content'] : null; /* * Optional *. Content of the message to be sent instead of the venue */
    let thumb_url = data['thumb_url'] ? data['thumb_url'] : null; /* * Optional *. Url of the thumbnail for the result */
    let thumb_width = data['thumb_width'] ? data['thumb_width'] : null; /* * Optional *. Thumbnail width */
    let foursquare_id = data['foursquare_id'] ? data['foursquare_id'] : null; /* * Optional *. Foursquare identifier of the venue if known */

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

        "address": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                address = value;
            },
            get: function () {
                return address;
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

        "foursquare_type": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                foursquare_type = value;
            },
            get: function () {
                return foursquare_type;
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

        "foursquare_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                foursquare_id = value;
            },
            get: function () {
                return foursquare_id;
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
                    'address': this.address,
                    'id': this.id,
                    'thumb_height': this.thumb_height,
                    'foursquare_type': this.foursquare_type,
                    'reply_markup': this.reply_markup.toArray(deep - 1),
                    'input_message_content': this.input_message_content,
                    'thumb_url': this.thumb_url,
                    'thumb_width': this.thumb_width,
                    'foursquare_id': this.foursquare_id,
                };
            },
        },
    });

}
