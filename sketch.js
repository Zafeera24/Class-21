var rect1, rect2;


function setup() {
  createCanvas(800,400);
 rect1 = createSprite(400, 250, 50, 80);
 rect1.shapeColor = "blue";
 
 rect2 = createSprite(400, 300, 50, 80);
 rect2.shapeColor = "red";
 
gameobject1= createSprite(400,150,80,50);
gameobject1.shapeColor = "green";


gameobject2= createSprite(300,150,80,50);
gameobject2.shapeColor = "yellow";

gameobject3= createSprite(500,150,80,50);
gameobject3.shapeColor = "pink";

gameobject4= createSprite(100,150,80,50);
gameobject4.shapeColor = "orange";


}

function draw() {
  background("black");  
  
  rect1.debug = true;

  rect2.debug = true;
  rect2.x = World.mouseX;
  rect2.y = World.mouseY;

  // rect2.x - rect1.x = rect1.width/2 + rect2.width/2
  //                   = 50/2 + 50/2
  //                   = 25 + 25
  //                   = 50

  


  if(isTouching(rect2,gameobject4)){
    gameobject4.shapeColor = "purple";
    rect2.shapeColor = "purple";
   }
  else{
    gameobject4.shapeColor = "orange";
    rect2.shapeColor = "red";
   }


   if (isTouching2(rect2,gameobject3)){
       gameobject3.shapeColor = "purple";
       rect2.shapeColor = "purple";
   }else{
     gameobject3.shapeColor = "pink";
     rect2.shapeColor = "red";
   }
   
   if (isTouching3(rect2,gameobject2)){
    gameobject2.shapeColor = "purple";
    rect2.shapeColor = "purple";
}else{
  gameobject2.shapeColor = "yellow";
  rect2.shapeColor = "red";
}
  
  drawSprites();
}

function isTouching(a,b){
  //console.log (rect2.x - rect1.x);
    console.log(b.x - a.x);

  //lets consider gameobejct4= a; rect2= b;

  if(  b.x - a.x < a.width/2 + b.width/2 
    && a.x - b.x < a.width/2 + b.width/2
    && b.y -a.y <a.height/2 + b.height/2
    && a.y - b.y < a.height/2 + b.height/2 
    
  ){
  return true
}else {
 return false
  }
}

function isTouching2(c,d){
  if(  d.x - c.x < c.width/2 + d.width/2 
    && c.x - d.x < c.width/2 + d.width/2
    && d.y - c.y < c.height/2 + d.height/2
    && c.y - d.y < c.height/2 + d.height/2 ){
    return true
  }else{
    return false
  }
  
}

function isTouching3(p,q){
  if(  q.x - p.x < p.width/2 + q.width/2 
    && p.x - q.x < p.width/2 + q.width/2
    && q.y - p.y < p.height/2 + q.height/2
    && p.y - q.y < p.height/2 + q.height/2 ){
    return true
  }else{
    return false
  }
  
}

// if two objects touching the above if condition should work;