let currentVerticalVelocity = [];
let currentHorizontalVelocity = [];

var gravityAcceleration = -9.81;
var forcedXAcceleration = 10;
var forcedYAcceleration = 10;
var iterationTime = 0.01; //set programatically
var mapXSize = 500;
var mapYSize = 500;
var fallSpeed = 5;

// function gravity() {
//   for (var i = 0; i < currentVerticalVelocity.length; i++) {
//     currentVerticalVelocity[i] += (gravityAcceleration * iterationTime);
//   }
// }

function move() {
  for (var i = 0; i < y_vals.length; i++) {
    collisionDetection(i);
    //x_vals[i] += currentHorizontalVelocity[i];
    y_vals[i] += fallSpeed;
  }
}

function verticalAcceleration(rate) {
  for (var i = 0; i < currentVerticalVelocity.length; i++) {
    currentVerticalVelocity[i] += (rate * iterationTime);
  }
}

function horizontalAcceleration(rate) {
  for (var i = 0; i < currentHorizontalVelocity.length; i++) {
    currentHorizontalVelocity[i] -= (rate * iterationTime);
  }
}

function collisionDetection(i){
  if (y_vals[i] + currentVerticalVelocity[i] < 0) {
    y_vals[i] = 0;
    currentVerticalVelocity[i] = 0;
  }
  if (y_vals[i] + currentVerticalVelocity[i] > mapYSize) {
    y_vals[i] = mapYSize;
    currentVerticalVelocity[i] = 0;
  }
  if (x_vals[i] + currentHorizontalVelocity[i] < 0) {
    x_vals[i] = 0;
    currentHorizontalVelocity[i] = 0;
  }
  if (x_vals[i] + currentHorizontalVelocity[i] > mapXSize) {
    x_vals[i] = mapXSize;
    currentHorizontalVelocity[i] = 0;
  }

}
