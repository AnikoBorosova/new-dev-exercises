/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/*
Given an integer array nums and an integer k, 
return true if there are two distinct indices i and j in the array 
such that nums[i] == nums[j] 
and abs(i - j) <= k.
*/
var containsNearbyDuplicate = function (nums, k) {
    var myMap = new Map();
    for (let i = 0; i < nums.length; ++i) {
        if (myMap.has(nums[i]) && Math.abs(myMap.get(nums[i]) - i ) <= k) {
            return true;
        } else {
            myMap.set(nums[i], i);
        }
    }
    return false; 
};

let nums = [1,2,3,1];
let k = 3;
console.log(containsNearbyDuplicate(nums, k));

nums = [1,0,1,1];
k = 1;
console.log(containsNearbyDuplicate(nums, k));

nums = [1,2,3,1,2,3];
k = 2;
console.log(containsNearbyDuplicate(nums, k));

num = [1, 2, 3, 1, 1] 
k = 1;
console.log(containsNearbyDuplicate(nums, k));

/*
Initialize an empty hash map (myMap) to store the indices of elements.
Iterate through the array using a loop.
For each element in the array:
Check if the element already exists in the map (myMap).
If it does, calculate the absolute difference between the current index and the stored index in the map.
If the absolute difference is less than or equal to k, return true.
If not, update the index of the current element in the map.
If the element is not in the map, add it to the map with the current index.
If no such pair of indices is found during the iteration, return false.
*/