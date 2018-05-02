var express = require('express');
var Game = require('./model');

var app = express.Router();


var game = new Game();

module.exports = app
    .get('/quotes', (req, res) =>
     res.send( game.GetQuotes(req.query.playerId) ) 
    )
    .get('/state', (req, res) => res.send(game))
    .post('/picture', (req, res) => res.send( game.FlipPicture() ))
    .post('/quotes', (req, res) => {
        console.log(req.body);
        
        try {
            game.SubmitQuote(req.body.Text, req.body.PlayerId);
            res.send( { success: true } );            
        } catch (error) {
            res.status(403).send({ success: false, message: error.message });
        }
    })
    .post('/quotes/choose', (req, res) => {
        if(req.body.PlayerId != game.DealerId){
            res.status(403).send({ success: false, message: "Only the dealer can choose a quote" });
        }else{
            game.ChooseQuote(req.body.Text);
            res.send( { success: true } );
        }
    })


