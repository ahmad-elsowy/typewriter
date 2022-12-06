// 'use strict';
let elementEl = document.getElementById("elementEl")
// console.log(elementEl.innerHTML.substring(7,17))

function typeWriter(el) {
    const textArray = el.innerHTML.split(''); //convert it to array
    el.innerHTML = ''; //empty its content
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 100 * i)
    );

    setInterval(() => typeWriter(el), 5000);
}

typeWriter(elementEl);




