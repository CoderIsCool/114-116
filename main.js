nose_x = 0;
nose_y = 0;
function preload()
{
    before = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');

}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose',gotPoses);

}
function modelloaded()
{
    console.log('Pose net is Initialized');
}
function draw()
{
    image(video, 0,0,300,300);
    image(before,nose_x,nose_y,35,35);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x - 15;
        nose_y = results[0].pose.nose.y - 15;

    }
}
function take_snapshot()
{
    save('myfilterImage.jpg');
}