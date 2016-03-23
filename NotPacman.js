/*
  NOT PACMAN GAME
  This is the object where you should write just about all your code for this assignment.

*/

// constructor function
var ballPit = [];

var ballAmount = 20;

this.timer = new Timer();
timer.pause();

var score = {
  number: 0,

  display: function () {
    textSize(40);
    fill(255);
    text(this.number, 20, 20);
  },

  update: function () {
  },

  scorePlus: function () {
    this.number++;
  },
};

var NotPacmanGame = function () {

};

  NotPacmanGame.prototype = {

    initialize: function () {
      createCanvas(600, 600);
      while (ballPit.length < ballAmount) ballPit.push(new BouncyBall(width/2, height/2));
      ballPit.forEach(ballStart);
      this.gameIsThere = 0;
    },

    update: function () {
      this.keyedUpBall.update();
      ballPit.forEach(this.checkForSplice, this);
      if (ballPit.length === 0) this.endGame(),
    },

    display: function () {
      this.gameSetUp();
      if (this.gameIsThere) this.gameRun();
    },

    updateanddisplay: function (otherBall, index, array) {
      otherBall.update();
      otherBall.display();
    },

    gameSetUp: function () {
      background(0);
      fill(230);
      textSize(40);
      text(timer.getPrettyElapsedTime(), 20, 20);
      this.score.display();
    },

    gameRun: function () {
      if (ballPit.length > 0) this.keyedUpBall.display();
      ballPit.forEach(this.updateanddisplay);
    },

    beginGame: function (x, y) {
      this.gameIsThere = 1;
      timer.unpause();
      this.keyedUpBall = new KeyedUpBall(x, y);
      this.keyedUpBall.initialize;
    },

    ballStart: function (otherBall, index, array){
      otherBall.initialize();
    },

    checkForSplice: function (otherBall, ballAmount, array) {
      if (this.keyedUpBall.detectCollision(otherBall)) this.spliceBalls(ballAmount);
    },

    spliceBalls : function (ballAmount) {
      ballPit.splice(ballAmount, 1);
      this.score.scorePlus;
    },

    endGame : function () {
      this.gameIsThere = 0;
      timer.pause();
      fill(230);
      textSize(50);
      textAlign(CENTER, CENTER);
      text("Hooray!");
    },


  };
