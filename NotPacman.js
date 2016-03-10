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

var NotPacmanGame = function () {

};

NotPacmanGame.prototype = {

  initialize: function () {
    createCanvas(800, 800);
    while (ballPit.length < ballAmount) ballPit.push(new BouncyBall(width/2, height/2));
    ballPit.forEach(ballStart);

  },

  update: function () {
    for (var index = 0; index < ballPit.length, ++index) {
      if
    }
  },

  display: function () {

  }

};
