const User = require('./User');


module.exports = function GameHighScore(data) {

    /* Class members */

    let position = data['position'] ? data['position'] : null; /* Position in high score table for the game */
    let user = data['user'] ? new User(data['user']) : null; /* User */
    let score = data['score'] ? data['score'] : null; /* Score */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "position": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                position = value;
            },
            get: function () {
                return position;
            },
        },

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

        "score": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                score = value;
            },
            get: function () {
                return score;
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
                    'position': this.position,
                    'user': this.user.toArray(deep - 1),
                    'score': this.score,
                };
            },
        },
    });

}
