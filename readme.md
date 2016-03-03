# Not Pacman

This is the first "larger" p5 project we're working on. The idea is to put ```KeyedUpBall```, ```KeyListener```, ```BouncyBall```, and ```Timer``` together into a working game.

There are three "dailies" this week. Actually, these aren't separate assignments, but rather steps on the way to the spec.

#### 1. Detect collisions
You must write a ```detectCollision()``` function in ```KeyedUpBall``` which returns true when the ```KeyedUpBall``` has collided with a ```BouncyBall```. Pass the ```BouncyBall``` as an argument; the ```return``` value should be ```true``` when they have collided or are overlapping, and ```false``` when they are not.

#### 2. Delete ```BouncyBall```s
You must devise a system for deleting ```BouncyBall```s from the game. This will likely be accomplished using the [Array.splie()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) function.

#### 3. A ```Game``` object
In terms of design, you should put almost all of your attention into ```NotPacmanGame```. I have included an empty object with the conventional ```initialize()```, ```update()```, and ```display()``` functions. You **must not** modify the code in the ```setup()``` and ```draw()``` functions in ```sketch.js```, although (hint hint) you may wish there to introduce and modify a ```mouseClicked()``` function, which is invoked by p5.js whenever the mouse is clicked.

### Specs
