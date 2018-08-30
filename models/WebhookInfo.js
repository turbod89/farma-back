module.exports = function WebhookInfo(data) {

    /* Class members */

    let url = data['url'] ? data['url'] : null; /* Webhook URL, may be empty if webhook is not set up */
    let has_custom_certificate = data['has_custom_certificate'] ? data['has_custom_certificate'] : null; /* True, if a custom certificate was provided for webhook certificate checks */
    let pending_update_count = data['pending_update_count'] ? data['pending_update_count'] : null; /* Number of updates awaiting delivery */
    let last_error_date = data['last_error_date'] ? data['last_error_date'] : null; /* * Optional *. Unix time for the most recent error that happened when trying to deliver an update via webhook */
    let last_error_message = data['last_error_message'] ? data['last_error_message'] : null; /* * Optional *. Error message in human-readable format for the most recent error that happened when trying to deliver a... */
    let max_connections = data['max_connections'] ? data['max_connections'] : null; /* * Optional *. Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery */
    let allowed_updates = data['allowed_updates'] ? data['allowed_updates'] : null; /* * Optional *. A list of update types the bot is subscribed to. Defaults to all update types */

    /* Getters and Setters*/

    Object.defineProperties(this, {

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

        "has_custom_certificate": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                has_custom_certificate = value;
            },
            get: function () {
                return has_custom_certificate;
            },
        },

        "pending_update_count": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                pending_update_count = value;
            },
            get: function () {
                return pending_update_count;
            },
        },

        "last_error_date": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                last_error_date = value;
            },
            get: function () {
                return last_error_date;
            },
        },

        "last_error_message": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                last_error_message = value;
            },
            get: function () {
                return last_error_message;
            },
        },

        "max_connections": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                max_connections = value;
            },
            get: function () {
                return max_connections;
            },
        },

        "allowed_updates": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                allowed_updates = value;
            },
            get: function () {
                return allowed_updates;
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
                    'url': this.url,
                    'has_custom_certificate': this.has_custom_certificate,
                    'pending_update_count': this.pending_update_count,
                    'last_error_date': this.last_error_date,
                    'last_error_message': this.last_error_message,
                    'max_connections': this.max_connections,
                    'allowed_updates': this.allowed_updates,
                };
            },
        },
    });

}
