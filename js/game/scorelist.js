GAME.scorelist = (function (window, jQuery) {

    var location = "php/scores.php";

    return {
        getScoreList: function(callback) {
            $.getJSON(location, function (data) {
                callback(data);
            });
        },
        saveScore: function(name, score, callback) {
            $.post(location, {"name":name,"score":score}, function(data) {
                callback(data);
            }, "json");
        }
    }

})(window, jQuery, undefined);