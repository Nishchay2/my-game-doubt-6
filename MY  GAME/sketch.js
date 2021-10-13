var bgImage
var burger,cola,dal,fruits,momos,vegetables,vegetables2,pizza,person,gameState,eatingBoy
var burgerImg,colaImg,dalImg,fruitsImg,momosImg,vegetablesImg,vegetables2Img,pizzaImg,personImg,score,boyImg
var eatSound,runSound
score=0
gameState="START"
function preload(){
    bgImage=loadImage("assets/path.png")
    boyImg=loadImage("assets/eatingBoy.png")
    burgerImg=loadImage("assets/burger.png")
    colaImg=loadImage("assets/cola.png")
    dalImg=loadImage("assets/dal.png")
    momosImg=loadImage("assets/momos.png")
    vegetablesImg=loadImage("assets/vegetables.png")
    vegetables2Img=loadImage("assets/vegetables2.png")
    pizzaImg=loadImage("assets/pizza.png")
    personImg=loadAnimation("assets/jake1.png","assets/jake2.png","assets/jake3.png","assets/jake4.png","assets/jake5.png")
    fruitsImg=loadImage("assets/fruits.png")
    runSound=loadSound("assets/run.mp3")
    eatSound=loadSound("assets/eat.mp3")
}
function setup(){

    createCanvas(600,600)
    

path=createSprite(300,300)
path.addImage(bgImage)
path.scale=1
path.velocityY=3

person=createSprite(300,500)
person.addAnimation("person",personImg)
path.visible=false
person.visible=false



healthyGroup=new Group
junkGroup=new Group
}


function draw(){
background("black")

if(gameState==="START"){
    background("yellow")
    textSize(26)
    stroke(0)
    fill("red")
    text("If we eat the Junk Food our score will decrease.",20,310)
    text("If we eat the Healthy Food our score will increase.",20,350)
    fill("green")
    text("Press SPACE to Start",130,400)
    stroke(0)
    fill("blue")
    textSize(40)
    text("FAT TO FIT",165,80)
    image(boyImg,200,105,150,150)
    
    
}
 
if(keyDown("SPACE")){
    gameState="PLAY"
    person.visible=true
    path.visible=true
    runSound.play() 
}
if(gameState==="PLAY"){
   


if(keyDown("LEFT_ARROW")){
 person.x=person.x-2.5
  }
  if(keyDown("RIGHT_ARROW")){
    person.x=person.x+2.5
  }

  if(path.y>400){
    path.y=200   
}

if(person.x<=150){
    person.x=200
}
if(person.x>=400){
    person.x=385
}


textSize(30)
stroke (0)
fill("red")
text ("Score:"+score,450,40)

if(healthyGroup.isTouching(person)){
   healthyGroup.destroyEach()
    score=score+10
    eatSound.play()
   }

   else if(junkGroup.isTouching(person)){
   junkGroup.destroyEach()
   score=score-10
   eatSound.play()
   }
   //else{
    
   //}
   
  
   

drawSprites()
spawnHealthyFood()
spawnJunkFood()
}
}
function spawnHealthyFood(){
if(frameCount%150===0){
    healthyFood=createSprite(400,0)
    
    var r = Math.round(random(1,2));
         if(r==1){
        healthyFood.x=Math.round(random(190,250)) 
        } 
        else if(r==2){
         healthyFood.x=Math.round(random(250,350))
         }
         healthyFood.velocityY=3
    //healthyFood.x=Math.round(random(190,350))
    healthyFood.velocityY=6+score/100
    healthyFood.lifetime=200
    healthyFood.scale=0.15
    var rand=Math.round(random(1,4))
    switch(rand){
        case 1:
            healthyFood.addImage(dalImg);
            break;
        case 2:
            healthyFood.addImage(vegetablesImg);
            break;
        case 3: 
            healthyFood.addImage(vegetables2Img);
            break;
        case 4: 
            healthyFood.addImage(fruitsImg);
            break;
    }
    healthyGroup.add(healthyFood)
}
}

function spawnJunkFood(){
    if(frameCount%150===0){
        junkFood=createSprite(500,0)
        
        var r = Math.round(random(1,2));
         if(r==2){
        junkFood.x=Math.round(random(190,250)) 
        } 
        else if(r==1){
         junkFood.x=Math.round(random(250,350))
         }
         junkFood.velocityY=1
        //junkFood.x=Math.round(random(190,350))
 junkFood.velocityY=4+score/100
        junkFood.lifetime=200
        junkFood.scale=0.15
    var rand=Math.round(random(1,4))
    switch(rand){
            case 1:
            junkFood.addImage(momosImg);
            break;
            case 2:
            junkFood.addImage(pizzaImg);
            break;
            case 3: 
            junkFood.addImage(colaImg);
            break;
            case 4: 
            junkFood.addImage(burgerImg);
            break;
    }
    junkGroup.add(junkFood)
    }  
}
