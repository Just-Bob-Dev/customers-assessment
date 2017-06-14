// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
console.log('you connected dawg');

(function () {

  'use strict';

  fetch('https://randomuser.me/api/?nat=us&results=12')
    .then
    (

      function(response)
      {
        if(response.status !== 200)
        {
          console.log('looks like there was a problem. Its a trap!' +response.status);
          return;
        }
        response.json().then(function(data){

        function markItUp(object){
        var markup =
        `
        <div class="customer-container">
          <img src=${object.img}>

          <h2>${object.name}</h2>
          <hr>
          <p class="email">${object.name}@email.com</p>
          <p class="address">${object.address}</p>
          <p class="address">${object.stateZip}</p>
          <p class="phone">${object.phone}</p>
        </div>
        `

        document.getElementById('customers').innerHTML += markup;
      }
        let userArray = [];

        for (var i = 0; i < data.results.length; i++) {
            let users = {}
            users.img = data.results[i].picture.large;
            users.name = data.results[i].name.first + " " +  data.results[i].name.last;
            users.company = " ";
            users.address =  data.results[i].location.street;
            users.stateZip = data.results[i].location.city; + " " + data.results[i].location.state + ", " +  data.results[i].location.postcode;
            users.phone =  data.results[i].phone;
            userArray.push(users);

           }
          console.log(userArray);

        for (var i = 0; i < userArray.length; i++) {
          markItUp(userArray[i]);
        }

        });
      }
    );

})();
