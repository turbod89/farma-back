const User = require('./User');


module.exports = function ChatMember(data) {

    /* Class members */

    let user = data['user'] ? new User(data['user']) : null; /* Information about the user */
    let status = data['status'] ? data['status'] : null; /* The member&#39;s status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked” */
    let until_date = data['until_date'] ? data['until_date'] : null; /* * Optional *. Restricted and kicked only. Date when restrictions will be lifted for this user, unix time */
    let can_be_edited = data['can_be_edited'] ? data['can_be_edited'] : null; /* * Optional *. Administrators only. True, if the bot is allowed to edit administrator privileges of that user */
    let can_change_info = data['can_change_info'] ? data['can_change_info'] : null; /* * Optional *. Administrators only. True, if the administrator can change the chat title, photo and other settings */
    let can_post_messages = data['can_post_messages'] ? data['can_post_messages'] : null; /* * Optional *. Administrators only. True, if the administrator can post in the channel, channels only */
    let can_edit_messages = data['can_edit_messages'] ? data['can_edit_messages'] : null; /* * Optional *. Administrators only. True, if the administrator can edit messages of other users and can pin messages, ... */
    let can_delete_messages = data['can_delete_messages'] ? data['can_delete_messages'] : null; /* * Optional *. Administrators only. True, if the administrator can delete messages of other users */
    let can_add_web_page_previews = data['can_add_web_page_previews'] ? data['can_add_web_page_previews'] : null; /* * Optional *. Restricted only. True, if user may add web page previews to his messages, implies can_send_media_messages */
    let can_restrict_members = data['can_restrict_members'] ? data['can_restrict_members'] : null; /* * Optional *. Administrators only. True, if the administrator can restrict, ban or unban chat members */
    let can_pin_messages = data['can_pin_messages'] ? data['can_pin_messages'] : null; /* * Optional *. Administrators only. True, if the administrator can pin messages, supergroups only */
    let can_promote_members = data['can_promote_members'] ? data['can_promote_members'] : null; /* * Optional *. Administrators only. True, if the administrator can add new administrators with a subset of his own pri... */
    let can_send_messages = data['can_send_messages'] ? data['can_send_messages'] : null; /* * Optional *. Restricted only. True, if the user can send text messages, contacts, locations and venues */
    let can_send_media_messages = data['can_send_media_messages'] ? data['can_send_media_messages'] : null; /* * Optional *. Restricted only. True, if the user can send audios, documents, photos, videos, video notes and voice no... */
    let can_send_other_messages = data['can_send_other_messages'] ? data['can_send_other_messages'] : null; /* * Optional *. Restricted only. True, if the user can send animations, games, stickers and use inline bots, implies ca... */
    let can_invite_users = data['can_invite_users'] ? data['can_invite_users'] : null; /* * Optional *. Administrators only. True, if the administrator can invite new users to the chat */

    /* Getters and Setters*/

    Object.defineProperties(this, {

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

        "status": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                status = value;
            },
            get: function () {
                return status;
            },
        },

        "until_date": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                until_date = value;
            },
            get: function () {
                return until_date;
            },
        },

        "can_be_edited": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                can_be_edited = value;
            },
            get: function () {
                return can_be_edited;
            },
        },

        "can_change_info": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                can_change_info = value;
            },
            get: function () {
                return can_change_info;
            },
        },

        "can_post_messages": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                can_post_messages = value;
            },
            get: function () {
                return can_post_messages;
            },
        },

        "can_edit_messages": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                can_edit_messages = value;
            },
            get: function () {
                return can_edit_messages;
            },
        },

        "can_delete_messages": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                can_delete_messages = value;
            },
            get: function () {
                return can_delete_messages;
            },
        },

        "can_add_web_page_previews": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                can_add_web_page_previews = value;
            },
            get: function () {
                return can_add_web_page_previews;
            },
        },

        "can_restrict_members": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                can_restrict_members = value;
            },
            get: function () {
                return can_restrict_members;
            },
        },

        "can_pin_messages": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                can_pin_messages = value;
            },
            get: function () {
                return can_pin_messages;
            },
        },

        "can_promote_members": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                can_promote_members = value;
            },
            get: function () {
                return can_promote_members;
            },
        },

        "can_send_messages": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                can_send_messages = value;
            },
            get: function () {
                return can_send_messages;
            },
        },

        "can_send_media_messages": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                can_send_media_messages = value;
            },
            get: function () {
                return can_send_media_messages;
            },
        },

        "can_send_other_messages": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                can_send_other_messages = value;
            },
            get: function () {
                return can_send_other_messages;
            },
        },

        "can_invite_users": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                can_invite_users = value;
            },
            get: function () {
                return can_invite_users;
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
                    'user': this.user.toArray(deep - 1),
                    'status': this.status,
                    'until_date': this.until_date,
                    'can_be_edited': this.can_be_edited,
                    'can_change_info': this.can_change_info,
                    'can_post_messages': this.can_post_messages,
                    'can_edit_messages': this.can_edit_messages,
                    'can_delete_messages': this.can_delete_messages,
                    'can_add_web_page_previews': this.can_add_web_page_previews,
                    'can_restrict_members': this.can_restrict_members,
                    'can_pin_messages': this.can_pin_messages,
                    'can_promote_members': this.can_promote_members,
                    'can_send_messages': this.can_send_messages,
                    'can_send_media_messages': this.can_send_media_messages,
                    'can_send_other_messages': this.can_send_other_messages,
                    'can_invite_users': this.can_invite_users,
                };
            },
        },
    });

}
