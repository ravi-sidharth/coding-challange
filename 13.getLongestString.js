function getLongestString(arrayOfStrings) {
    let max=0;
    let maxIndex="";
    for (let i=0; i<arrayOfStrings.length; i++) {
         if (arrayOfStrings[i].length>max) {
            max = arrayOfStrings[i].length
            maxIndex =arrayOfStrings[i]
        }
    }
    return maxIndex
}
const arrayOfStrings= ["Montgomery","Juneau","Phoenix","Little Rock","Sacramento","Denver","Washington, D.C.","Hartford","Dover","Tallahassee"]

console.log(getLongestString(arrayOfStrings));
