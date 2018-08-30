module.exports = function ForceReply(data) {

    /* Class members */

    let force_reply = data['force_reply'] ? data['force_reply'] : null; /* Shows reply interface to the user, as if they manually selected the bot‘s message and tapped ’Reply&#39; */
    let selective = data['selective'] ? data['selective'] : null; /* * Optional *. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @men... */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "force_reply": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                force_reply = value;
            },
            get: function () {
                return force_reply;
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
                    'force_reply': this.force_reply,
                    'selective': this.selective,
                };
            },
        },
    });

}
