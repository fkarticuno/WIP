//  https://www.npmjs.com/package/amazon-product-api
var amazon = require('amazon-product-api');

var client = amazon.createClient({
    awsId: "",
    awsSecret: "",
    // awsId: "",
    // awsSecret: "",
    awsTag: "tag"
  });

  client.itemSearch({
    director: 'Quentin Tarantino',
    actor: 'Samuel L. Jackson',
    searchIndex: 'DVD',
    audienceRating: 'R',
    responseGroup: 'ItemAttributes,Offers,Images'
  }).then(function(results){
    console.log("Results:",results);
  }).catch(function(err){
    console.log("Error:",err.Error);
  });