const convValue = document.getElementById("conv");
const genKernel = document.getElementById("genericKernelArray");

function callConvolution(tipo){
    convolution(tipo , convValue.value)
}

function genericKernel(){
    let kernelgen = JSON.parse(genKernel.value)
    let kernel_len = kernelgen.length
    if(kernel_len==9){ // como trabalhamo com kernel em formato de vetor, len será n*n, com n dimensão das colunas do kernel
        convolution3x3(kernelgen,false)
    }
    else if(kernel_len==25){
        convolution5x5(kernelgen,false)
    }
    else if(kernel_len==49){
        convolution7x7(kernelgen,false)
    }
    else if(kernel_len==81){
        convolution9x9(kernelgen,false)
    }
}

// Seleciona a função correta
function convolution(tipo, n) {
    if (tipo == 0 && n == 3) convolutionMedia3x3();
    if (tipo == 0 && n == 5) convolutionMedia5x5();
    if (tipo == 0 && n == 7) convolutionMedia7x7();
    if (tipo == 0 && n == 9) convolutionMedia9x9();
    if (tipo == 1 && n == 3) convolutionMediana3x3();
    if (tipo == 1 && n == 5) convolutionMediana5x5();
    if (tipo == 1 && n == 7) convolutionMediana7x7();
    if (tipo == 1 && n == 9) convolutionMediana9x9();
    if (tipo == 2 && n == 3) convolutionGauss3x3();
    if (tipo == 2 && n == 5) convolutionGauss5x5();
    if (tipo == 2 && n == 7) convolutionGauss7x7();
    if (tipo == 2 && n == 9) convolutionGauss9x9();
    if (tipo == 3 && n == 3) convolutionLaplace3x3();
    if (tipo == 3 && n == 5) convolutionLaplace5x5();
    if (tipo == 3 && n == 7) convolutionLaplace7x7();
    if (tipo == 3 && n == 9) convolutionLaplace9x9();
    if (tipo == 4 && n == 3) convolutionSharpeningLaplace3x3();
    if (tipo == 4 && n == 5) convolutionSharpeningLaplace5x5();
    if (tipo == 4 && n == 7) convolutionSharpeningLaplace7x7();
    if (tipo == 4 && n == 9) convolutionSharpeningLaplace9x9();
    if (tipo == 5 && n == 3) convolutionSharpeningHighboost3x3();
    if (tipo == 5 && n == 5) convolutionSharpeningHighboost5x5();
    if (tipo == 5 && n == 7) convolutionSharpeningHighboost7x7();
    if (tipo == 5 && n == 9) convolutionSharpeningHighboost9x9();
    if (tipo == 6 && n == 3) convolutionSobelx3x3();
    if (tipo == 6 && n == 5) convolutionSobelx5x5();
    if (tipo == 6 && n == 7) convolutionSobelx7x7();
    if (tipo == 6 && n == 9) convolutionSobelx9x9();
    if (tipo == 7 && n == 3) convolutionSobely3x3();
    if (tipo == 7 && n == 5) convolutionSobely5x5();
    if (tipo == 7 && n == 7) convolutionSobely7x7();
    if (tipo == 7 && n == 9) convolutionSobely9x9();
    if (tipo == 8 && n == 3) convolutionGradient3x3();
    if (tipo == 8 && n == 5) convolutionGradient5x5();
    if (tipo == 8 && n == 7) convolutionGradient7x7();
    if (tipo == 8 && n == 9) convolutionGradient9x9();

}

// Filtragem pela mediana 3x3:
function convolutionMediana3x3() {
    let kernel = [1, 1, 1,
                  1, 1, 1,
                  1, 1, 1];
    convolution3x3(kernel, true);
}

// Filtragem pela mediana 5x5:
function convolutionMediana5x5() {
    let kernel = [1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1];
    convolution5x5(kernel, true);
}

// Filtragem pela mediana 7x7:
function convolutionMediana7x7() {
    let kernel = [1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1];
    convolution7x7(kernel, true);
}

// Filtragem pela mediana 9x9:
function convolutionMediana9x9() {
    let kernel = [1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1];
    convolution9x9(kernel, true);
}

// Filtro de suavização da média simples 3x3:
function convolutionMedia3x3() {
    let kernel = [1, 1, 1,
                  1, 1, 1,
                  1, 1, 1];
    kernel.forEach((value, index) => {
        kernel[index] *= (1/9);
    });
    convolution3x3(kernel, false);
}

// Filtro de suavização da média simples 5x5:
function convolutionMedia5x5() {
    let kernel = [1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1];
    kernel.forEach((value, index) => {
        kernel[index] *= (1/25);
    });
    convolution5x5(kernel, false);
}

// Filtro de suavização da média simples 7x7:
function convolutionMedia7x7() {
    let kernel = [1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1];
    kernel.forEach((value, index) => {
        kernel[index] *= (1/49);
    });
    convolution7x7(kernel, false);
}

// Filtro de suavização da média simples 9x9:
function convolutionMedia9x9() {
    let kernel = [1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1];
    kernel.forEach((value, index) => {
        kernel[index] *= (1/81);
    });
    convolution9x9(kernel, false);
}

// Filtro de suavização da média ponderada 3x3:
function convolutionGauss3x3() {
    let kernel = [1, 2, 1,
                  2, 4, 2,
                  1, 2, 1];
    kernel.forEach((value, index) => {
        kernel[index] *= (1/16);
    });
    convolution3x3(kernel, false);
}

// Filtro de suavização da média ponderada 5x5:
function convolutionGauss5x5() {
    let kernel = [1,  4,  6,  4, 1,
                  4, 16, 24, 16, 4,
                  6, 24, 36, 24, 6,
                  4, 16, 24, 16, 4,
                  1,  4,  6,  4, 1];
    kernel.forEach((value, index) => {
        kernel[index] *= (1/256);
    });
    convolution5x5(kernel, false);
}

// Filtro de suavização da média ponderada 7x7:
function convolutionGauss7x7() {
    let kernel = [0,  0,  1,   2,  1,  0, 0,
                  0,  3, 13,  22, 13,  3, 0,
                  1, 13, 59,  97, 59, 13, 1,
                  2, 22, 97, 159, 97, 22, 2,
                  1, 13, 59,  97, 59, 13, 1,
                  0,  3, 13,  22, 13,  3, 0,
                  0,  0,  1,   2,  1,  0, 0];
    kernel.forEach((value, index) => {
        kernel[index] *= (1/1003);
    });
    convolution7x7(kernel, false);
}

// Filtro de suavização da média ponderada 9x9:
function convolutionGauss9x9() {
    let kernel = [ 0,  0,  1,   4,   6,   4,  1,  0,  0,
                   0,  1,  6,  15,  20,  15,  6,  1,  0, 
                   1,  6, 20,  56,  70,  56, 20,  6,  1,
                   4, 15, 56, 210, 252, 210, 56, 15,  4,
                   6, 20, 70, 252, 924, 252, 70, 20,  6,
                   4, 15, 56, 210, 252, 210, 56, 15,  4,
                   1,  6, 20,  56,  70,  56, 20,  6,  1,
                   0,  1,  6,  15,  20,  15,  6,  1,  0,
                   0,  0,  1,   4,   6,   4,  1,  0,  0];
    kernel.forEach((value, index) => {
        kernel[index] *= (1/3896);
    });
    convolution9x9(kernel, false);
}

// Filtro de aguçamento (nitidez) por Laplaciano 3x3:
function convolutionLaplace3x3() {
    let kernel = [0, -1,  0,
                 -1,  4, -1,
                  0, -1,  0];
    convolution3x3(kernel, false);
}

// Filtro de aguçamento (nitidez) por Laplaciano 5x5:
function convolutionLaplace5x5() {
    let kernel = [0,  0, -1,  0,  0,
                  0, -1, -2, -1,  0,
                 -1, -2, 16, -2, -1,
                  0, -1, -2, -1,  0,
                  0,  0, -1,  0,  0];
    convolution5x5(kernel, false);
}

// Filtro de aguçamento (nitidez) por Laplaciano 7x7:
function convolutionLaplace7x7() {
    let kernel = [0,  0, -1, -1, -1,  0,  0,
                  0, -1, -3, -3, -3, -1,  0,
                 -1, -3,  0,  7,  0, -3, -1,
                 -1, -3,  7, 24,  7, -3, -1,
                 -1, -3,  0,  7,  0, -3, -1,
                  0, -1, -3, -3, -3, -1,  0,
                  0,  0, -1, -1, -1,  0,  0];
    convolution7x7(kernel, false);
}

// Filtro de aguçamento (nitidez) por Laplaciano 9x9:
function convolutionLaplace9x9() {
    let kernel = [0,  0, -3, -2, -2, -2, -3,  0,  0,
                  0, -2, -3, -5, -5, -5, -3, -2,  0,
                 -3, -3, -5, -3,  0, -3, -5, -3, -3,
                 -2, -5, -3, 12, 23, 12, -3, -5, -2,
                 -2, -5,  0, 23, 40, 23,  0, -5, -2,
                 -2, -5, -3, 12, 23, 12, -3, -5, -2,
                 -3, -3, -5, -3,  0, -3, -5, -3, -3,
                  0, -2, -3, -5, -5, -5, -3, -2,  0,
                  0,  0, -3, -2, -2, -2, -3,  0,  0,];
    convolution9x9(kernel, false);
}

function convolutionSharpeningLaplace3x3() {
    let data2 = [...pixels.data];
    convolutionLaplace3x3();
    let copypixels = pixels; //copiar valores, novo array
    let data = copypixels.data;
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data[i] + data2[i];
        data[i+1] = data[i+1] + data2[i+1];
        data[i+2] = data[i+2] + data2[i+2];
    }
    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    // getFrequencies();
    // drawHistogram();
}

// Filtro de aguçamento (nitidez) por Laplaciano 5x5:
function convolutionSharpeningLaplace5x5() {
    let data2 = [...pixels.data];                       // Imagem original
    convolutionLaplace5x5();
    let copypixels = pixels;
    let data = copypixels.data;                         // Imagem depois do laplace
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data[i] + data2[i];
        data[i+1] = data[i+1] + data2[i+1];
        data[i+2] = data[i+2] + data2[i+2];
    }
    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    getFrequencies();
    drawHistogram();
}

// Filtro de aguçamento (nitidez) por Laplaciano 7x7:
function convolutionSharpeningLaplace7x7() {
    let data2 = [...pixels.data];                       // Imagem original
    convolutionLaplace7x7();
    let copypixels = pixels;
    let data = copypixels.data;                         // Imagem depois do laplace
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data[i] + data2[i];
        data[i+1] = data[i+1] + data2[i+1];
        data[i+2] = data[i+2] + data2[i+2];
    }
    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    getFrequencies();
    drawHistogram();
}

// Filtro de aguçamento (nitidez) por Laplaciano 9x9:
function convolutionSharpeningLaplace9x9() {
    let data2 = [...pixels.data];                       // Imagem original
    convolutionLaplace9x9();
    let copypixels = pixels;
    let data = copypixels.data;                         // Imagem depois do laplace
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data[i] + data2[i];
        data[i+1] = data[i+1] + data2[i+1];
        data[i+2] = data[i+2] + data2[i+2];
    }
    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    getFrequencies();
    drawHistogram();
}

function convolutionSharpeningHighboost3x3() {
    let data2 = [...pixels.data];
    convolutionGauss3x3();
    let copypixels = pixels; //copiar valores, novo array
    let data = copypixels.data;
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data2[i] + 3*(data2[i] - data[i]);
        data[i+1] = data2[i+1] + 3*(data2[i+1] - data[i+1]);
        data[i+2] = data2[i+2] + 3*(data2[i+2] - data[i+2]);
    }
    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    // getFrequencies();
    // drawHistogram();
}

// Filtro de aguçamento (nitidez) por highboost 5x5:
function convolutionSharpeningHighboost5x5() {
    let data2 = [...pixels.data];                        // Imagem original
    convolutionGauss5x5();
    let copypixels = pixels;
    let data = copypixels.data;                          // Imagem depois do gauss
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data2[i] + 3*(data2[i] - data[i]);
        data[i+1] = data2[i+1] + 3*(data2[i+1] - data[i+1]);
        data[i+2] = data2[i+2] + 3*(data2[i+2] - data[i+2]);
    }
    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    getFrequencies();
    drawHistogram();
}

// Filtro de aguçamento (nitidez) por highboost 7x7:
function convolutionSharpeningHighboost7x7() {
    let data2 = [...pixels.data];                        // Imagem original
    convolutionGauss7x7();
    let copypixels = pixels;
    let data = copypixels.data;                          // Imagem depois do gauss
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data2[i] + 3*(data2[i] - data[i]);
        data[i+1] = data2[i+1] + 3*(data2[i+1] - data[i+1]);
        data[i+2] = data2[i+2] + 3*(data2[i+2] - data[i+2]);
    }
    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    getFrequencies();
    drawHistogram();
}

// Filtro de aguçamento (nitidez) por highboost 9x9:
function convolutionSharpeningHighboost9x9() {
    let data2 = [...pixels.data];                        // Imagem original
    convolutionGauss9x9();
    let copypixels = pixels;
    let data = copypixels.data;                          // Imagem depois do gauss
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data2[i] + 3*(data2[i] - data[i]);
        data[i+1] = data2[i+1] + 3*(data2[i+1] - data[i+1]);
        data[i+2] = data2[i+2] + 3*(data2[i+2] - data[i+2]);
    }
    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    getFrequencies();
    drawHistogram();
}

// Filtro de detecção de bordas Sobel x 3x3:
function convolutionSobelx3x3() {
    let kernel = [-1, 0, 1,
                  -2, 0, 2,
                  -1, 0, 1];
    convolution3x3(kernel, false);
}

// Filtro de detecção de bordas Sobel y 3x3:
function convolutionSobely3x3() {
    let kernel = [-1, -2, -1,
                   0,  0,  0,
                   1,  2,  1];
    convolution3x3(kernel, false);
}

// Filtro de detecção de bordas Sobel x 5x5:
function convolutionSobelx5x5() {
    let kernel = [-2, -1, 0, 1, 2,
                  -2, -1, 0, 1, 2,
                  -4, -2, 0, 2, 4,
                  -2, -1, 0, 1, 2,
                  -2, -1, 0, 1, 2];
    convolution5x5(kernel, false);
}

// Filtro de detecção de bordas Sobel y 5x5:
function convolutionSobely5x5() {
    let kernel = [-2, -2, -4, -2, -2,
                  -1, -1, -2, -1, -1,
                   0,  0,  0,  0,  0,
                   1,  1,  2,  1,  1,
                   2,  2,  4,  2,  2,];
    convolution5x5(kernel, false);
}

// Filtro de detecção de bordas Sobel x 7x7:
function convolutionSobelx7x7() {
    let kernel = [-3, -2, -1, 0, 1, 2, 3,
                  -3, -2, -1, 0, 1, 2, 3,
                  -3, -2, -1, 0, 1, 2, 3,
                  -6, -4, -2, 0, 2, 4, 6,
                  -3, -2, -1, 0, 1, 2, 3,
                  -3, -2, -1, 0, 1, 2, 3,
                  -3, -2, -1, 0, 1, 2, 3,];
    convolution7x7(kernel, false);
}

// Filtro de detecção de bordas Sobel y 7x7:
function convolutionSobely7x7() {
    let kernel = [-3, -3, -3, -6, -3, -3, -3,
                  -2, -2, -2, -4, -2, -2, -2,
                  -1, -1, -1, -2, -1, -1, -1,
                   0,  0,  0,  0,  0,  0,  0,
                   1,  1,  1,  2,  1,  1,  1,
                   2,  2,  2,  4,  2,  2,  2,
                   3,  3,  3,  6,  3,  3,  3];
    convolution7x7(kernel, false);
}

// Filtro de detecção de bordas Sobel x 9x9:
function convolutionSobelx9x9() {
    let kernel = [-4, -3, -2, -1, 0, 1, 2, 3, 4,
                  -4, -3, -2, -1, 0, 1, 2, 3, 4,
                  -4, -3, -2, -1, 0, 1, 2, 3, 4,
                  -4, -3, -2, -1, 0, 1, 2, 3, 4,
                  -8, -6, -4, -2, 0, 2, 4, 6, 8,
                  -4, -3, -2, -1, 0, 1, 2, 3, 4,
                  -4, -3, -2, -1, 0, 1, 2, 3, 4,
                  -4, -3, -2, -1, 0, 1, 2, 3, 4,
                  -4, -3, -2, -1, 0, 1, 2, 3, 4];
    convolution9x9(kernel, false);
}

// Filtro de detecção de bordas Sobel y 9x9:
function convolutionSobely9x9() {
    let kernel = [-4, -4, -4, -4, -8, -4, -4, -4, -4, 
                  -3, -3, -3, -3, -6, -3, -3, -3, -3,
                  -2, -2, -2, -2, -4, -2, -2, -2, -2,
                  -1, -1, -1, -1, -2, -1, -1, -1, -1,
                   0,  0,  0,  0,  0,  0,  0,  0,  0,
                   1,  1,  1,  1,  2,  1,  1,  1,  1,
                   2,  2,  2,  2,  4,  2,  2,  2,  2,
                   3,  3,  3,  3,  6,  3,  3,  3,  3,
                   4,  4,  4,  4,  8,  4,  4,  4,  4];
    convolution9x9(kernel, false);
}

// Filtro de detecção de bordas por gradiente 3x3:
function convolutionGradient3x3() {
    let data2 = [...pixels.data];                        // Imagem original
    convolutionSobelx3x3();
    let data3 = [...pixels.data];                        // Imagem depois do sobel x
    let copypixels = pixels;
    let data = copypixels.data;                          
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data2[i];
        data[i+1] = data2[i+1];
        data[i+2] = data2[i+2];
    }
    convolutionSobely3x3();
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data[i] + data3[i];
        data[i+1] = data[i+1] + data3[i+1];
        data[i+2] = data[i+2] + data3[i+2];
    }
}

// Filtro de detecção de bordas por gradiente 5x5:
function convolutionGradient5x5() {
    let data2 = [...pixels.data];                        // Imagem original
    convolutionSobelx5x5();
    let data3 = [...pixels.data];                        // Imagem depois do sobel x
    let copypixels = pixels;
    let data = copypixels.data;                          
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data2[i];
        data[i+1] = data2[i+1];
        data[i+2] = data2[i+2];
    }
    convolutionSobely5x5();
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data[i] + data3[i];
        data[i+1] = data[i+1] + data3[i+1];
        data[i+2] = data[i+2] + data3[i+2];
    }
}

// Filtro de detecção de bordas por gradiente 7x7:
function convolutionGradient7x7() {
    let data2 = [...pixels.data];                        // Imagem original
    convolutionSobelx7x7();
    let data3 = [...pixels.data];                        // Imagem depois do sobel x
    let copypixels = pixels;
    let data = copypixels.data;                          
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data2[i];
        data[i+1] = data2[i+1];
        data[i+2] = data2[i+2];
    }
    convolutionSobely7x7();
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data[i] + data3[i];
        data[i+1] = data[i+1] + data3[i+1];
        data[i+2] = data[i+2] + data3[i+2];
    }
}

