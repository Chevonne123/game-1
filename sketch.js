var player
var select
var identifier
function preload(){

}
function setup(){
createCanvas(windowWidth, windowHeight)
select = createSprite(windowWidth/2 - 20,windowHeight/2, 100, 80);
}
function draw(){
background("yellow")
if(mousePressedOver(select)){
    indentifier = random(1,6)
    console.log(identifier)
}
drawSprites();
}