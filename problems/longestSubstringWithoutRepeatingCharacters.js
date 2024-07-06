var lengthOfLongestSubstring = function(s) {
    let maxLength = 0
    for(let i = 0; i < s.length; i++) {
        let obj = {}
        let subString = ""
        for(let j = i; j < s.length; j++) {
            // return (obj[j])
            if(obj[s[j]]) {
                break;
            } else {
                obj[s[j]] = true
                subString += s[j]
                if(subString.length > maxLength) {
                    maxLength = subString.length
                }
            }
            
        }
    }

    return maxLength;
};