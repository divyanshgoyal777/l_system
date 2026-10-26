// Algae
// rules  : (A → AB), (B → A)

function algae(num) {
    if (num <= 0) return "A";
    let prevStr = algae(num - 1);
    console.log(prevStr);
    let str = "";

    for (let i = 0; i < prevStr.length; i++) {
        if (prevStr[i] === 'A') {
            str += 'AB';
        } else {
            str += 'A';
        }
    }
    return str;
}

algae(10);