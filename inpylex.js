/*
©Carnation 2024
InPylex Power Engine
Courtesy of Carnation Games
InPylex is a game engine developed by Carnation.
InPylex is managed and protected by the Kitty system base.
*/
// gpuCL.js

const { GPU } = require('gpu.js');

function con(value, type) {
    if (type === 's') {
        return Array(512).fill().map(() => Array(512).fill(value));
    } else if (type === 'n') {
        let sum = 0;
        for (let i = 0; i < 512; i++) {
            for (let j = 0; j < 512; j++) {
                sum += value[i][j];
            }
        }
        return sum;
    } else {
        throw new Error('Invalid type. Use "s" for scalar to matrix or "n" for matrix to scalar.');
    }
}


class GPUCL {
 constructor() {
    this.gpu = new GPU();
 }

 multiply(a, b) {
    const multiplyMatrix = this.gpu.createKernel(function(a, b) {
        let sum = 0;
        for (let i = 0; i < 512; i++) {
            sum += a[this.thread.y][i] * b[i][this.thread.x];
        }
        return sum;
    }).setOutput([512, 512]);

    return multiplyMatrix(a, b);
 }

 add(a, b) {
    const addMatrix = this.gpu.createKernel(function(a, b) {
        return a[this.thread.y][this.thread.x] + b[this.thread.y][this.thread.x];
    }).setOutput([512, 512]);

    return addMatrix(a, b);
 }
 subtract(a, b) {
    const subtractMatrix = this.gpu.createKernel(function(a, b) {
        return a[this.thread.y][this.thread.x] - b[this.thread.y][this.thread.x];
    }).setOutput([512, 512]);

    return subtractMatrix(a, b);
 }
 divide(a, b) {
    const divideMatrix = this.gpu.createKernel(function(a, b) {
        return a[this.thread.y][this.thread.x] / b[this.thread.y][this.thread.x];
    }).setOutput([512, 512]);

    return divideMatrix(a, b);
 }
}

const gpuCL = new GPUCL();
