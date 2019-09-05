let tileWidth;
let tileHeight;

var tilePositions = [];

function spawnTile() {
  if (y_vals.length !== maxScore) {
    var position;
    var loop = true;
    while (loop) {
      position = Math.floor(random(0, 4));
      if (position != tilePositions[tilePositions.length - 1]) {
        y_vals.push(-tileHeight / 2);
        x_vals.push((position) * (width / 4))
        tilePositions.push(position);
        loop = false;
      }
    }
  }
}

function drawTiles() {
  background(0);
  stroke(255);
  strokeWeight(8);

  for (let i = 0; i < x_vals.length; i++) {
    if (y_vals[i] < mapYSize) {
      let px = mapX(x_vals[i]);
      let py = mapY(y_vals[i]);
      rect(x_vals[i], y_vals[i], tileWidth, tileHeight);
    }
  }
}

function keyDecision(positionPressed) {
  if (positionPressed == tilePositions[score]) {
    score++;
    moveTiles();
    spawnTile();
  } else {
    endGame();
  }
}

function moveTiles() {
  for (var i = 0; i < y_vals.length; i++) {
    y_vals[i] += tileHeight;
  }
}

// function topCollision() {
//   for (var i = 0; i < y_vals.length; i++) {
//     if (y_vals[i] > mapYSize) {
      // tilePositions.splice(0, 1);
      // y_vals.splice(0, 1);
      // x_vals.splice(0, 1);
//     }
//   }
// }

function endGame() {
  noLoop();
  alert("You Lost! Final Score was " + score);
}
