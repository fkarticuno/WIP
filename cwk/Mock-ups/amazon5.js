var unirest = require("unirest");

var req = unirest("GET", "https://webservices.amazon.com/onca/xml?Operation=ItemSearch")

req.headers({
	"host": "webservices.amazon.com.br",
	"AWSAccessKeyId": "",
	"AssociateTag": "",
	
});


req.end(function (res) {
	//if (res.error) throw new Error(res.error);

	console.log("body:",res.body);
	//console.log("res:",res)
	//console.log("subject",res.error.cert)
});