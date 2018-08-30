const Chat = require('./Chat');
const PassportData = require('./PassportData');
const User = require('./User');
const MessageEntity = require('./MessageEntity');
const Audio = require('./Audio');
const Document = require('./Document');
const Animation = require('./Animation');
const Game = require('./Game');
const PhotoSize = require('./PhotoSize');
const Sticker = require('./Sticker');
const Voice = require('./Voice');
const VideoNote = require('./VideoNote');
const Contact = require('./Contact');
const Location = require('./Location');
const Venue = require('./Venue');
const Invoice = require('./Invoice');
const SuccessfulPayment = require('./SuccessfulPayment');
const Video = require('./Video');


module.exports = function Message(data) {

    /* Class members */

    let message_id = data['message_id'] ? data['message_id'] : null; /* Unique message identifier inside this chat */
    let date = data['date'] ? data['date'] : null; /* Date the message was sent in Unix time */
    let chat = data['chat'] ? new Chat(data['chat']) : null; /* Conversation the message belongs to */
    let passport_data = data['passport_data'] ? new PassportData(data['passport_data']) : null; /* * Optional *. Telegram Passport data */
    let forward_from = data['forward_from'] ? new User(data['forward_from']) : null; /* * Optional *. For forwarded messages, sender of the original message */
    let forward_from_chat = data['forward_from_chat'] ? new Chat(data['forward_from_chat']) : null; /* * Optional *. For messages forwarded from channels, information about the original channel */
    let forward_from_message_id = data['forward_from_message_id'] ? data['forward_from_message_id'] : null; /* * Optional *. For messages forwarded from channels, identifier of the original message in the channel */
    let forward_signature = data['forward_signature'] ? data['forward_signature'] : null; /* * Optional *. For messages forwarded from channels, signature of the post author if present */
    let forward_date = data['forward_date'] ? data['forward_date'] : null; /* * Optional *. For forwarded messages, date the original message was sent in Unix time */
    let reply_to_message = data['reply_to_message'] ? new Message(data['reply_to_message']) : null; /* * Optional *. For replies, the original message. Note that the Message object in this field will not contain further ... */
    let edit_date = data['edit_date'] ? data['edit_date'] : null; /* * Optional *. Date the message was last edited in Unix time */
    let media_group_id = data['media_group_id'] ? data['media_group_id'] : null; /* * Optional *. The unique identifier of a media message group this message belongs to */
    let author_signature = data['author_signature'] ? data['author_signature'] : null; /* * Optional *. Signature of the post author for messages in channels */
    let text = data['text'] ? data['text'] : null; /* * Optional *. For text messages, the actual UTF-8 text of the message, 0-4096 characters. */
    let entities = data['entities'] ? data['entities'].map( element => new MessageEntity(element) ) : null; /* * Optional *. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text */
    let caption_entities = data['caption_entities'] ? data['caption_entities'].map( element => new MessageEntity(element) ) : null; /* * Optional *. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in t... */
    let audio = data['audio'] ? new Audio(data['audio']) : null; /* * Optional *. Message is an audio file, information about the file */
    let document = data['document'] ? new Document(data['document']) : null; /* * Optional *. Message is a general file, information about the file */
    let animation = data['animation'] ? new Animation(data['animation']) : null; /* * Optional *. Message is an animation, information about the animation. For backward compatibility, when this field i... */
    let game = data['game'] ? new Game(data['game']) : null; /* * Optional *. Message is a game, information about the game. <a href="#games">More about games »</a> */
    let photo = data['photo'] ? data['photo'].map( element => new PhotoSize(element) ) : null; /* * Optional *. Message is a photo, available sizes of the photo */
    let sticker = data['sticker'] ? new Sticker(data['sticker']) : null; /* * Optional *. Message is a sticker, information about the sticker */
    let from = data['from'] ? new User(data['from']) : null; /* * Optional *. Sender, empty for messages sent to channels */
    let voice = data['voice'] ? new Voice(data['voice']) : null; /* * Optional *. Message is a voice message, information about the file */
    let video_note = data['video_note'] ? new VideoNote(data['video_note']) : null; /* * Optional *. Message is a <a href="https://telegram.org/blog/video-messages-and-telescope">video note</a>, informati... */
    let caption = data['caption'] ? data['caption'] : null; /* * Optional *. Caption for the audio, document, photo, video or voice, 0-200 characters */
    let contact = data['contact'] ? new Contact(data['contact']) : null; /* * Optional *. Message is a shared contact, information about the contact */
    let location = data['location'] ? new Location(data['location']) : null; /* * Optional *. Message is a shared location, information about the location */
    let venue = data['venue'] ? new Venue(data['venue']) : null; /* * Optional *. Message is a venue, information about the venue */
    let new_chat_members = data['new_chat_members'] ? data['new_chat_members'].map( element => new User(element) ) : null; /* * Optional *. New members that were added to the group or supergroup and information about them (the bot itself may b... */
    let left_chat_member = data['left_chat_member'] ? new User(data['left_chat_member']) : null; /* * Optional *. A member was removed from the group, information about them (this member may be the bot itself) */
    let new_chat_title = data['new_chat_title'] ? data['new_chat_title'] : null; /* * Optional *. A chat title was changed to this value */
    let new_chat_photo = data['new_chat_photo'] ? data['new_chat_photo'].map( element => new PhotoSize(element) ) : null; /* * Optional *. A chat photo was change to this value */
    let delete_chat_photo = data['delete_chat_photo'] ? data['delete_chat_photo'] : null; /* * Optional *. Service message: the chat photo was deleted */
    let group_chat_created = data['group_chat_created'] ? data['group_chat_created'] : null; /* * Optional *. Service message: the group has been created */
    let supergroup_chat_created = data['supergroup_chat_created'] ? data['supergroup_chat_created'] : null; /* * Optional *. Service message: the supergroup has been created. This field can‘t be received in a message coming thro... */
    let channel_chat_created = data['channel_chat_created'] ? data['channel_chat_created'] : null; /* * Optional *. Service message: the channel has been created. This field can‘t be received in a message coming through... */
    let migrate_to_chat_id = data['migrate_to_chat_id'] ? data['migrate_to_chat_id'] : null; /* * Optional *. The group has been migrated to a supergroup with the specified identifier. This number may be greater t... */
    let migrate_from_chat_id = data['migrate_from_chat_id'] ? data['migrate_from_chat_id'] : null; /* * Optional *. The supergroup has been migrated from a group with the specified identifier. This number may be greater... */
    let pinned_message = data['pinned_message'] ? new Message(data['pinned_message']) : null; /* * Optional *. Specified message was pinned. Note that the Message object in this field will not contain further * rep... */
    let invoice = data['invoice'] ? new Invoice(data['invoice']) : null; /* * Optional *. Message is an invoice for a <a href="#payments">payment</a>, information about the invoice. <a href="#p... */
    let successful_payment = data['successful_payment'] ? new SuccessfulPayment(data['successful_payment']) : null; /* * Optional *. Message is a service message about a successful payment, information about the payment. <a href="#payme... */
    let connected_website = data['connected_website'] ? data['connected_website'] : null; /* * Optional *. The domain name of the website on which the user has logged in. <a href="/widgets/login">More about Tel... */
    let video = data['video'] ? new Video(data['video']) : null; /* * Optional *. Message is a video, information about the video */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "message_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                message_id = value;
            },
            get: function () {
                return message_id;
            },
        },

        "date": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                date = value;
            },
            get: function () {
                return date;
            },
        },

        "chat": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                chat = value;
            },
            get: function () {
                return chat;
            },
        },

        "passport_data": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                passport_data = value;
            },
            get: function () {
                return passport_data;
            },
        },

        "forward_from": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                forward_from = value;
            },
            get: function () {
                return forward_from;
            },
        },

        "forward_from_chat": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                forward_from_chat = value;
            },
            get: function () {
                return forward_from_chat;
            },
        },

        "forward_from_message_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                forward_from_message_id = value;
            },
            get: function () {
                return forward_from_message_id;
            },
        },

        "forward_signature": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                forward_signature = value;
            },
            get: function () {
                return forward_signature;
            },
        },

        "forward_date": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                forward_date = value;
            },
            get: function () {
                return forward_date;
            },
        },

        "reply_to_message": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                reply_to_message = value;
            },
            get: function () {
                return reply_to_message;
            },
        },

        "edit_date": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                edit_date = value;
            },
            get: function () {
                return edit_date;
            },
        },

        "media_group_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                media_group_id = value;
            },
            get: function () {
                return media_group_id;
            },
        },

        "author_signature": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                author_signature = value;
            },
            get: function () {
                return author_signature;
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

        "entities": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                entities = value;
            },
            get: function () {
                return entities;
            },
        },

        "caption_entities": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                caption_entities = value;
            },
            get: function () {
                return caption_entities;
            },
        },

        "audio": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                audio = value;
            },
            get: function () {
                return audio;
            },
        },

        "document": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                document = value;
            },
            get: function () {
                return document;
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

        "game": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                game = value;
            },
            get: function () {
                return game;
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

        "sticker": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                sticker = value;
            },
            get: function () {
                return sticker;
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

        "voice": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                voice = value;
            },
            get: function () {
                return voice;
            },
        },

        "video_note": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                video_note = value;
            },
            get: function () {
                return video_note;
            },
        },

        "caption": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                caption = value;
            },
            get: function () {
                return caption;
            },
        },

        "contact": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                contact = value;
            },
            get: function () {
                return contact;
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

        "venue": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                venue = value;
            },
            get: function () {
                return venue;
            },
        },

        "new_chat_members": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                new_chat_members = value;
            },
            get: function () {
                return new_chat_members;
            },
        },

        "left_chat_member": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                left_chat_member = value;
            },
            get: function () {
                return left_chat_member;
            },
        },

        "new_chat_title": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                new_chat_title = value;
            },
            get: function () {
                return new_chat_title;
            },
        },

        "new_chat_photo": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                new_chat_photo = value;
            },
            get: function () {
                return new_chat_photo;
            },
        },

        "delete_chat_photo": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                delete_chat_photo = value;
            },
            get: function () {
                return delete_chat_photo;
            },
        },

        "group_chat_created": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                group_chat_created = value;
            },
            get: function () {
                return group_chat_created;
            },
        },

        "supergroup_chat_created": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                supergroup_chat_created = value;
            },
            get: function () {
                return supergroup_chat_created;
            },
        },

        "channel_chat_created": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                channel_chat_created = value;
            },
            get: function () {
                return channel_chat_created;
            },
        },

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

        "migrate_from_chat_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                migrate_from_chat_id = value;
            },
            get: function () {
                return migrate_from_chat_id;
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

        "invoice": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                invoice = value;
            },
            get: function () {
                return invoice;
            },
        },

        "successful_payment": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                successful_payment = value;
            },
            get: function () {
                return successful_payment;
            },
        },

        "connected_website": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                connected_website = value;
            },
            get: function () {
                return connected_website;
            },
        },

        "video": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                video = value;
            },
            get: function () {
                return video;
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
                    'message_id': this.message_id,
                    'date': this.date,
                    'chat': this.chat.toArray(deep - 1),
                    'passport_data': this.passport_data.toArray(deep - 1),
                    'forward_from': this.forward_from.toArray(deep - 1),
                    'forward_from_chat': this.forward_from_chat.toArray(deep - 1),
                    'forward_from_message_id': this.forward_from_message_id,
                    'forward_signature': this.forward_signature,
                    'forward_date': this.forward_date,
                    'reply_to_message': this.reply_to_message.toArray(deep - 1),
                    'edit_date': this.edit_date,
                    'media_group_id': this.media_group_id,
                    'author_signature': this.author_signature,
                    'text': this.text,
                    'entities': this.entities.map( element => element.toArray(deep - 1) ),
                    'caption_entities': this.caption_entities.map( element => element.toArray(deep - 1) ),
                    'audio': this.audio.toArray(deep - 1),
                    'document': this.document.toArray(deep - 1),
                    'animation': this.animation.toArray(deep - 1),
                    'game': this.game.toArray(deep - 1),
                    'photo': this.photo.map( element => element.toArray(deep - 1) ),
                    'sticker': this.sticker.toArray(deep - 1),
                    'from': this.from.toArray(deep - 1),
                    'voice': this.voice.toArray(deep - 1),
                    'video_note': this.video_note.toArray(deep - 1),
                    'caption': this.caption,
                    'contact': this.contact.toArray(deep - 1),
                    'location': this.location.toArray(deep - 1),
                    'venue': this.venue.toArray(deep - 1),
                    'new_chat_members': this.new_chat_members.map( element => element.toArray(deep - 1) ),
                    'left_chat_member': this.left_chat_member.toArray(deep - 1),
                    'new_chat_title': this.new_chat_title,
                    'new_chat_photo': this.new_chat_photo.map( element => element.toArray(deep - 1) ),
                    'delete_chat_photo': this.delete_chat_photo,
                    'group_chat_created': this.group_chat_created,
                    'supergroup_chat_created': this.supergroup_chat_created,
                    'channel_chat_created': this.channel_chat_created,
                    'migrate_to_chat_id': this.migrate_to_chat_id,
                    'migrate_from_chat_id': this.migrate_from_chat_id,
                    'pinned_message': this.pinned_message.toArray(deep - 1),
                    'invoice': this.invoice.toArray(deep - 1),
                    'successful_payment': this.successful_payment.toArray(deep - 1),
                    'connected_website': this.connected_website,
                    'video': this.video.toArray(deep - 1),
                };
            },
        },
    });

}
