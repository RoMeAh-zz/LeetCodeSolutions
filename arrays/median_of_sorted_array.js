/* 
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Follow up: The overall run time complexity should be O(log (m+n))
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	const sorted = nums1.concat(nums2).sort((a, b) => a - b);
	return sorted.length % 2 !== 0
		? sorted[Math.round(sorted.length / 2 - 1)]
		: (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
};

const m = findMedianSortedArrays([3], [-2, -1]);
console.log(m);
