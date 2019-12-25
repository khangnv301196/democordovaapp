var app={
  initialize: function(){
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function(){
    let fetchDataFromApi = async (url) => {
      let reponse = await fetch(url);
      let result = await reponse.json();
      let items = [];
      for(let i=0; i<itemsms.length; i++){
        let res = await fetch(otherURL);
        let secondResult = await res.json();
        items.push(secondResult);
      }
      return items;
    }
  }
}