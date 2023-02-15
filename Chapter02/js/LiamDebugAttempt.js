//This file is what I initially had when debugging, the main_with_debug.js file is the actual solution. I made this file so I can compare the two//

//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        {
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
        
    ];
    
    

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");
    table.appendChild(headerRow);

    //add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};

//call the initialize function when the window has loaded
window.onload = initialize();


function initialize(){
    cities();
};

var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];



function addColumns(cityPop){
    
    var rows = document.querySelectorAll("tr")

    document.querySelectorAll("tr").forEach(function(row, i){


    	if (i === 0){

    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else if (cityPop[i-1].population > 500000){
    			citySize = 'Large';
    		};

			row.insertAdjacentHTML('beforeend', '<td' + citySize + '</td>');
    	};
    });
};

function addEvents(){

    table = document.querySelector("table")

	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb";
	
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};

		document.querySelector("table").color = color;
	};

	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)
});


window.onload = cities();}