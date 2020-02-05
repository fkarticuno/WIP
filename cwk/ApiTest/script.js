//javascript, jQuery
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=OrGsAQPACjDG7CuKA31b1bSM9ZqDShC3&limit=5");
xhr.done(function(data) { console.log("success got data", data); });

//Response.data.looping.mp4

//  APIs exist
//  they have keys
//  documentation
//  ???
//  oh look a web page filled with content

$.ajax({url:apiurl&a,method:'GET'}).then(function(variable){
    document.append(variable.main.wind)
    console.log();
})
