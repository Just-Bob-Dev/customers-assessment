// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
console.log('you connected dawg');

(function () {

  'use strict';
  fetch('https://randomuser.me/api/?results=12')
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
        console.log(data.results[4].name.first);
        console.log(data.results.length);


        let userArray = [];

        for (var i = 0; i < data.results.length; i++) {
            let users = {}
            users.img = data.results[i].picture.medium;
            users.name = data.results[i].name.first + " " +  data.results[i].name.last;
            users.company = " ";
            users.address =  data.results[i].location.street + " " + data.results[i].location.city;
            users.stateZip =  data.results[i].location.state + ", " +  data.results[i].location.postcode;
            users.phone =  data.results[i].phone;

            userArray.push(users);

          }
          console.log(userArray);


          function renderUser(array)
          {
            let parentNode = document.getElementById('customers');
            let ulNode = document.createElement('ul');
            ulNode.id = "customer-container";

            parentNode.appendChild(ulNode);

            for (var i = 0; i < array.length; i++)
            {
              let listMaker= document.createElement('li');
              let childNode = array[i];
              ulNode.appendChild(childNode);
            }

          }


          renderUser(userArray);

        });
      }
    );

})();
