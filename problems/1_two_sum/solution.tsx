// 1. Two Sum
// Easy
// 49.3K
// 1.6K
// company
// Amazon
// company
// Google
// company
// Adobe
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

export default function twoSum  (nums:number[], target: number): number[] {
    const hashMap: Map<number, number> = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (hashMap.has(diff)) {
        return [hashMap.get(diff)!, i];
      } else {
        hashMap.set(nums[i], i);
      }
    }
    return [];
  }
  
