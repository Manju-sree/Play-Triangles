const sides = document.querySelectorAll('.side-input');
const submitBtn = document.querySelector("#submitBtn");
const outputE1 = document.querySelector("#output");


function sumOfSquaresOfSides(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    const sumOfSquares = sumOfSquaresOfSides(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputE1.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse;
}
submitBtn.addEventListener("click", calculateHypotenuse);