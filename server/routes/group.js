var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Chance = require('chance');
var chance = new Chance();

// Mongoose Schema
var GroupSchema = new Schema({
    name: {type: String},
    code: {type: String},
    users: {type: Array}
});

var Group = mongoose.model("Groups", GroupSchema);

router.get('/', function(req, res) {
  if(req.isAuthenticated()) {
    Group.find({}, function(err, groups){
        if(err){
          console.log(err);
          res.sendStatus(500);
        }
        console.log(groups);
        res.send(groups);
    });
  }
});

// Handles Ajax request
router.post('/create', function(req, res) {
  var name = req.body.name;
  if(req.isAuthenticated()) {
    var group = new Group();
    group.name = req.body.name;
    group.code = chance.string({pool: 'abcdefghijklmnopqrstuvwxyz1234567890'});
    group.users = [];
    group.save(function(err, savedGroup){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }

      res.send(savedGroup);
    });
  } else {
    res.sendStatus(401);
  }
});

// Handles Ajax request
router.put('/join/:code', function(req, res) {
  var code = req.params.code;
  Group.findOne({ 'code': code }, function(err, foundGroup){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      console.log(foundGroup);
      foundGroup.users.push(req.user._id);

      foundGroup.save(function(err, savedGroup){
        if(err){
          console.log(err);
          res.sendStatus(500);
        }

        res.send(savedGroup);
      });
  });
});

module.exports = router;
