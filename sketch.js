const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300
function setup() {
  createCanvas(800,480);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(350,450,950,50)
}

function draw() {
  background("black");  
  Engine.update(engine);
  drawSprites();
  ground.display()
}
for(var k=0;k<=width;k=k+80){
divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
divisions[k].display()
}
for(var j=0;j<=width;j=j+50){
  plinkos.push(new Plinko (j,75))
  plinkos[j].display()
  }
  for(var j=0;j<=width;j=j+50){
    plinkos.push(new Plinko (j,175))
    plinkos[j].display()
    }
    for(var j=0;j<=width;j=j+50){
      plinkos.push(new Plinko (j,275))
      plinkos[j].display()
      }
      for(var j=0;j<=width;j=j+50){
        plinkos.push(new Plinko (j,375))
        plinkos[j].display()
        }
          
          if(frameCount%60===0){
            particles.push(new Particle (random(width/2-10,width/2+10),10,10))  
          }
