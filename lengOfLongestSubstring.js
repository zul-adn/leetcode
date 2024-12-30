// Given a string s, find the length of the longest  substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // const string = s.split('')
    // console.log(string)
    // const string = s.split('').reduce((accumulator, item) => {
    //     console.log(accumulator, item);
    
    // });

        const string = s.split("").map((c, i, o) => {
    
      
            if(o.indexOf(c) === i){
                return c
            }else{
                return 
            }
        }).sort().join("");

        console.log(string)
};

lengthOfLongestSubstring("pwwkew");