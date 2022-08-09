muñeca_derecha_x = 0;
muñeca_derecha_y = 0;

muñeca_izquierda_x = 0;
muñeca_izquierda_y = 0;

function setup(){
    video=createCapture(VIDEO);
    video.size(555,500);
    canvas=createCanvas(555,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}

function modelLoaded(){
    console.log("Posenet se a inicializado")
    }

    function gotPoses(results){
        if(results.length>0){
            console.log(results)
         muñeca_derecha_x ==results[0].pose.wrist.x;
         muñeca_derecha_y ==results[0].pose.wrist.y;
         console.log("muñeca_derecha_x="+wristX +"muñeca_derecha_y="+wristY)
        }
    }