function everyNPositions(message,step) {
    let newString=""
    count=0
    while (message.length>count){
        newString+=message[count]
        count+=step
       }
       return newString
    }


const message="Which framework should I choose?"
const step=6

console.log(everyNPositions(message,step))