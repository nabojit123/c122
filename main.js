function preload()
{

}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.position(625, 200);

    video = createCapture(VIDEO);
    video.hide();



}

function draw()
{

    image(video, 0, 0, 200, 200);


// //upper but left side
    circle(30, 25, 35);
    fill('red');


    rect(265, 40, 10, 215);
    fill('green');

//upper but right side
    circle(270, 25, 35);
    fill('red');


    rect(45, 267, 210, 10);
    fill('green');



//down but right side
    circle(270, 270, 35);
    fill('red');


    rect(25, 40, 10, 220);
    fill('green');

//down but left side
    circle(30, 270, 35);
    fill('red');


    rect(45, 20, 210, 10);
    fill('green');
} 


function take_snapshot()
{
    save('nabojit.jpeg');}
