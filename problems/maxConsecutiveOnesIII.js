var longestOnes = function(nums, k) {
    let maxLength = 0;
    for(let i = 0; i < nums.length; i++) {
        let zeros = 0;
        for(let j = i; j < nums.length; j++) {
            if(nums[j] == 0) {
                zeros++
            }
            if(zeros <= k) {
                let length = (j - i + 1)
                if(length > maxLength) {
                    maxLength = length
                }
            } else {
                break;
            }
        }
    }

    return maxLength;
};