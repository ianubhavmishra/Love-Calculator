function reEnableBtn() {
    submit.disabled = false;
    document.querySelector(".result").style.top = "-20px";
    document.querySelector(".result").style.opacity = "0";
}
function clicked() {

    let i;
    if (in1.value == "" || in2.value == "") {
        alert("please enter your name")
    }

    else {
        submit.disabled = true;
        document.querySelector(".result").style.top = "0px";
        document.querySelector(".result").style.opacity = "1";
        if (in1.value == "Anubhav Mishra") {
            i = 99;
        }
        else {
            i = Math.floor(Math.random() * 100)
        }
        percentage.innerHTML = "Loving Percentage => " + i + "%"
        if (i <= 40) {
            result.innerHTML = "Tumse Na Ho Payega.....";
        } else if (i >= 40 && i <= 70) {
            result.innerHTML = "Samay Lagega... try karte raho.";
        } else {
            result.innerHTML = "Aapke pyaar me gir gayi.....";
        }
    }

}