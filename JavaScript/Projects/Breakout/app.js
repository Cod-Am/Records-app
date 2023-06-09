const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeight = 20;
const boardWidth=560;
const boardHeight =300;
const ballDiameter =20;
const userStart = [230, 10];
const scoreDisplay=document.querySelector('#score');
let currentPosition = userStart;
let xDirection=2
let yDirection=2;
const ballStart = [270, 40];
let ballCurrentPosition = ballStart;
let timerId

class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210)
];

function addBlock() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.left = blocks[i].bottomLeft[0] + 'px';
    block.style.bottom = blocks[i].bottomLeft[1] + 'px';
    grid.appendChild(block);
  }
}

addBlock();

const user = document.createElement('div');
user.classList.add('user');
grid.appendChild(user);
user.style.left = currentPosition[0] + 'px';
user.style.bottom = currentPosition[1] + 'px';

function drawUser() {
  user.style.left = currentPosition[0] + 'px';
  user.style.bottom = currentPosition[1] + 'px';
}

function moveUser(e) {
  switch (e.key) {
    case 'ArrowLeft': {
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        drawUser();
      }
      break;
    }
    case 'ArrowRight': {
      if (currentPosition[0] < 460) {
        currentPosition[0] += 10;
        drawUser();
      }
      break;
    }
  }
}

document.addEventListener('keydown', moveUser);

// Ball
const ball = document.createElement('div');
ball.classList.add('ball');
ball.style.left = ballCurrentPosition[0] + 'px';
ball.style.bottom = ballCurrentPosition[1] + 'px';
grid.appendChild(ball);

function drawBall() {
  ball.style.left = ballCurrentPosition[0] + 'px';
  ball.style.bottom = ballCurrentPosition[1] + 'px';
}
//move ball
function moveBall() {

    // Update the ball's position
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection // Example: move the ball downward by 1 pixel

    // Call drawBall to update the visual position
    drawBall();
    userBlockCollision()
    checkForCollisions()
}

// Call moveball
timerId=setInterval(moveBall,25)

//check for collisions

function checkForCollisions() {
    //check for wall collision
    if (ballCurrentPosition[0]>=(boardWidth-ballDiameter)||(ballCurrentPosition[1]>=(boardHeight-ballDiameter)||(ballCurrentPosition[0]<=0))) {
        changeDirection()
    }
    
    //check for game over
    if(ballCurrentPosition[1]<=0){
      clearInterval(timerId)
    }
    // for(let i=0;i<blocks.length;i++){
    //     const block=blocks[i]
    //     // checking collision with current block
    //     if(ballCurrentPosition[0]+20>block.bottomLeft[0] && ballCurrentPosition[0]<block.bottomRight[0] && 
    //         ballCurrentPosition[1]+20>block.bottomLeft[1]&&ballCurrentPosition[1]<block.topLeft[1]){
    //             changeDirection()
    //             //remove the block on collision
    //             grid.removeChild(grid.children[i])
    //             blocks.splice(i,1)
    //             break;
    //     }
    // }
    // if(ballCurrentPosition[1]>=(boardWidth-ballDiameter)){
    //     changeDirection()
    // }
}
//check for collision with user block
function userBlockCollision() {
    if (
      ballCurrentPosition[0] + ballDiameter > currentPosition[0] &&
      ballCurrentPosition[0] < currentPosition[0] + blockWidth &&
      currentPosition[1] === (ballCurrentPosition[1]-20)
    ) {
      changeDirection();
    }
  }
function changeDirection(){
    if(xDirection===2&&yDirection===2){
        yDirection = -2
        return
    }
    if(xDirection===2&&yDirection===-2){
        xDirection = -2
        return
    }
    if(xDirection===-2&&yDirection===-2){
        yDirection = +2
        
        return
    }
    if(xDirection===-2&&yDirection===+2){
        yDirection = -2
        return
    }
}