

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
    background(0);
    fill(255); 
    ellipse(250,200,250,250);
    ellipse(200,200,50,50);
    ellipse(200,200,30,30);
    ellipse(300,200,50,50);
    ellipse(300,200,30,30);
    fill(0);
    ellipse(x,y,22,22);
    ellipse(x2,y,22,22);
    fill(255);
    arc(250, 270, 30, 50, TWO_PI, PI);

    var movem = map(mouseX,0,100,0,0.1);
    var movemY = map(mouseY,0,100,0,0.1);
    //poke

    //left eye
    if(mouseX<208)
        {
             if(x>=195){
                 x = x - movem;
                 if(x == mouseX ){
                     x = mouseX;
                 }
             }
        }
    if(mouseX>=210)
        {
            if(x<205){
                x=x+movem;
             if(x == mouseX ){
                     x = mouseX;
                 }
            }
        }
    if(mouseY<208)
        {
             if(y>=195){
                 y = y - movemY;
                  if(y == mouseY ){
                     y = mouseY;
                 }
             }
        }
    if(mouseY>=210)
        {
            if(y<205){
                y=y+movemY;
              if(y == mouseY ){
                     y = mouseY;
                 }
            }
        }
    //right eye
    if(mouseX<308)
        {
             if(x2>=295){
                 x2 = x2 - movem;
                if(x2 == mouseX ){
                     x2 = mouseX;
                 }
             }
        }
    if(mouseX>=310)
        {
            if(x2<305){
                x2=x2+movem;
            if(x2 == mouseX ){
                     x2 = mouseX;
                 }
            }
        }
    if(mouseX>200 && mouseX< 208){
        x=mouseX;
    }
    if(mouseY>195 && mouseY< 208){
        y=mouseY;
    }
    if(mouseX>295 && mouseX< 308){
        x2=mouseX;
    }

}
