let y_vals = [];
let x_vals = [];
var score = 0;

var counter = 0;
var fallAcceleration = 100;
var accelerationRate = 1;

function setup() {
  createCanvas(window.innerHeight, window.innerHeight - 100);
  background(0);
  var scoreLabel = document.createElement("LABEL");
  scoreLabel.setAttribute("innerHTML", "score: 0");
  scoreLabel.setAttribute("id", "scoreLabel")
  document.body.appendChild(scoreLabel);

  var button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.setAttribute('value', 'Play Different Game');
  button.setAttribute('onclick', "window.location.href='./upwards/differentGame.html'");
  document.body.appendChild(button);

  tileWidth = width / 4;
  tileHeight = height / 5;
  //alert("Click to start the game")
}


function draw() {
  counter++;
  move();
  if (y_vals[y_vals.length - 1] > 0 || y_vals.length == 0) {
    spawnTile();
  }
  drawTiles();
  bottomCollision();
  if (counter % fallAcceleration == 0) {
    fallSpeed += accelerationRate;
  }
  document.getElementById('scoreLabel').innerHTML = "score: " + score;
}
