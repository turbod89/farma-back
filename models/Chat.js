const ChatPhoto = require('./ChatPhoto');
const Message = require('./Message');


module.exports = function Chat(data) {

    /* Class members */

    let id = data['id'] ? data['id'] : null; /* Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have diff... */
    let type = data['type'] ? data['type'] : null; /* Type of chat, can be either “private”, “group”, “supergroup” or “channel” */
    let title = data['title'] ? data['title'] : null; /* * Optional *. Title, for supergroups, channels and group chats */
    let username = data['username'] ? data['username'] : null; /* * Optional *. Username, for private chats, supergroups and channels if available */
    let first_name = data['first_name'] ? data['first_name'] : null; /* * Optional *. First name of the other party in a private chat */
    let last_name = data['last_name'] ? data['last_name'] : null; /* * Optional *. Last name of the other party in a private chat */
    let can_set_sticker_set = data['can_set_sticker_set'] ? data['can_set_sticker_set'] : null; /* * Optional *. True, if the bot can change the group sticker set. Returned only in <a href="#getchat">getChat</a>. */
    let photo = data['photo'] ? new ChatPhoto(data['photo']) : null; /* * Optional *. Chat photo. Returned only in <a href="#getchat">getChat</a>. */
    let description = data['description'] ? data['description'] : null; /* * Optional *. Description, for supergroups and channel chats. Returned only in <a href="#getchat">getChat</a>. */
    let invite_link = data['invite_link'] ? data['invite_link'] : null; /* * Optional *. Chat invite link, for supergroups and channel chats. Returned only in <a href="#getchat">getChat</a>. */
    let pinned_message = data['pinned_message'] ? new Message(data['pinned_message']) : null; /* * Optional *. Pinned message, for supergroups and channel chats. Returned only in <a href="#getchat">getChat</a>. */
    let sticker_set_name = data['sticker_set_name'] ? data['sticker_set_name'] : null; /* * Optional *. For supergroups, name of group sticker set. Returned only in <a href="#getchat">getChat</a>. */
    let all_members_are_administrators = data['all_members_are_administrators'] ? data['all_members_are_administrators'] : null; /* * Optional *. True if a group has ‘All Members Are Admins’ enabled. */

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

        "can_set_sticker_set": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                can_set_sticker_set = value;
            },
            get: function () {
                return can_set_sticker_set;
            },
        },

        "photo": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                photo = value;
            },
            get: function () {
                return photo;
            },
        },

        "description": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                description = value;
            },
            get: function () {
                return description;
            },
        },

        "invite_link": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                invite_link = value;
            },
            get: function () {
                return invite_link;
            },
        },

        "pinned_message": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                pinned_message = value;
            },
            get: function () {
                return pinned_message;
            },
        },

        "sticker_set_name": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                sticker_set_name = value;
            },
            get: function () {
                return sticker_set_name;
            },
        },

        "all_members_are_administrators": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                all_members_are_administrators = value;
            },
            get: function () {
                return all_members_are_administrators;
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
                    'type': this.type,
                    'title': this.title,
                    'username': this.username,
                    'first_name': this.first_name,
                    'last_name': this.last_name,
                    'can_set_sticker_set': this.can_set_sticker_set,
                    'photo': this.photo.toArray(deep - 1),
                    'description': this.description,
                    'invite_link': this.invite_link,
                    'pinned_message': this.pinned_message.toArray(deep - 1),
                    'sticker_set_name': this.sticker_set_name,
                    'all_members_are_administrators': this.all_members_are_administrators,
                };
            },
        },
    });

}
