
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');
let ans4 = document.getElementById('ans4');
let ans5 = document.getElementById('ans5');
const inputSlider1 = document.querySelector("#input1");
const inputSlider2 = document.querySelector("#input2");
const inputSlider3 = document.querySelector("#input3");
const inputSlider4 = document.querySelector("#input4");
const inputSlider5 = document.querySelector("#input5");
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let picker1 = document.getElementById('picker1');
let picker2 = document.getElementById('picker2');
let picker11 = document.getElementById('picker11');
let picker22 = document.getElementById('picker22');
let angle = document.getElementById('angle');
let display = document.getElementById('display');
let gradientType = document.getElementById('gradientType');
let repeating = document.getElementById('repeating');
let smooth = document.getElementById('smooth');
let selectors = document.getElementById('selectors');
let addItem = document.getElementById('addItem');
let prompt = document.getElementById('prompt');
let overlay = document.getElementById('overlay');
let presetName = document.getElementById('name');
let alert1 = document.getElementById('alert');
let presets = document.getElementById('presets');
let presetContainer = document.getElementById('presetContainer');
let download = document.getElementById('download');
let downloadType = document.getElementById('download-type');
let canvas = document.getElementById('canvas');
let fileName = document.getElementById('fileName');
angle.value = 0;
let red1 = 0;
let red2 = 0;
let green1 = 0;
let green2 = 0;
let blue1 = 0;
let blue2 = 0;
let alpha1 = 1;
let alpha2 = 1;
let length1 = 20;
let length2 = 40;
inputSlider5.value = length2;
let type = "linear-gradient";
const presetToggle = document.getElementById('presetToggle');
presetToggle.addEventListener('click', () => {
    if (!flag2) {
        presets.style.display = "block";
        overlay.style.display ="flex";
        flag2 = true;
        presetContainer.innerHTML = "";
        allStorage();
    } else {
        presets.style.display = "none";
        overlay.style.display = "none";
        flag2 = false;
    }
});
function changeColor1() {
    inputSlider1.value = red1;
    inputSlider2.value = green1;
    inputSlider3.value = blue1;
    inputSlider4.value = alpha1 * 100;
    inputSlider5.value = length1;
    picker1.classList.add("active");
    picker2.classList.remove("active");
    color1.classList.add("active");
    color2.classList.remove("active");
    ans1.innerText = red1;
    ans2.innerText = green1;
    ans3.innerText = blue1;
    ans4.innerText = alpha1;
    ans5.innerText = length1;
}
function changeColor2() {
    inputSlider1.value = red2;
    inputSlider2.value = green2;
    inputSlider3.value = blue2;
    inputSlider4.value = alpha2 * 100;
    inputSlider5.value = length2;
    picker2.classList.add("active");
    picker1.classList.remove("active");
    color1.classList.remove("active");
    color2.classList.add("active");
    ans1.innerText = red2;
    ans2.innerText = green2;
    ans3.innerText = blue2;
    ans4.innerText = alpha2;
    ans5.innerText = length2;
}
function changeGradient() {
    if (angle.value > 359 || angle.value < 0) {
        alert("Invalid Value Of Angle");
        angle.value = 0;
    }
    else if (angle.value.length == 0) {
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
                length1 = inputSlider5.value;
                ans1.innerText = red1;
                ans2.innerText = green1;
                ans3.innerText = blue1;
                ans4.innerText = alpha1;
                ans5.innerText = length1;
                picker11.innerText = `rgba(${red1}, ${green1}, ${blue1}, ${alpha1})`;
            }
            else if (id = "color2") {
                red2 = inputSlider1.value;
                green2 = inputSlider2.value;
                blue2 = inputSlider3.value;
                alpha2 = (inputSlider4.value) / 100;
                length2 = inputSlider5.value;
                ans1.innerText = red2;
                ans2.innerText = green2;
                ans3.innerText = blue2;
                ans4.innerText = alpha2;
                ans5.innerText = length2;
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
        if (repeating.checked) {
            if (smooth.checked) {
                finalGradient = `repeating-linear-gradient(${finalAngle}, rgba(${red1}, ${green1}, ${blue1}, ${alpha1}) 0px, rgba(${red2}, ${green2}, ${blue2}, ${alpha2}) ${length1}px, rgba(${red1}, ${green1}, ${blue1}, ${alpha1}) ${length2}px)`;
            } else {
                finalGradient = `repeating-linear-gradient(${finalAngle}, rgba(${red1}, ${green1}, ${blue1}, ${alpha1}) 0px, rgba(${red1}, ${green1}, ${blue1}, ${alpha1}) ${length1}px, rgba(${red2}, ${green2}, ${blue2}, ${alpha2}) ${length1}px ,rgba(${red2}, ${green2}, ${blue2}, ${alpha2}) ${length2}px)`;
            }
        } else {
            finalGradient = `${type}(${finalAngle}, rgba(${red1}, ${green1}, ${blue1}, ${alpha1}), rgba(${red2}, ${green2}, ${blue2}, ${alpha2}))`;
        }
    } else {
        finalAngle = "circle";
        if (repeating.checked) {
            if (smooth.checked) {
                finalGradient = `repeating-radial-gradient(rgba(${red1}, ${green1}, ${blue1}, ${alpha1}) 0px, rgba(${red2}, ${green2}, ${blue2}, ${alpha2}) ${length1}px, rgba(${red1}, ${green1}, ${blue1}, ${alpha1}) ${length2}px)`
            } else {
                finalGradient = `repeating-radial-gradient(rgba(${red1}, ${green1}, ${blue1}, ${alpha1}) 0px, rgba(${red1}, ${green1}, ${blue1}, ${alpha1}) ${length1}px, rgba(${red2}, ${green2}, ${blue2}, ${alpha2}) ${length1}px ,rgba(${red2}, ${green2}, ${blue2}, ${alpha2}) ${length2}px)`;
            }
        } else {
            finalGradient = `${type}(${finalAngle}, rgba(${red1}, ${green1}, ${blue1}, ${alpha1}), rgba(${red2}, ${green2}, ${blue2}, ${alpha2}))`;
        }
    }
    let body = document.querySelector(".bg");
    canvas.style.background = finalGradient;
    display.innerText = finalGradient;
    body.style.backgroundImage = finalGradient;
}
function shiftFocus() {
    display.blur();
}
function copy() {
    var copyText = document.getElementById("display");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    // console.log(copyText.value)
    showAlert("<strong>Message : </strong> &nbsp; Copied To Clipboard");
    setTimeout(() => {
        overlay.style.display = "none";
    }, 2000);
}
let flag = true;
function hide(elem) {
    if (flag) {
        selectors.style.display = "none";
        flag = false;
        elem.innerHTML = 'Show';
    }
    else {
        selectors.style.display = "flex";
        flag = true;
        elem.innerHTML = 'Hide';
    }
}

