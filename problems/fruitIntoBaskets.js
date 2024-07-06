const sumSubarrayMins = (N, fruits) => {
    // your code here
    let maxLength = 0;
    
    for(let i = 0; i < N; i++) {
        let set = new Set()
        for(let j = i; j < N; j++) {
            set.add(fruits[j]);
            if(set.size <= 2) {
                if((j-i+1) > maxLength) {
                    maxLength = (j-i+1)
                }
            }
        }
    }
    
    return maxLength;
}