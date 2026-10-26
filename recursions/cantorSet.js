// Cantor set
// rules  : (A → ABA), (B → BBB)


function cantorSet(num) {
    if (num <= 0) return "A";
    let prevStr = cantorSet(num - 1);
    console.log(prevStr);
    let str = "";

    for (let i = 0; i < prevStr.length; i++) {
        if (prevStr[i] === 'A') {
            str += 'ABA';
        } else {
            str += 'BBB';
        }
    }
    return str;
}

cantorSet(4);