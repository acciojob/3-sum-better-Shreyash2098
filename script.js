function threeSum(nums, target) {
  // Sort the array
  nums.sort((a, b) => a - b);

  // Initialize variables to store the closest sum and the minimum difference
  let closestSum = Infinity;
  let minDiff = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      const diff = Math.abs(currentSum - target);

      if (diff < minDiff) {
        minDiff = diff;
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

// Example usage:
const nums = [-1, 2, 1, -4];
const target = 1;
const result = threeSum(nums, target);
console.log(result); // Output: 2
