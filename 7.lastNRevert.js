function lastNRevert(text, n) {
    let reverse=""
   if (text.length>n) {
     for (let i=1; i<=n; i++) {
        reverse+=text[text.length-i]
        console.log(reverse)
    }
   }
    else {
        for (let i=text.length-1; i>=0; i--) {
            reverse+=text[i]
        }
    }

    return reverse
}

(lastNRevert("Hello",4))
