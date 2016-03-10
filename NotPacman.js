/*
  NOT PACMAN GAME
  This is the object where you should write just about all your code for this assignment.

*/

// constructor function
var ballPit = [];

var ballAmount = 20;

var ballStart = function(ball){
  ball.initialize();
};

var updateanddisplay = function(ball){
  ball.update();
  ball.display();
};

var ballFilter = function () {
  ballPit = ballPit.filter(collisionDetected);
};

var collisionDetected = function (ball) {
  return (!ball.detectCollision);
};

var makeitCount = function () {
    number: 0,
    displayyyyy: function ()
}
var NotPacmanGame = function () {

};

NotPacmanGame.prototype = {

  initialize: function () {
    createCanvas(800, 800);
    background(0);
    while (ballPit.length < ballAmount) ballPit.push(new BouncyBall(width/2, height/2));
    ballPit.forEach(ballStart);
    KeyedUpBall.initialize();
  },

  update: function () {
    ballPit.forEach(ballFilter);
    ballPit.forEach(updateanddisplay);
    KeyedUpBall.updateanddisplay();

    }
  },

  display: function () {

  }

};
