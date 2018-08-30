module.exports = function ResponseParameters(data) {

    /* Class members */

    let migrate_to_chat_id = data['migrate_to_chat_id'] ? data['migrate_to_chat_id'] : null; /* * Optional *. The group has been migrated to a supergroup with the specified identifier. This number may be greater t... */
    let retry_after = data['retry_after'] ? data['retry_after'] : null; /* * Optional *. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "migrate_to_chat_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                migrate_to_chat_id = value;
            },
            get: function () {
                return migrate_to_chat_id;
            },
        },

        "retry_after": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                retry_after = value;
            },
            get: function () {
                return retry_after;
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
                    'migrate_to_chat_id': this.migrate_to_chat_id,
                    'retry_after': this.retry_after,
                };
            },
        },
    });

}