function addToList() {
    if (presetName.value.length == 0) {
        showAlert("<strong>Invalid Input</strong> &nbsp; Cannot Add To Favourite");
    } else {
        let colorObj = {
            storagered1: red1,
            storageblue1: blue1,
            storagegreen1: green1,
            storagealpha1: alpha1,
            storagelength1: length1,
            storagered2: red2,
            storageblue2: blue2,
            storagegreen2: green2,
            storagealpha2: alpha2,
            storagelength2: length2,
            storageangle: angle.value,
            storagetype: type,
            storagerepeating: repeating.checked,
            storagesmooth: smooth.checked
        }
        let colorObjString = JSON.stringify(colorObj);
        localStorage.setItem(presetName.value, colorObjString);
        toggleModal();
        presetName.value = "";
    }

}
let flag1 = false;
function toggleModal() {
    if (flag1) {
        overlay.style.display = "none";
        prompt.style.display = "none";
        flag1 = false;
    } else {
        overlay.style.display ="flex";
        prompt.style.display = "flex";
        flag1 = true;
        presetName.focus();
    }
}
let flag2 = false;
function togglePreset() {
    if (!flag2) {
        presets.style.display = "block";
        overlay.style.display ="flex";
        flag2 = true;
        presetContainer.innerHTML = "";
        allStorage();
    } else {
        presets.style.display = "none";
        overlay.style.display = "none";
        flag2 = false;
    }
}
function allStorage() {
    let background;
    let keys = Object.keys(localStorage)
    let i = 0, key;
    for (; key = keys[i]; i++) {
        let obj = JSON.parse(localStorage.getItem(key));
        if (obj.storagetype == "linear-gradient" ) {
            if (obj.storagerepeating) {
               if (!obj.storagesmooth) {
                background = `repeating-linear-gradient(${obj.storageangle}deg, rgba(${obj.storagered1}, ${obj.storagegreen1}, ${obj.storageblue1}, ${obj.storagealpha1}) 0px, rgba(${obj.storagered1}, ${obj.storagegreen1}, ${obj.storageblue1}, ${obj.storagealpha1}) ${obj.storagelength1}px, rgba(${obj.storagered2}, ${obj.storagegreen2}, ${obj.storageblue2}, ${obj.storagealpha2}) ${obj.storagelength1}px,  rgba(${obj.storagered2}, ${obj.storagegreen2}, ${obj.storageblue2}, ${obj.storagealpha2}) ${obj.storagelength2}px)`;
               } else {
                background = `repeating-linear-gradient(${obj.storageangle}, rgba(${obj.storagered1}, ${obj.storagegreen1}, ${obj.storageblue1}, ${obj.storagealpha1}) 0px, rgba(${obj.storagered2}, ${obj.storagegreen2}, ${obj.storageblue2}, ${obj.storagealpha2}) ${obj.storagelength1}px, rgba(${obj.storagered1}, ${obj.storagegreen1}, ${obj.storageblue1}, ${obj.storagealpha1}) ${obj.storagelength2}px)`
               }
            } else {
                background = `${obj.storagetype}(${obj.storageangle}deg, rgba(${obj.storagered1}, ${obj.storagegreen1}, ${obj.storageblue1}, ${obj.storagealpha1}), rgba(${obj.storagered2}, ${obj.storagegreen2}, ${obj.storageblue2}, ${obj.storagealpha2}))`;
            }
        } else {
            if (obj.storagerepeating) {
                if (!obj.storagesmooth) {
                    finalGradient = `repeating-radial-gradient(rgba(${red1}, ${green1}, ${blue1}, ${alpha1}) 0px, rgba(${red2}, ${green2}, ${blue2}, ${alpha2}) ${length1}px, rgba(${red1}, ${green1}, ${blue1}, ${alpha1}) ${length2}px)`
                } else {
                    finalGradient = `repeating-radial-gradient(rgba(${red1}, ${green1}, ${blue1}, ${alpha1}) 0px, rgba(${red2}, ${green2}, ${blue2}, ${alpha2}) ${length1}px, rgba(${red1}, ${green1}, ${blue1}, ${alpha1}) ${length2}px)`;
                }
            } else {
                finalGradient = `${type}(${finalAngle}, rgba(${red1}, ${green1}, ${blue1}, ${alpha1}), rgba(${red2}, ${green2}, ${blue2}, ${alpha2}))`;
            }
        }
        presetContainer.innerHTML += `
        <div class="presetId">
                <div class="presetName" onclick="loadPreset('${key}')">
                    <strong>${key}</strong>
                </div>
                <div class="presetColor" onclick="loadPreset('${key}')">
                    <div class="presetBox" style="background: ${background}"></div>
                </div>
            </div>
        `
    }
}

