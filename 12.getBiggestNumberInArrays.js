function getBiggestNumberInArrays(numbers1, numbers2) {
    let max=0
    for (let i=0; i<numbers1.length; i++) {
        if (numbers1[i]>max) {
            max=numbers1[i]
        }
    }

   for (let i=0; i<numbers2.length; i++) {
        if (numbers2[i]>max) {
            max=numbers2[i]
        }
   }
    return max
}

const numbers1 = [7,2,9]
const numbers2 = [15,28,42]
console.log(getBiggestNumberInArrays(numbers1,numbers2));
