let y_vals = [];
let x_vals = [];
var score = 0;
var maxScore = 25;

var counter = 0;
var fallAcceleration = 100;
var accelerationRate = 1;
var timer=0;

function setup() {
  createCanvas(window.innerHeight, window.innerHeight - 100);
  background(0);
  var scoreLabel = document.createElement("LABEL");
  scoreLabel.setAttribute("innerHTML", "score: 0");
  scoreLabel.setAttribute("id", "scoreLabel")
  document.body.appendChild(scoreLabel);

  var timerLabel = document.createElement("LABEL");
  timerLabel.setAttribute("id", "timerLabel")
  document.body.appendChild(timerLabel);


  tileWidth = width / 4;
  tileHeight = height / 5;
  alert("Game will start on first key press")
}


function draw() {
  counter++;
  //move();
  if (y_vals.length == 0) {
    for (var i = 0; i < 5; i++) {
      moveTiles();
      spawnTile();
    }
    // spawnTile();
  }
  drawTiles();
  //topCollision();
  // if (counter % fallAcceleration == 0) {
  //   fallSpeed += accelerationRate;
  // }
  document.getElementById('scoreLabel').innerHTML = "score: " + score + ".......";
  document.getElementById('timerLabel').innerHTML = "timer: " + timer/100;
  if (score == maxScore) {
    noLoop();
    alert("Your time was " + timer/100);
  }
}
