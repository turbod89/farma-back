const PhotoSize = require('./PhotoSize');
const MessageEntity = require('./MessageEntity');
const Animation = require('./Animation');


module.exports = function Game(data) {

    /* Class members */

    let title = data['title'] ? data['title'] : null; /* Title of the game */
    let description = data['description'] ? data['description'] : null; /* Description of the game */
    let photo = data['photo'] ? data['photo'].map( element => new PhotoSize(element) ) : null; /* Photo that will be displayed in the game message in chats. */
    let text = data['text'] ? data['text'] : null; /* * Optional *. Brief description of the game or high scores included in the game message. Can be automatically edited ... */
    let text_entities = data['text_entities'] ? data['text_entities'].map( element => new MessageEntity(element) ) : null; /* * Optional *. Special entities that appear in * text *, such as usernames, URLs, bot commands, etc. */
    let animation = data['animation'] ? new Animation(data['animation']) : null; /* * Optional *. Animation that will be displayed in the game message in chats. Upload via <a href="https://t.me/botfath... */

    /* Getters and Setters*/

    Object.defineProperties(this, {

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

        "text": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                text = value;
            },
            get: function () {
                return text;
            },
        },

        "text_entities": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                text_entities = value;
            },
            get: function () {
                return text_entities;
            },
        },

        "animation": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                animation = value;
            },
            get: function () {
                return animation;
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
                    'title': this.title,
                    'description': this.description,
                    'photo': this.photo.map( element => element.toArray(deep - 1) ),
                    'text': this.text,
                    'text_entities': this.text_entities.map( element => element.toArray(deep - 1) ),
                    'animation': this.animation.toArray(deep - 1),
                };
            },
        },
    });

}
