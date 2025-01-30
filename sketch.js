
let colors = ['#189AB4', '#050A30', '#000C66', '#0000FF', '#7EC8E3', '#5C5CFF', '#FFFFFF'];

const numFlowers = 60;
let myFlowerData = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    let skew = random(1, 4);
    

    for (let i = 0; i < numFlowers; i++) {
      
        let sizeOne = pow(random(), 1) * 120+ 20;  
        
        let flowerData = {
            speed: random(1, 8),
            background: random(colors),
            xPos: random(width),
            yPos: random(height),
            stroke: strokeWeight(min(skew)),
            sizeOne: sizeOne,    
        };

        
        myFlowerData.push(flowerData);
      
    }
      
}

function draw() {
    background('#D4F1F4');
for (let flower of myFlowerData) {
        drawFlower(flower.xPos, flower.yPos, flower.background,flower.sizeOne );
        flower.xPos += flower.speed;

        if (flower.xPos > width + 50) {
            flower.xPos = -50;
        }
    }
}


function drawFlower(xPos, yPos, color1,sizeOne) {
    stroke("#FFFFFF"); 
    fill(color1);
    ellipse(xPos, yPos, sizeOne, sizeOne);
}

  