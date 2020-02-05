var unirest = require("unirest");

var req = unirest("GET", "https://ajith-holy-bible.p.rapidapi.com/GetBooks");

req.headers({
	"x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
	"x-rapidapi-key": "1bb40a3f2cmsh737e756f49ff562p1d4980jsn6537251a9bc1"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});