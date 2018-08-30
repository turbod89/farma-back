module.exports = function ReplyKeyboardRemove(data) {

    /* Class members */

    let remove_keyboard = data['remove_keyboard'] ? data['remove_keyboard'] : null; /* Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide th... */
    let selective = data['selective'] ? data['selective'] : null; /* * Optional *. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that a... */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "remove_keyboard": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                remove_keyboard = value;
            },
            get: function () {
                return remove_keyboard;
            },
        },

        "selective": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                selective = value;
            },
            get: function () {
                return selective;
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
                    'remove_keyboard': this.remove_keyboard,
                    'selective': this.selective,
                };
            },
        },
    });

}
