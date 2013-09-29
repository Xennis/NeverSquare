GAME.scorelist = (function (window, jQuery) {

    var location = "scores.php";

    return {
        getScoreList: function(callback) {
            $.getJSON(location, function (data) {
                callback(data);
            });
        },
        saveScore: function(name, score, callback) {
            $.post(location, {"name":"player","score":100}, function(data) {
                callback(data);
            }, "json");
        }
    }

})(window, jQuery, undefined);