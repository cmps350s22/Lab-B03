function add(a, b) {
    return a + b
}

function max(a, b) {
    if (a > b)
        return a;
    else
        return b;
}

// (a, b) => a > b? a : b

const display = function (a) {
    console.log(a)
}

function addAndDisplay(a, b, add, display) {
    display(add(a, b))
}

const a = 20
const b = 40

addAndDisplay(a, b, add, display)
addAndDisplay(20, 40, add, display)
addAndDisplay(20, 40, add, function (a) {
    console.log(a)
})
addAndDisplay(20, 40, add, a => console.log(a))
