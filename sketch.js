let b;
let pipes = [];
let frames = 0;
let score = 0;

function setup() {
  createCanvas(400, 400);
  pipes.push(new pipe)


  b = new bird(width/4, height/2, 2, 10);
}

function draw() {
  background(0);
  frames += 1;
  for (let i = pipes.length - 1; i >= 0; i--){ 
    pipes[i].update();
    pipes[i].show();
    
    if (pipes[i].collide(b)){
      noLoop();
      console.log('GameOver')
    }
    if (pipes[i].notInPlay()) {
      // pipes.pop(pipes[i])
      pipes.splice(i, 1);
    }
  }
  
  b.show()
  b.update();
  
  if (frames % 100 == 0){
    pipes.push(new pipe);
    score += 1;
    console.log(score);
  } 
}




function keyPressed() {
  if (key == " ") {
    b.jump();
  }  
}
