
// var wordPattern = function(pattern, s) {
//     pattern = pattern.split("");
//     s = s.split(" ");
//     let matched = true;
//     if (pattern.length != s.length) {
//         return false;
//     }
//     for (let i = 0; i < pattern.length; i++) {
//         for (let n = 0; n < pattern.length; n++) {
//             if (pattern[i] == pattern[n]) {
//                 if (s[i] == s[n]) {
//                     matched = true
//                 }
//                 else {
//                     return false
//                 }
//             }
//             else {
//                 if (s[i] == s[n]){
//                     return false
//                 }
//             }
//         }
        
//     }
    
//     return matched
// };


// Another solution from leetcode (copied)

var wordPattern = function(pattern, s) {

    // place words into an array
    let sArr = s.split(' ')
    // if the pattern is lopsided return false
    if (pattern.length !== sArr.length) return false
    
    // create a key map and value map
    /* as a caveat, we can't use one map here
     * in the edge-case that a pattern key 
     * and values in s contain the same characters
     * 
     * eg. pattern = 'abc', s = 'c b a'
     */
    const kMap = {} // key map
    const vMap = {} // value map
    for (let i = 0; i < pattern.length; i++) {
        console.log("object")
        const key = pattern[i] // letter at index i in pattern
        const value = sArr[i] // word at index i in s 
        // if key or value already exists and does not correspond to
        // eachother, return false because we don't have a valid pattern
        console.log(kMap)
        console.log(vMap)
        if (key in kMap || value in vMap) {
            if (kMap[key] !== value) return false
            if (vMap[value] !== key) return false
        } else {
            kMap[key] = value
            vMap[value] = key
        }
    }

    return true // pattern is valid
};

// let matched =  wordPattern("abba", "dog cat cat dog")
let matched =  wordPattern("abba", "dog cat cat fish")
// let matched =  wordPattern("aaaa", "dog cat cat dog")
console.log(matched)