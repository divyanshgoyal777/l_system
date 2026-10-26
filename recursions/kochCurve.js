// Koch curve
// rules  : (F → F+F−F−F+F)


function kochCurve(num) {
    if (num <= 0) return "F";
    let prevStr = kochCurve(num - 1);
    console.log(prevStr);
    let str = "";

    for (let i = 0; i < prevStr.length; i++) {
        if (prevStr[i] === 'F') {
            str += 'F+F−F−F+F';
        } else {
            str += prevStr[i];
        }
    }
    return str;
}

kochCurve(4);