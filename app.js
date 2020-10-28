// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();
var requestPromise = require("request-promise");

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/getsql", function(request, response) {
  const requestOptions = {
    uri: "https://tgbcctv.000webhostapp.com/api/data.json",
    json: true
  };

  requestPromise(requestOptions).then(function(data) {
    console.log(data);
    response.json({
      messages: [
        { text: "Your User ID = ".data[0].user_id },
        { text: "Your Name = ".data[0].cus_name },
        { text: "Your Phone Number = ".data[0].cus_phone },
        { text: "Your Address = ".data[0].cus_address },
        { text: "Your NRC = ".data[0].cus_nrc },
        { text: "Your Messenger ID = ".data[0].cus_messenger_id }
      ]
    });
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
