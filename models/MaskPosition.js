module.exports = function MaskPosition(data) {

    /* Class members */

    let point = data['point'] ? data['point'] : null; /* The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”. */
    let x_shift = data['x_shift'] ? data['x_shift'] : null; /* Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.... */
    let y_shift = data['y_shift'] ? data['y_shift'] : null; /* Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will pl... */
    let scale = data['scale'] ? data['scale'] : null; /* Mask scaling coefficient. For example, 2.0 means double size. */

    /* Getters and Setters*/

    Object.defineProperties(this, {

        "point": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                point = value;
            },
            get: function () {
                return point;
            },
        },

        "x_shift": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                x_shift = value;
            },
            get: function () {
                return x_shift;
            },
        },

        "y_shift": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                y_shift = value;
            },
            get: function () {
                return y_shift;
            },
        },

        "scale": {
            enumerable: true,
            modificable: false,
            set: function (value) {
                scale = value;
            },
            get: function () {
                return scale;
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
                    'point': this.point,
                    'x_shift': this.x_shift,
                    'y_shift': this.y_shift,
                    'scale': this.scale,
                };
            },
        },
    });

}
