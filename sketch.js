
var  dog, happyDog, foodS;
var database;
var foodStock;
var dog1, dog2;
var food, foodObj;
var sadDog, feed, addFod;
var fedTime;
var lastFed;


function preload()
{
dog1=loadImage("images/dogImg.png");
dog2 = loadImage("images/dogImg1.png");

}

function setup() {
  database=firebase.database();
  createCanvas(1000,460);


  
foodStock = database.ref('Food');
foodStock.on("value", readStock);

 dog = createSprite(250,260,50,30);
dog.addImage(dog1);
dog.scale = 0.3;

feed = Createbutton("Feed the dog");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood = Createbutton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods);







}
function draw() {  
  background(46,139,88);
  

  foodObj.display();


  
  fedTime = database.ref('FeedTime');
   fedTime.on("value",(data)=>{
     lastFed = data.val();
    })
 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog2);
  }
  textSize(30);
  fill("white");
 textSize(15);
    text("Note:Press UP_ARROW Key to feed Drago Milk;", 30, 60)

  drawSprites();

  
  //add styles here

}

function readStock(data){
 foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  }

  )
}