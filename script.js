let audio = [];
audio[0] = new Audio();
audio[0].src = "audios/choo lo.mp3";
audio[1] = new Audio();
audio[1].src = "audios/joker.mp3";
audio[2] = new Audio();
audio[2].src = "audios/puneet.mp3";
audio[3] = new Audio();
audio[3].src = "audios/pee loon.mp3"; 

function reEnableBtn() {
    document.querySelector(".result").style.top = "-20px";
    document.querySelector(".result").style.opacity = "0";
    submit.disabled = false;
}

function pauseAllAudio() {
    audio.forEach(function(aud) {
        if (!aud.paused) {
            aud.pause();
            aud.currentTime = 0;
        }
    });
}

function clicked() {
    pauseAllAudio();
    let i;

    if (in1.value == "" || in2.value == "") {
        alert("please enter your name")
    }

    else {
        submit.disabled = true;
        document.querySelector(".result").style.top = "0px";
        document.querySelector(".result").style.opacity = "1";
        if (in1.value === "Anubhav Mishra") {
            i = 99;
        }
        else {
            i = Math.floor(Math.random() * 100)
        }
        percentage.innerHTML = "Loving Percentage => " + i + "%"
        if (i <= 40) {
            audio[Math.floor(Math.random() * (2 - 0 + 1) + 0)].play();
            result.innerHTML = "Tumse Na Ho Payega.....";
            
        } else if (i >= 40 && i <= 70) {
            
            result.innerHTML = "Samay Lagega... try karte raho.";
        } else {
            result.innerHTML = "Aapke pyaar me gir gayi.....";
            audio[3].play();
        }
    }

}
