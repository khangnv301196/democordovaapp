var app={
  initialize: function(){
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function(){
    // let fetchDataFromApi = async (url) => {
    //   let reponse = await fetch(url);
    //   let result = await reponse.json();
    //   let items = [];
    //   // for(let i=0; i<itemsms.length; i++){
    //   //   let res = await fetch(otherURL);
    //   //   let secondResult = await res.json();
    //   //   items.push(secondResult);
    //   // }
    //   return items;

    // async function fetchAsync () {
    //   // await response of fetch call
    //   let response = await fetch('https://api.github.com');
    //   // only proceed once promise is resolved
    //   let data = await response.json();
    //   // only proceed once second promise is resolved
    //   return data;
    // }
    
    // // trigger async function
    // // log response or catch error of fetch promise
    // fetchAsync()
    //     .then(data => console.log(data))
    //     .catch(reason => console.log(reason.message))
    // }
    fetch('https://api.github.com/users/KrunalLathiya')
    .then(response => response.json())
    .then(data => {
      console.log(data) // Prints result from `response.json()` in getRequest
    })
    .catch(error => console.error(error))
  }
}