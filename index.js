var express = require("express"),
    jade = require("jade"),
    request = require("request"),
    app = express(),
    server;

app.get("/", function(req, res) {
  console.log("sending a goat");
  request("http://liamdanger.github.io/babygoat-motherlode/manifest.json", function(error, response, body) {
    var data = JSON.parse(body);
    var babygoats = data.babygoats;
    var howManyGoats = babygoats.length;
    var whichGoat = Math.floor(Math.random() * (howManyGoats));
    res.render("index.jade", {babygoat: babygoats[whichGoat]});
  });
});

server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});