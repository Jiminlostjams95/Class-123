noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    canvas = createCanvas(450, 450);
    video = createCapture(VIDEO);
    video.size(450, 450);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}
function modeLoaded(){
    console.log("PoseNet is loaded");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX =" + leftWristX + "rightWristX = " + rightWristX + "difference =" + difference);
    }
}
function draw(){
    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be =" + difference + "px";
    background('#c594d1');
    fill('#b291ff');
    stroke('#7e47ff');
    square(noseX, noseY, difference);
}
