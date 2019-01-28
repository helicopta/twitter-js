const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = function (io) {
  router.get('/', function (req, res) {
	  let tweets = tweetBank.list();
	  res.render( 'index', { tweets: tweets,showForm: true } );
	});

	router.get('/stylesheets/style.css', function (req, res) {  
	  res.sendFile('/public/stylesheets/style.css', {root:'./'});
	});

	router.get('/users/:name', function(req, res) {
	  var name = req.params.name;
	  var list = tweetBank.find( {name: name} );
	  res.render( 'index', { tweets: list } );
	});

	router.get('/tweets/:id', function(req, res) {
	  var id = req.params.id*1;
	  var list = tweetBank.find( {id: id} );
	  res.render( 'index', { tweets: list } );
	});

	router.post('/tweets', function(req, res) {
	  var name = req.body.name;
	  var text = req.body.text;
	  tweetBank.add(name, text);
	  res.redirect('/');
	});
  return router;
};

