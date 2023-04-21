nose_x=0;
nose_y=0;



function preload(){

clown= loadImage('https://i.postimg.cc/3x3QzSGq/m.png');

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose', gotposes);

}

function modelloaded(){
    console.log("posenet is initialized");

}


function gotposes(result){

if(result.length>0){
    console.log(result);
    nose_x=result[0].pose.nose.x;
    nose_y=result[0].pose.nose.y;
}


    
    
}

function draw(){
image(video,0,0,300,300);

image(clown,nose_x-30,nose_y,60,30);

}

function take_snapshot(){
    save("myFilter.png");
}