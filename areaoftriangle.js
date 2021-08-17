const sides = document.querySelectorAll('.side-input');
const submitBtn = document.querySelector("#submitBtn");
const outputE1 = document.querySelector("#output");

function calculateBaseHeight(base, height) {
    const areaOfTriangle = (base * height) / 2;
    return areaOfTriangle;
}

function calculateAreaOfTriangle() {
    const areaOfTriangle = calculateBaseHeight(Number(sides[0].value), Number(sides[1].value));

    outputE1.innerText = "The Area of Triangle =" + areaOfTriangle;

}

submitBtn.addEventListener("click", calculateAreaOfTriangle);