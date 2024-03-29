GAME.colorlist = (function (window, jQuery) {

    var colorPointer = 0;
    var colors = [];
    var colorListObject = {
        init: function () {
            for (i=0; i < 10; i+=1) {
                this.generate();
            }
            (function generateColors() {
                GAME.colorlist.generate();
                setTimeout(generateColors, GAME.settings.timePerColor);
            })();
        },
        getCurrentColor: function () {
            if (colorPointer > 5) {
                colors.splice(0, 5);
                colorPointer = 0;
            }
            return colors[colorPointer];
        },
        generate: function () {
            if (colors.length > 20)
                return;
            var colorIndex = getRandomColorIndex();
                colors.push({
                    hover: window.GAME.settings.hoverColors[colorIndex],
                    active: window.GAME.settings.colors[colorIndex]
                });
        },

        getNextColor: function () {
            return colors[colorPointer+1];
        },

        setNextColor: function () {
            if (colorPointer+1 >= colors.length)
                return false;
            colorPointer += 1;
            return true;
        },
    };
    return colorListObject;

})(window, jQuery, undefined);