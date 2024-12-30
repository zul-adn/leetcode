

function mergedArray(nums1, m, nums2, n) {

      let idx = m + n - 1;
      let i = m - 1;
      j = n - 1;

      while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
          nums1[idx] = nums1[i];
          idx--;
          i--;
        } else {
          nums1[idx] = nums2[j];
          idx--;
          j--;
        }
      }
      while (j >= 0) {
        nums1[idx] = nums2[j];
        idx--;
        j--;
      }

}

let a = [1, 2, 3, 0, 0, 0];
let b = [2, 5, 6];
let m = 0;
let n = 0;

mergedArray(a, m, b, n)