function debugCallback(response){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
};

function debugAjax(){
	
	var myData;

	//Example 3.1...
//define fetch request
function loadData(){
    var cities
    //basic fetch
    fetch('data/MegaCitiesDone.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(function(response) {

        
            cities = response;
            console.log(cities);
        })
};

//define callback function
function debugCallback(myData){
    document.querySelector("#mydiv").insertAdjacentHTML('beforeend',"GeoJSON data: " + JSON.stringify(myData));
};

    //tasks using the data go here
    



window.onload = jsAjax();
	
	fetch("data/MegaCities.geojson")
		.then(function(response){
			debugCallback(response);
		})

	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:</br>', + JSON.stringify(myData))


document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))}
