var AWS = require("aws-sdk");
console.log("start",AWS.config);
AWS.config.getCredentials(function(err) {
  if (err) {console.log(err.stack);
  console.log("middle",AWS.config);}
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
    console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
    console.log("end",AWS.config);
    }
});
console.log("fin",AWS.config);


