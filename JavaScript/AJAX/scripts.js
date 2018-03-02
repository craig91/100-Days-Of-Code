'use stict'
$(document).ready(function () {
    $('#retrieve-resources').click(function () {
        var displayResources = $('#display-resources');

        displayResources.text('Loading data from api resource....');

        $.ajax({
            url: 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole',
            dataType: 'json',
            type: 'GET'
        }).done(function (data) {
            console.log(data);
            var output = "<table><thead> <tr> <th>first</th> <th>last</th> <th>address</th> </thead><tbody>";
            
            for( var i in data) {
                
                output += "<tr><td>" + data[i].first + "</td><td>" + data[i].last + "</td><td>" + data[i].address + "</td></tr>";
            
            }
            output += "</tbody></table>";
            
            displayResources.html(output);
            $("table").addClass("table");
        })
    })




});









//console.log("Hello World");
//
//function myFunc() {
//    document.getElementById("yes").innerHTML = "What up";
//};



//
//   $.ajax({
//        url: 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole',
//        dataType: 'json',
//        type: 'GET'
//    }).done(function (data) {
//        console.log(data);
//        $("#names").append(JSON.stringify(data));
//    })




//
//$(document).ready(function () {
//
//    $('#retrieve-resources').click(function () {
//        var displayResources = $('#display-resources');
//
//        displayResources.text('Loading data from JSON source...');
//
//        $.ajax({
//            type: "GET",
//            url: "resources.json",
//            success: function (result) {
//                console.log(result);
//                var output = "<table><thead><tr><th>Name</th><th>Provider</th><th>URL</th></thead><tbody>";
//                for (var i in result) {
//                    output += "<tr><td>" + result[i].name + "</td><td>" + result[i].provider + "</td><td>" + result[i].url + "</td></tr>";
//                }
//                output += "</tbody></table>";
//
//                displayResources.html(output);
//                $("table").addClass("table");
//            }
//        });
//
//    });
//});
