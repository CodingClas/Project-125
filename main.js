leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97');
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.leftWrist.x;
        difference = floor(leftWrist - rightWristX);

    }
}

function draw()
{
    background('#6C91C2');

    textSize(difference);
    fill('#FFE787');
    text('Peter', 50, 400);
}