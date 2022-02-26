/*if ('geolocation' in navigator) {
    function successCallback(position) {
        console.log(position.coords.latitude); // 43.2132209
        console.log(position.coords.longitude); // 27.9571503
    }

    function errorCallback(error) {
        console.log(error.message);
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


}*/

/*async function get_country_code() {
    await fetch('http://freegeoip.net/json/', async function(result) {
        alert(result.country_code);
    });
}
get_country_code();*/
let dropdown = document.getElementById("countryselector");

let emergency_number_data = null;

fetch("emergency_numbers.json").then((data) => data.json()).then(
    function(data) {
        //console.log(data);
        emergency_number_data = data;


        while (dropdown.options.length > 0) {
            dropdown.remove(0);
        }
        dropdown.append('<option selected="true" disabled>Choose State/Province</option>');
        //dropdown.prop('selectedIndex', 0);
        data.forEach(entry => {
            let option = document.createElement('option');
            option.value = entry.country;
            option.text = entry.territory;
            dropdown.append(option);
        });

        get_emergency_numbers()
    }
)


function get_emergency_numbers() {
    const country_data = emergency_number_data.find(element => element.country === dropdown.value);

    document.getElementById("Emergency").innerHTML = country_data.Emergency;
    document.getElementById("Ambulance").innerHTML = country_data.Ambulance;
    document.getElementById("Fire").innerHTML = country_data.Fire;
    document.getElementById("Police").innerHTML = country_data.Police;

    // regex expression to match all
    // non-alphanumeric characters in string
    const regex = /[^A-Za-z0-9]/g;

    if (country_data.Emergency === null) {
        document.getElementById("emergency-overlay").style.zIndex = "10";
        document.getElementById("emergency-button").href = "#"
    } else {
        document.getElementById("emergency-overlay").style.zIndex = "-1";
        document.getElementById("emergency-button").href = "Tel:" + country_data.Emergency.split(' ')[0].replace(regex, "");
    }

    if (country_data.Ambulance === null) {
        document.getElementById("ambulance-overlay").style.zIndex = "10";
        document.getElementById("ambulance-button").href = "#"
    } else {
        document.getElementById("ambulance-overlay").style.zIndex = "-1";
        document.getElementById("ambulance-button").href = "Tel:" + country_data.Emergency.split(' ')[0].replace(regex, "");
    }

    if (country_data.Fire === null) {
        document.getElementById("fire-overlay").style.zIndex = "10";
        document.getElementById("fire-button").href = "#"
    } else {
        document.getElementById("fire-overlay").style.zIndex = "-1";
        document.getElementById("fire-button").href = "Tel:" + country_data.Emergency.split(' ')[0].replace(regex, "");
    }

    if (country_data.Police === null) {
        document.getElementById("police-overlay").style.zIndex = "10";
        document.getElementById("police-button").href = "#"
    } else {
        document.getElementById("police-overlay").style.zIndex = "-1";
        document.getElementById("police-button").href = "Tel:" + country_data.Emergency.split(' ')[0].replace(regex, "");
    }
}


/*async function load_content() {
    let url = "http://dbpedia.org/sparql";
    // var query = [
    //     "PREFIX dbpedia2: <http://dbpedia.org/resource/>",
    //     "PREFIX Abs: <http://dbpedia.org/ontology/>",
    //     "SELECT ?abstract",
    //     "WHERE {",
    //     "?s dbpedia2:Civil_engineeringe\"@en;",
    //     "Abs:abstract ?abstract",
    //     "}"
    // ].join(" ");

    let query = `SELECT *
    WHERE
        {
            ?s ?p ?o
        }
    LIMIT 10`

    var queryUrl = encodeURI(url + "?query=" + query + "&format=json");

    await fetch(queryUrl).then(async function(data) {
            console.log(data)
            document.getElementById("content").innerHTML = await data.text();
        })
        //fetch(queryUrl).then((data) => console.log(data))
        // $.ajax({
        //     dataType: "jsonp",
        //     url: queryUrl,
        //     success: function(_data) {
        //         var results = _data.results.bindings;
        //         for (var i in results) {
        //             var res = results[i].abstract.value;
        //             alert(res);
        //         }
        //     }
        // });
}
load_content()*/