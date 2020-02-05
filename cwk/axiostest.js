// var axios = require("axios");
// axios.get("http://www.omdbapi.com/?t="+ "power rangers" +"&y=&plot=short&apikey=trilogy")
// .then(function(response) {
//     console.log("The movie's info is: " + JSON.stringify(response.data));
// })

    //  https://rapidapi.com/acg/api/uncovered-treasure
// var unirest = require("unirest");
// var req = unirest("GET", "https://uncovered-treasure-v1.p.rapidapi.com/search/baal");
// req.headers({
// 	"x-rapidapi-host": "uncovered-treasure-v1.p.rapidapi.com",
// 	"x-rapidapi-key": "1bb40a3f2cmsh737e756f49ff562p1d4980jsn6537251a9bc1"
// });
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
// 	console.log(res.body.results[0].topics[1]);
// });

    //  https://rapidapi.com/msilverman/api/nutritionix-nutrition-database
var unirest = require("unirest");
var req = unirest("GET", "https://nutritionix-api.p.rapidapi.com/v1_1/search/banana");
req.query({
	"fields": "item_name,item_id,brand_name,nf_calories,nf_total_fat"
});
req.headers({
	"x-rapidapi-host": "nutritionix-api.p.rapidapi.com",
	"x-rapidapi-key": "1bb40a3f2cmsh737e756f49ff562p1d4980jsn6537251a9bc1"
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body.hits[0].fields);
});