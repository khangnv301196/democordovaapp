var controller;
var app = {
    // Application Constructor
    initialize: function() {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
            document.addEventListener("deviceready", this.onDeviceReady, false);
        } else {
            this.onDeviceReady();
        }
    },

    onDeviceReady: function() {
        controller = new Controller();
        app.overrideBrowserAlert();
        $('#btn_click').on('click',function(){
            window.history.back();
        });
    },

    overrideBrowserAlert: function() {
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "KhangNV", // title
                    'OK'        // buttonName
                );
            };
        }
    },

};

app.initialize();
