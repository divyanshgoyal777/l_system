const r = require("raylib");

const WIDTH = 1000;
const HEIGHT = 1000;
const TITLE = "Fractal Tree";
const FPS = 60;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);
}

function fractalTree(num) {
    if (num <= 0) return "0";
    const prevTree = fractalTree(num - 1);
    let tree = "";

    for (const char of prevTree) {
        if (char === '0') {
            tree += '1[+0][-0]';
        } else if (char === '1') {
            tree += '11';
        } else {
            tree += char;
        }
    }
    return tree;
}

function drawFractalTree(tree) {
    const stack = [];
    let x = WIDTH / 2;
    let y = HEIGHT - 50;
    let angle = -Math.PI / 2;
    let branchLength = 4;
    const angleStep = Math.PI / 6;

    for (const char of tree) {
        if (char === '0' || char === '1') {
            nextX = x + Math.cos(angle) * branchLength;
            nextY = y + Math.sin(angle) * branchLength;

            r.DrawLine(x, y, nextX, nextY, r.WHITE);

            x = nextX;
            y = nextY;
        } else if (char === "[") {
            stack.push({
                x, y, angle, branchLength
            });
            branchLength *= 0.8;
        } else if (char === "]") {
            const state = stack.pop();
            if (state) {
                ({ x, y, angle, branchLength } = state);
            }
        } else if (char === "+") {
            angle -= angleStep;
        } else if (char === "-") {
            angle += angleStep;
        }

    }

}


function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const tree = fractalTree(7);

    drawFractalTree(tree);

    r.EndDrawing();

}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};