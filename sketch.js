var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10;

function setup() 
{
  createCanvas(400, 400);
  b1 =  new Building(10, 200,300);
  b2 =  new Building(50, 220,180);
  b3 =  new Building(90, 200,300);
  b4 =  new Building(130, 310, 90);
  b5 =  new Building(170, 280, 120);
  b6 =  new Building(210, 250, 150);
  b7 =  new Building(250, 220, 180);
  b8 =  new Building(290, 150, 250);
  b9 =  new Building(330, 200, 200);
  b10 =  new Building(370, 270, 130);

}

function draw() {
  background(0);
  fill("purple");
  b1.display();

  fill("#B40431");   
  b2.display();

  fill("#D8D8D8");
  b3.display();

  fill("#088A85");
  b4.display();

  fill("#7401DF");
  b5.display();
  
  fill("#FFBF00");
  b6.display();

  fill("#04B404");
  b7.display();
  
  fill("#E905D8");
  b8.display();

  fill("#N35040");
  b9.display();
  
  fill("#81DAF5");
  b10.display();
  

}