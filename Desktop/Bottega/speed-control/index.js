const videoTag = document.querySelector("video")

document.addEventListener("keydown", (e) => {
    checkLetter(e.key);
})

function checkLetter(userKey) {
    switch(userKey){
        case "d":
            videoTag.playbackRate += 0.1;
            break
        case "s":
            videoTag.playbackRate -+ 0.1;
            break
        case "r":
            videoTag.playbackRate = 1;
            break;
            
    }    
            console.log(`current rate: ${videoTag.playbackRate.toFixed(2)}`)
    
}