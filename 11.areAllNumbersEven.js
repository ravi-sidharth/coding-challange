function areAllNumbersEven(numbers) {
    for (let i=0; i<numbers.length; i++) {
        if (numbers[i]%2!=0) {
            return false
        }
    }
     return true
}
const numbers=[12,22,1,40]
console.log(areAllNumbersEven(numbers))
