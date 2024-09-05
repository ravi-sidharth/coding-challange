function doubleNumbers(numbers) {
    for (let i=0; i<numbers.length; i++) {
        numbers[i]=numbers[i]*2
    }

    return numbers
}

const numbers =[17,42,9,31,56]
console.log(doubleNumbers(numbers))