function showAlert(text) {
    alert1.classList.remove('slideUp');
    alert1.classList.add('slideDown');
    overlay.style.display ="flex";
    alert1.innerHTML = `${text}`;
    document.body.style.userSelect = "none";
    setTimeout(() => {
        alert1.classList.remove('slideDown');
        alert1.classList.add('slideUp');
        alert1.innerHTML = "";
        document.body.style.userSelect = "unset";
    }, 2000);
}

function loadPreset(key) {
    let obj = JSON.parse(localStorage.getItem(key));
    red1 = obj.storagered1;
    green1 = obj.storagegreen1;
    blue1 = obj.storageblue1;
    alpha1 = obj.storagealpha1;
    length1 = obj.storagelength1;
    red2 = obj.storagered2;
    green2 = obj.storagegreen2;
    blue2 = obj.storageblue2;
    alpha2 = obj.storagealpha2;
    length2 = obj.storagelength2;
    angle.value = obj.storageangle;
    type = obj.storagetype;
    repeating.checked = obj.storagerepeating;
    smooth.checked = obj.storagesmooth;
    changeColor2();
    changeColor1();
    color1.style.background = `rgba(${red1}, ${green1}, ${blue1}, ${alpha1})`;
    picker11.innerHTML = `rgba(${red1}, ${green1}, ${blue1}, ${alpha1})`
    color2.style.background = `rgba(${red2}, ${green2}, ${blue2}, ${alpha2})`;
    picker22.innerHTML = `rgba(${red2}, ${green2}, ${blue2}, ${alpha2})`
    if (obj.storagetype == "radial-gradient") {
        angle.disabled = true;
        gradientType.checked = true;
        repeating.value = obj.storagerepeating;
        toggleWorkspace();
    } else if (obj.storagetype == "linear-gradient") {
        gradientType.checked = false;
        angle.disabled = false;
        repeating.value = obj.storagerepeating;
        toggleWorkspace();
    }
    changeGradient();
    togglePreset();
}


function saveAsIMG() {
    console.log("object")
    if (downloadType.value === 'png') {
        domtoimage.toBlob(canvas)
            .then(function (blob) {
                window.saveAs(blob, `${fileName.value}.png`);
            });
    } else if (downloadType.value === 'jpg') {
        domtoimage.toJpeg(canvas, { quality: 1 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                
                link.download = `${fileName.value}.jpeg`;
                link.href = dataUrl;
                link.click();
            });
    }
    downloadModal();
    downloadType.value = "";
}
let flag3 = false;
function downloadModal() {
    if (!flag3) {
        download.style.display = "block";
        overlay.style.display ="flex";
        flag3 = true;
    } else {
        download.style.display = "none";
        overlay.style.display = "none";
        flag3 = false;
    }
}
function toggleWorkspace(){
    if (repeating.checked) {
        overlay.style.display = "flex";
        overlay.innerHTML = `<h2>Switching To Repeating Gradient Workspace</h2>`
        document.querySelector(".dist").style.display = "flex";
        document.querySelector('.smooth').style.display = "flex";
        overlay.classList.add("backdropBlur");
        changeGradient();
        setTimeout(() => {
            overlay.innerHTML = "";
            overlay.style.display = "none";
            overlay.classList.remove("backdropBlur");
        }, 2000);
    } else {
        overlay.style.display ="flex";
        overlay.innerHTML = `<h2>Switching To Normal Gradient Workspace</h2>`
        document.querySelector(".dist").style.display = "none";
        document.querySelector('.smooth').style.display = "none";
        overlay.classList.add("backdropBlur");
        changeGradient();
        setTimeout(() => {
            overlay.innerHTML = "";
            overlay.style.display = "none";
            overlay.classList.remove("backdropBlur");
        }, 2000);
    }
}