let a1 = prompt('Enter the first coordinate of point A');
let a2 = prompt('Enter the second coordinate of point A');
let b1 = prompt('Enter the first coordinate of point B');
let b2 = prompt('Enter the second coordinate of point B');
let c1 = prompt('Enter the first coordinate of point C');
let c2 = prompt('Enter the second coordinate of point C');

console.log(!isNaN(parseFloat(a1)) && isFinite(a1) &&
            !isNaN(parseFloat(a2)) && isFinite(a2) &&
            !isNaN(parseFloat(b1)) && isFinite(b1) &&
            !isNaN(parseFloat(b2)) && isFinite(b2) &&
            !isNaN(parseFloat(c1)) && isFinite(c1) &&
            !isNaN(parseFloat(c2)) && isFinite(c2) &&
            c1 - a1 === b1 - c1 && c2 - a2 === b2 - c2)