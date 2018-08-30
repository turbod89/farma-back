module.exports = function User(data) {

    /* Class members */

    let id = data['id'] ? data['id'] : null; /* Unique identifier for this user or bot */
    let is_bot = data['is_bot'] ? data['is_bot'] : null; /* True, if this user is a bot */
    let first_name = data['first_name'] ? data['first_name'] : null; /* User‘s or bot’s first name */
    let last_name = data['last_name'] ? data['last_name'] : null; /* * Optional *. User‘s or bot’s last name */
    let username = data['username'] ? data['username'] : null; /* * Optional *. User‘s or bot’s username */
    let language_code = data['language_code'] ? data['language_code'] : null; /* * Optional *. <a href="https://en.wikipedia.org/wiki/IETF_language_tag">IETF language tag</a> of the user&#39;s langu... */

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

        "is_bot": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                is_bot = value;
            },
            get: function () {
                return is_bot;
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

        "username": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                username = value;
            },
            get: function () {
                return username;
            },
        },

        "language_code": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                language_code = value;
            },
            get: function () {
                return language_code;
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
                    'is_bot': this.is_bot,
                    'first_name': this.first_name,
                    'last_name': this.last_name,
                    'username': this.username,
                    'language_code': this.language_code,
                };
            },
        },
    });

}
