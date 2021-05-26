var a, b;
var car , wall ;

function setup() {
  createCanvas(1200,800);
  a = createSprite(600, 400, 50, 80);
  a.shapeColor = "green";
  a.debug = true;
  b = createSprite(400,200,80,30);
  b.shapeColor = "green";
  b.debug = true;

car=createSprite(100,100,20,20);
car.shapeColor= "blue";
wall=createSprite(400,100,20,100);
wall.shapeColor= "yellow";



}

function draw() {
  background(0,0,0);  
  //object1.x = World.mouseX;
  //object1.y = World.mouseY;
  car.x=World.mouseX;
  car.y=World.mouseY;

  if(isTouching(car,wall)){
      car.shapeColor="red";
      wall.shapeColor="white";
  }
  else{
      car.shapeColor="blue";
      wall.shapeColor="yellow"
  }
  drawSprites();
}















