// Fractal Tree
// rules  : (1 → 11), (0 → 1[0]0)


// 0:	0
// 1:	1[0]0
// 2:	11[1[0]0]1[0]0
// 3:	1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0


function fractalTree(num) {
    if (num <= 0) return "0";
    let prevStr = fractalTree(num - 1);
    console.log(prevStr);
    let str = "";

    for (let i = 0; i < prevStr.length; i++) {
        if (prevStr[i] === '0') {
            str += '1[0]0';
        } else if (prevStr[i] === '1') {
            str += '11';
        } else {
            str += prevStr[i];
        }
    }
    return str;
}

console.log(fractalTree(15))
