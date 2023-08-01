const result = document.querySelector(".result input")

const copyBtn = document.getElementById("copy-btn")

const sliders = document.querySelectorAll(".wrapper input[type = 'range']");
const rcolor = document.getElementById("red")
const gcolor = document.getElementById("green")
const bcolor = document.getElementById("blue")

let generateColor = () => {
    let rColorValue = rcolor.value;
    let gColorValue = gcolor.value;
    let bColorValue = bcolor.value;

    let finalcolor = `rgb(${rColorValue}, ${gColorValue}, ${bColorValue})`;
    result.value = finalcolor;
    document.body.style.backgroundColor = finalcolor;



};

let copyColorCode = () => {
    result.select();
    document.execCommand("copy");
    copyBtn.innerText = "Copied!"
    setTimeout(() => {
        copyBtn.innerText = "Copy Color Code"
    }, 1000)
}

sliders.forEach((inp) => {
    inp.addEventListener("input", generateColor)
})

window.addEventListener("load", generateColor);

copyBtn.addEventListener("click", copyColorCode);
