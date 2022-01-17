var bg,astronaut,sleep,brush,gym,eat,drink,bath,move;
var bgImg,astronautImg,sleepImg,brushImg,gymImg,eatImg,bathImg,drinkImg,moveImg;


function preload() {
  bgImg = loadImage("img/iss.png");
  sleepImg = loadAnimation("img/sleep.png");
  brushImg = loadAnimation("img/brush.png");
  gymImg = loadAnimation("img/gym11.png","img/gym11.png","img/gym12.png","img/gym12.png");
  eatImg = loadAnimation("img/eat2.png", "img/eat2.png","img/eat1.png", "img/eat1.png");
  drinkImg = loadAnimation("img/drink2.png", "img/drink2.png","img/drink1.png", "img/drink1.png");
  bathImg = loadAnimation("img/bath1.png", "img/bath1.png","img/bath2.png", "img/bath2.png");
  moveImg = loadAnimation("img/move.png", "img/move.png","img/move1.png", "img/move1.png");
}

function setup() {
  createCanvas(600,500);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleepImg);
  astronaut.scale = 0.1;
}

function draw() { 
  background(bgImg);  
  drawSprites();
  fill(255);
  edges=createEdgeSprites(); 
  astronaut.bounceOff(edges);

  text("Instrucciones:" ,10,30);
  text("Flecha hacia arriba = Ejercitarse " ,10,50);
  text("Flecha hacia la izquierda = Tomar agua " ,10,70);
  text("Flecha hacia la derecha = Bañarse " ,10,90);
  text("Flecha hacia abajo = Comer " ,10,110);
  text("Tecla m = Moverse" ,10,130);
  text("Tecla n = Cepillarse" ,10,150);
  
  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("gyming", gymImg);
    astronaut.changeAnimation("gyming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("drinking", drinkImg);
    astronaut.changeAnimation("drinking");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing", bathImg);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("eating", eatImg);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("eating", eatImg);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("M")) {
    astronaut.addAnimation("moveing", moveImg);
    astronaut.changeAnimation("moveing");
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 2;
  }

  if (keyDown("N")) {
    astronaut.addAnimation("brushing", brushImg);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
}
