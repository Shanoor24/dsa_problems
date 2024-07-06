var longestOnes = function(nums, k) {
    let maxLength = 0, zeros = 0, left = 0, right = 0;

    while(right < nums.length) {
        if(nums[right] == 0) {zeros++}
        if(zeros > k) {
            if(nums[left] == 0) {
                zeros--
                
            }
            left++
        }

        if(zeros <= k) {
            let length = (right - left + 1)
            if(length > maxLength) {
                maxLength = length
            }
        }
        right++
    }

    return maxLength;
};