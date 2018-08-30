const User = require('./User');


module.exports = function MessageEntity(data) {

    /* Class members */

    let type = data['type'] ? data['type'] : null; /* Type of the entity. Can be * mention * (<code>@username</code>), * hashtag *, * cashtag *, * bot_command *, * url *, ... */
    let offset = data['offset'] ? data['offset'] : null; /* Offset in UTF-16 code units to the start of the entity */
    let length = data['length'] ? data['length'] : null; /* Length of the entity in UTF-16 code units */
    let url = data['url'] ? data['url'] : null; /* * Optional *. For “text_link” only, url that will be opened after user taps on the text */
    let user = data['user'] ? new User(data['user']) : null; /* * Optional *. For “text_mention” only, the mentioned user */

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

        "offset": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                offset = value;
            },
            get: function () {
                return offset;
            },
        },

        "length": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                length = value;
            },
            get: function () {
                return length;
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

        "user": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                user = value;
            },
            get: function () {
                return user;
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
                    'offset': this.offset,
                    'length': this.length,
                    'url': this.url,
                    'user': this.user.toArray(deep - 1),
                };
            },
        },
    });

}
