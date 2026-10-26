// Sierpinski triangle
// rules  : (F → F−G+F+G−F), (G → GG)


function sierpinskiTriangle(num) {
    if (num <= 0) return "F";
    let prevStr = sierpinskiTriangle(num - 1);
    console.log(prevStr);
    let str = "";

    for (let i = 0; i < prevStr.length; i++) {
        if (prevStr[i] === 'F') {
            str += 'F−G+F+G−F';
        } else if (prevStr[i] === 'G') {
            str += 'GG';
        } else {
            str += prevStr[i];
        }
    }
    return str;
}

sierpinskiTriangle(4);