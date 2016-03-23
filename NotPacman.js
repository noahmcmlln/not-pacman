/*
  NOT PACMAN GAME
  This is the object where you should write just about all your code for this assignment.

*/

// constructor function
var timer = new Timer();
timer.pause();

var score = function () {
  number: 0,
  scoreDisplay = function () {
    textSize(40);
    text(this.number, 560, 20);
  },
  scorePlus: function () {
    score.number = score.number + 1;
  },
};

var ballPit = [];

var ballAmount = 20;

var ballStart = function(ball, index, array){
  ball.initialize();
};

var updateanddisplay = function(ball, index, array){
  ball.update();
  ball.display();
};


var NotPacmanGame = function () {};

NotPacmanGame.prototype = {

  initialize: function () {
    createCanvas(600, 600);
    while (ballPit.length < ballAmount) ballPit.push(new BouncyBall(width/2, height/2));
    ballPit.forEach(ballStart);
    this.keyedUpBall = new KeyedUpBall;
    keyedUpBall.initialize();
    this.gameIsThere = 0;
  },

  update: function () {
    this.keyedUpBall.update();
    ballPit.forEach(checkForSplice);
    if (ballPit.length = 0) timer.pause();
  },

  display: function () {
    this.gameSetUp();
    if (this.gameIsThere) this.gameGo();

  },
  checkForSplice: function(ball, ballAmount, array) {
    if (this.keyedUpBall.detectCollision(ball)) this.spliceBalls(ballAmount)
  }
  spliceBalls : function (ballAmount) {
    ballPit.splice(ballAmount, 1);
    this.score.scorePlus;
  };

  gameSetUp: function() {
    background(0);
    fill(230);
    textSize(40);
    text(timer.getPrettyElapsedTime(), 20, 20);
    this.score.display();
  },

  gameGo: function() {
    if (ballPit.length > 0) this.keyedUpBall.display();
    ballPit.forEach(this.updateanddisplay);
  },

  beginGame: function() {
    this.gameIsThere = 1;
    timer.unpause();
    this.keyedUpBall = new KeyedUpBall(mouseX, mouseY);
    this.keyedUpBall.initialize;
  },
};
