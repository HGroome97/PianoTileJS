function mapX(x) {
  return map(x, 0, mapXSize, 0, width);
}

function mapY(y) {
  return map(y, 0, mapYSize, height, 0);
}

function mapXInverse(x) {
  return map(x, 0, width, 0, mapXSize);
}

function mapYInverse(y) {
  return map(y, 0, height, mapYSize, 0);
}

// function mousePressed() {
//   x_vals.push(map(mouseX, 0, width, 0, mapXSize));
//   y_vals.push(map(mouseY, 0, height, mapYSize, 0));
//   currentVerticalVelocity.push(0);
//   currentHorizontalVelocity.push(0);
// }

// var keyMap = {};
// onkeydown = onkeyup = function(e){
//     e = e || event; // to deal with IE
//     keyMap[e.keyCode] = e.type == 'keydown';
//     if (keyMap[65]) {
//       console.log("a");
//     }
//     if (keyMap[83]) {
//       console.log("s");
//     }
//     if (keyMap[68]) {
//       console.log("d");
//     }
//     if (keyMap[70]) {
//       console.log("f");
//     }
// }

function keyPressed() {
  if (score == 0) {
    setInterval(function(){timer++},10);
  }
  if (keyCode === 65) {
    keyDecision(0);
  }
  if (keyCode === 83) {
    keyDecision(1);
  }
  if (keyCode === 68) {
    keyDecision(2);
  }
  if (keyCode === 70) {
    keyDecision(3);
  }
  return false; // prevent default
}
