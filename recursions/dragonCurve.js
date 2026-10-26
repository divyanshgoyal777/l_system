// dragon curve
// rules  : (F → F+G), (G → F-G)


function dragonCurve(num) {
    if (num <= 0) return "F";

    const prevStr = dragonCurve(num - 1);
    let result = "";
    console.log(prevStr);
    for (const char of prevStr) {
        switch (char) {
            case "F":
                result += "F+G";
                break;
            case "G":
                result += "F-G";
                break;
            default:
                result += char;
        }
    }
    return result;
}

dragonCurve(4);
