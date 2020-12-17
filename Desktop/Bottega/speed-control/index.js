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
            log();
            break;
            default:
            
    } 
    
    const log = () => 
        console.log(`Current Rate: ${videoTag.playbackRate.toFixed(2)}`);
}

function createButtons(){
    const speedDownButton = document.createElement("button");
    const speedUPButton = document.createElement("button");
    const videoContainer = document.querySelector(".video-container");
    const myPersonalVideoControls = document.createElement("div");
    const countSpan = document.createElement("span");

    countSpan.id = "current-playback-speed";
    const rateTextNode = document.createTextNode(
        videoTag.playbackRate.toFixed(2)
    );
    countSpan.appendChild(rateTextNode);

    const cssTemplate = `
    border: 0px none;
    padding: 10px;
    margin: 10px;
    color: white;
    background-color: #00cb79;
    border-radius: 4px;
    font-weight: 900;
    cursor: pointer;
    `;

    [speedDownButton, speedUPButton].forEach(button => {
        let currentTextNode;
        button.style = cssTemplate;

        if(button === speedUPButton){
            currentTextNode = document.createTextNode("speed up")
            button.id = "speed-up"
        }   else {
            currentTextNode = document.createTextNode("speed down")
            button.id = "speed-down"
        }

        button.appendChild(currentTextNode);
        myPersonalVideoControls.appendChild(button);

        button.addEventListener("click", e => {
            if(e.target.id === "speed-up"){
                checkLetter("d")
                videoTag.playbackRate += 0.1;
            } else {
                videoTag.playbackRate -= 0.1;
            }
        });
    });

    myPersonalVideoControls.appendChild(countSpan)
    videoContainer.appendChild(myPersonalVideoControls);
}

if (!videoTag) {
    console.warn("No video for speed control");
  } else {
      document.addEventListener("keydown", (e) => {
          checkLetter(e.key);
      });

      createButtons();
  }  
            console.log(`current rate: ${videoTag.playbackRate.toFixed(2)}`)
    

