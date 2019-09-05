let tileWidth;
let tileHeight;

var tilePositions = [];

function spawnTile() {
  var position;
  var loop = true;
  while (loop) {
    position = Math.floor(random(0, 4));
    if (position != tilePositions[tilePositions.length - 1]) {
      y_vals.push(-tileHeight);
      x_vals.push((position) * (width / 4))
      tilePositions.push(position);
      loop = false;
    }
  }
}

function drawTiles() {
  background(0);
  stroke(255);
  strokeWeight(8);

  for (let i = 0; i < x_vals.length; i++) {
    let px = mapX(x_vals[i]);
    let py = mapY(y_vals[i]);
    rect(x_vals[i], y_vals[i], tileWidth, tileHeight);
  }
}

function keyDecision(positionPressed) {
  if (positionPressed == tilePositions[0]) {
    score++;
    tilePositions.splice(0, 1);
    y_vals.splice(0, 1);
    x_vals.splice(0, 1);
  } else {
    endGame();
  }
}

function bottomCollision() {
  for (var i = 0; i < y_vals.length; i++) {
    if (y_vals[i] > height) {
      endGame();
    }
  }
}

function endGame() {
  noLoop();
  alert("You Lost! Final Score was " + score);
}
