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


function drawBranch(x, y, length, angle, depth) {
    if (depth === 0) return;

    const nextX = x + Math.cos(angle) * length;
    const nextY = y + Math.sin(angle) * length;

    r.DrawLine(x, y, nextX, nextY, r.WHITE);

    const nextLength = length * 0.8;

    drawBranch(nextX, nextY, nextLength, angle - Math.PI / 6, depth - 1);
    drawBranch(nextX, nextY, nextLength, angle + Math.PI / 6, depth - 1);

}

function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    const x = WIDTH / 2;
    const y = HEIGHT - 150;
    const length = 120;
    const angle = -Math.PI / 2;
    const depth = 20;

    drawBranch(x, y, length, angle, depth);

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