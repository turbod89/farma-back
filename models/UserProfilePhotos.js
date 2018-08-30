const PhotoSize = require('./PhotoSize');


module.exports = function UserProfilePhotos(data) {

    /* Class members */

    let total_count = data['total_count'] ? data['total_count'] : null; /* Total number of profile pictures the target user has */
    let photos = data['photos'] ? data['photos'].map( element => element.map( element => new PhotoSize(element) ) ) : null; /* Requested profile pictures (in up to 4 sizes each) */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "total_count": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                total_count = value;
            },
            get: function () {
                return total_count;
            },
        },

        "photos": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                photos = value;
            },
            get: function () {
                return photos;
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
                    'total_count': this.total_count,
                    'photos': this.photos.map( element => element.map( element => element.toArray(deep - 1) ) ),
                };
            },
        },
    });

}
