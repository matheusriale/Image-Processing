
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
    getFrequencies();
    drawHistogram();
}