// Filtro de detecção de bordas por gradiente 9x9:
function convolutionGradient9x9() {
    let data2 = [...pixels.data];                        // Imagem original
    convolutionSobelx9x9();
    let data3 = [...pixels.data];                        // Imagem depois do sobel x
    let copypixels = pixels;
    let data = copypixels.data;                          
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data2[i];
        data[i+1] = data2[i+1];
        data[i+2] = data2[i+2];
    }
    convolutionSobely9x9();
    for (let i = 0; i < data.length; i = i + 4){
        data[i] = data[i] + data3[i];
        data[i+1] = data[i+1] + data3[i+1];
        data[i+2] = data[i+2] + data3[i+2];
    }
}

// 3x3-----------------------------------------

function convolution3x3(kernel, mediana) {
    let copypixels = pixels; //copiar valores, novo array
    let data = copypixels.data;
    let data2 = [...pixels.data];
    /*
    pixel1   pixel2          pixel3
    pixel4   pixel5(atual)   pixel6
    pixel7   pixel8          pixel9
    */

    let pixel1r, pixel1g, pixel1b, pixel2r, pixel2g, pixel2b, pixel3r, pixel3g, pixel3b;
    let pixel4r, pixel4g, pixel4b, pixel5r, pixel5g, pixel5b, pixel6r, pixel6g, pixel6b;
    let pixel7r, pixel7g, pixel7b, pixel8r, pixel8g, pixel8b, pixel9r, pixel9g, pixel9b;

    // Laço que define os valores dos pixels 1 a 9 baseado na imagem:
    for (i = 0; i < data.length; i = i + 4) {
    
        // TRATANDO OS PIXELS 1 A 3:
        // Se estiver na primeira linha da imagem, pixels 1 a 3 serão zerados:
        if (i<canvas.width*4) {
            pixel1r = pixel1g = pixel1b = pixel2r = pixel2g = pixel2b = pixel3r = pixel3g = pixel3b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a primeira:
        else {
            // Pixel 1:
            // Se estiver na primeira coluna da imagem, pixels 1 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel1r = pixel1g = pixel1b = 0;
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel1r = data2[i-4-canvas.width*4];
                pixel1g = data2[i+1-4-canvas.width*4];
                pixel1b = data2[i+2-4-canvas.width*4];
            }
            // Pixel 2:
            pixel2r = data2[i-canvas.width*4];
            pixel2g = data2[i+1-canvas.width*4];
            pixel2b = data2[i+2-canvas.width*4];
            // Pixel 3:
            // Se estiver na ultima coluna da imagem, pixels 3 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel3r = pixel3g = pixel3b = 0;
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel3r = data2[i+4-canvas.width*4];
                pixel3g = data2[i+1+4-canvas.width*4];
                pixel3b = data2[i+2+4-canvas.width*4];
            }
        }

        // TRATANDO OS PIXELS 4 A 6:
        // Pixel 4:
        // Se estiver na primeira coluna da imagem, pixels 4 serão zerados:
        if (i%(canvas.width*4)===0) {
            pixel4r = pixel4g = pixel4b = 0;
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel4r = data2[i-4];
            pixel4g = data2[i+1-4];
            pixel4b = data2[i+2-4];
        }
        // Pixel 5:
        pixel5r = data2[i];
        pixel5g = data2[i+1];
        pixel5b = data2[i+2];
        // Pixel 6:
        // Se estiver na ultima coluna da imagem, pixels 6 serão zerados:
        if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
            pixel6r = pixel6g = pixel6b = 0;
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel6r = data2[i+4];
            pixel6g = data2[i+1+4];
            pixel6b = data2[i+2+4];
        }

        // TRATANDO OS PIXELS 7 A 9:
        // Se estiver na última linha da imagem, pixels 7 a 9 serão zerados:
        if (i>(4*canvas.width)*(canvas.height-1)) {
            pixel7r = pixel7g = pixel7b = pixel8r = pixel8g = pixel8b = pixel9r = pixel9g = pixel9b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a última:
        else {
            // Pixel 7:
            // Se estiver na primeira coluna da imagem, pixels 7 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel7r = pixel7g = pixel7b = 0;
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel7r = data2[i-4+canvas.width*4];
                pixel7g = data2[i+1-4+canvas.width*4];
                pixel7b = data2[i+2-4+canvas.width*4];
            }
            // Pixel 8:
            pixel8r = data2[i+canvas.width*4];
            pixel8g = data2[i+1+canvas.width*4];
            pixel8b = data2[i+2+canvas.width*4];
            // Pixel 9:
            // Se estiver na última coluna da imagem, pixels 9 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel9r = pixel9g = pixel9b = 0;
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel9r = data2[i+4+canvas.width*4];
                pixel9g = data2[i+1+4+canvas.width*4];
                pixel9b = data2[i+2+4+canvas.width*4];
            }
        }

        if (mediana) {
            const median = arr => {
                const mid = Math.floor(arr.length / 2),
                  nums = [...arr].sort((a, b) => a - b);
                return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
            };
            const arrayr = new Array(pixel1r, pixel2r, pixel3r, pixel4r, pixel5r, pixel6r, pixel7r, pixel8r, pixel9r);
            const arrayg = new Array(pixel1g, pixel2g, pixel3g, pixel4g, pixel5g, pixel6g, pixel7g, pixel8g, pixel9g);
            const arrayb = new Array(pixel1b, pixel2b, pixel3b, pixel4b, pixel5b, pixel6b, pixel7b, pixel8b, pixel9b);
            let medianar = median(arrayr);
            let medianag = median(arrayg);
            let medianab = median(arrayb);
            data[i] = medianar;
            data[i + 1] = medianag;
            data[i + 2] = medianab;
        }
        else {
            // Multiplica os pixels 1 a 9 pelo kernel 3x3:
            data[i] = kernel[0]*pixel1r + kernel[1]*pixel2r + kernel[2]*pixel3r
                    + kernel[3]*pixel4r + kernel[4]*pixel5r + kernel[5]*pixel6r
                    + kernel[6]*pixel7r + kernel[7]*pixel8r + kernel[8]*pixel9r;

            data[i + 1] = kernel[0]*pixel1g + kernel[1]*pixel2g + kernel[2]*pixel3g
                        + kernel[3]*pixel4g + kernel[4]*pixel5g + kernel[5]*pixel6g
                        + kernel[6]*pixel7g + kernel[7]*pixel8g + kernel[8]*pixel9g;

            data[i + 2] = kernel[0]*pixel1b + kernel[1]*pixel2b + kernel[2]*pixel3b
                        + kernel[3]*pixel4b + kernel[4]*pixel5b + kernel[5]*pixel6b
                        + kernel[6]*pixel7b + kernel[7]*pixel8b + kernel[8]*pixel9b;
        }
    }

    let maior = maxVal(data);
    let menor = minVal(data);
    let maior2 = maxVal(data2);
    let menor2 = minVal(data2);


    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    // getFrequencies();
    // drawHistogram();
}

function maxVal(array){
    let indexOfMax = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > array[indexOfMax]){
            indexOfMax = i;
        }
    }
    return array[indexOfMax];
}
function minVal(array){
    let indexOfMax = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] < array[indexOfMax]){
            indexOfMax = i;
        }
    }
    return array[indexOfMax];
}


// 5x5-----------------------------------------

