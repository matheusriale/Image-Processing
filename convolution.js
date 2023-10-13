
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

// Filtro de detecção de bordas Laplaciano 3x3:
function convolutionLaplace3x3() {
    let kernel = [0, -1,  0,
                 -1,  4, -1,
                  0, -1,  0];
    convolution3x3(kernel, false);
}

// Filtro de detecção de bordas Laplaciano 5x5:
function convolutionLaplace5x5() {
    let kernel = [0,  0, -1,  0,  0,
                  0, -1, -2, -1,  0,
                 -1, -2, 16, -2, -1,
                  0, -1, -2, -1,  0,
                  0,  0, -1,  0,  0];
    convolution5x5(kernel, false);
}

// Filtro de detecção de bordas Laplaciano 7x7:
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

// Filtro de detecção de bordas Laplaciano 9x9:
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

// Filtro de aguçamento (nitidez) por Laplaciano 3x3:
function convolutionSharpeningLaplace3x3() {
    let data2 = [...pixels.data];                       // Imagem original
    convolutionLaplace3x3();
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

// Filtro de aguçamento (nitidez) por highboost 3x3:
function convolutionSharpeningHighboost3x3() {
    let data2 = [...pixels.data];                        // Imagem original
    convolutionGauss3x3();
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