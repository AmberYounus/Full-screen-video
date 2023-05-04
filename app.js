//Get a video 
var video = document.getElementById("myVideo");

//get a button
var btn = document.getElementById("btn");

//play and pause the video
function myFunction() {
    if(video.paused){
        video.play();
        btn.innerHTML = "Pause";
    }else{
        video.pause();
        btn.innerHTML = "Play";
    };
};