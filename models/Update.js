const Message = require('./Message');
const InlineQuery = require('./InlineQuery');
const ChosenInlineResult = require('./ChosenInlineResult');
const CallbackQuery = require('./CallbackQuery');
const ShippingQuery = require('./ShippingQuery');
const PreCheckoutQuery = require('./PreCheckoutQuery');


module.exports = function Update(data) {

    /* Class members */

    let update_id = data['update_id'] ? data['update_id'] : null; /* The update‘s unique identifier. Update identifiers start from a certain positive number and increase sequentially. Th... */
    let message = data['message'] ? new Message(data['message']) : null; /* * Optional *. New incoming message of any kind — text, photo, sticker, etc. */
    let edited_message = data['edited_message'] ? new Message(data['edited_message']) : null; /* * Optional *. New version of a message that is known to the bot and was edited */
    let channel_post = data['channel_post'] ? new Message(data['channel_post']) : null; /* * Optional *. New incoming channel post of any kind — text, photo, sticker, etc. */
    let edited_channel_post = data['edited_channel_post'] ? new Message(data['edited_channel_post']) : null; /* * Optional *. New version of a channel post that is known to the bot and was edited */
    let inline_query = data['inline_query'] ? new InlineQuery(data['inline_query']) : null; /* * Optional *. New incoming <a href="#inline-mode">inline</a> query */
    let chosen_inline_result = data['chosen_inline_result'] ? new ChosenInlineResult(data['chosen_inline_result']) : null; /* * Optional *. The result of an <a href="#inline-mode">inline</a> query that was chosen by a user and sent to their ch... */
    let callback_query = data['callback_query'] ? new CallbackQuery(data['callback_query']) : null; /* * Optional *. New incoming callback query */
    let shipping_query = data['shipping_query'] ? new ShippingQuery(data['shipping_query']) : null; /* * Optional *. New incoming shipping query. Only for invoices with flexible price */
    let pre_checkout_query = data['pre_checkout_query'] ? new PreCheckoutQuery(data['pre_checkout_query']) : null; /* * Optional *. New incoming pre-checkout query. Contains full information about checkout */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "update_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                update_id = value;
            },
            get: function () {
                return update_id;
            },
        },

        "message": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                message = value;
            },
            get: function () {
                return message;
            },
        },

        "edited_message": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                edited_message = value;
            },
            get: function () {
                return edited_message;
            },
        },

        "channel_post": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                channel_post = value;
            },
            get: function () {
                return channel_post;
            },
        },

        "edited_channel_post": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                edited_channel_post = value;
            },
            get: function () {
                return edited_channel_post;
            },
        },

        "inline_query": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                inline_query = value;
            },
            get: function () {
                return inline_query;
            },
        },

        "chosen_inline_result": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                chosen_inline_result = value;
            },
            get: function () {
                return chosen_inline_result;
            },
        },

        "callback_query": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                callback_query = value;
            },
            get: function () {
                return callback_query;
            },
        },

        "shipping_query": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                shipping_query = value;
            },
            get: function () {
                return shipping_query;
            },
        },

        "pre_checkout_query": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                pre_checkout_query = value;
            },
            get: function () {
                return pre_checkout_query;
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
                    'update_id': this.update_id,
                    'message': this.message.toArray(deep - 1),
                    'edited_message': this.edited_message.toArray(deep - 1),
                    'channel_post': this.channel_post.toArray(deep - 1),
                    'edited_channel_post': this.edited_channel_post.toArray(deep - 1),
                    'inline_query': this.inline_query.toArray(deep - 1),
                    'chosen_inline_result': this.chosen_inline_result.toArray(deep - 1),
                    'callback_query': this.callback_query.toArray(deep - 1),
                    'shipping_query': this.shipping_query.toArray(deep - 1),
                    'pre_checkout_query': this.pre_checkout_query.toArray(deep - 1),
                };
            },
        },
    });

}
