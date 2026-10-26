// fractal plant
// rules: (X → F+[[X]-X]-F[-FX]+X), (F → FF)


function fractalPlant(num) {
    if (num <= 0) return "X";

    const prevStr = fractalPlant(num - 1);
    let result = "";
    console.log(prevStr)
    for (const char of prevStr) {
        switch (char) {
            case "X":
                result += "F+[[X]-X]-F[-FX]+X";
                break;
            case "F":
                result += "FF";
                break;
            default:
                result += char;
        }
    }

    return result;
}

console.log(fractalPlant(3));