var friendData = require('../data/friends.js');

module.exports = function(app){

  app.get("/api/allfriends", function (req, res){
    res.json(friendData);
  });

  app.post("/api/findfriend", function(req, res)) {

  }
};