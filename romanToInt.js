// 1)
// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
var romanToInt = function(s) {
    let romanArray = s.split("");
    let [I, V, X, L, C, D, M] = [0, 0, 0 , 0 , 0 ,0, 0];
    for (let i in romanArray) {
        if (romanArray[i] == "I"){
            romanArray[i] = 1;
        }
        else if (romanArray[i] == "V"){
            romanArray[i] = 5; 
        }
        else if (romanArray[i] == "X"){
            romanArray[i] = 10;
        }
        else if (romanArray[i] == "L"){
            romanArray[i] = 50;
        }
        else if (romanArray[i] == "C"){
            romanArray[i] = 100;
        }
        else if (romanArray[i] == "D"){
            romanArray[i] = 500;
        }
        else if (romanArray[i] == "M"){
            romanArray[i] = 1000;
        }
        else {
            console.log("Please, Enter correct characters!!")
            return "Please, Enter correct characters!!"
        }

    }
    let sum = 0;

    for (let i = 0; i < romanArray.length; ++i) {
        if (romanArray[i+1] == undefined) {
            sum += romanArray[i]
        }
        else if (romanArray[i] >= romanArray[i+1]){
            sum += romanArray[i]
            
        }
        else {
            let sub = romanArray[i+1] - romanArray[i]
            sum += sub;
            ++i;
        }
    }

    
    console.log(sum);
};

romanToInt("III")