function convolution5x5(kernel, mediana) {
    let copypixels = pixels; //copiar valores, novo array
    let data = copypixels.data;
    let data2 = [...pixels.data];
    /*
    pixel1   pixel2   pixel3   pixel4   pixel5
    pixel6   pixel7   pixel8   pixel9   pixel10
    pixel11  pixel12  PIXEL13  pixel14  pixel15
    pixel16  pixel17  pixel18  pixel19  pixel20
    pixel21  pixel22  pixel23  pixel24  pixel25
    */

    let pixel1r, pixel1g, pixel1b, pixel2r, pixel2g, pixel2b, pixel3r, pixel3g, pixel3b, pixel4r, pixel4g, pixel4b, pixel5r, pixel5g, pixel5b;
    let pixel6r, pixel6g, pixel6b, pixel7r, pixel7g, pixel7b, pixel8r, pixel8g, pixel8b, pixel9r, pixel9g, pixel9b, pixel10r, pixel10g, pixel10b;
    let pixel11r, pixel11g, pixel11b, pixel12r, pixel12g, pixel12b, pixel13r, pixel13g, pixel13b, pixel14r, pixel14g, pixel14b, pixel15r, pixel15g, pixel15b;
    let pixel16r, pixel16g, pixel16b, pixel17r, pixel17g, pixel17b, pixel18r, pixel18g, pixel18b, pixel19r, pixel19g, pixel19b, pixel20r, pixel20g, pixel20b;
    let pixel21r, pixel21g, pixel21b, pixel22r, pixel22g, pixel22b, pixel23r, pixel23g, pixel23b, pixel24r, pixel24g, pixel24b, pixel25r, pixel25g, pixel25b;

    // Laço que define os valores dos pixels 1 a 25 baseado na imagem:
    for (i = 0; i < data.length; i = i + 4) {
        
        // TRATANDO OS PIXELS 1 A 5:
        // Se estiver na primeira linha da imagem, pixels 1 a 5 serão zerados:
        if (i<canvas.width*4) {
            pixel1r = pixel1g = pixel1b = pixel2r = pixel2g = pixel2b = pixel3r = pixel3g = pixel3b = pixel4r = pixel4g = pixel4b = pixel5r = pixel5g = pixel5b = 0;
        }
        // Se estiver na segunda linha da imagem, pixels 1 a 5 serão zerados:
        else if (i<canvas.width*4*2) {
            pixel1r = pixel1g = pixel1b = pixel2r = pixel2g = pixel2b = pixel3r = pixel3g = pixel3b = pixel4r = pixel4g = pixel4b = pixel5r = pixel5g = pixel5b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a primeira e segunda:
        else {
            // Pixels 1 e 2:
            // Se estiver na primeira coluna da imagem, pixels 1 e 2 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel1r = pixel1g = pixel1b = pixel2r = pixel2g = pixel2b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 1 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel1r = pixel1g = pixel1b = 0;
                pixel2r = data2[i-4-canvas.width*4*2];
                pixel2g = data2[i-3-canvas.width*4*2];
                pixel2b = data2[i-2-canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel1r = data2[i-4-4-canvas.width*4*2];
                pixel1g = data2[i-3-4-canvas.width*4*2];
                pixel1b = data2[i-2-4-canvas.width*4*2];
                pixel2r = data2[i-4-canvas.width*4*2];
                pixel2g = data2[i-3-canvas.width*4*2];
                pixel2b = data2[i-2-canvas.width*4*2];
            }
            // Pixel 3:
            pixel3r = data2[i-canvas.width*4*2];
            pixel3g = data2[i+1-canvas.width*4*2];
            pixel3b = data2[i+2-canvas.width*4*2];
            // Pixels 4 e 5:
            // Se estiver na ultima coluna da imagem, pixels 4 e 5 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel4r = pixel4g = pixel4b = pixel5r = pixel5g = pixel5b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 5 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel5r = pixel5g = pixel5b = 0;
                pixel4r = data2[i+4-canvas.width*4*2];
                pixel4g = data2[i+5-canvas.width*4*2];
                pixel4b = data2[i+6-canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel4r = data2[i+4-canvas.width*4*2];
                pixel4g = data2[i+5-canvas.width*4*2];
                pixel4b = data2[i+6-canvas.width*4*2];
                pixel5r = data2[i+4+4-canvas.width*4*2];
                pixel5g = data2[i+5+4-canvas.width*4*2];
                pixel5b = data2[i+6+4-canvas.width*4*2];
            }
        }

        // TRATANDO OS PIXELS 6 A 10:
        // Se estiver na primeira linha da imagem, pixels 6 a 10 serão zerados:
        if (i<canvas.width*4) {
            pixel6r = pixel6g = pixel6b = pixel7r = pixel7g = pixel7b = pixel8r = pixel8g = pixel8b = pixel9r = pixel9g = pixel9b = pixel10r = pixel10g = pixel10b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a primeira:
        else {
            // Pixels 6 e 7:
            // Se estiver na primeira coluna da imagem, pixels 6 e 7 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel6r = pixel6g = pixel6b = pixel7r = pixel7g = pixel7b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 6 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel6r = pixel6g = pixel6b = 0;
                pixel7r = data2[i-4-canvas.width*4];
                pixel7g = data2[i-3-canvas.width*4];
                pixel7b = data2[i-2-canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel6r = data2[i-4-4-canvas.width*4];
                pixel6g = data2[i-3-4-canvas.width*4];
                pixel6b = data2[i-2-4-canvas.width*4];
                pixel7r = data2[i-4-canvas.width*4];
                pixel7g = data2[i-3-canvas.width*4];
                pixel7b = data2[i-2-canvas.width*4];
            }
            // Pixel 8:
            pixel8r = data2[i-canvas.width*4];
            pixel8g = data2[i+1-canvas.width*4];
            pixel8b = data2[i+2-canvas.width*4];
            // Pixels 9 e 10:
            // Se estiver na ultima coluna da imagem, pixels 9 e 10 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel9r = pixel9g = pixel9b = pixel10r = pixel10g = pixel10b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 10 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel10r = pixel10g = pixel10b = 0;
                pixel9r = data2[i+4-canvas.width*4];
                pixel9g = data2[i+5-canvas.width*4];
                pixel9b = data2[i+6-canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel9r = data2[i+4-canvas.width*4];
                pixel9g = data2[i+5-canvas.width*4];
                pixel9b = data2[i+6-canvas.width*4];
                pixel10r = data2[i+4+4-canvas.width*4];
                pixel10g = data2[i+5+4-canvas.width*4];
                pixel10b = data2[i+6+4-canvas.width*4];
            }
        }

        // TRATANDO OS PIXELS 11 A 15:
        // Pixels 11 e 12:
        // Se estiver na primeira coluna da imagem, pixels 11 e 12 serão zerados:
        if (i%(canvas.width*4)===0) {
            pixel11r = pixel11g = pixel11b = pixel12r = pixel12g = pixel12b = 0;
        }
        // Se estiver na segunda coluna da imagem, pixels 11 serão zerados:
        else if (i%(canvas.width*4)===4) {
            pixel11r = pixel11g = pixel11b = 0;
            pixel12r = data2[i-4];
            pixel12g = data2[i-3];
            pixel12b = data2[i-2];
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel11r = data2[i-4-4];
            pixel11g = data2[i-3-4];
            pixel11b = data2[i-2-4];
            pixel12r = data2[i-4];
            pixel12g = data2[i-3];
            pixel12b = data2[i-2];
        }
        // Pixels 13:
        pixel13r = data2[i];
        pixel13g = data2[i+1];
        pixel13b = data2[i+2];
        // Pixels 14 e 15:
        // Se estiver na ultima coluna da imagem, pixels 14 e 15 serão zerados:
        if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
            pixel14r = pixel14g = pixel14b = pixel15r = pixel15g = pixel15b = 0;
        }
        // Se estiver na penúltima coluna da imagem, pixels 15 serão zerados:
        else if (i%(canvas.width*4)===(canvas.width*4)-5) {
            pixel15r = pixel15g = pixel15b = 0;
            pixel14r = data2[i+4];
            pixel14g = data2[i+5];
            pixel14b = data2[i+6];
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel14r = data2[i+4];
            pixel14g = data2[i+5];
            pixel14b = data2[i+6];
            pixel15r = data2[i+4+4];
            pixel15g = data2[i+5+4];
            pixel15b = data2[i+6+4];
        }

        // TRATANDO OS PIXELS 16 A 20:
        // Se estiver na última linha da imagem, pixels 16 a 20 serão zerados:
        if (i>(4*canvas.width)*(canvas.height-1)) {
            pixel16r = pixel16g = pixel16b = pixel17r = pixel17g = pixel17b = pixel18r = pixel18g = pixel18b = pixel19r = pixel19g = pixel19b = pixel20r = pixel20g = pixel20b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a última:
        else {
            // Pixels 16 e 17:
            // Se estiver na primeira coluna da imagem, pixels 16 e 17 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel16r = pixel16g = pixel16b = pixel17r = pixel17g = pixel17b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 16 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel16r = pixel16g = pixel16b = 0;
                pixel17r = data2[i-4+canvas.width*4];
                pixel17g = data2[i-3+canvas.width*4];
                pixel17b = data2[i-2+canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel6r = data2[i-4-4+canvas.width*4];
                pixel6g = data2[i-3-4+canvas.width*4];
                pixel6b = data2[i-2-4+canvas.width*4];
                pixel7r = data2[i-4+canvas.width*4];
                pixel7g = data2[i-3+canvas.width*4];
                pixel7b = data2[i-2+canvas.width*4];
            }
            // Pixel 18:
            pixel18r = data2[i+canvas.width*4];
            pixel18g = data2[i+1+canvas.width*4];
            pixel18b = data2[i+2+canvas.width*4];
            // Pixels 19 e 20:
            // Se estiver na última coluna da imagem, pixels 19 e 20 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel19r = pixel19g = pixel19b = pixel20r = pixel20g = pixel20b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 20 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-5) {
                pixel20r = pixel20g = pixel20b = 0;
                pixel19r = data2[i+4+canvas.width*4];
                pixel19g = data2[i+5+canvas.width*4];
                pixel19b = data2[i+6+canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel19r = data2[i+4+canvas.width*4];
                pixel19g = data2[i+5+canvas.width*4];
                pixel19b = data2[i+6+canvas.width*4];
                pixel20r = data2[i+4+4+canvas.width*4];
                pixel20g = data2[i+5+4+canvas.width*4];
                pixel20b = data2[i+6+4+canvas.width*4];
            }
        }

        // TRATANDO OS PIXELS 21 A 25:
        // Se estiver na última linha da imagem, pixels 21 a 25 serão zerados:
        if (i>(4*canvas.width)*(canvas.height-1)) {
            pixel21r = pixel21g = pixel21b = pixel22r = pixel22g = pixel22b = pixel23r = pixel23g = pixel23b = pixel24r = pixel24g = pixel24b = pixel25r = pixel25g = pixel25b = 0;
        }
        // Se estiver na penúltima linha da imagem, pixels 21 a 25 serão zerados:
        else if (i>(4*canvas.width)*(canvas.height-2)) {
            pixel21r = pixel21g = pixel21b = pixel22r = pixel22g = pixel22b = pixel23r = pixel23g = pixel23b = pixel24r = pixel24g = pixel24b = pixel25r = pixel25g = pixel25b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a penúltima e última:
        else {
            // Pixels 21 e 22:
            // Se estiver na primeira coluna da imagem, pixels 21 e 22 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel21r = pixel21g = pixel21b = pixel22r = pixel22g = pixel22b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 1 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel21r = pixel21g = pixel21b = 0;
                pixel22r = data2[i-4+canvas.width*4*2];
                pixel22g = data2[i-3+canvas.width*4*2];
                pixel22b = data2[i-2+canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel21r = data2[i-4-4+canvas.width*4*2];
                pixel21g = data2[i-3-4+canvas.width*4*2];
                pixel21b = data2[i-2-4+canvas.width*4*2];
                pixel22r = data2[i-4+canvas.width*4*2];
                pixel22g = data2[i-3+canvas.width*4*2];
                pixel22b = data2[i-2+canvas.width*4*2];
            }
            // Pixel 23:
            pixel23r = data2[i+canvas.width*4*2];
            pixel23g = data2[i+1+canvas.width*4*2];
            pixel23b = data2[i+2+canvas.width*4*2];
            // Pixels 24 e 25:
            // Se estiver na ultima coluna da imagem, pixels 24 e 25 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel24r = pixel24g = pixel24b = pixel25r = pixel25g = pixel25b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 25 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel25r = pixel25g = pixel25b = 0;
                pixel24r = data2[i+4+canvas.width*4*2];
                pixel24g = data2[i+5+canvas.width*4*2];
                pixel24b = data2[i+6+canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel24r = data2[i+4+canvas.width*4*2];
                pixel24g = data2[i+5+canvas.width*4*2];
                pixel24b = data2[i+6+canvas.width*4*2];
                pixel25r = data2[i+4+4+canvas.width*4*2];
                pixel25g = data2[i+5+4+canvas.width*4*2];
                pixel25b = data2[i+6+4+canvas.width*4*2];
            }
        }

        if (mediana) {
            const median = arr => {
                const mid = Math.floor(arr.length / 2),
                  nums = [...arr].sort((a, b) => a - b);
                return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
            };
            const arrayr = new Array(pixel1r, pixel2r, pixel3r, pixel4r, pixel5r, pixel6r, pixel7r, pixel8r, pixel9r, pixel10r,
                                     pixel11r, pixel12r, pixel13r, pixel14r, pixel15r, pixel16r, pixel17r, pixel18r, pixel19r, pixel20r,
                                     pixel21r, pixel22r, pixel23r, pixel24r, pixel25r);
            const arrayg = new Array(pixel1g, pixel2g, pixel3g, pixel4g, pixel5g, pixel6g, pixel7g, pixel8g, pixel9g, pixel10g,
                                     pixel11g, pixel12g, pixel13g, pixel14g, pixel15g, pixel16g, pixel17g, pixel18g, pixel19g, pixel20g,
                                     pixel21g, pixel22g, pixel23g, pixel24g, pixel25g);
            const arrayb = new Array(pixel1b, pixel2b, pixel3b, pixel4b, pixel5b, pixel6b, pixel7b, pixel8b, pixel9b, pixel10b,
                                     pixel11b, pixel12b, pixel13b, pixel14b, pixel15b, pixel16b, pixel17b, pixel18b, pixel19b, pixel20b,
                                     pixel21b, pixel22b, pixel23b, pixel24b, pixel25b);
            let medianar = median(arrayr);
            let medianag = median(arrayg);
            let medianab = median(arrayb);
            data[i] = medianar;
            data[i + 1] = medianag;
            data[i + 2] = medianab;
        }
        else {
            // Multiplica os pixels 1 a 25 pelo kernel 5x5:
            data[i] = kernel[0]*pixel1r + kernel[1]*pixel2r + kernel[2]*pixel3r + kernel[3]*pixel4r + kernel[4]*pixel5r
                    + kernel[5]*pixel6r + kernel[6]*pixel7r + kernel[7]*pixel8r + kernel[8]*pixel9r + kernel[9]*pixel10r
                    + kernel[10]*pixel11r + kernel[11]*pixel12r + kernel[12]*pixel13r + kernel[13]*pixel14r + kernel[14]*pixel15r
                    + kernel[15]*pixel16r + kernel[16]*pixel17r + kernel[17]*pixel18r + kernel[18]*pixel19r + kernel[19]*pixel20r
                    + kernel[20]*pixel21r + kernel[21]*pixel22r + kernel[22]*pixel23r + kernel[23]*pixel24r + kernel[24]*pixel25r;

            data[i + 1] = kernel[0]*pixel1g + kernel[1]*pixel2g + kernel[2]*pixel3g + kernel[3]*pixel4g + kernel[4]*pixel5g
                        + kernel[5]*pixel6g + kernel[6]*pixel7g + kernel[7]*pixel8g + kernel[8]*pixel9g + kernel[9]*pixel10g
                        + kernel[10]*pixel11g + kernel[11]*pixel12g + kernel[12]*pixel13g + kernel[13]*pixel14g + kernel[14]*pixel15g
                        + kernel[15]*pixel16g + kernel[16]*pixel17g + kernel[17]*pixel18g + kernel[18]*pixel19g + kernel[19]*pixel20g
                        + kernel[20]*pixel21g + kernel[21]*pixel22g + kernel[22]*pixel23g + kernel[23]*pixel24g + kernel[24]*pixel25g;

            data[i + 2] = kernel[0]*pixel1b + kernel[1]*pixel2b + kernel[2]*pixel3b + kernel[3]*pixel4b + kernel[4]*pixel5b
                        + kernel[5]*pixel6b + kernel[6]*pixel7b + kernel[7]*pixel8b + kernel[8]*pixel9b + kernel[9]*pixel10b
                        + kernel[10]*pixel11b + kernel[11]*pixel12b + kernel[12]*pixel13b + kernel[13]*pixel14b + kernel[14]*pixel15b
                        + kernel[15]*pixel16b + kernel[16]*pixel17b + kernel[17]*pixel18b + kernel[18]*pixel19b + kernel[19]*pixel20b
                        + kernel[20]*pixel21b + kernel[21]*pixel22b + kernel[22]*pixel23b + kernel[23]*pixel24b + kernel[24]*pixel25b;
        }
    }

    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    // getFrequencies();
    // drawHistogram();
}

// 7x7 -----------------------------------------


function convolution7x7(kernel, mediana) {
    let copypixels = pixels; //copiar valores, novo array
    let data = copypixels.data;
    let data2 = [...pixels.data];
    /*
    pixel1   pixel2   pixel3   pixel4   pixel5   pixel6   pixel7
    pixel8   pixel9   pixel10  pixel11  pixel12  pixel13  pixel14
    pixel15  pixel16  pixel17  pixel18  pixel19  pixel20  pixel21
    pixel22  pixel23  pixel24  PIXEL25  pixel26  pixel27  pixel28
    pixel29  pixel30  pixel31  pixel32  pixel33  pixel34  pixel35
    pixel36  pixel37  pixel38  pixel39  pixel40  pixel41  pixel42
    pixel43  pixel44  pixel45  pixel46  pixel47  pixel48  pixel49
    */

    let pixel1r, pixel1g, pixel1b, pixel2r, pixel2g, pixel2b, pixel3r, pixel3g, pixel3b, pixel4r, pixel4g, pixel4b, pixel5r, pixel5g, pixel5b, pixel6r, pixel6g, pixel6b, pixel7r, pixel7g, pixel7b;
    let pixel8r, pixel8g, pixel8b, pixel9r, pixel9g, pixel9b, pixel10r, pixel10g, pixel10b, pixel11r, pixel11g, pixel11b, pixel12r, pixel12g, pixel12b, pixel13r, pixel13g, pixel13b, pixel14r, pixel14g, pixel14b;
    let pixel15r, pixel15g, pixel15b, pixel16r, pixel16g, pixel16b, pixel17r, pixel17g, pixel17b, pixel18r, pixel18g, pixel18b, pixel19r, pixel19g, pixel19b, pixel20r, pixel20g, pixel20b, pixel21r, pixel21g, pixel21b;
    let pixel22r, pixel22g, pixel22b, pixel23r, pixel23g, pixel23b, pixel24r, pixel24g, pixel24b, pixel25r, pixel25g, pixel25b, pixel26r, pixel26g, pixel26b, pixel27r, pixel27g, pixel27b, pixel28r, pixel28g, pixel28b;
    let pixel29r, pixel29g, pixel29b, pixel30r, pixel30g, pixel30b, pixel31r, pixel31g, pixel31b, pixel32r, pixel32g, pixel32b, pixel33r, pixel33g, pixel33b, pixel34r, pixel34g, pixel34b, pixel35r, pixel35g, pixel35b;
    let pixel36r, pixel36g, pixel36b, pixel37r, pixel37g, pixel37b, pixel38r, pixel38g, pixel38b, pixel39r, pixel39g, pixel39b, pixel40r, pixel40g, pixel40b, pixel41r, pixel41g, pixel41b, pixel42r, pixel42g, pixel42b;
    let pixel43r, pixel43g, pixel43b, pixel44r, pixel44g, pixel44b, pixel45r, pixel45g, pixel45b, pixel46r, pixel46g, pixel46b, pixel47r, pixel47g, pixel47b, pixel48r, pixel48g, pixel48b, pixel49r, pixel49g, pixel49b;

    // Laço que define os valores dos pixels 1 a 49 baseado na imagem:
    for (i = 0; i < data.length; i = i + 4) {
        
        // TRATANDO OS PIXELS 1 A 7:
        // Se estiver na primeira, segunda ou terceira linha da imagem, pixels 1 a 7 serão zerados:
        if (i<canvas.width*4*3) {
            pixel1r = pixel1g = pixel1b = pixel2r = pixel2g = pixel2b = pixel3r = pixel3g = pixel3b = pixel4r = pixel4g = pixel4b = pixel5r = pixel5g = pixel5b = pixel6r = pixel6g = pixel6b = pixel7r = pixel7g = pixel7b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a primeira, segunda e terceira:
        else {
            // Pixels 1, 2 e 3:
            // Se estiver na primeira coluna da imagem, pixels 1, 2 e 3 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel1r = pixel1g = pixel1b = pixel2r = pixel2g = pixel2b = pixel3r = pixel3g = pixel3b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 1 e 2 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel1r = pixel1g = pixel1b = pixel2r = pixel2g = pixel2b = 0;
                pixel3r = data2[i-4-canvas.width*4*3];
                pixel3g = data2[i-3-canvas.width*4*3];
                pixel3b = data2[i-2-canvas.width*4*3];
            }
            // Se estiver na terceira coluna da imagem, pixels 1 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel1r = pixel1g = pixel1b = 0;
                pixel2r = data2[i-4-4-canvas.width*4*3];
                pixel2g = data2[i-3-4-canvas.width*4*3];
                pixel2b = data2[i-2-4-canvas.width*4*3];
                pixel3r = data2[i-4-canvas.width*4*3];
                pixel3g = data2[i-3-canvas.width*4*3];
                pixel3b = data2[i-2-canvas.width*4*3];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel1r = data2[i-4-4-4-canvas.width*4*3];
                pixel1g = data2[i-3-4-4-canvas.width*4*3];
                pixel1b = data2[i-2-4-4-canvas.width*4*3];
                pixel2r = data2[i-4-4-canvas.width*4*3];
                pixel2g = data2[i-3-4-canvas.width*4*3];
                pixel2b = data2[i-2-4-canvas.width*4*3];
                pixel3r = data2[i-4-canvas.width*4*3];
                pixel3g = data2[i-3-canvas.width*4*3];
                pixel3b = data2[i-2-canvas.width*4*3];
            }
            // Pixel 4:
            pixel4r = data2[i-canvas.width*4*3];
            pixel4g = data2[i+1-canvas.width*4*3];
            pixel4b = data2[i+2-canvas.width*4*3];
            // Pixels 5, 6 e 7:
            // Se estiver na ultima coluna da imagem, pixels 5, 6 e 7 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel5r = pixel5g = pixel5b = pixel6r = pixel6g = pixel6b = pixel7r = pixel7g = pixel7b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 6 e 7 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel6r = pixel6g = pixel6b = pixel7r = pixel7g = pixel7b = 0;
                pixel5r = data2[i+4-canvas.width*4*3];
                pixel5g = data2[i+5-canvas.width*4*3];
                pixel5b = data2[i+6-canvas.width*4*3];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 7 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel7r = pixel7g = pixel7b = 0;
                pixel5r = data2[i+4-canvas.width*4*3];
                pixel5g = data2[i+5-canvas.width*4*3];
                pixel5b = data2[i+6-canvas.width*4*3];
                pixel6r = data2[i+4+4-canvas.width*4*3];
                pixel6g = data2[i+5+4-canvas.width*4*3];
                pixel6b = data2[i+6+4-canvas.width*4*3];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel5r = data2[i+4-canvas.width*4*3];
                pixel5g = data2[i+5-canvas.width*4*3];
                pixel5b = data2[i+6-canvas.width*4*3];
                pixel6r = data2[i+4+4-canvas.width*4*3];
                pixel6g = data2[i+5+4-canvas.width*4*3];
                pixel6b = data2[i+6+4-canvas.width*4*3];
                pixel7r = data2[i+4+4+4-canvas.width*4*3];
                pixel7g = data2[i+5+4+4-canvas.width*4*3];
                pixel7b = data2[i+6+4+4-canvas.width*4*3];
            }
        }

        // TRATANDO OS PIXELS 8 A 14:
        // Se estiver na primeira ou segunda linha da imagem, pixels 8 a 14 serão zerados:
        if (i<canvas.width*4*2) {
            pixel8r = pixel8g = pixel8b = pixel9r = pixel9g = pixel9b = pixel10r = pixel10g = pixel10b = pixel11r = pixel11g = pixel11b = pixel12r = pixel12g = pixel12b = pixel13r = pixel13g = pixel13b = pixel14r = pixel14g = pixel14b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a primeira e segunda:
        else {
            // Pixels 8, 9 e 10:
            // Se estiver na primeira coluna da imagem, pixels 8, 9 e 10 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel8r = pixel8g = pixel8b = pixel9r = pixel9g = pixel9b = pixel10r = pixel10g = pixel10b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 8 e 9 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel8r = pixel8g = pixel8b = pixel9r = pixel9g = pixel9b = 0;
                pixel10r = data2[i-4-canvas.width*4*2];
                pixel10g = data2[i-3-canvas.width*4*2];
                pixel10b = data2[i-2-canvas.width*4*2];
            }
            // Se estiver na terceira coluna da imagem, pixels 8 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel8r = pixel8g = pixel8b = 0;
                pixel9r = data2[i-4-4-canvas.width*4*2];
                pixel9g = data2[i-3-4-canvas.width*4*2];
                pixel9b = data2[i-2-4-canvas.width*4*2];
                pixel10r = data2[i-4-canvas.width*4*2];
                pixel10g = data2[i-3-canvas.width*4*2];
                pixel10b = data2[i-2-canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel8r = data2[i-4-4-4-canvas.width*4*2];
                pixel8g = data2[i-3-4-4-canvas.width*4*2];
                pixel8b = data2[i-2-4-4-canvas.width*4*2];
                pixel9r = data2[i-4-4-canvas.width*4*2];
                pixel9g = data2[i-3-4-canvas.width*4*2];
                pixel9b = data2[i-2-4-canvas.width*4*2];
                pixel10r = data2[i-4-canvas.width*4*2];
                pixel10g = data2[i-3-canvas.width*4*2];
                pixel10b = data2[i-2-canvas.width*4*2];
            }
            // Pixel 11:
            pixel11r = data2[i-canvas.width*4*2];
            pixel11g = data2[i+1-canvas.width*4*2];
            pixel11b = data2[i+2-canvas.width*4*2];
            // Pixels 12, 13 e 14:
            // Se estiver na ultima coluna da imagem, pixels 12, 13 e 14 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel12r = pixel12g = pixel12b = pixel13r = pixel13g = pixel13b = pixel14r = pixel14g = pixel14b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 13 e 14 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel13r = pixel13g = pixel13b = pixel14r = pixel14g = pixel14b = 0;
                pixel12r = data2[i+4-canvas.width*4*2];
                pixel12g = data2[i+5-canvas.width*4*2];
                pixel12b = data2[i+6-canvas.width*4*2];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 14 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel14r = pixel14g = pixel14b = 0;
                pixel12r = data2[i+4-canvas.width*4*2];
                pixel12g = data2[i+5-canvas.width*4*2];
                pixel12b = data2[i+6-canvas.width*4*2];
                pixel13r = data2[i+4+4-canvas.width*4*2];
                pixel13g = data2[i+5+4-canvas.width*4*2];
                pixel13b = data2[i+6+4-canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel12r = data2[i+4-canvas.width*4*2];
                pixel12g = data2[i+5-canvas.width*4*2];
                pixel12b = data2[i+6-canvas.width*4*2];
                pixel13r = data2[i+4+4-canvas.width*4*2];
                pixel13g = data2[i+5+4-canvas.width*4*2];
                pixel13b = data2[i+6+4-canvas.width*4*2];
                pixel14r = data2[i+4+4+4-canvas.width*4*2];
                pixel14g = data2[i+5+4+4-canvas.width*4*2];
                pixel14b = data2[i+6+4+4-canvas.width*4*2];
            }
        }

        // TRATANDO OS PIXELS 15 A 21:
        // Se estiver na primeira linha da imagem, pixels 15 a 21 serão zerados:
        if (i<canvas.width*4) {
            pixel15r = pixel15g = pixel15b = pixel16r = pixel16g = pixel16b = pixel17r = pixel17g = pixel17b = pixel18r = pixel18g = pixel18b = pixel19r = pixel19g = pixel19b = pixel20r = pixel20g = pixel20b = pixel21r = pixel21g = pixel21b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a primeira:
        else {
            // Pixels 15, 16 e 17:
            // Se estiver na primeira coluna da imagem, pixels 15, 16 e 17 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel15r = pixel15g = pixel15b = pixel16r = pixel16g = pixel16b = pixel17r = pixel17g = pixel17b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 15 e 16 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel15r = pixel15g = pixel15b = pixel16r = pixel16g = pixel16b = 0;
                pixel17r = data2[i-4-canvas.width*4];
                pixel17g = data2[i-3-canvas.width*4];
                pixel17b = data2[i-2-canvas.width*4];
            }
            // Se estiver na terceira coluna da imagem, pixels 15 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel15r = pixel15g = pixel15b = 0;
                pixel16r = data2[i-4-4-canvas.width*4];
                pixel16g = data2[i-3-4-canvas.width*4];
                pixel16b = data2[i-2-4-canvas.width*4];
                pixel17r = data2[i-4-canvas.width*4];
                pixel17g = data2[i-3-canvas.width*4];
                pixel17b = data2[i-2-canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel15r = data2[i-4-4-4-canvas.width*4];
                pixel15g = data2[i-3-4-4-canvas.width*4];
                pixel15b = data2[i-2-4-4-canvas.width*4];
                pixel16r = data2[i-4-4-canvas.width*4];
                pixel16g = data2[i-3-4-canvas.width*4];
                pixel16b = data2[i-2-4-canvas.width*4];
                pixel17r = data2[i-4-canvas.width*4];
                pixel17g = data2[i-3-canvas.width*4];
                pixel17b = data2[i-2-canvas.width*4];
            }
            // Pixel 18:
            pixel18r = data2[i-canvas.width*4];
            pixel18g = data2[i+1-canvas.width*4];
            pixel18b = data2[i+2-canvas.width*4];
            // Pixels 19, 20 e 21:
            // Se estiver na ultima coluna da imagem, pixels 19, 20 e 21 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel19r = pixel19g = pixel19b = pixel20r = pixel20g = pixel20b = pixel21r = pixel21g = pixel21b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 20 e 21 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel20r = pixel20g = pixel20b = pixel21r = pixel21g = pixel21b = 0;
                pixel19r = data2[i+4-canvas.width*4];
                pixel19g = data2[i+5-canvas.width*4];
                pixel19b = data2[i+6-canvas.width*4];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 21 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel21r = pixel21g = pixel21b = 0;
                pixel19r = data2[i+4-canvas.width*4];
                pixel19g = data2[i+5-canvas.width*4];
                pixel19b = data2[i+6-canvas.width*4];
                pixel20r = data2[i+4+4-canvas.width*4];
                pixel20g = data2[i+5+4-canvas.width*4];
                pixel20b = data2[i+6+4-canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel19r = data2[i+4-canvas.width*4];
                pixel19g = data2[i+5-canvas.width*4];
                pixel19b = data2[i+6-canvas.width*4];
                pixel20r = data2[i+4+4-canvas.width*4];
                pixel20g = data2[i+5+4-canvas.width*4];
                pixel20b = data2[i+6+4-canvas.width*4];
                pixel21r = data2[i+4+4+4-canvas.width*4];
                pixel21g = data2[i+5+4+4-canvas.width*4];
                pixel21b = data2[i+6+4+4-canvas.width*4];
            }
        }

        // TRATANDO OS PIXELS 22 A 28:
        // Pixels 22, 23 e 24:
        // Se estiver na primeira coluna da imagem, pixels 22, 23 e 24 serão zerados:
        if (i%(canvas.width*4)===0) {
            pixel22r = pixel22g = pixel22b = pixel23r = pixel23g = pixel23b = pixel24r = pixel24g = pixel24b = 0;
        }
        // Se estiver na segunda coluna da imagem, pixels 22 e 23 serão zerados:
        else if (i%(canvas.width*4)===4) {
            pixel22r = pixel22g = pixel22b = pixel23r = pixel23g = pixel23b = 0;
            pixel24r = data2[i-4];
            pixel24g = data2[i-3];
            pixel24b = data2[i-2];
        }
        // Se estiver na terceira coluna da imagem, pixels 22 serão zerados:
        else if (i%(canvas.width*4)===8) {
            pixel22r = pixel22g = pixel22b = 0;
            pixel23r = data2[i-4-4];
            pixel23g = data2[i-3-4];
            pixel23b = data2[i-2-4];
            pixel24r = data2[i-4];
            pixel24g = data2[i-3];
            pixel24b = data2[i-2];
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel22r = data2[i-4-4-4];
            pixel22g = data2[i-3-4-4];
            pixel22b = data2[i-2-4-4];
            pixel23r = data2[i-4-4];
            pixel23g = data2[i-3-4];
            pixel23b = data2[i-2-4];
            pixel24r = data2[i-4];
            pixel24g = data2[i-3];
            pixel24b = data2[i-2];
        }
        // Pixels 25:
        pixel25r = data2[i];
        pixel25g = data2[i+1];
        pixel25b = data2[i+2];
        // Pixels 26, 27 e 28:
        // Se estiver na ultima coluna da imagem, pixels 26, 27 e 28 serão zerados:
        if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
            pixel26r = pixel26g = pixel26b = pixel27r = pixel27g = pixel27b = pixel28r = pixel28g = pixel28b = 0;
        }
        // Se estiver na penúltima coluna da imagem, pixels 27 e 28 serão zerados:
        else if (i%(canvas.width*4)===(canvas.width*4)-5) {
            pixel27r = pixel27g = pixel27b = pixel28r = pixel28g = pixel28b = 0;
            pixel26r = data2[i+4];
            pixel26g = data2[i+5];
            pixel26b = data2[i+6];
        }
        // Se estiver na antepenúltima coluna da imagem, pixels 28 serão zerados:
        else if (i%(canvas.width*4)===(canvas.width*4)-9) {
            pixel28r = pixel28g = pixel28b = 0;
            pixel26r = data2[i+4];
            pixel26g = data2[i+5];
            pixel26b = data2[i+6];
            pixel27r = data2[i+4+4];
            pixel27g = data2[i+5+4];
            pixel27b = data2[i+6+4];
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel26r = data2[i+4];
            pixel26g = data2[i+5];
            pixel26b = data2[i+6];
            pixel27r = data2[i+4+4];
            pixel27g = data2[i+5+4];
            pixel27b = data2[i+6+4];
            pixel28r = data2[i+4+4+4];
            pixel28g = data2[i+5+4+4];
            pixel28b = data2[i+6+4+4];
        }

        // TRATANDO OS PIXELS 29 A 35:
        // Se estiver na ultima linha da imagem, pixels 29 a 35 serão zerados:
        if (i>(4*canvas.width)*(canvas.height-1)) {
            pixel29r = pixel29g = pixel29b = pixel30r = pixel30g = pixel30b = pixel31r = pixel31g = pixel31b = pixel32r = pixel32g = pixel32b = pixel33r = pixel33g = pixel33b = pixel34r = pixel34g = pixel34b = pixel35r = pixel35g = pixel35b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a última:
        else {
            // Pixels 29, 30 e 31:
            // Se estiver na primeira coluna da imagem, pixels 29, 30 e 31 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel29r = pixel29g = pixel29b = pixel30r = pixel30g = pixel30b = pixel31r = pixel31g = pixel31b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 29 e 30 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel29r = pixel29g = pixel29b = pixel30r = pixel30g = pixel30b = 0;
                pixel31r = data2[i-4+canvas.width*4];
                pixel31g = data2[i-3+canvas.width*4];
                pixel31b = data2[i-2+canvas.width*4];
            }
            // Se estiver na terceira coluna da imagem, pixels 29 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel29r = pixel29g = pixel29b = 0;
                pixel30r = data2[i-4-4+canvas.width*4];
                pixel30g = data2[i-3-4+canvas.width*4];
                pixel30b = data2[i-2-4+canvas.width*4];
                pixel31r = data2[i-4+canvas.width*4];
                pixel31g = data2[i-3+canvas.width*4];
                pixel31b = data2[i-2+canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel29r = data2[i-4-4-4+canvas.width*4];
                pixel29g = data2[i-3-4-4+canvas.width*4];
                pixel29b = data2[i-2-4-4+canvas.width*4];
                pixel30r = data2[i-4-4+canvas.width*4];
                pixel30g = data2[i-3-4+canvas.width*4];
                pixel30b = data2[i-2-4+canvas.width*4];
                pixel31r = data2[i-4+canvas.width*4];
                pixel31g = data2[i-3+canvas.width*4];
                pixel31b = data2[i-2+canvas.width*4];
            }
            // Pixel 32:
            pixel32r = data2[i+canvas.width*4];
            pixel32g = data2[i+1+canvas.width*4];
            pixel32b = data2[i+2+canvas.width*4];
            // Pixels 33, 34 e 35:
            // Se estiver na ultima coluna da imagem, pixels 33, 34 e 35 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel33r = pixel33g = pixel33b = pixel34r = pixel34g = pixel34b = pixel35r = pixel35g = pixel35b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 34 e 35 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel34r = pixel34g = pixel34b = pixel35r = pixel35g = pixel35b = 0;
                pixel33r = data2[i+4+canvas.width*4];
                pixel33g = data2[i+5+canvas.width*4];
                pixel33b = data2[i+6+canvas.width*4];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 35 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel35r = pixel35g = pixel35b = 0;
                pixel33r = data2[i+4+canvas.width*4];
                pixel33g = data2[i+5+canvas.width*4];
                pixel33b = data2[i+6+canvas.width*4];
                pixel34r = data2[i+4+4+canvas.width*4];
                pixel34g = data2[i+5+4+canvas.width*4];
                pixel34b = data2[i+6+4+canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel33r = data2[i+4+canvas.width*4];
                pixel33g = data2[i+5+canvas.width*4];
                pixel33b = data2[i+6+canvas.width*4];
                pixel34r = data2[i+4+4+canvas.width*4];
                pixel34g = data2[i+5+4+canvas.width*4];
                pixel34b = data2[i+6+4+canvas.width*4];
                pixel35r = data2[i+4+4+4+canvas.width*4];
                pixel35g = data2[i+5+4+4+canvas.width*4];
                pixel35b = data2[i+6+4+4+canvas.width*4];
            }
        }

        // TRATANDO OS PIXELS 36 A 42:
        // Se estiver na última ou penúltima linha da imagem, pixels 36 a 42 serão zerados:
        if (i>(4*canvas.width)*(canvas.height-2)) {
            pixel36r = pixel36g = pixel36b = pixel37r = pixel37g = pixel37b = pixel38r = pixel38g = pixel38b = pixel39r = pixel39g = pixel39b = pixel40r = pixel40g = pixel40b = pixel41r = pixel41g = pixel41b = pixel42r = pixel42g = pixel42b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a última e penúltima:
        else {
            // Pixels 36, 37 e 38:
            // Se estiver na primeira coluna da imagem, pixels 36, 37 e 38 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel36r = pixel36g = pixel36b = pixel37r = pixel37g = pixel37b = pixel38r = pixel38g = pixel38b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 36 e 37 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel36r = pixel36g = pixel36b = pixel37r = pixel37g = pixel37b = 0;
                pixel38r = data2[i-4+canvas.width*4*2];
                pixel38g = data2[i-3+canvas.width*4*2];
                pixel38b = data2[i-2+canvas.width*4*2];
            }
            // Se estiver na terceira coluna da imagem, pixels 36 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel36r = pixel36g = pixel36b = 0;
                pixel37r = data2[i-4-4+canvas.width*4*2];
                pixel37g = data2[i-3-4+canvas.width*4*2];
                pixel37b = data2[i-2-4+canvas.width*4*2];
                pixel38r = data2[i-4+canvas.width*4*2];
                pixel38g = data2[i-3+canvas.width*4*2];
                pixel38b = data2[i-2+canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel36r = data2[i-4-4-4+canvas.width*4*2];
                pixel36g = data2[i-3-4-4+canvas.width*4*2];
                pixel36b = data2[i-2-4-4+canvas.width*4*2];
                pixel37r = data2[i-4-4+canvas.width*4*2];
                pixel37g = data2[i-3-4+canvas.width*4*2];
                pixel37b = data2[i-2-4+canvas.width*4*2];
                pixel38r = data2[i-4+canvas.width*4*2];
                pixel38g = data2[i-3+canvas.width*4*2];
                pixel38b = data2[i-2+canvas.width*4*2];
            }
            // Pixel 39:
            pixel39r = data2[i+canvas.width*4*2];
            pixel39g = data2[i+1+canvas.width*4*2];
            pixel39b = data2[i+2+canvas.width*4*2];
            // Pixels 40, 41 e 42:
            // Se estiver na última coluna da imagem, pixels 40, 41 e 42 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel40r = pixel40g = pixel40b = pixel41r = pixel41g = pixel41b = pixel42r = pixel42g = pixel42b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 41 e 42 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-5) {
                pixel41r = pixel41g = pixel41b = pixel42r = pixel42g = pixel42b = 0;
                pixel40r = data2[i+4+canvas.width*4*2];
                pixel40g = data2[i+5+canvas.width*4*2];
                pixel40b = data2[i+6+canvas.width*4*2];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 42 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-9) {
                pixel42r = pixel42g = pixel42b = 0;
                pixel40r = data2[i+4+canvas.width*4*2];
                pixel40g = data2[i+5+canvas.width*4*2];
                pixel40b = data2[i+6+canvas.width*4*2];
                pixel41r = data2[i+4+4+canvas.width*4*2];
                pixel41g = data2[i+5+4+canvas.width*4*2];
                pixel41b = data2[i+6+4+canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel40r = data2[i+4+canvas.width*4*2];
                pixel40g = data2[i+5+canvas.width*4*2];
                pixel40b = data2[i+6+canvas.width*4*2];
                pixel41r = data2[i+4+4+canvas.width*4*2];
                pixel41g = data2[i+5+4+canvas.width*4*2];
                pixel41b = data2[i+6+4+canvas.width*4*2];
                pixel42r = data2[i+4+4+4+canvas.width*4*2];
                pixel42g = data2[i+5+4+4+canvas.width*4*2];
                pixel42b = data2[i+6+4+4+canvas.width*4*2];
            }
        }

        // TRATANDO OS PIXELS 43 A 49:
        // Se estiver na última, penúltima ou antepenúltima linha da imagem, pixels 43 a 49 serão zerados:
        if (i>(4*canvas.width)*(canvas.height-3)) {
            pixel43r = pixel43g = pixel43b = pixel44r = pixel44g = pixel44b = pixel45r = pixel45g = pixel45b = pixel46r = pixel46g = pixel46b = pixel47r = pixel47g = pixel47b = pixel48r = pixel48g = pixel48b = pixel49r = pixel49g = pixel49b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a última, penúltima e antepenúltima:
        else {
            // Pixels 43, 44 e 45:
            // Se estiver na primeira coluna da imagem, pixels 43, 44 e 45 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel43r = pixel43g = pixel43b = pixel44r = pixel44g = pixel44b = pixel45r = pixel45g = pixel45b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 43 e 44 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel43r = pixel43g = pixel43b = pixel44r = pixel44g = pixel44b = 0;
                pixel45r = data2[i-4+canvas.width*4*3];
                pixel45g = data2[i-3+canvas.width*4*3];
                pixel45b = data2[i-2+canvas.width*4*3];
            }
            // Se estiver na terceira coluna da imagem, pixels 43 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel43r = pixel43g = pixel43b = 0;
                pixel44r = data2[i-4-4+canvas.width*4*3];
                pixel44g = data2[i-3-4+canvas.width*4*3];
                pixel44b = data2[i-2-4+canvas.width*4*3];
                pixel45r = data2[i-4+canvas.width*4*3];
                pixel45g = data2[i-3+canvas.width*4*3];
                pixel45b = data2[i-2+canvas.width*4*3];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel43r = data2[i-4-4-4+canvas.width*4*3];
                pixel43g = data2[i-3-4-4+canvas.width*4*3];
                pixel43b = data2[i-2-4-4+canvas.width*4*3];
                pixel44r = data2[i-4-4+canvas.width*4*3];
                pixel44g = data2[i-3-4+canvas.width*4*3];
                pixel44b = data2[i-2-4+canvas.width*4*3];
                pixel45r = data2[i-4+canvas.width*4*3];
                pixel45g = data2[i-3+canvas.width*4*3];
                pixel45b = data2[i-2+canvas.width*4*3];
            }
            // Pixel 46:
            pixel46r = data2[i+canvas.width*4*3];
            pixel46g = data2[i+1+canvas.width*4*3];
            pixel46b = data2[i+2+canvas.width*4*3];
            // Pixels 47, 48 e 49:
            // Se estiver na última coluna da imagem, pixels 47, 48 e 49 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel47r = pixel47g = pixel47b = pixel48r = pixel48g = pixel48b = pixel49r = pixel49g = pixel49b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 48 e 49 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-5) {
                pixel48r = pixel48g = pixel48b = pixel49r = pixel49g = pixel49b = 0;
                pixel47r = data2[i+4+canvas.width*4*3];
                pixel47g = data2[i+5+canvas.width*4*3];
                pixel47b = data2[i+6+canvas.width*4*3];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 49 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-9) {
                pixel49r = pixel49g = pixel49b = 0;
                pixel47r = data2[i+4+canvas.width*4*3];
                pixel47g = data2[i+5+canvas.width*4*3];
                pixel47b = data2[i+6+canvas.width*4*3];
                pixel48r = data2[i+4+4+canvas.width*4*3];
                pixel48g = data2[i+5+4+canvas.width*4*3];
                pixel48b = data2[i+6+4+canvas.width*4*3];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel47r = data2[i+4+canvas.width*4*3];
                pixel47g = data2[i+5+canvas.width*4*3];
                pixel47b = data2[i+6+canvas.width*4*3];
                pixel48r = data2[i+4+4+canvas.width*4*3];
                pixel48g = data2[i+5+4+canvas.width*4*3];
                pixel48b = data2[i+6+4+canvas.width*4*3];
                pixel49r = data2[i+4+4+4+canvas.width*4*3];
                pixel49g = data2[i+5+4+4+canvas.width*4*3];
                pixel49b = data2[i+6+4+4+canvas.width*4*3];
            }
        }

        if (mediana) {
            const median = arr => {
                const mid = Math.floor(arr.length / 2),
                  nums = [...arr].sort((a, b) => a - b);
                return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
            };
            const arrayr = new Array(pixel1r, pixel2r, pixel3r, pixel4r, pixel5r, pixel6r, pixel7r, pixel8r, pixel9r, pixel10r,
                                     pixel11r, pixel12r, pixel13r, pixel14r, pixel15r, pixel16r, pixel17r, pixel18r, pixel19r, pixel20r,
                                     pixel21r, pixel22r, pixel23r, pixel24r, pixel25r, pixel26r, pixel27r, pixel28r, pixel29r, pixel30r,
                                     pixel31r, pixel32r, pixel33r, pixel34r, pixel35r, pixel36r, pixel37r, pixel38r, pixel39r, pixel40r,
                                     pixel41r, pixel42r, pixel43r, pixel44r, pixel45r, pixel46r, pixel47r, pixel48r, pixel49r);
            const arrayg = new Array(pixel1g, pixel2g, pixel3g, pixel4g, pixel5g, pixel6g, pixel7g, pixel8g, pixel9g, pixel10g,
                                     pixel11g, pixel12g, pixel13g, pixel14g, pixel15g, pixel16g, pixel17g, pixel18g, pixel19g, pixel20g,
                                     pixel21g, pixel22g, pixel23g, pixel24g, pixel25g, pixel26g, pixel27g, pixel28g, pixel29g, pixel30g,
                                     pixel31g, pixel32g, pixel33g, pixel34g, pixel35g, pixel36g, pixel37g, pixel38g, pixel39g, pixel40g,
                                     pixel41g, pixel42g, pixel43g, pixel44g, pixel45g, pixel46g, pixel47g, pixel48g, pixel49g);
            const arrayb = new Array(pixel1b, pixel2b, pixel3b, pixel4b, pixel5b, pixel6b, pixel7b, pixel8b, pixel9b, pixel10b,
                                     pixel11b, pixel12b, pixel13b, pixel14b, pixel15b, pixel16b, pixel17b, pixel18b, pixel19b, pixel20b,
                                     pixel21b, pixel22b, pixel23b, pixel24b, pixel25b, pixel26b, pixel27b, pixel28b, pixel29b, pixel30b,
                                     pixel31b, pixel32b, pixel33b, pixel34b, pixel35b, pixel36b, pixel37b, pixel38b, pixel39b, pixel40b,
                                     pixel41b, pixel42b, pixel43b, pixel44b, pixel45b, pixel46b, pixel47b, pixel48b, pixel49b);
            let medianar = median(arrayr);
            let medianag = median(arrayg);
            let medianab = median(arrayb);
            data[i] = medianar;
            data[i + 1] = medianag;
            data[i + 2] = medianab;
        }
        else {
            // Multiplica os pixels 1 a 49 pelo kernel 7x7:
            data[i] = kernel[0]*pixel1r + kernel[1]*pixel2r + kernel[2]*pixel3r + kernel[3]*pixel4r + kernel[4]*pixel5r + kernel[5]*pixel6r + kernel[6]*pixel7r
                    + kernel[7]*pixel8r + kernel[8]*pixel9r + kernel[9]*pixel10r + kernel[10]*pixel11r + kernel[11]*pixel12r + kernel[12]*pixel13r + kernel[13]*pixel14r
                    + kernel[14]*pixel15r + kernel[15]*pixel16r + kernel[16]*pixel17r + kernel[17]*pixel18r + kernel[18]*pixel19r + kernel[19]*pixel20r + kernel[20]*pixel21r
                    + kernel[21]*pixel22r + kernel[22]*pixel23r + kernel[23]*pixel24r + kernel[24]*pixel25r + kernel[25]*pixel26r + kernel[26]*pixel27r + kernel[27]*pixel28r
                    + kernel[28]*pixel29r + kernel[29]*pixel30r + kernel[30]*pixel31r + kernel[31]*pixel32r + kernel[32]*pixel33r + kernel[33]*pixel34r + kernel[34]*pixel35r
                    + kernel[35]*pixel36r + kernel[36]*pixel37r + kernel[37]*pixel38r + kernel[38]*pixel39r + kernel[39]*pixel40r + kernel[40]*pixel41r + kernel[41]*pixel42r
                    + kernel[42]*pixel43r + kernel[43]*pixel44r + kernel[44]*pixel45r + kernel[45]*pixel46r + kernel[46]*pixel47r + kernel[47]*pixel48r + kernel[48]*pixel49r;
            
            data[i + 1] = kernel[0]*pixel1g + kernel[1]*pixel2g + kernel[2]*pixel3g + kernel[3]*pixel4g + kernel[4]*pixel5g + kernel[5]*pixel6g + kernel[6]*pixel7g
                        + kernel[7]*pixel8g + kernel[8]*pixel9g + kernel[9]*pixel10g + kernel[10]*pixel11g + kernel[11]*pixel12g + kernel[12]*pixel13g + kernel[13]*pixel14g
                        + kernel[14]*pixel15g + kernel[15]*pixel16g + kernel[16]*pixel17g + kernel[17]*pixel18g + kernel[18]*pixel19g + kernel[19]*pixel20g + kernel[20]*pixel21g
                        + kernel[21]*pixel22g + kernel[22]*pixel23g + kernel[23]*pixel24g + kernel[24]*pixel25g + kernel[25]*pixel26g + kernel[26]*pixel27g + kernel[27]*pixel28g
                        + kernel[28]*pixel29g + kernel[29]*pixel30g + kernel[30]*pixel31g + kernel[31]*pixel32g + kernel[32]*pixel33g + kernel[33]*pixel34g + kernel[34]*pixel35g
                        + kernel[35]*pixel36g + kernel[36]*pixel37g + kernel[37]*pixel38g + kernel[38]*pixel39g + kernel[39]*pixel40g + kernel[40]*pixel41g + kernel[41]*pixel42g
                        + kernel[42]*pixel43g + kernel[43]*pixel44g + kernel[44]*pixel45g + kernel[45]*pixel46g + kernel[46]*pixel47g + kernel[47]*pixel48g + kernel[48]*pixel49g;
            
            data[i + 2] = kernel[0]*pixel1b + kernel[1]*pixel2b + kernel[2]*pixel3b + kernel[3]*pixel4b + kernel[4]*pixel5b + kernel[5]*pixel6b + kernel[6]*pixel7b
                        + kernel[7]*pixel8b + kernel[8]*pixel9b + kernel[9]*pixel10b + kernel[10]*pixel11b + kernel[11]*pixel12b + kernel[12]*pixel13b + kernel[13]*pixel14b
                        + kernel[14]*pixel15b + kernel[15]*pixel16b + kernel[16]*pixel17b + kernel[17]*pixel18b + kernel[18]*pixel19b + kernel[19]*pixel20b + kernel[20]*pixel21b
                        + kernel[21]*pixel22b + kernel[22]*pixel23b + kernel[23]*pixel24b + kernel[24]*pixel25b + kernel[25]*pixel26b + kernel[26]*pixel27b + kernel[27]*pixel28b
                        + kernel[28]*pixel29b + kernel[29]*pixel30b + kernel[30]*pixel31b + kernel[31]*pixel32b + kernel[32]*pixel33b + kernel[33]*pixel34b + kernel[34]*pixel35b
                        + kernel[35]*pixel36b + kernel[36]*pixel37b + kernel[37]*pixel38b + kernel[38]*pixel39b + kernel[39]*pixel40b + kernel[40]*pixel41b + kernel[41]*pixel42b
                        + kernel[42]*pixel43b + kernel[43]*pixel44b + kernel[44]*pixel45b + kernel[45]*pixel46b + kernel[46]*pixel47b + kernel[47]*pixel48b + kernel[48]*pixel49b;
        }
    }
    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    // getFrequencies();
    // drawHistogram();
}

