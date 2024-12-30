// Formula
// target = current + x
// x = target - current

var twoSum = function (nums, target) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let x = target - current;
    if (seen[x] !== undefined) {
      return [seen[x], i];
    }
    seen[nums[i]] = i;
  }
  return [];
};

let a = [2, 8, 11, 7];
let target = 9;

twoSum(a, target);
