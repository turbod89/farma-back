const User = require('./User');
const Location = require('./Location');


module.exports = function InlineQuery(data) {

    /* Class members */

    let id = data['id'] ? data['id'] : null; /* Unique identifier for this query */
    let from = data['from'] ? new User(data['from']) : null; /* Sender */
    let query = data['query'] ? data['query'] : null; /* Text of the query (up to 512 characters) */
    let offset = data['offset'] ? data['offset'] : null; /* Offset of the results to be returned, can be controlled by the bot */
    let location = data['location'] ? new Location(data['location']) : null; /* * Optional *. Sender location, only for bots that request user location */

    /* Getters and Setters*/

    Object.defineProperties(this, {

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

        "from": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                from = value;
            },
            get: function () {
                return from;
            },
        },

        "query": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                query = value;
            },
            get: function () {
                return query;
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

        "location": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                location = value;
            },
            get: function () {
                return location;
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
                    'id': this.id,
                    'from': this.from.toArray(deep - 1),
                    'query': this.query,
                    'offset': this.offset,
                    'location': this.location.toArray(deep - 1),
                };
            },
        },
    });

}
