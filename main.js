var LW_X = 0;
var RW_X = 0;
var Nose = 0;
var Difference = 0;
function preload(){}
function setup(){
    Canvas = createCanvas(700, 550);
    Canvas.position(720, 140);
    Video = createCapture(VIDEO);
    Video.size(600, 600);
    Video.position(40, 120);
    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet model initialized!");
}
function draw(){
    background("lavender");
    text('Samhita', 20, 300);
    textSize(Difference);
    fill(225, 1, 1);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("LW_X: " + LW_X + " RW_X: " + RW_X);
        LW_X = results[0].pose.leftWrist.x;
        RW_X = results[0].pose.rightWrist.x;
        Nose = results[0].pose.nose.x;
        Difference = floor(LW_X - RW_X);
        console.log("Nose: " + Nose);
    }
}