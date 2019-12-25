var app={
  initialize : function() {
    document.addEventListener('deviceready',this.onDeviceReady.bind(this),false);
  },

  onDeviceReady : function(){
    $('#btn_login').on('click',function(){
      window.open('index.html' );
    })
  }
}

app.initialize();