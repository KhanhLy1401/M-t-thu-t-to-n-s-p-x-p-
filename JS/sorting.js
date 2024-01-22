let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

let SELECTED;
let SORTED;
let UNSORTED;
let TEMPSORTED;
let COMPARE;
// Used only in Merge & Quick
let LEFT;
let RIGHT;

if (dark) {
    SELECTED = "red"; // được chọn
    SORTED = "#55a630"; // đã sắp xếp
    UNSORTED = "#cbd5e1"; // chưa sắp xếp
    TEMPSORTED = "#52b69a"; // đang sắp xếp 
    COMPARE = "#a47148"; // được dùng để so sánh vs cái được chọn
    // Used only in Merge & Quick
    LEFT = "orange";
    RIGHT = "red";
}
else {
    SELECTED = "red";
    SORTED = "green";
    UNSORTED = "#1e293b";
    TEMPSORTED = "#55a630";
    COMPARE = "brown";
    // Used only in Merge & Quick
    LEFT = "orange";
    RIGHT = "red";
}


let arrsize = document.querySelector("#size");
arrsize.addEventListener("input", function () {
    generateBars(parseInt(arrsize.value))
});
generateBars();

let time = 1000;
let sortspeed = document.querySelector('#speed');
sortspeed.addEventListener("input", function () {
    time = 1000 - parseInt(sortspeed.value);
});

function generateBars(barno = 15) {
    document.getElementById("bar").innerHTML = "";
    let bars = [];
    for (let i = 0; i < barno; i++) {
        bars.push(Math.floor(Math.random() * 300) + 50);
    }

    const divs = document.querySelector("#bar");

    for (let x = 0; x < barno; x++) {
        const temp = document.createElement("div");
        temp.classList.add("sort");
        temp.classList.add("baritem");
        temp.style.height = bars[x] + "px";

        const valueSpan = document.createElement("span");
        valueSpan.classList.add("bar-value");
        valueSpan.innerText = bars[x];

        temp.appendChild(valueSpan);
        divs.append(temp);
    }
}

document.getElementById("newarr").addEventListener("click", function () {
    generateBars(arrsize.value);
    enableSortingBtn();
    enableSizeSlider();
});

function swap(element1, element2) {
    let temp = element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = temp;
    let tempContent = element1.textContent; 
    element1.textContent = element2.textContent; 
    element2.textContent = tempContent; 
    
}

function delay(millisec) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("")
        }, millisec);
    })
}

size.onchange = function () {
    arraysize.innerHTML = size.value;
}
speed.onchange = function () {
    speedvalue.innerHTML = speed.value;
}

