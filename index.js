var users_btn = document.getElementById('users_btn');
users_btn.addEventListener('click', loadCustomers);

var back_btn = document.getElementById("go_back_btn");
back_btn.addEventListener('click', loadCustomers);

var user_detais_btn = document.getElementById('user_details_btn');
user_detais_btn.addEventListener('click', loadDetails);



function loadCustomers() {
    fetch('https://javabank.herokuapp.com/api/customer')

        .then(function (response) {
            console.log('got response');
            console.log(response);
            return response.json();
        })

        .then(function (json) {
            console.log('function populate load');
            populateTable('users_table', json);
        });
}


function populateTable(id, customers) {

    console.log('seting visibility');
    var tableMaster = document.getElementById('users_table');
    console.log('set table');
    tableMaster.style.visibility = 'visible';
    console.log('visible');

    console.log("populating table...", customers);
    console.log(customers);

    customers.forEach(customer => {
        var row = tableMaster.insertRow(-1);
        console.log("printing customer", customer);
        row.innerHTML = `<td>${customer.id}</td>
        <td>${customer.firstName}</td>
        <td>${customer.lastName}</td>
        <td><button id="user_detais_btn">Check Details</button></td>`;

    });
}

function loadDetails(id){

    console.log('seting visibility');
    var tableMaster = document.getElementById('users_table');
    console.log('set table');
    tableMaster.style.visibility = 'hidden';
    console.log('hidden');

    
}