(function(public) {

    public.Shout = function(message) {
        outputMessage(message);
    };

    function whisper(message) {
        outputMessage(message);
    }

    function outputMessage(message) {
        alert(message);
    }

    function notCalled() {
        alert("nothing calls me");
    }

}( window.HelloWorld = window.HelloWorld || {} ));