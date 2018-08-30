module.exports = function ChatPhoto(data) {

    /* Class members */

    let small_file_id = data['small_file_id'] ? data['small_file_id'] : null; /* Unique file identifier of small (160x160) chat photo. This file_id can be used only for photo download. */
    let big_file_id = data['big_file_id'] ? data['big_file_id'] : null; /* Unique file identifier of big (640x640) chat photo. This file_id can be used only for photo download. */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "small_file_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                small_file_id = value;
            },
            get: function () {
                return small_file_id;
            },
        },

        "big_file_id": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                big_file_id = value;
            },
            get: function () {
                return big_file_id;
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
                    'small_file_id': this.small_file_id,
                    'big_file_id': this.big_file_id,
                };
            },
        },
    });

}
