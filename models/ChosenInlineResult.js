const User = require('./User');
const Location = require('./Location');


module.exports = function ChosenInlineResult(data) {

    /* Class members */

    let result_id = data['result_id'] ? data['result_id'] : null; /* The unique identifier for the result that was chosen */
    let from = data['from'] ? new User(data['from']) : null; /* The user that chose the result */
    let query = data['query'] ? data['query'] : null; /* The query that was used to obtain the result */
    let location = data['location'] ? new Location(data['location']) : null; /* * Optional *. Sender location, only for bots that require user location */
    let inline_message_id = data['inline_message_id'] ? data['inline_message_id'] : null; /* * Optional *. Identifier of the sent inline message. Available only if there is an <a href="#inlinekeyboardmarkup">in... */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "result_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                result_id = value;
            },
            get: function () {
                return result_id;
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

        "inline_message_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                inline_message_id = value;
            },
            get: function () {
                return inline_message_id;
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
                    'result_id': this.result_id,
                    'from': this.from.toArray(deep - 1),
                    'query': this.query,
                    'location': this.location.toArray(deep - 1),
                    'inline_message_id': this.inline_message_id,
                };
            },
        },
    });

}
