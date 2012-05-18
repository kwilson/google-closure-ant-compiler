var bigFile2 = (function() {

    var shout = function(message) {
        outputMessage(message);
    };

    var whisper = function(message) {
        outputMessage("Shhh... " + message);
    }

    function outputMessage(message) {
        alert(message);
    }

    function notCalled() {
        alert("nothing calls me");
    }

    return {
        shout: shout,
        whisper: whisper
    }

}());