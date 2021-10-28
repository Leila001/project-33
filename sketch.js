//var person
function preload() {
 bg=loadImage("snow1.jpg")
}
function setup() {
  createCanvas(800,400);
  background(400, 200, 50, 50);
  var snowflake= new snow(20,20,20,20) 
//var person = createSprite(20,20)
}

function draw() {
  background(bg); 

 // person.display();
snowflake.display();
  drawSprites();
}