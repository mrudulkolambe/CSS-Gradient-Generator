
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');
let ans4 = document.getElementById('ans4');
const inputSlider1 = document.querySelector("#input1");
const inputSlider2 = document.querySelector("#input2");
const inputSlider3 = document.querySelector("#input3");
const inputSlider4 = document.querySelector("#input4");
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let picker1 = document.getElementById('picker1');
let picker2 = document.getElementById('picker2');
let picker11 = document.getElementById('picker11');
let picker22 = document.getElementById('picker22');
let angle = document.getElementById('angle');
let display = document.getElementById('display');
let gradientType = document.getElementById('gradientType');
let selectors = document.getElementById('selectors');
angle.value = 0;
let red1 = 0;
let red2 = 0;
let green1 = 0;
let green2 = 0;
let blue1 = 0;
let blue2 = 0;
let alpha1 = 1;
let alpha2 = 1;
let type = "linear-gradient";
function changeColor1() {
    inputSlider1.value = red1;
    inputSlider2.value = green1;
    inputSlider3.value = blue1;
    inputSlider4.value = alpha1 * 100;
    picker1.classList.add("active");
    picker2.classList.remove("active");
    color1.classList.add("active");
    color2.classList.remove("active");
    ans1.innerText = red1;
    ans2.innerText = green1;
    ans3.innerText = blue1;
    ans4.innerText = alpha1;
}
function changeColor2() {
    inputSlider1.value = red2;
    inputSlider2.value = green2;
    inputSlider3.value = blue2;
    inputSlider4.value = alpha2 * 100;
    picker2.classList.add("active");
    picker1.classList.remove("active");
    color1.classList.remove("active");
    color2.classList.add("active");
    ans1.innerText = red2;
    ans2.innerText = green2;
    ans3.innerText = blue2;
    ans4.innerText = alpha2;
}
function changeGradient() {
    if (angle.value > 359 || angle.value < 0) {
        alert("Invalid Value Of Angle");
        angle.value = 0;
    }
    else if(angle.value.length == 0){
        angle.value = 0;
    }
    if (gradientType.checked) {
        type = "radial-gradient";
        angle.disabled = true;
    } else {
        type = "linear-gradient";
        angle.disabled = false;
    }
    let color = document.getElementsByClassName("color");
    for (let i = 0; i < color.length; i++) {
        if (color[i].classList.contains("active")) {
            let id = color[i].id;
            let elem = document.getElementById(`${id}`);
            let bgColor = `rgba(${inputSlider1.value}, ${inputSlider2.value}, ${inputSlider3.value}, ${(inputSlider4.value) / 100})`;
            elem.style.background = bgColor;
            if (id == "color1") {
                red1 = inputSlider1.value;
                green1 = inputSlider2.value;
                blue1 = inputSlider3.value;
                alpha1 = (inputSlider4.value) / 100;
                ans1.innerText = red1;
                ans2.innerText = green1;
                ans3.innerText = blue1;
                ans4.innerText = alpha1 * 100;
                picker11.innerText = `rgba(${red1}, ${green1}, ${blue1}, ${alpha1})`;
            }
            else if (id = "color2") {
                red2 = inputSlider1.value;
                green2 = inputSlider2.value;
                blue2 = inputSlider3.value;
                alpha2 = (inputSlider4.value) / 100;
                ans1.innerText = red2;
                ans2.innerText = green2;
                ans3.innerText = blue2;
                ans4.innerText = alpha2 * 100;
                picker22.innerText = `rgba(${red2}, ${green2}, ${blue2}, ${alpha2})`;
            }
            generate(type);
        }
    }
}
changeColor1();
generate(type);
function generate(type) {
    if (type == "linear-gradient") {
        finalAngle = `${angle.value}deg`;
    } else {
        finalAngle = "circle";
    }
    let body = document.querySelector("body");
    finalGradient = `${type}(${finalAngle}, rgba(${red1}, ${green1}, ${blue1}, ${alpha1}), rgba(${red2}, ${green2}, ${blue2}, ${alpha2}))`;
    body.style.background = finalGradient;
    display.innerText = finalGradient;
}
function shiftFocus() {
    display.blur();
}
function copy() {
    var copyText = document.getElementById("display");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied To Clipboard");
}
let flag = true;
function hide(){
    if(flag){
        selectors.style.display = "none";
        flag = false;
    }
    else{
        selectors.style.display = "flex";
        flag = true;
    }
}