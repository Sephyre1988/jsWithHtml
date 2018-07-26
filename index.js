fetch('https://javabank.herokuapp.com/api/customer')
.then(function(response){
    console.log('got response');
    console.log(response);

    return response.json;
})
.then(function(json){
    console.log('got json: ', json);
    console.log(json);
})