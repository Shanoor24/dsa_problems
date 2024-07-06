let s = "pwwkew"
const check = (s) => {
    let maxLength = 0
    let obj = {}
    let l = 0, r = 0;
    subString = ""

    while(!(obj[s[r]])) {
        if(l === s.length) {
            break;
        }

        obj[s[r]] = true
        subString += s[r]
        console.log(subString)
        if(subString.length > maxLength) {
            maxLength = subString.length
        }
        r++
        if(r === s.length || obj[s[r]]) {
            obj = {}
            l++
            r = l
            subString = ""
        }
        
    }

    return maxLength;
}

console.log(check(s))