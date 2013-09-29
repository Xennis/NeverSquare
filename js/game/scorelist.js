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
        },
        checkHighScore: function(name, score) {
            function checkScore(data) {
                for(var i=0; i < data.length; i+= 1) {
                    if (score > data[i].score) {
                        GAME.scorelist.saveScore(name, score, function(data){
                            console.log(data);
                        });
                    }
                }
            }
            this.getScoreList(checkScore);
        }
    }

})(window, jQuery, undefined);