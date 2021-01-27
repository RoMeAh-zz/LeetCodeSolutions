/* 
Given a string s, find the length of the longest substring without repeating characters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let map = new Map();
	let len = 0;
	let start = 0;

	for (let i = 0; i < s.length; i++) {
		let c = s.charAt(i);
		if (map.has(c)) if (map.get(c) >= start) start = map.get(c) + 1;
		len = Math.max(len, i - start + 1);
		map.set(c, i);
	}

	return len;
};
