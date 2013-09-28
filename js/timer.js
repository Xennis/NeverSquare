GAME.timer = function(jQuery, shapeNumber){
	var countdown;
	var incrementTime = window.GAME.settings.incrementTime;
	var currentTime = shapeNumber*window.GAME.settings.timePerShape;


    $(function() {

        // Setup the timer
        countdown = $('#gameTime');
        GAME.timer = $.timer(updateTimer, incrementTime, true);

       
    });

    function updateTimer() {

        // Output timer position
        var timeString = formatTime(currentTime);
        countdown.html(timeString);

        // If timer is complete, trigger alert
        if (currentTime == 0) {
            GAME.timer.stop();
           
            GAME.timeOut();
            GAME.timer.resetCountdown();
            return;
        }

        // Increment timer position
        currentTime -= incrementTime;
        if (currentTime < 0) currentTime = 0;

    }

    this.resetCountdown = function() {

        // Get time from form
        var newTime = parseInt($form.find('input[type=text]').val()) * 1000;
        if (newTime > 0) {currentTime = newTime;}

        // Stop and reset timer
        GAME.timer.stop().once();

    };


    // Common functions
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {str = '0' + str;}
    return str;
}
function formatTime(time) {
    time = time / 10;
    var min = parseInt(time / 6000),
        sec = parseInt(time / 100) - (min * 60),
        hundredths = pad(time - (sec * 100) - (min * 6000), 2);
    return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2) + ":" + hundredths;
}



}(jQuery, window.GAME.settings.numShapes, undefined);