// 9x9 ---------------------------------------------


function convolution9x9(kernel, mediana) {
    let copypixels = pixels; //copiar valores, novo array
    let data = copypixels.data;
    let data2 = [...pixels.data];
    /*
    pixel1   pixel2   pixel3   pixel4   pixel5   pixel6   pixel7   pixel8   pixel9
    pixel10  pixel11  pixel12  pixel13  pixel14  pixel15  pixel16  pixel17  pixel18
    pixel19  pixel20  pixel21  pixel22  pixel23  pixel24  pixel25  pixel26  pixel27
    pixel28  pixel29  pixel30  pixel31  pixel32  pixel33  pixel34  pixel35  pixel36
    pixel37  pixel38  pixel39  pixel40  PIXEL41  pixel42  pixel43  pixel44  pixel45
    pixel46  pixel47  pixel48  pixel49  pixel50  pixel51  pixel52  pixel53  pixel54
    pixel55  pixel56  pixel57  pixel58  pixel59  pixel60  pixel61  pixel62  pixel63
    pixel64  pixel65  pixel66  pixel67  pixel68  pixel69  pixel70  pixel71  pixel72
    pixel73  pixel74  pixel75  pixel76  pixel77  pixel78  pixel79  pixel80  pixel81
    */

    let pixel1r, pixel1g, pixel1b, pixel2r, pixel2g, pixel2b, pixel3r, pixel3g, pixel3b, pixel4r, pixel4g, pixel4b, pixel5r, pixel5g, pixel5b, pixel6r, pixel6g, pixel6b, pixel7r, pixel7g, pixel7b, pixel8r, pixel8g, pixel8b, pixel9r, pixel9g, pixel9b;
    let pixel10r, pixel10g, pixel10b, pixel11r, pixel11g, pixel11b, pixel12r, pixel12g, pixel12b, pixel13r, pixel13g, pixel13b, pixel14r, pixel14g, pixel14b, pixel15r, pixel15g, pixel15b, pixel16r, pixel16g, pixel16b, pixel17r, pixel17g, pixel17b, pixel18r, pixel18g, pixel18b;
    let pixel19r, pixel19g, pixel19b, pixel20r, pixel20g, pixel20b, pixel21r, pixel21g, pixel21b, pixel22r, pixel22g, pixel22b, pixel23r, pixel23g, pixel23b, pixel24r, pixel24g, pixel24b, pixel25r, pixel25g, pixel25b, pixel26r, pixel26g, pixel26b, pixel27r, pixel27g, pixel27b;
    let pixel28r, pixel28g, pixel28b, pixel29r, pixel29g, pixel29b, pixel30r, pixel30g, pixel30b, pixel31r, pixel31g, pixel31b, pixel32r, pixel32g, pixel32b, pixel33r, pixel33g, pixel33b, pixel34r, pixel34g, pixel34b, pixel35r, pixel35g, pixel35b, pixel36r, pixel36g, pixel36b;
    let pixel37r, pixel37g, pixel37b, pixel38r, pixel38g, pixel38b, pixel39r, pixel39g, pixel39b, pixel40r, pixel40g, pixel40b, pixel41r, pixel41g, pixel41b, pixel42r, pixel42g, pixel42b, pixel43r, pixel43g, pixel43b, pixel44r, pixel44g, pixel44b, pixel45r, pixel45g, pixel45b;
    let pixel46r, pixel46g, pixel46b, pixel47r, pixel47g, pixel47b, pixel48r, pixel48g, pixel48b, pixel49r, pixel49g, pixel49b, pixel50r, pixel50g, pixel50b, pixel51r, pixel51g, pixel51b, pixel52r, pixel52g, pixel52b, pixel53r, pixel53g, pixel53b, pixel54r, pixel54g, pixel54b;
    let pixel55r, pixel55g, pixel55b, pixel56r, pixel56g, pixel56b, pixel57r, pixel57g, pixel57b, pixel58r, pixel58g, pixel58b, pixel59r, pixel59g, pixel59b, pixel60r, pixel60g, pixel60b, pixel61r, pixel61g, pixel61b, pixel62r, pixel62g, pixel62b, pixel63r, pixel63g, pixel63b;
    let pixel64r, pixel64g, pixel64b, pixel65r, pixel65g, pixel65b, pixel66r, pixel66g, pixel66b, pixel67r, pixel67g, pixel67b, pixel68r, pixel68g, pixel68b, pixel69r, pixel69g, pixel69b, pixel70r, pixel70g, pixel70b, pixel71r, pixel71g, pixel71b, pixel72r, pixel72g, pixel72b;
    let pixel73r, pixel73g, pixel73b, pixel74r, pixel74g, pixel74b, pixel75r, pixel75g, pixel75b, pixel76r, pixel76g, pixel76b, pixel77r, pixel77g, pixel77b, pixel78r, pixel78g, pixel78b, pixel79r, pixel79g, pixel79b, pixel80r, pixel80g, pixel80b, pixel81r, pixel81g, pixel81b;

    // Laço que define os valores dos pixels 1 a 81 baseado na imagem:
    for (i = 0; i < data.length; i = i + 4) {
        
        // TRATANDO OS PIXELS 1 A 9:
        // Se estiver na primeira, segunda, terceira ou quarta linha da imagem, pixels 1 a 9 serão zerados:
        if (i<canvas.width*4*4) {
            pixel1r = pixel1g = pixel1b = pixel2r = pixel2g = pixel2b = pixel3r = pixel3g = pixel3b = pixel4r = pixel4g = pixel4b = pixel5r = pixel5g = pixel5b = pixel6r = pixel6g = pixel6b = pixel7r = pixel7g = pixel7b =  pixel8r = pixel8g = pixel8b = pixel9r = pixel9g = pixel9b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a primeira, segunda, terceira e quarta:
        else {
            // Pixels 1, 2, 3 e 4:
            // Se estiver na primeira coluna da imagem, pixels 1, 2, 3 e 4 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel1r = pixel1g = pixel1b = pixel2r = pixel2g = pixel2b = pixel3r = pixel3g = pixel3b = pixel4r = pixel4g = pixel4b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 1, 2 e 3 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel1r = pixel1g = pixel1b = pixel2r = pixel2g = pixel2b = pixel3r = pixel3g = pixel3b = 0;
                pixel4r = data2[i-4-canvas.width*4*4];
                pixel4g = data2[i-3-canvas.width*4*4];
                pixel4b = data2[i-2-canvas.width*4*4];
            }
            // Se estiver na terceira coluna da imagem, pixels 1 e 2 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel1r = pixel1g = pixel1b = pixel2r = pixel2g = pixel2b = 0;
                pixel3r = data2[i-4-4-canvas.width*4*4];
                pixel3g = data2[i-3-4-canvas.width*4*4];
                pixel3b = data2[i-2-4-canvas.width*4*4];
                pixel4r = data2[i-4-canvas.width*4*4];
                pixel4g = data2[i-3-canvas.width*4*4];
                pixel4b = data2[i-2-canvas.width*4*4];
            }
            // Se estiver na quarta coluna da imagem, pixels 1 serão zerados:
            else if (i%(canvas.width*4)===12) {
                pixel1r = pixel1g = pixel1b = 0;
                pixel2r = data2[i-4-4-4-canvas.width*4*4];
                pixel2g = data2[i-3-4-4-canvas.width*4*4];
                pixel2b = data2[i-2-4-4-canvas.width*4*4];
                pixel3r = data2[i-4-4-canvas.width*4*4];
                pixel3g = data2[i-3-4-canvas.width*4*4];
                pixel3b = data2[i-2-4-canvas.width*4*4];
                pixel4r = data2[i-4-canvas.width*4*4];
                pixel4g = data2[i-3-canvas.width*4*4];
                pixel4b = data2[i-2-canvas.width*4*4];
            }
            // Se estiver na quarta coluna da imagem, pixels 1 serão zerados:
            else {
                pixel1r = data2[i-4-4-4-4-canvas.width*4*4];
                pixel1g = data2[i-3-4-4-4-canvas.width*4*4];
                pixel1b = data2[i-2-4-4-4-canvas.width*4*4];
                pixel2r = data2[i-4-4-4-canvas.width*4*4];
                pixel2g = data2[i-3-4-4-canvas.width*4*4];
                pixel2b = data2[i-2-4-4-canvas.width*4*4];
                pixel3r = data2[i-4-4-canvas.width*4*4];
                pixel3g = data2[i-3-4-canvas.width*4*4];
                pixel3b = data2[i-2-4-canvas.width*4*4];
                pixel4r = data2[i-4-canvas.width*4*4];
                pixel4g = data2[i-3-canvas.width*4*4];
                pixel4b = data2[i-2-canvas.width*4*4];
            }
            // Pixel 5:
            pixel5r = data2[i-canvas.width*4*4];
            pixel5g = data2[i+1-canvas.width*4*4];
            pixel5b = data2[i+2-canvas.width*4*4];
            // Pixels 6, 7, 8 e 9:
            // Se estiver na ultima coluna da imagem, pixels 6, 7, 8 e 9 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel6r = pixel6g = pixel6b = pixel7r = pixel7g = pixel7b = pixel8r = pixel8g = pixel8b = pixel9r = pixel9g = pixel9b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 7, 8 e 9 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel7r = pixel7g = pixel7b = pixel8r = pixel8g = pixel8b = pixel9r = pixel9g = pixel9b = 0;
                pixel6r = data2[i+4-canvas.width*4*4];
                pixel6g = data2[i+5-canvas.width*4*4];
                pixel6b = data2[i+6-canvas.width*4*4];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 8 e 9 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel8r = pixel8g = pixel8b = pixel9r = pixel9g = pixel9b = 0;
                pixel6r = data2[i+4-canvas.width*4*4];
                pixel6g = data2[i+5-canvas.width*4*4];
                pixel6b = data2[i+6-canvas.width*4*4];
                pixel7r = data2[i+4+4-canvas.width*4*4];
                pixel7g = data2[i+5+4-canvas.width*4*4];
                pixel7b = data2[i+6+4-canvas.width*4*4];
            }
            // Se estiver na pré-antepenúltima coluna da imagem, pixels 9 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-13) {
                pixel9r = pixel9g = pixel9b = 0;
                pixel6r = data2[i+4-canvas.width*4*4];
                pixel6g = data2[i+5-canvas.width*4*4];
                pixel6b = data2[i+6-canvas.width*4*4];
                pixel7r = data2[i+4+4-canvas.width*4*4];
                pixel7g = data2[i+5+4-canvas.width*4*4];
                pixel7b = data2[i+6+4-canvas.width*4*4];
                pixel8r = data2[i+4+4+4-canvas.width*4*4];
                pixel8g = data2[i+5+4+4-canvas.width*4*4];
                pixel8b = data2[i+6+4+4-canvas.width*4*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel6r = data2[i+4-canvas.width*4*4];
                pixel6g = data2[i+5-canvas.width*4*4];
                pixel6b = data2[i+6-canvas.width*4*4];
                pixel7r = data2[i+4+4-canvas.width*4*4];
                pixel7g = data2[i+5+4-canvas.width*4*4];
                pixel7b = data2[i+6+4-canvas.width*4*4];
                pixel8r = data2[i+4+4+4-canvas.width*4*4];
                pixel8g = data2[i+5+4+4-canvas.width*4*4];
                pixel8b = data2[i+6+4+4-canvas.width*4*4];
                pixel9r = data2[i+4+4+4+4-canvas.width*4*4];
                pixel9g = data2[i+5+4+4+4-canvas.width*4*4];
                pixel9b = data2[i+6+4+4+4-canvas.width*4*4];
            }
        }

        // TRATANDO OS PIXELS 10 A 18:
        // Se estiver na primeira, segunda ou terceira linha da imagem, pixels 10 a 18 serão zerados:
        if (i<canvas.width*4*3) {
            pixel10r = pixel10g = pixel10b = pixel11r = pixel11g = pixel11b = pixel12r = pixel12g = pixel12b = pixel13r = pixel13g = pixel13b = pixel14r = pixel14g = pixel14b = pixel15r = pixel15g = pixel15b = pixel16r = pixel16g = pixel16b = pixel17r = pixel17g = pixel17b = pixel18r = pixel18g = pixel18b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a primeira, segunda e terceira:
        else {
            // Pixels 10, 11, 12 e 13:
            // Se estiver na primeira coluna da imagem, pixels 10, 11, 12 e 13 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel10r = pixel10g = pixel10b = pixel11r = pixel11g = pixel11b = pixel12r = pixel12g = pixel12b = pixel13r = pixel13g = pixel13b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 10, 11 e 12 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel10r = pixel10g = pixel10b = pixel11r = pixel11g = pixel11b = pixel12r = pixel12g = pixel12b = 0;
                pixel13r = data2[i-4-canvas.width*4*3];
                pixel13g = data2[i-3-canvas.width*4*3];
                pixel13b = data2[i-2-canvas.width*4*3];
            }
            // Se estiver na terceira coluna da imagem, pixels 10 e 11 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel10r = pixel10g = pixel10b = pixel11r = pixel11g = pixel11b = 0;
                pixel12r = data2[i-4-4-canvas.width*4*3];
                pixel12g = data2[i-3-4-canvas.width*4*3];
                pixel12b = data2[i-2-4-canvas.width*4*3];
                pixel13r = data2[i-4-canvas.width*4*3];
                pixel13g = data2[i-3-canvas.width*4*3];
                pixel13b = data2[i-2-canvas.width*4*3];
            }
            // Se estiver na quarta coluna da imagem, pixels 10 serão zerados:
            else if (i%(canvas.width*4)===12) {
                pixel10r = pixel10g = pixel10b = 0;
                pixel11r = data2[i-4-4-4-canvas.width*4*3];
                pixel11g = data2[i-3-4-4-canvas.width*4*3];
                pixel11b = data2[i-2-4-4-canvas.width*4*3];
                pixel12r = data2[i-4-4-canvas.width*4*3];
                pixel12g = data2[i-3-4-canvas.width*4*3];
                pixel12b = data2[i-2-4-canvas.width*4*3];
                pixel13r = data2[i-4-canvas.width*4*3];
                pixel13g = data2[i-3-canvas.width*4*3];
                pixel13b = data2[i-2-canvas.width*4*3];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel10r = data2[i-4-4-4-4-canvas.width*4*3];
                pixel10g = data2[i-3-4-4-4-canvas.width*4*3];
                pixel10b = data2[i-2-4-4-4-canvas.width*4*3];
                pixel11r = data2[i-4-4-4-canvas.width*4*3];
                pixel11g = data2[i-3-4-4-canvas.width*4*3];
                pixel11b = data2[i-2-4-4-canvas.width*4*3];
                pixel12r = data2[i-4-4-canvas.width*4*3];
                pixel12g = data2[i-3-4-canvas.width*4*3];
                pixel12b = data2[i-2-4-canvas.width*4*3];
                pixel13r = data2[i-4-canvas.width*4*3];
                pixel13g = data2[i-3-canvas.width*4*3];
                pixel13b = data2[i-2-canvas.width*4*3];
            }
            // Pixel 14:
            pixel14r = data2[i-canvas.width*4*3];
            pixel14g = data2[i+1-canvas.width*4*3];
            pixel14b = data2[i+2-canvas.width*4*3];
            // Pixels 15, 16, 17 e 18:
            // Se estiver na ultima coluna da imagem, pixels 15, 16, 17 e 18 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel15r = pixel15g = pixel15b = pixel16r = pixel16g = pixel16b = pixel17r = pixel17g = pixel17b = pixel18r = pixel18g = pixel18b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 16, 17 e 18 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel16r = pixel16g = pixel16b = pixel17r = pixel17g = pixel17b = pixel18r = pixel18g = pixel18b = 0;
                pixel15r = data2[i+4-canvas.width*4*3];
                pixel15g = data2[i+5-canvas.width*4*3];
                pixel15b = data2[i+6-canvas.width*4*3];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 17 e 18 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel17r = pixel17g = pixel17b = pixel18r = pixel18g = pixel18b = 0;
                pixel15r = data2[i+4-canvas.width*4*3];
                pixel15g = data2[i+5-canvas.width*4*3];
                pixel15b = data2[i+6-canvas.width*4*3];
                pixel16r = data2[i+4+4-canvas.width*4*3];
                pixel16g = data2[i+5+4-canvas.width*4*3];
                pixel16b = data2[i+6+4-canvas.width*4*3];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 18 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-13) {
                pixel18r = pixel18g = pixel18b = 0;
                pixel15r = data2[i+4-canvas.width*4*3];
                pixel15g = data2[i+5-canvas.width*4*3];
                pixel15b = data2[i+6-canvas.width*4*3];
                pixel16r = data2[i+4+4-canvas.width*4*3];
                pixel16g = data2[i+5+4-canvas.width*4*3];
                pixel16b = data2[i+6+4-canvas.width*4*3];
                pixel17r = data2[i+4+4+4-canvas.width*4*3];
                pixel17g = data2[i+5+4+4-canvas.width*4*3];
                pixel17b = data2[i+6+4+4-canvas.width*4*3];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel15r = data2[i+4-canvas.width*4*3];
                pixel15g = data2[i+5-canvas.width*4*3];
                pixel15b = data2[i+6-canvas.width*4*3];
                pixel16r = data2[i+4+4-canvas.width*4*3];
                pixel16g = data2[i+5+4-canvas.width*4*3];
                pixel16b = data2[i+6+4-canvas.width*4*3];
                pixel17r = data2[i+4+4+4-canvas.width*4*3];
                pixel17g = data2[i+5+4+4-canvas.width*4*3];
                pixel17b = data2[i+6+4+4-canvas.width*4*3];
                pixel18r = data2[i+4+4+4+4-canvas.width*4*3];
                pixel18g = data2[i+5+4+4+4-canvas.width*4*3];
                pixel18b = data2[i+6+4+4+4-canvas.width*4*3];
            }
        }

        // TRATANDO OS PIXELS 19 A 27:
        // Se estiver na primeira ou segunda linha da imagem, pixels 19 a 27 serão zerados:
        if (i<canvas.width*4*2) {
            pixel19r = pixel19g = pixel19b = pixel20r = pixel20g = pixel20b = pixel21r = pixel21g = pixel21b = pixel22r = pixel22g = pixel22b = pixel23r = pixel23g = pixel23b = pixel24r = pixel24g = pixel24b = pixel25r = pixel25g = pixel25b = pixel26r = pixel26g = pixel26b = pixel27r = pixel27g = pixel27b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a primeira:
        else {
            // Pixels 19, 20, 21 e 22:
            // Se estiver na primeira coluna da imagem, pixels 19, 20, 21 e 22 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel19r = pixel19g = pixel19b = pixel20r = pixel20g = pixel20b = pixel21r = pixel21g = pixel21b = pixel22r = pixel22g = pixel22b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 19, 20 e 21 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel19r = pixel19g = pixel19b = pixel20r = pixel20g = pixel20b = pixel21r = pixel21g = pixel21b = 0;
                pixel22r = data2[i-4-canvas.width*4*2];
                pixel22g = data2[i-3-canvas.width*4*2];
                pixel22b = data2[i-2-canvas.width*4*2];
            }
            // Se estiver na terceira coluna da imagem, pixels 19 e 20 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel19r = pixel19g = pixel19b = pixel20r = pixel20g = pixel20b = 0;
                pixel21r = data2[i-4-4-canvas.width*4*2];
                pixel21g = data2[i-3-4-canvas.width*4*2];
                pixel21b = data2[i-2-4-canvas.width*4*2];
                pixel22r = data2[i-4-canvas.width*4*2];
                pixel22g = data2[i-3-canvas.width*4*2];
                pixel22b = data2[i-2-canvas.width*4*2];
            }
            // Se estiver na terceira coluna da imagem, pixels 19 serão zerados:
            else if (i%(canvas.width*4)===12) {
                pixel19r = pixel19g = pixel19b = 0;
                pixel20r = data2[i-4-4-4-canvas.width*4*2];
                pixel20g = data2[i-3-4-4-canvas.width*4*2];
                pixel20b = data2[i-2-4-4-canvas.width*4*2];
                pixel21r = data2[i-4-4-canvas.width*4*2];
                pixel21g = data2[i-3-4-canvas.width*4*2];
                pixel21b = data2[i-2-4-canvas.width*4*2];
                pixel22r = data2[i-4-canvas.width*4*2];
                pixel22g = data2[i-3-canvas.width*4*2];
                pixel22b = data2[i-2-canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel19r = data2[i-4-4-4-4-canvas.width*4*2];
                pixel19g = data2[i-3-4-4-4-canvas.width*4*2];
                pixel19b = data2[i-2-4-4-4-canvas.width*4*2];
                pixel20r = data2[i-4-4-4-canvas.width*4*2];
                pixel20g = data2[i-3-4-4-canvas.width*4*2];
                pixel20b = data2[i-2-4-4-canvas.width*4*2];
                pixel21r = data2[i-4-4-canvas.width*4*2];
                pixel21g = data2[i-3-4-canvas.width*4*2];
                pixel21b = data2[i-2-4-canvas.width*4*2];
                pixel22r = data2[i-4-canvas.width*4*2];
                pixel22g = data2[i-3-canvas.width*4*2];
                pixel22b = data2[i-2-canvas.width*4*2];
            }
            // Pixel 23:
            pixel23r = data2[i-canvas.width*4*2];
            pixel23g = data2[i+1-canvas.width*4*2];
            pixel23b = data2[i+2-canvas.width*4*2];
            // Pixels 24, 25, 26 e 27:
            // Se estiver na ultima coluna da imagem, pixels 24, 25, 26 e 27 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel24r = pixel24g = pixel24b = pixel25r = pixel25g = pixel25b = pixel26r = pixel26g = pixel26b = pixel27r = pixel27g = pixel27b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 25, 26 e 27 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel25r = pixel25g = pixel25b = pixel26r = pixel26g = pixel26b = pixel27r = pixel27g = pixel27b = 0;
                pixel24r = data2[i+4-canvas.width*4*2];
                pixel24g = data2[i+5-canvas.width*4*2];
                pixel24b = data2[i+6-canvas.width*4*2];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 26 e 27 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel26r = pixel26g = pixel26b = pixel27r = pixel27g = pixel27b = 0;
                pixel24r = data2[i+4-canvas.width*4*2];
                pixel24g = data2[i+5-canvas.width*4*2];
                pixel24b = data2[i+6-canvas.width*4*2];
                pixel25r = data2[i+4+4-canvas.width*4*2];
                pixel25g = data2[i+5+4-canvas.width*4*2];
                pixel25b = data2[i+6+4-canvas.width*4*2];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 27 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-13) {
                pixel27r = pixel27g = pixel27b = 0;
                pixel24r = data2[i+4-canvas.width*4*2];
                pixel24g = data2[i+5-canvas.width*4*2];
                pixel24b = data2[i+6-canvas.width*4*2];
                pixel25r = data2[i+4+4-canvas.width*4*2];
                pixel25g = data2[i+5+4-canvas.width*4*2];
                pixel25b = data2[i+6+4-canvas.width*4*2];
                pixel26r = data2[i+4+4+4-canvas.width*4*2];
                pixel26g = data2[i+5+4+4-canvas.width*4*2];
                pixel26b = data2[i+6+4+4-canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel24r = data2[i+4-canvas.width*4*2];
                pixel24g = data2[i+5-canvas.width*4*2];
                pixel24b = data2[i+6-canvas.width*4*2];
                pixel25r = data2[i+4+4-canvas.width*4*2];
                pixel25g = data2[i+5+4-canvas.width*4*2];
                pixel25b = data2[i+6+4-canvas.width*4*2];
                pixel26r = data2[i+4+4+4-canvas.width*4*2];
                pixel26g = data2[i+5+4+4-canvas.width*4*2];
                pixel26b = data2[i+6+4+4-canvas.width*4*2];
                pixel27r = data2[i+4+4+4+4-canvas.width*4*2];
                pixel27g = data2[i+5+4+4+4-canvas.width*4*2];
                pixel27b = data2[i+6+4+4+4-canvas.width*4*2];
            }
        }

        // TRATANDO OS PIXELS 28 A 36:
        // Se estiver na primeira linha da imagem, pixels 28 a 36 serão zerados:
        if (i<canvas.width*4) {
            pixel28r = pixel28g = pixel28b = pixel29r = pixel29g = pixel29b = pixel30r = pixel30g = pixel30b = pixel31r = pixel31g = pixel31b = pixel32r = pixel32g = pixel32b = pixel33r = pixel33g = pixel33b = pixel34r = pixel34g = pixel34b = pixel35r = pixel35g = pixel35b = pixel36r = pixel36g = pixel36b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a primeira:
        else {
            // Pixels 28, 29, 30 e 31:
            // Se estiver na primeira coluna da imagem, pixels 28, 29, 30 e 31 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel28r = pixel28g = pixel28b = pixel29r = pixel29g = pixel29b = pixel30r = pixel30g = pixel30b = pixel31r = pixel31g = pixel31b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 28, 29 e 30 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel28r = pixel28g = pixel28b = pixel29r = pixel29g = pixel29b = pixel30r = pixel30g = pixel30b = 0;
                pixel31r = data2[i-4-canvas.width*4];
                pixel31g = data2[i-3-canvas.width*4];
                pixel31b = data2[i-2-canvas.width*4];
            }
            // Se estiver na terceira coluna da imagem, pixels 28 e 29 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel28r = pixel28g = pixel28b = pixel29r = pixel29g = pixel29b = 0;
                pixel30r = data2[i-4-4-canvas.width*4];
                pixel30g = data2[i-3-4-canvas.width*4];
                pixel30b = data2[i-2-4-canvas.width*4];
                pixel31r = data2[i-4-canvas.width*4];
                pixel31g = data2[i-3-canvas.width*4];
                pixel31b = data2[i-2-canvas.width*4];
            }
            // Se estiver na terceira coluna da imagem, pixels 28 serão zerados:
            else if (i%(canvas.width*4)===12) {
                pixel28r = pixel28g = pixel28b = 0;
                pixel29r = data2[i-4-4-4-canvas.width*4];
                pixel29g = data2[i-3-4-4-canvas.width*4];
                pixel29b = data2[i-2-4-4-canvas.width*4];
                pixel30r = data2[i-4-4-canvas.width*4];
                pixel30g = data2[i-3-4-canvas.width*4];
                pixel30b = data2[i-2-4-canvas.width*4];
                pixel31r = data2[i-4-canvas.width*4];
                pixel31g = data2[i-3-canvas.width*4];
                pixel31b = data2[i-2-canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel28r = data2[i-4-4-4-4-canvas.width*4];
                pixel28g = data2[i-3-4-4-4-canvas.width*4];
                pixel28b = data2[i-2-4-4-4-canvas.width*4];
                pixel29r = data2[i-4-4-4-canvas.width*4];
                pixel29g = data2[i-3-4-4-canvas.width*4];
                pixel29b = data2[i-2-4-4-canvas.width*4];
                pixel30r = data2[i-4-4-canvas.width*4];
                pixel30g = data2[i-3-4-canvas.width*4];
                pixel30b = data2[i-2-4-canvas.width*4];
                pixel31r = data2[i-4-canvas.width*4];
                pixel31g = data2[i-3-canvas.width*4];
                pixel31b = data2[i-2-canvas.width*4];
            }
            // Pixel 32:
            pixel32r = data2[i-canvas.width*4];
            pixel32g = data2[i+1-canvas.width*4];
            pixel32b = data2[i+2-canvas.width*4];
            // Pixels 33, 34, 35 e 36:
            // Se estiver na ultima coluna da imagem, pixels 33, 34, 35 e 36 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel33r = pixel33g = pixel33b = pixel34r = pixel34g = pixel34b = pixel35r = pixel35g = pixel35b = pixel36r = pixel36g = pixel36b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 34, 35 e 36 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel34r = pixel34g = pixel34b = pixel35r = pixel35g = pixel35b = pixel36r = pixel36g = pixel36b = 0;
                pixel33r = data2[i+4-canvas.width*4];
                pixel33g = data2[i+5-canvas.width*4];
                pixel33b = data2[i+6-canvas.width*4];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 35 e 36 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel35r = pixel35g = pixel35b = pixel36r = pixel36g = pixel36b = 0;
                pixel33r = data2[i+4-canvas.width*4];
                pixel33g = data2[i+5-canvas.width*4];
                pixel33b = data2[i+6-canvas.width*4];
                pixel34r = data2[i+4+4-canvas.width*4];
                pixel34g = data2[i+5+4-canvas.width*4];
                pixel34b = data2[i+6+4-canvas.width*4];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 36 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-13) {
                pixel36r = pixel36g = pixel36b = 0;
                pixel33r = data2[i+4-canvas.width*4];
                pixel33g = data2[i+5-canvas.width*4];
                pixel33b = data2[i+6-canvas.width*4];
                pixel34r = data2[i+4+4-canvas.width*4];
                pixel34g = data2[i+5+4-canvas.width*4];
                pixel34b = data2[i+6+4-canvas.width*4];
                pixel35r = data2[i+4+4+4-canvas.width*4];
                pixel35g = data2[i+5+4+4-canvas.width*4];
                pixel35b = data2[i+6+4+4-canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel33r = data2[i+4-canvas.width*4];
                pixel33g = data2[i+5-canvas.width*4];
                pixel33b = data2[i+6-canvas.width*4];
                pixel34r = data2[i+4+4-canvas.width*4];
                pixel34g = data2[i+5+4-canvas.width*4];
                pixel34b = data2[i+6+4-canvas.width*4];
                pixel35r = data2[i+4+4+4-canvas.width*4];
                pixel35g = data2[i+5+4+4-canvas.width*4];
                pixel35b = data2[i+6+4+4-canvas.width*4];
                pixel36r = data2[i+4+4+4+4-canvas.width*4];
                pixel36g = data2[i+5+4+4+4-canvas.width*4];
                pixel36b = data2[i+6+4+4+4-canvas.width*4];
            }
        }

        // TRATANDO OS PIXELS 37 A 45:
        // Pixels 37, 38, 39 e 40:
        // Se estiver na primeira coluna da imagem, pixels 37, 38, 39 e 40 serão zerados:
        if (i%(canvas.width*4)===0) {
            pixel37r = pixel37g = pixel37b = pixel38r = pixel38g = pixel38b = pixel39r = pixel39g = pixel39b = pixel40r = pixel40g = pixel40b = 0;
        }
        // Se estiver na segunda coluna da imagem, pixels 37, 38 e 39 serão zerados:
        else if (i%(canvas.width*4)===4) {
            pixel37r = pixel37g = pixel37b = pixel38r = pixel38g = pixel38b = pixel39r = pixel39g = pixel39b = 0;
            pixel40r = data2[i-4];
            pixel40g = data2[i-3];
            pixel40b = data2[i-2];
        }
        // Se estiver na terceira coluna da imagem, pixels 37, 38 serão zerados:
        else if (i%(canvas.width*4)===8) {
            pixel37r = pixel37g = pixel37b = pixel38r = pixel38g = pixel38b = 0;
            pixel39r = data2[i-4-4];
            pixel39g = data2[i-3-4];
            pixel39b = data2[i-2-4];
            pixel40r = data2[i-4];
            pixel40g = data2[i-3];
            pixel40b = data2[i-2];
        }
        // Se estiver na quarta coluna da imagem, pixels 37 serão zerados:
        else if (i%(canvas.width*4)===12) {
            pixel37r = pixel37g = pixel37b = 0;
            pixel38r = data2[i-4-4-4];
            pixel38g = data2[i-3-4-4];
            pixel38b = data2[i-2-4-4];
            pixel39r = data2[i-4-4];
            pixel39g = data2[i-3-4];
            pixel39b = data2[i-2-4];
            pixel40r = data2[i-4];
            pixel40g = data2[i-3];
            pixel40b = data2[i-2];
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel37r = data2[i-4-4-4-4];
            pixel37g = data2[i-3-4-4-4];
            pixel37b = data2[i-2-4-4-4];
            pixel38r = data2[i-4-4-4];
            pixel38g = data2[i-3-4-4];
            pixel38b = data2[i-2-4-4];
            pixel39r = data2[i-4-4];
            pixel39g = data2[i-3-4];
            pixel39b = data2[i-2-4];
            pixel40r = data2[i-4];
            pixel40g = data2[i-3];
            pixel40b = data2[i-2];
        }
        // Pixels 41:
        pixel41r = data2[i];
        pixel41g = data2[i+1];
        pixel41b = data2[i+2];
        // Pixels 42, 43, 44 e 45:
        // Se estiver na ultima coluna da imagem, pixels  42, 43, 44 e 45 serão zerados:
        if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
            pixel42r = pixel42g = pixel42b = pixel43r = pixel43g = pixel43b = pixel44r = pixel44g = pixel44b = pixel45r = pixel45g = pixel45b = 0;
        }
        // Se estiver na penúltima coluna da imagem, pixels 43, 44 e 45 serão zerados:
        else if (i%(canvas.width*4)===(canvas.width*4)-5) {
            pixel43r = pixel43g = pixel43b = pixel44r = pixel44g = pixel44b = pixel45r = pixel45g = pixel45b = 0;
            pixel42r = data2[i+4];
            pixel42g = data2[i+5];
            pixel42b = data2[i+6];
        }
        // Se estiver na antepenúltima coluna da imagem, pixels 44 e 45 serão zerados:
        else if (i%(canvas.width*4)===(canvas.width*4)-9) {
            pixel44r = pixel44g = pixel44b = pixel45r = pixel45g = pixel45b = 0;
            pixel42r = data2[i+4];
            pixel42g = data2[i+5];
            pixel42b = data2[i+6];
            pixel43r = data2[i+4+4];
            pixel43g = data2[i+5+4];
            pixel43b = data2[i+6+4];
        }
        // Se estiver na pré-antepenúltima coluna da imagem, pixels 45 serão zerados:
        else if (i%(canvas.width*4)===(canvas.width*4)-13) {
            pixel45r = pixel45g = pixel45b = 0;
            pixel42r = data2[i+4];
            pixel42g = data2[i+5];
            pixel42b = data2[i+6];
            pixel43r = data2[i+4+4];
            pixel43g = data2[i+5+4];
            pixel43b = data2[i+6+4];
            pixel44r = data2[i+4+4+4];
            pixel44g = data2[i+5+4+4];
            pixel44b = data2[i+6+4+4];
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel42r = data2[i+4];
            pixel42g = data2[i+5];
            pixel42b = data2[i+6];
            pixel43r = data2[i+4+4];
            pixel43g = data2[i+5+4];
            pixel43b = data2[i+6+4];
            pixel44r = data2[i+4+4+4];
            pixel44g = data2[i+5+4+4];
            pixel44b = data2[i+6+4+4];
            pixel45r = data2[i+4+4+4+4];
            pixel45g = data2[i+5+4+4+4];
            pixel45b = data2[i+6+4+4+4];
        }

        // TRATANDO OS PIXELS 46 A 54:
        // Se estiver na ultima linha da imagem, pixels 46 a 54 serão zerados:
        if (i>(4*canvas.width)*(canvas.height-1)) {
            pixel46r = pixel46g = pixel46b = pixel47r = pixel47g = pixel47b = pixel48r = pixel48g = pixel48b = pixel49r = pixel49g = pixel49b = pixel50r = pixel50g = pixel50b = pixel51r = pixel51g = pixel51b = pixel52r = pixel52g = pixel52b = pixel53r = pixel53g = pixel53b = pixel54r = pixel54g = pixel54b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a última:
        else {
            // Pixels 46, 47, 48 e 49:
            // Se estiver na primeira coluna da imagem, pixels 46, 47, 48 e 49 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel46r = pixel46g = pixel46b = pixel47r = pixel47g = pixel47b = pixel48r = pixel48g = pixel48b = pixel49r = pixel49g = pixel49b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 46, 47 e 48 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel46r = pixel46g = pixel46b = pixel47r = pixel47g = pixel47b = pixel48r = pixel48g = pixel48b = 0;
                pixel49r = data2[i-4+canvas.width*4];
                pixel49g = data2[i-3+canvas.width*4];
                pixel49b = data2[i-2+canvas.width*4];
            }
            // Se estiver na terceira coluna da imagem, pixels 46 e 47 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel46r = pixel46g = pixel46b = pixel47r = pixel47g = pixel47b = 0;
                pixel48r = data2[i-4-4+canvas.width*4];
                pixel48g = data2[i-3-4+canvas.width*4];
                pixel48b = data2[i-2-4+canvas.width*4];
                pixel49r = data2[i-4+canvas.width*4];
                pixel49g = data2[i-3+canvas.width*4];
                pixel49b = data2[i-2+canvas.width*4];
            }
            // Se estiver na quarta coluna da imagem, pixels 46 serão zerados:
            else if (i%(canvas.width*4)===12) {
                pixel46r = pixel46g = pixel46b = 0;
                pixel47r = data2[i-4-4+4+canvas.width*4];
                pixel47g = data2[i-3-4+4+canvas.width*4];
                pixel47b = data2[i-2-4+4+canvas.width*4];
                pixel48r = data2[i-4-4+canvas.width*4];
                pixel48g = data2[i-3-4+canvas.width*4];
                pixel48b = data2[i-2-4+canvas.width*4];
                pixel49r = data2[i-4+canvas.width*4];
                pixel49g = data2[i-3+canvas.width*4];
                pixel49b = data2[i-2+canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel46r = data2[i-4-4-4+4+canvas.width*4];
                pixel46g = data2[i-3-4-4+4+canvas.width*4];
                pixel46b = data2[i-2-4-4+4+canvas.width*4];
                pixel47r = data2[i-4-4+4+canvas.width*4];
                pixel47g = data2[i-3-4+4+canvas.width*4];
                pixel47b = data2[i-2-4+4+canvas.width*4];
                pixel48r = data2[i-4-4+canvas.width*4];
                pixel48g = data2[i-3-4+canvas.width*4];
                pixel48b = data2[i-2-4+canvas.width*4];
                pixel49r = data2[i-4+canvas.width*4];
                pixel49g = data2[i-3+canvas.width*4];
                pixel49b = data2[i-2+canvas.width*4];
            }
            // Pixel 50:
            pixel50r = data2[i+canvas.width*4];
            pixel50g = data2[i+1+canvas.width*4];
            pixel50b = data2[i+2+canvas.width*4];
            // Pixels 51, 52, 53 e 54:
            // Se estiver na ultima coluna da imagem, pixels 51, 52, 53 e 54 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel51r = pixel51g = pixel51b = pixel52r = pixel52g = pixel52b = pixel53r = pixel53g = pixel53b = pixel54r = pixel54g = pixel54b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 52, 53 e 54 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel52r = pixel52g = pixel52b = pixel53r = pixel53g = pixel53b = pixel54r = pixel54g = pixel54b = 0;
                pixel51r = data2[i+4+canvas.width*4];
                pixel51g = data2[i+5+canvas.width*4];
                pixel51b = data2[i+6+canvas.width*4];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 53 e 54 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel53r = pixel53g = pixel53b = pixel54r = pixel54g = pixel54b = 0;
                pixel51r = data2[i+4+canvas.width*4];
                pixel51g = data2[i+5+canvas.width*4];
                pixel51b = data2[i+6+canvas.width*4];
                pixel52r = data2[i+4+4+canvas.width*4];
                pixel52g = data2[i+5+4+canvas.width*4];
                pixel52b = data2[i+6+4+canvas.width*4];
            }
            // Se estiver na pré-antepenúltima coluna da imagem, pixels 54 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-13) {
                pixel54r = pixel54g = pixel54b = 0;
                pixel51r = data2[i+4+canvas.width*4];
                pixel51g = data2[i+5+canvas.width*4];
                pixel51b = data2[i+6+canvas.width*4];
                pixel52r = data2[i+4+4+canvas.width*4];
                pixel52g = data2[i+5+4+canvas.width*4];
                pixel52b = data2[i+6+4+canvas.width*4];
                pixel53r = data2[i+4+4+4+canvas.width*4];
                pixel53g = data2[i+5+4+4+canvas.width*4];
                pixel53b = data2[i+6+4+4+canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel51r = data2[i+4+canvas.width*4];
                pixel51g = data2[i+5+canvas.width*4];
                pixel51b = data2[i+6+canvas.width*4];
                pixel52r = data2[i+4+4+canvas.width*4];
                pixel52g = data2[i+5+4+canvas.width*4];
                pixel52b = data2[i+6+4+canvas.width*4];
                pixel53r = data2[i+4+4+4+canvas.width*4];
                pixel53g = data2[i+5+4+4+canvas.width*4];
                pixel53b = data2[i+6+4+4+canvas.width*4];
                pixel54r = data2[i+4+4+4+4+canvas.width*4];
                pixel54g = data2[i+5+4+4+4+canvas.width*4];
                pixel54b = data2[i+6+4+4+4+canvas.width*4];
            }
        }

        // TRATANDO OS PIXELS 55 A 63:
        // Se estiver na ultima ou penúltima linha da imagem, pixels 46 a 54 serão zerados:
        if (i>(4*canvas.width)*(canvas.height-2)) {
            pixel55r = pixel55g = pixel55b = pixel56r = pixel56g = pixel56b = pixel57r = pixel57g = pixel57b = pixel58r = pixel58g = pixel58b = pixel59r = pixel59g = pixel59b = pixel60r = pixel60g = pixel60b = pixel61r = pixel61g = pixel61b = pixel62r = pixel62g = pixel62b = pixel63r = pixel63g = pixel63b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a última:
        else {
            // Pixels 55, 56, 57 e 58:
            // Se estiver na primeira coluna da imagem, pixels 55, 56, 57 e 58 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel55r = pixel55g = pixel55b = pixel56r = pixel56g = pixel56b = pixel57r = pixel57g = pixel57b = pixel58r = pixel58g = pixel58b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 55, 56 e 57 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel55r = pixel55g = pixel55b = pixel56r = pixel56g = pixel56b = pixel57r = pixel57g = pixel57b = 0;
                pixel58r = data2[i-4+canvas.width*4*2];
                pixel58g = data2[i-3+canvas.width*4*2];
                pixel58b = data2[i-2+canvas.width*4*2];
            }
            // Se estiver na terceira coluna da imagem, pixels 55 e 56 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel55r = pixel55g = pixel55b = pixel56r = pixel56g = pixel56b = 0;
                pixel57r = data2[i-4-4+canvas.width*4*2];
                pixel57g = data2[i-3-4+canvas.width*4*2];
                pixel57b = data2[i-2-4+canvas.width*4*2];
                pixel58r = data2[i-4+canvas.width*4*2];
                pixel58g = data2[i-3+canvas.width*4*2];
                pixel58b = data2[i-2+canvas.width*4*2];
            }
            // Se estiver na quarta coluna da imagem, pixels 55 serão zerados:
            else if (i%(canvas.width*4)===12) {
                pixel55r = pixel55g = pixel55b = 0;
                pixel56r = data2[i-4-4+4+canvas.width*4*2];
                pixel56g = data2[i-3-4+4+canvas.width*4*2];
                pixel56b = data2[i-2-4+4+canvas.width*4*2];
                pixel57r = data2[i-4-4+canvas.width*4*2];
                pixel57g = data2[i-3-4+canvas.width*4*2];
                pixel57b = data2[i-2-4+canvas.width*4*2];
                pixel58r = data2[i-4+canvas.width*4*2];
                pixel58g = data2[i-3+canvas.width*4*2];
                pixel58b = data2[i-2+canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel55r = data2[i-4-4-4+4+canvas.width*4*2];
                pixel55g = data2[i-3-4-4+4+canvas.width*4*2];
                pixel55b = data2[i-2-4-4+4+canvas.width*4*2];
                pixel56r = data2[i-4-4+4+canvas.width*4*2];
                pixel56g = data2[i-3-4+4+canvas.width*4*2];
                pixel56b = data2[i-2-4+4+canvas.width*4*2];
                pixel57r = data2[i-4-4+canvas.width*4*2];
                pixel57g = data2[i-3-4+canvas.width*4*2];
                pixel57b = data2[i-2-4+canvas.width*4*2];
                pixel58r = data2[i-4+canvas.width*4*2];
                pixel58g = data2[i-3+canvas.width*4*2];
                pixel58b = data2[i-2+canvas.width*4*2];
            }
            // Pixel 59:
            pixel59r = data2[i+canvas.width*4];
            pixel59g = data2[i+1+canvas.width*4];
            pixel59b = data2[i+2+canvas.width*4];
            // Pixels 60, 61, 62 e 63:
            // Se estiver na ultima coluna da imagem, pixels 60, 61, 62 e 63 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel60r = pixel60g = pixel60b = pixel61r = pixel61g = pixel61b = pixel62r = pixel62g = pixel62b = pixel63r = pixel63g = pixel63b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 61, 62 e 63 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel61r = pixel61g = pixel61b = pixel62r = pixel62g = pixel62b = pixel63r = pixel63g = pixel63b = 0;
                pixel60r = data2[i+4+canvas.width*4*2];
                pixel60g = data2[i+5+canvas.width*4*2];
                pixel60b = data2[i+6+canvas.width*4*2];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 62 e 63 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel62r = pixel62g = pixel62b = pixel63r = pixel63g = pixel63b = 0;
                pixel60r = data2[i+4+canvas.width*4*2];
                pixel60g = data2[i+5+canvas.width*4*2];
                pixel60b = data2[i+6+canvas.width*4*2];
                pixel61r = data2[i+4+4+canvas.width*4*2];
                pixel61g = data2[i+5+4+canvas.width*4*2];
                pixel61b = data2[i+6+4+canvas.width*4*2];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 54 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-13) {
                pixel63r = pixel63g = pixel63b = 0;
                pixel60r = data2[i+4+canvas.width*4*2];
                pixel60g = data2[i+5+canvas.width*4*2];
                pixel60b = data2[i+6+canvas.width*4*2];
                pixel61r = data2[i+4+4+canvas.width*4*2];
                pixel61g = data2[i+5+4+canvas.width*4*2];
                pixel61b = data2[i+6+4+canvas.width*4*2];
                pixel62r = data2[i+4+4+4+canvas.width*4*2];
                pixel62g = data2[i+5+4+4+canvas.width*4*2];
                pixel62b = data2[i+6+4+4+canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel60r = data2[i+4+canvas.width*4*2];
                pixel60g = data2[i+5+canvas.width*4*2];
                pixel60b = data2[i+6+canvas.width*4*2];
                pixel61r = data2[i+4+4+canvas.width*4*2];
                pixel61g = data2[i+5+4+canvas.width*4*2];
                pixel61b = data2[i+6+4+canvas.width*4*2];
                pixel62r = data2[i+4+4+4+canvas.width*4*2];
                pixel62g = data2[i+5+4+4+canvas.width*4*2];
                pixel62b = data2[i+6+4+4+canvas.width*4*2];
                pixel63r = data2[i+4+4+4+4+canvas.width*4*2];
                pixel63g = data2[i+5+4+4+4+canvas.width*4*2];
                pixel63b = data2[i+6+4+4+4+canvas.width*4*2];
            }
        }

        // TRATANDO OS PIXELS 64 A 72:
        // Se estiver na última, penúltima ou antepenúltima linha da imagem, pixels 64 a 72 serão zerados:
        if (i>(4*canvas.width)*(canvas.height-3)) {
            pixel64r = pixel64g = pixel64b = pixel65r = pixel65g = pixel65b = pixel66r = pixel66g = pixel66b = pixel67r = pixel67g = pixel67b = pixel68r = pixel68g = pixel68b = pixel69r = pixel69g = pixel69b = pixel70r = pixel70g = pixel70b = pixel71r = pixel71g = pixel71b = pixel72r = pixel72g = pixel72b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a última, penúltima e antepenúltima:
        else {
            // Pixels 64, 65, 66 e 67:
            // Se estiver na primeira coluna da imagem, pixels 64, 65, 66 e 67 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel64r = pixel64g = pixel64b = pixel65r = pixel65g = pixel65b = pixel66r = pixel66g = pixel66b = pixel67r = pixel67g = pixel67b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 64, 65 e 66 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel64r = pixel64g = pixel64b = pixel65r = pixel65g = pixel65b = pixel66r = pixel66g = pixel66b = 0;
                pixel67r = data2[i-4+canvas.width*4*3];
                pixel67g = data2[i-3+canvas.width*4*3];
                pixel67b = data2[i-2+canvas.width*4*3];
            }
            // Se estiver na terceira coluna da imagem, pixels 64 e 65 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel64r = pixel64g = pixel64b = pixel65r = pixel65g = pixel65b = 0;
                pixel66r = data2[i-4-4+canvas.width*4*3];
                pixel66g = data2[i-3-4+canvas.width*4*3];
                pixel66b = data2[i-2-4+canvas.width*4*3];
                pixel67r = data2[i-4+canvas.width*4*3];
                pixel67g = data2[i-3+canvas.width*4*3];
                pixel67b = data2[i-2+canvas.width*4*3];
            }
            // Se estiver na terceira coluna da imagem, pixels 64 serão zerados:
            else if (i%(canvas.width*4)===12) {
                pixel64r = pixel64g = pixel64b = 0;
                pixel65r = data2[i-4-4+4+canvas.width*4*3];
                pixel65g = data2[i-3-4+4+canvas.width*4*3];
                pixel65b = data2[i-2-4+4+canvas.width*4*3];
                pixel66r = data2[i-4-4+canvas.width*4*3];
                pixel66g = data2[i-3-4+canvas.width*4*3];
                pixel66b = data2[i-2-4+canvas.width*4*3];
                pixel67r = data2[i-4+canvas.width*4*3];
                pixel67g = data2[i-3+canvas.width*4*3];
                pixel67b = data2[i-2+canvas.width*4*3];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel64r = data2[i-4-4+4+4+canvas.width*4*3];
                pixel64g = data2[i-3-4+4+4+canvas.width*4*3];
                pixel64b = data2[i-2-4+4+4+canvas.width*4*3];
                pixel65r = data2[i-4-4+4+canvas.width*4*3];
                pixel65g = data2[i-3-4+4+canvas.width*4*3];
                pixel65b = data2[i-2-4+4+canvas.width*4*3];
                pixel66r = data2[i-4-4+canvas.width*4*3];
                pixel66g = data2[i-3-4+canvas.width*4*3];
                pixel66b = data2[i-2-4+canvas.width*4*3];
                pixel67r = data2[i-4+canvas.width*4*3];
                pixel67g = data2[i-3+canvas.width*4*3];
                pixel67b = data2[i-2+canvas.width*4*3];
            }
            // Pixel 68:
            pixel68r = data2[i+canvas.width*4*3];
            pixel68g = data2[i+1+canvas.width*4*3];
            pixel68b = data2[i+2+canvas.width*4*3];
            // Pixels 69, 70, 71 e 72:
            // Se estiver na última coluna da imagem, pixels 69, 70, 71 e 72 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel69r = pixel69g = pixel69b = pixel70r = pixel70g = pixel70b = pixel71r = pixel71g = pixel71b = pixel72r = pixel72g = pixel72b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 70, 71 e 72 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-5) {
                pixel70r = pixel70g = pixel70b = pixel71r = pixel71g = pixel71b = pixel72r = pixel72g = pixel72b = 0;
                pixel69r = data2[i+4+canvas.width*4*3];
                pixel69g = data2[i+5+canvas.width*4*3];
                pixel69b = data2[i+6+canvas.width*4*3];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 71 e 72 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-9) {
                pixel71r = pixel71g = pixel71b = pixel72r = pixel72g = pixel72b = 0;
                pixel69r = data2[i+4+canvas.width*4*3];
                pixel69g = data2[i+5+canvas.width*4*3];
                pixel69b = data2[i+6+canvas.width*4*3];
                pixel70r = data2[i+4+4+canvas.width*4*3];
                pixel70g = data2[i+5+4+canvas.width*4*3];
                pixel70b = data2[i+6+4+canvas.width*4*3];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 72 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-13) {
                pixel72r = pixel72g = pixel72b = 0;
                pixel69r = data2[i+4+canvas.width*4*3];
                pixel69g = data2[i+5+canvas.width*4*3];
                pixel69b = data2[i+6+canvas.width*4*3];
                pixel70r = data2[i+4+4+canvas.width*4*3];
                pixel70g = data2[i+5+4+canvas.width*4*3];
                pixel70b = data2[i+6+4+canvas.width*4*3];
                pixel71r = data2[i+4+4+4+canvas.width*4*3];
                pixel71g = data2[i+5+4+4+canvas.width*4*3];
                pixel71b = data2[i+6+4+4+canvas.width*4*3];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel69r = data2[i+4+canvas.width*4*3];
                pixel69g = data2[i+5+canvas.width*4*3];
                pixel69b = data2[i+6+canvas.width*4*3];
                pixel70r = data2[i+4+4+canvas.width*4*3];
                pixel70g = data2[i+5+4+canvas.width*4*3];
                pixel70b = data2[i+6+4+canvas.width*4*3];
                pixel71r = data2[i+4+4+4+canvas.width*4*3];
                pixel71g = data2[i+5+4+4+canvas.width*4*3];
                pixel71b = data2[i+6+4+4+canvas.width*4*3];
                pixel72r = data2[i+4+4+4+4+canvas.width*4*3];
                pixel72g = data2[i+5+4+4+4+canvas.width*4*3];
                pixel72b = data2[i+6+4+4+4+canvas.width*4*3];
            }
        }

        // TRATANDO OS PIXELS 73 A 81:
        // Se estiver na última, penúltima, antepenúltima ou pré-antepenúltima linha da imagem, pixels 73 a 81 serão zerados:
        if (i>(4*canvas.width)*(canvas.height-3)) {
            pixel73r = pixel73g = pixel73b = pixel74r = pixel74g = pixel74b = pixel75r = pixel75g = pixel75b = pixel76r = pixel76g = pixel76b = pixel77r = pixel77g = pixel77b = pixel78r = pixel78g = pixel78b = pixel79r = pixel79g = pixel79b = pixel80r = pixel80g = pixel80b = pixel81r = pixel81g = pixel81b = 0;
        }
        // Se estiver em qualquer linha da imagem menos a última, penúltima, antepenúltima e pré-antepenúltima:
        else {
            // Pixels 73, 74, 75 e 76:
            // Se estiver na primeira coluna da imagem, pixels 73, 74, 75 e 76 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel73r = pixel73g = pixel73b = pixel74r = pixel74g = pixel74b = pixel75r = pixel75g = pixel75b = pixel76r = pixel76g = pixel76b = 0;
            }
            // Se estiver na segunda coluna da imagem, pixels 73, 74 e 75 serão zerados:
            else if (i%(canvas.width*4)===4) {
                pixel73r = pixel73g = pixel73b = pixel74r = pixel74g = pixel74b = pixel75r = pixel75g = pixel75b = 0;
                pixel76r = data2[i-4+canvas.width*4*4];
                pixel76g = data2[i-3+canvas.width*4*4];
                pixel76b = data2[i-2+canvas.width*4*4];
            }
            // Se estiver na terceira coluna da imagem, pixels 73 e 74 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel73r = pixel73g = pixel73b = pixel74r = pixel74g = pixel74b = 0;
                pixel75r = data2[i-4-4+canvas.width*4*4];
                pixel75g = data2[i-3-4+canvas.width*4*4];
                pixel75b = data2[i-2-4+canvas.width*4*4];
                pixel76r = data2[i-4+canvas.width*4*4];
                pixel76g = data2[i-3+canvas.width*4*4];
                pixel76b = data2[i-2+canvas.width*4*4];
            }
            // Se estiver na quarta coluna da imagem, pixels 73 serão zerados:
            else if (i%(canvas.width*4)===12) {
                pixel73r = pixel73g = pixel73b = 0;
                pixel74r = data2[i-4-4+4+canvas.width*4*4];
                pixel74g = data2[i-3-4+4+canvas.width*4*4];
                pixel74b = data2[i-2-4+4+canvas.width*4*4];
                pixel75r = data2[i-4-4+canvas.width*4*4];
                pixel75g = data2[i-3-4+canvas.width*4*4];
                pixel75b = data2[i-2-4+canvas.width*4*4];
                pixel76r = data2[i-4+canvas.width*4*4];
                pixel76g = data2[i-3+canvas.width*4*4];
                pixel76b = data2[i-2+canvas.width*4*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel73r = data2[i-4-4-4+4+canvas.width*4*4];
                pixel73g = data2[i-3-4-4+4+canvas.width*4*4];
                pixel73b = data2[i-2-4-4+4+canvas.width*4*4];
                pixel74r = data2[i-4-4+4+canvas.width*4*4];
                pixel74g = data2[i-3-4+4+canvas.width*4*4];
                pixel74b = data2[i-2-4+4+canvas.width*4*4];
                pixel75r = data2[i-4-4+canvas.width*4*4];
                pixel75g = data2[i-3-4+canvas.width*4*4];
                pixel75b = data2[i-2-4+canvas.width*4*4];
                pixel76r = data2[i-4+canvas.width*4*4];
                pixel76g = data2[i-3+canvas.width*4*4];
                pixel76b = data2[i-2+canvas.width*4*4];
            }
            // Pixel 77:
            pixel77r = data2[i+canvas.width*4*4];
            pixel77g = data2[i+1+canvas.width*4*4];
            pixel77b = data2[i+2+canvas.width*4*4];
            // Pixels 78, 79, 80 e 81:
            // Se estiver na última coluna da imagem, pixels 78, 79, 80 e 81 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel78r = pixel78g = pixel78b = pixel79r = pixel79g = pixel79b = pixel80r = pixel80g = pixel80b = pixel81r = pixel81g = pixel81b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 79, 80 e 81 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-5) {
                pixel79r = pixel79g = pixel79b = pixel80r = pixel80g = pixel80b = pixel81r = pixel81g = pixel81b = 0;
                pixel78r = data2[i+4+canvas.width*4*4];
                pixel78g = data2[i+5+canvas.width*4*4];
                pixel78b = data2[i+6+canvas.width*4*4];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 80 e 81 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-9) {
                pixel80r = pixel80g = pixel80b = pixel81r = pixel81g = pixel81b = 0;
                pixel78r = data2[i+4+canvas.width*4*4];
                pixel78g = data2[i+5+canvas.width*4*4];
                pixel78b = data2[i+6+canvas.width*4*4];
                pixel79r = data2[i+4+4+canvas.width*4*4];
                pixel79g = data2[i+5+4+canvas.width*4*4];
                pixel79b = data2[i+6+4+canvas.width*4*4];
            }
            // Se estiver na pré-antepenúltima coluna da imagem, pixels 81 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-13) {
                pixel81r = pixel81g = pixel81b = 0;
                pixel78r = data2[i+4+canvas.width*4*4];
                pixel78g = data2[i+5+canvas.width*4*4];
                pixel78b = data2[i+6+canvas.width*4*4];
                pixel79r = data2[i+4+4+canvas.width*4*4];
                pixel79g = data2[i+5+4+canvas.width*4*4];
                pixel79b = data2[i+6+4+canvas.width*4*4];
                pixel80r = data2[i+4+4+4+canvas.width*4*4];
                pixel80g = data2[i+5+4+4+canvas.width*4*4];
                pixel80b = data2[i+6+4+4+canvas.width*4*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel78r = data2[i+4+canvas.width*4*4];
                pixel78g = data2[i+5+canvas.width*4*4];
                pixel78b = data2[i+6+canvas.width*4*4];
                pixel79r = data2[i+4+4+canvas.width*4*4];
                pixel79g = data2[i+5+4+canvas.width*4*4];
                pixel79b = data2[i+6+4+canvas.width*4*4];
                pixel80r = data2[i+4+4+4+canvas.width*4*4];
                pixel80g = data2[i+5+4+4+canvas.width*4*4];
                pixel80b = data2[i+6+4+4+canvas.width*4*4];
                pixel81r = data2[i+4+4+4+4+canvas.width*4*4];
                pixel81g = data2[i+5+4+4+4+canvas.width*4*4];
                pixel81b = data2[i+6+4+4+4+canvas.width*4*4];
            }
        }

        if (mediana) {
            const median = arr => {
                const mid = Math.floor(arr.length / 2),
                  nums = [...arr].sort((a, b) => a - b);
                return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
            };
            const arrayr = new Array(pixel1r, pixel2r, pixel3r, pixel4r, pixel5r, pixel6r, pixel7r, pixel8r, pixel9r, pixel10r,
                                     pixel11r, pixel12r, pixel13r, pixel14r, pixel15r, pixel16r, pixel17r, pixel18r, pixel19r, pixel20r,
                                     pixel21r, pixel22r, pixel23r, pixel24r, pixel25r, pixel26r, pixel27r, pixel28r, pixel29r, pixel30r,
                                     pixel31r, pixel32r, pixel33r, pixel34r, pixel35r, pixel36r, pixel37r, pixel38r, pixel39r, pixel40r,
                                     pixel41r, pixel42r, pixel43r, pixel44r, pixel45r, pixel46r, pixel47r, pixel48r, pixel49r, pixel50r,
                                     pixel51r, pixel52r, pixel53r, pixel54r, pixel55r, pixel56r, pixel57r, pixel58r, pixel59r, pixel60r,
                                     pixel61r, pixel62r, pixel63r, pixel64r, pixel65r, pixel66r, pixel67r, pixel68r, pixel69r, pixel70r,
                                     pixel71r, pixel72r, pixel73r, pixel74r, pixel75r, pixel76r, pixel77r, pixel78r, pixel79r, pixel80r,
                                     pixel81r);
            const arrayg = new Array(pixel1g, pixel2g, pixel3g, pixel4g, pixel5g, pixel6g, pixel7g, pixel8g, pixel9g, pixel10g,
                                     pixel11g, pixel12g, pixel13g, pixel14g, pixel15g, pixel16g, pixel17g, pixel18g, pixel19g, pixel20g,
                                     pixel21g, pixel22g, pixel23g, pixel24g, pixel25g, pixel26g, pixel27g, pixel28g, pixel29g, pixel30g,
                                     pixel31g, pixel32g, pixel33g, pixel34g, pixel35g, pixel36g, pixel37g, pixel38g, pixel39g, pixel40g,
                                     pixel41g, pixel42g, pixel43g, pixel44g, pixel45g, pixel46g, pixel47g, pixel48g, pixel49g, pixel50g,
                                     pixel51g, pixel52g, pixel53g, pixel54g, pixel55g, pixel56g, pixel57g, pixel58g, pixel59g, pixel60g,
                                     pixel61g, pixel62g, pixel63g, pixel64g, pixel65g, pixel66g, pixel67g, pixel68g, pixel69g, pixel70g,
                                     pixel71g, pixel72g, pixel73g, pixel74g, pixel75g, pixel76g, pixel77g, pixel78g, pixel79g, pixel80g,
                                     pixel81g);
            const arrayb = new Array(pixel1b, pixel2b, pixel3b, pixel4b, pixel5b, pixel6b, pixel7b, pixel8b, pixel9b, pixel10b,
                                     pixel11b, pixel12b, pixel13b, pixel14b, pixel15b, pixel16b, pixel17b, pixel18b, pixel19b, pixel20b,
                                     pixel21b, pixel22b, pixel23b, pixel24b, pixel25b, pixel26b, pixel27b, pixel28b, pixel29b, pixel30b,
                                     pixel31b, pixel32b, pixel33b, pixel34b, pixel35b, pixel36b, pixel37b, pixel38b, pixel39b, pixel40b,
                                     pixel41b, pixel42b, pixel43b, pixel44b, pixel45b, pixel46b, pixel47b, pixel48b, pixel49b, pixel50b,
                                     pixel51b, pixel52b, pixel53b, pixel54b, pixel55b, pixel56b, pixel57b, pixel58b, pixel59b, pixel60b,
                                     pixel61b, pixel62b, pixel63b, pixel64b, pixel65b, pixel66b, pixel67b, pixel68b, pixel69b, pixel70b,
                                     pixel71b, pixel72b, pixel73b, pixel74b, pixel75b, pixel76b, pixel77b, pixel78b, pixel79b, pixel80b,
                                     pixel81b);
            let medianar = median(arrayr);
            let medianag = median(arrayg);
            let medianab = median(arrayb);
            data[i] = medianar;
            data[i + 1] = medianag;
            data[i + 2] = medianab;
        }
        else {
            // Multiplica os pixels 1 a 81 pelo kernel 7x7:
            data[i] = kernel[0]*pixel1r + kernel[1]*pixel2r + kernel[2]*pixel3r + kernel[3]*pixel4r + kernel[4]*pixel5r + kernel[5]*pixel6r + kernel[6]*pixel7r + kernel[7]*pixel8r + kernel[8]*pixel9r
                    + kernel[9]*pixel10r + kernel[10]*pixel11r + kernel[11]*pixel12r + kernel[12]*pixel13r + kernel[13]*pixel14r + kernel[14]*pixel15r + kernel[15]*pixel16r + kernel[16]*pixel17r + kernel[17]*pixel18r
                    + kernel[18]*pixel19r + kernel[19]*pixel20r + kernel[20]*pixel21r + kernel[21]*pixel22r + kernel[22]*pixel23r + kernel[23]*pixel24r + kernel[24]*pixel25r + kernel[25]*pixel26r + kernel[26]*pixel27r
                    + kernel[27]*pixel28r + kernel[28]*pixel29r + kernel[29]*pixel30r + kernel[30]*pixel31r + kernel[31]*pixel32r + kernel[32]*pixel33r + kernel[33]*pixel34r + kernel[34]*pixel35r + kernel[35]*pixel36r
                    + kernel[36]*pixel37r + kernel[37]*pixel38r + kernel[38]*pixel39r + kernel[39]*pixel40r + kernel[40]*pixel41r + kernel[41]*pixel42r + kernel[42]*pixel43r + kernel[43]*pixel44r + kernel[44]*pixel45r
                    + kernel[45]*pixel46r + kernel[46]*pixel47r + kernel[47]*pixel48r + kernel[48]*pixel49r + kernel[49]*pixel50r + kernel[50]*pixel51r + kernel[51]*pixel52r + kernel[52]*pixel53r + kernel[53]*pixel54r
                    + kernel[54]*pixel55r + kernel[55]*pixel56r + kernel[56]*pixel57r + kernel[57]*pixel58r + kernel[58]*pixel59r + kernel[59]*pixel60r + kernel[60]*pixel61r + kernel[61]*pixel62r + kernel[62]*pixel63r
                    + kernel[63]*pixel64r + kernel[64]*pixel65r + kernel[65]*pixel66r + kernel[66]*pixel67r + kernel[67]*pixel68r + kernel[68]*pixel69r + kernel[69]*pixel70r + kernel[70]*pixel71r + kernel[71]*pixel72r
                    + kernel[72]*pixel73r + kernel[73]*pixel74r + kernel[74]*pixel75r + kernel[75]*pixel76r + kernel[76]*pixel77r + kernel[77]*pixel78r + kernel[78]*pixel79r + kernel[79]*pixel80r + kernel[80]*pixel81r;
            
            data[i + 1] = kernel[0]*pixel1g + kernel[1]*pixel2g + kernel[2]*pixel3g + kernel[3]*pixel4g + kernel[4]*pixel5g + kernel[5]*pixel6g + kernel[6]*pixel7g + kernel[7]*pixel8g + kernel[8]*pixel9g
                        + kernel[9]*pixel10g + kernel[10]*pixel11g + kernel[11]*pixel12g + kernel[12]*pixel13g + kernel[13]*pixel14g + kernel[14]*pixel15g + kernel[15]*pixel16g + kernel[16]*pixel17g + kernel[17]*pixel18g
                        + kernel[18]*pixel19g + kernel[19]*pixel20g + kernel[20]*pixel21g + kernel[21]*pixel22g + kernel[22]*pixel23g + kernel[23]*pixel24g + kernel[24]*pixel25g + kernel[25]*pixel26g + kernel[26]*pixel27g
                        + kernel[27]*pixel28g + kernel[28]*pixel29g + kernel[29]*pixel30g + kernel[30]*pixel31g + kernel[31]*pixel32g + kernel[32]*pixel33g + kernel[33]*pixel34g + kernel[34]*pixel35g + kernel[35]*pixel36g
                        + kernel[36]*pixel37g + kernel[37]*pixel38g + kernel[38]*pixel39g + kernel[39]*pixel40g + kernel[40]*pixel41g + kernel[41]*pixel42g + kernel[42]*pixel43g + kernel[43]*pixel44g + kernel[44]*pixel45g
                        + kernel[45]*pixel46g + kernel[46]*pixel47g + kernel[47]*pixel48g + kernel[48]*pixel49g + kernel[49]*pixel50g + kernel[50]*pixel51g + kernel[51]*pixel52g + kernel[52]*pixel53g + kernel[53]*pixel54g
                        + kernel[54]*pixel55g + kernel[55]*pixel56g + kernel[56]*pixel57g + kernel[57]*pixel58g + kernel[58]*pixel59g + kernel[59]*pixel60g + kernel[60]*pixel61g + kernel[61]*pixel62g + kernel[62]*pixel63g
                        + kernel[63]*pixel64g + kernel[64]*pixel65g + kernel[65]*pixel66g + kernel[66]*pixel67g + kernel[67]*pixel68g + kernel[68]*pixel69g + kernel[69]*pixel70g + kernel[70]*pixel71g + kernel[71]*pixel72g
                        + kernel[72]*pixel73g + kernel[73]*pixel74g + kernel[74]*pixel75g + kernel[75]*pixel76g + kernel[76]*pixel77g + kernel[77]*pixel78g + kernel[78]*pixel79g + kernel[79]*pixel80g + kernel[80]*pixel81g;
            
            data[i + 2] = kernel[0]*pixel1b + kernel[1]*pixel2b + kernel[2]*pixel3b + kernel[3]*pixel4b + kernel[4]*pixel5b + kernel[5]*pixel6b + kernel[6]*pixel7b + kernel[7]*pixel8b + kernel[8]*pixel9b
                        + kernel[9]*pixel10b + kernel[10]*pixel11b + kernel[11]*pixel12b + kernel[12]*pixel13b + kernel[13]*pixel14b + kernel[14]*pixel15b + kernel[15]*pixel16b + kernel[16]*pixel17b + kernel[17]*pixel18b
                        + kernel[18]*pixel19b + kernel[19]*pixel20b + kernel[20]*pixel21b + kernel[21]*pixel22b + kernel[22]*pixel23b + kernel[23]*pixel24b + kernel[24]*pixel25b + kernel[25]*pixel26b + kernel[26]*pixel27b
                        + kernel[27]*pixel28b + kernel[28]*pixel29b + kernel[29]*pixel30b + kernel[30]*pixel31b + kernel[31]*pixel32b + kernel[32]*pixel33b + kernel[33]*pixel34b + kernel[34]*pixel35b + kernel[35]*pixel36b
                        + kernel[36]*pixel37b + kernel[37]*pixel38b + kernel[38]*pixel39b + kernel[39]*pixel40b + kernel[40]*pixel41b + kernel[41]*pixel42b + kernel[42]*pixel43b + kernel[43]*pixel44b + kernel[44]*pixel45b
                        + kernel[45]*pixel46b + kernel[46]*pixel47b + kernel[47]*pixel48b + kernel[48]*pixel49b + kernel[49]*pixel50b + kernel[50]*pixel51b + kernel[51]*pixel52b + kernel[52]*pixel53b + kernel[53]*pixel54b
                        + kernel[54]*pixel55b + kernel[55]*pixel56b + kernel[56]*pixel57b + kernel[57]*pixel58b + kernel[58]*pixel59b + kernel[59]*pixel60b + kernel[60]*pixel61b + kernel[61]*pixel62b + kernel[62]*pixel63b
                        + kernel[63]*pixel64b + kernel[64]*pixel65b + kernel[65]*pixel66b + kernel[66]*pixel67b + kernel[67]*pixel68b + kernel[68]*pixel69b + kernel[69]*pixel70b + kernel[70]*pixel71b + kernel[71]*pixel72b
                        + kernel[72]*pixel73b + kernel[73]*pixel74b + kernel[74]*pixel75b + kernel[75]*pixel76b + kernel[76]*pixel77b + kernel[77]*pixel78b + kernel[78]*pixel79b + kernel[79]*pixel80b + kernel[80]*pixel81b;
        }
    }
    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    // getFrequencies();
    // drawHistogram();
}
