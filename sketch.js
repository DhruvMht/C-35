var canvas, database, backgroundImg;
var gameState = 0;
var playerCount;
var form, game, player;
var allPlayers;

function setup(){
  database = firebase.database();
  canvas = createCanvas(500,500);

 }

function draw(){
  background("white");
  
   
    drawSprites();
  
}


