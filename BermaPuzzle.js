/**
 * You have a specific number of oranges:
 * when you grouped them in groups in which each group contains 2, the reminder is 1
 * when you grouped them in groups in which each group contains 3, the reminder is 1
 * when you grouped them in groups in which each group contains 4, the reminder is 1
 * when you grouped them in groups in which each group contains 5, the reminder is 1
 * when you grouped them in groups in which each group contains 6, the reminder is 1
 * when you grouped them in groups in which each group contains 7, the reminder is 0
 * 
 * 
 * Q: what is the original number of the oranges
 */

function getOrignalNumber() {
    let isCatched = false;
    let number = 7
    while (!isCatched) {

        if (
            number % 2 == 1
            && number % 3 == 1
            && number % 4 == 1
            && number % 5 == 1
            && number % 6 == 1
            && number % 7 == 0
        ) {
            isCatched = true
        } else {
            number += 7
        }
    }

    return number
}

console.log(getOrignalNumber())