

var x=200;
var y=200;
var x2 = 300;
var y2 = 200;
var ymove = 2;
var xmove = 1;

function setup()
{
    createCanvas(500,500);
    fill(255);
}
function keyPressed()
{
    console.log(key);
}
function draw()
{
    var eye1 = map(mouseX,0,800,0,5);
    var eye2 = map(mouseX,0,800,0,5);
    background(0);
    fill(255); 
    ellipse(250,200,250,250);
    ellipse(200,200,50,50);
    ellipse(200,200,30,30);
    ellipse(300,200,50,50);
    ellipse(300,200,30,30);
    fill(0);
    ellipse(x,y,15,15);
    ellipse(x2,y,15,15);
    fill(255);
    arc(250, 270, 30, 50, TWO_PI, PI);

    var movem = map(mouseX,0,600,0,3);
    var movemY = map(mouseY,0,600,0,3);
    //left eye
    if(mouseX<208)
        {
             if(x>=195){
                 x = x - movem;
             }
        }
    if(mouseX>=210)
        {
            if(x<205){
                x=x+movem;
            }
        }
    if(mouseY<208)
        {
             if(y>=195){
                 y = y - movemY;
             }
        }
    if(mouseY>=210)
        {
            if(y<205){
                y=y+movemY;
            }
        }
    //right eye
    if(mouseX<308)
        {
             if(x2>=295){
                 x2 = x2 - movem;
             }
        }
    if(mouseX>=310)
        {
            if(x2<305){
                x2=x2+movem;
            }
        }

}
    
    
