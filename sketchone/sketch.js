let colors = ['#000000','#0000FF','#FFFF00','#FF0000','FFFFFF','FFFFFF'];
let button;
function setup(){
    createCanvas(600,600);
    noLoop();
    button = createButton("Regenerate");
    button.position(10, height + 10);
    button.mousePressed(redraw);
}

function draw(){
    background('255');
    strokeWeight(5);
    stroke(0);
    generate(0,0,width,height);

}

function generate(x,y,w,h){
    
    if (w < 100 || h < 100) {
        
        fill(random(colors));
        rect(x,y,w,h);
        return;
    }

    let splitVertical = random()> 0.8;
    let splitPos = random(0.3,0.7);

    if (splitVertical) {
        let newW = w * splitPos;
        line(x + newW, y, x + newW, y + h); 
        generate(x, y, newW, h);
        generate(x + newW, y, w - newW, h);
      } else {
        let newH = h * splitPos;
        line(x, y + newH, x + w, y + newH); 
        generate(x, y, w, newH);
        generate(x, y + newH, w, h - newH);
      }
}