var generate = function (numRows) {
    if (numRows == 1) return [[1]]
    if (numRows == 2) return [[1], [1, 1]]
    let result = [[1], [1, 1]];
    let prevSubArr = [1, 1];
    for (let i = 3; i <= numRows; i++) {
        let arr = Array(i).fill(1);
        for (let i = 0; i < prevSubArr.length - 1; i++) {
            arr[i + 1] = prevSubArr[i] + prevSubArr[i + 1]
        }
        prevSubArr = arr
        result.push(arr)
    }

    return result
};

console.log(generate(5))