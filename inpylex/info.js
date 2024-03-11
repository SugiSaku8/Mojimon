console.log("InPylexのGPUCLクラスを使用する方法");
console.log("1. まず、GPUCLクラスのインスタンスを作成します。");
console.log("   これにより、GPUを使用した行列演算が可能になります。");
console.log("   const gpuCL = new GPUCL();");

console.log("2. 行列を作成します。");
console.log("  行列は2次元配列として表現されます。");
console.log("   const matrixA = [");
console.log("     [1, 2, 3],");
console.log("     [4, 5, 6],");
console.log("     [7, 8, 9]");
console.log("   ];");

console.log("   const matrixB = [");
console.log("     [10, 11, 12],");
console.log("     [13, 14, 15],");
console.log("     [16, 17, 18]");
console.log("   ];");

console.log("3. 行列の演算を行います。");
console.log("   GPUCLクラスのメソッドを使用して、行列の加算、減算、乗算、除算を行うことができます。");
console.log("   const resultMultiply = gpuCL.multiply(matrixA, matrixB);");
console.log("   console.log(\"乗算の結果:\", resultMultiply);");
console.log("4. 行列の加算を行います。");
console.log("   const resultAdd = gpuCL.add(matrixA, matrixB);");
console.log("   console.log(\"加算の結果:\", resultAdd);");

console.log("5. 行列の減算を行います。");
console.log("   const resultSubtract = gpuCL.subtract(matrixA, matrixB);");
console.log("   console.log(\"減算の結果:\", resultSubtract);");

console.log("6. 行列の除算を行います。");
console.log("   注意: 行列の除算は、行列Bが逆行列を持つ場合のみ可能です。");
console.log("   const resultDivide = gpuCL.divide(matrixA, matrixB);");
console.log("   console.log(\"除算の結果:\", resultDivide);");

console.log("7. 結果を確認します。");
console.log("   上記のコードを実行すると、各演算の結果がコンソールに出力されます。");
