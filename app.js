const video1 = document.getElementById("projectvideo1");
const video2 = document.getElementById("projectvideo2");
const video3 = document.getElementById("projectvideo3");
const hoverSign = document.querySelector(".hover-sing")

const videoList = [video1, video2, video3];

videoList.forEach(function(video){
    video.addEventListener("mouseover", function(){
        video.onplay()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseover", function(){
        video.pause()
        hoverSign.classList.remove("active")
    })
})