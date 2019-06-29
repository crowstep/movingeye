//This is a simple template for you to experiment with

//This is a comment  ... the two slashes at the start mean that the computer ignores it

//You can look up more commands here ... https://p5js.org/reference/

var x=200;
var y=200;
var x2 = 300;
var y2 = 200;
var ymove = 2;
var xmove = 1;





function setup()
{
    //this function runs once at the start of your program
    
    //this command creates a drawing area in the browser - it should only be called once
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
    //this command clears the background to black (try changing the numbers)
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
    /*
    //change the fill color
    
    
    //change the outline color
//    stroke(0,255,0);
    
    //this command draws a rectangle with the outline and fill colors that we just set
    //rect(125,125,250,250);
   // background(255);
    
    //fill (255,0,0);
    text("bleblejaldflkja;dklfj;lkbleblejaldflkja;dklfj;lk\nbleblejaldflkja;dklfj;lk\nbleblejaldflkja;dklfj;lk\nbleblejaldflkja;dklfj;lk\nbleblejaldflkja;dklfj;lk\nbleblejaldflkja;dklfj;lk\nbleblejaldflkja;dklfj;lk\nbleblejaldflkja;dklfj;lk\nbleblejaldflkja;dklfj;lk\nbleblejaldflkja;dklfj;lk\n",x,y);
    
    
    //y = y - ymove;
    
    if(x > width){
        xmove = -xmove;
        //y = -ymove; 
    }else if(x == 0){
        xmove = 2;
    }
    x = x + xmove;
    //if(y <= 0){
    //    y = 500;
    //}
/*
    if(y >= 500){
        ymove = +ymove;
        
    }
    
    if(x >= width){
        xmove = +xmove;
    }
    
  //  var elx = 0;
    //var speed = 1;
//    elx=elx+speed;
//    ellipse(elx,50,50,50);
  //  if(elx>=width){
    //    speed =speed -1;
    }
    
    */
    
    
