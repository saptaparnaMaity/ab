var spy,enemy,spyimage,soldireImage,backgroundImage;


function preload(){

	spyimage=loadImage("1234.png");
	backgroundImage=loadImage("background.jpg");
	soldireImage=loadImage("soldire3.png");
	//spy2img= loadImage("120350.png");
	//backgroundImage2=loadImage("images.png");
	
	
}

function setup() {
	createCanvas(1000, 800);


	
	
	spy=createSprite(200,550,20,20);
	spy.addImage("spy",spyimage);
	spy.scale=0.3;



	enemy=createSprite(800,550,20,20);
    enemy.addImage("enemy",soldireImage);
    enemy.scale=0.9;

	
  
}


function draw() {
  
  background(backgroundImage);
  
  drawSprites();
 
}



