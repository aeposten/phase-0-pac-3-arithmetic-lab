const add = (a , b) => {
    const sum = a + b;
    return sum;
}

const subtract = (a , b) => {
    const difference = a - b;
    return difference;
}

const multiply = (a , b) => {
    const product = a * b;
    return product;
}

const divide = (a , b) => {
    const quotient = a / b;
    return quotient;
}

const increment = (n) => {
    const incrementN = ++n
    return incrementN;
}

const decrement = (n) => {
    const decrementN = --n
    return decrementN;
}

const makeInt = (string) => {
    const makeIntN = parseInt(string, 10)
    return makeIntN;
}

const preserveDecimal = (string) => {
    const preserveDecimalN = parseFloat(string)
    return preserveDecimalN;
}
