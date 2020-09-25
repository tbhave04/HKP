/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    //checks if target is in array
    if (nums.includes(target) == false){
        return [-1, -1];
    }
    
    let left = true;
    //searches for lowest and highest target index
    function binSearch(nums, target){
        let first = 0;
        let last = nums.length;
        while(first < last){
            let mid = (first+last)/2;
            mid = Math.floor(mid);
            if(nums[mid] == target){
                //lowest index
                if(left == true){
                    last = mid;
                }
                //highest index
                else{
                    first = mid + 1;
                }
            }
            else if(nums[mid] < target){
                first = mid + 1;
            }
            else{
                last = mid;
            }
        }
        if(left == false){
            return first - 1;
        }
        return first;
    }
    
    let one = binSearch(nums,target);
    left = false;
    let two = binSearch(nums, target);
    return [one, two];
};