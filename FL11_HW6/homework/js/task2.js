let a = prompt('Enter the length of the first side of the triangle');
let b = prompt('Enter the length of the second side of the triangle');
let c = prompt('Enter the length of the third side of the triangle');

if (!isNaN(parseFloat(a)) && isFinite(a) && 
    !isNaN(parseFloat(b)) && isFinite(b) && 
    !isNaN(parseFloat(c)) && isFinite(c) &&
    +a + +b > +c && +b + +c > +a && +a + +c > +b &&
    +a > 0 && +b > 0 && +c > 0) {
        if (+a === +b && +a === +c) {
            console.log('Equivalent triangle')
        } else if (+a === +b || +a === +c || +b === +c) {
            console.log('Isosceles triangle')
        } else {
            console.log('Normal triangle')
        }
    } else {
        console.log('Triangle doesn’t exist')
    }