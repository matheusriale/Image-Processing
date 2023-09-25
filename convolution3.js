function convolutionGauss3x3() {
    let kernel = [1, 2, 1, 2, 4, 2, 1, 2, 1];
    convolution3x3(kernel, true);
}

function convolutionGauss5x5() {
    let kernel = [1, 4, 6, 4, 1, 4, 16, 24, 16, 4, 6, 24, 36, 24, 6, 4, 16, 24, 16, 4, 1, 4, 6, 4, 1];
    convolution5x5(kernel, true);
}

function convolutionLaplace3x3() {
    let kernel = [0, -1, 0, -1, 4, -1, 0, -1, 0];
    convolution3x3(kernel, false);
}

function convolutionLaplace5x5() {
    let kernel = [0, 0, -1, 0, 0, 0, -1, -2, -1, 0, -1, -2, 16, -2, -1, 0, -1, -2, -1, 0, 0, 0, -1, 0, 0];
    convolution5x5(kernel, false);
}

function convolutionMedian() {
}

function convolutionMedian() {
}

function convolution3x3(kernel, gaussian) {
    let copypixels = pixels; //copiar valores, novo array
    let data = copypixels.data;
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
        // Se estiver na primeira linha da imagem, pixels 1, 2 e 3 serão zerados:
        if (i<canvas.width*4) {
            pixel1r, pixel1g, pixel1b = 0;
            pixel2r, pixel2g, pixel2b = 0;
            pixel3r, pixel3g, pixel3b = 0;
        }
        else {
            // Se estiver na primeira coluna da imagem, pixels 1 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel1r, pixel1g, pixel1b = 0;
            }
            else {
                pixel1r = original_copy[i-4-canvas.width*4];
                pixel1g = original_copy[i-3-canvas.width*4];
                pixel1b = original_copy[i-2-canvas.width*4];
            }
            pixel2r = original_copy[i-canvas.width*4];
            pixel2g = original_copy[i+1-canvas.width*4];
            pixel2b = original_copy[i+2-canvas.width*4];
            // Se estiver na ultima coluna da imagem, pixels 3 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel3r, pixel3g, pixel3b = 0;
            }
            else {
                pixel3r = original_copy[i+4-canvas.width*4];
                pixel3g = original_copy[i+5-canvas.width*4];
                pixel3b = original_copy[i+6-canvas.width*4];
            }
        }

        // Se estiver na primeira coluna da imagem, pixels 4 serão zerados:
        if (i%(canvas.width*4)===0) {
            pixel4r, pixel4g, pixel4b = 0;
        }
        else {
            pixel4r = original_copy[i-4];
            pixel4g = original_copy[i-3];
            pixel4b = original_copy[i-2];
        }
        pixel5r = original_copy[i];
        pixel5g = original_copy[i+1];
        pixel5b = original_copy[i+2];
        // Se estiver na ultima coluna da imagem, pixels 6 serão zerados:
        if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
            pixel6r, pixel6g, pixel6b = 0;
        }
        else {
            pixel6r = original_copy[i+4];
            pixel6g = original_copy[i+5];
            pixel6b = original_copy[i+6];
        }

        // Se estiver na ultima linha da imagem, pixels 7, 8 e 9 serão zerados:
        if (i>(4*canvas.width)*(canvas.height-1)) {
            pixel7r, pixel7g, pixel7b = 0;
            pixel8r, pixel8g, pixel8b = 0;
            pixel9r, pixel9g, pixel9b = 0;
        }
        else {
            // Se estiver na primeira coluna da imagem, pixels 7 serão zerados:
            if (i%(canvas.width*4)===0) {
                pixel7r, pixel7g, pixel7b = 0;
            }
            else {
                pixel7r = original_copy[i-4+canvas.width*4];
                pixel7g = original_copy[i-3+canvas.width*4];
                pixel7b = original_copy[i-2+canvas.width*4];
            }
            pixel8r = original_copy[i+canvas.width*4];
            pixel8g = original_copy[i+1+canvas.width*4];
            pixel8b = original_copy[i+2+canvas.width*4];
            // Se estiver na ultima coluna da imagem, pixels 9 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel9r, pixel9g, pixel9b = 0;
            }
            else {
                pixel9r = original_copy[i+4+canvas.width*4];
                pixel9g = original_copy[i+5+canvas.width*4];
                pixel9b = original_copy[i+6+canvas.width*4];
            }
        }

        // Multiplica os pixels 1 a 9 pelo kernel 3x3:

        if (gaussian) {
            data[i] = 1/16 * (kernel[0]*pixel1r + kernel[1]*pixel2r + kernel[2]*pixel3r + kernel[3]*pixel4r + kernel[4]*pixel5r + kernel[5]*pixel6r + kernel[6]*pixel7r + kernel[7]*pixel8r + kernel[8]*pixel9r);
            data[i + 1] = 1/16 * (kernel[0]*pixel1g + kernel[1]*pixel2g + kernel[2]*pixel3g + kernel[3]*pixel4g + kernel[4]*pixel5g + kernel[5]*pixel6g + kernel[6]*pixel7g + kernel[7]*pixel8g + kernel[8]*pixel9g);
            data[i + 2] = 1/16 * (kernel[0]*pixel1b + kernel[1]*pixel2b + kernel[2]*pixel3b + kernel[3]*pixel4b + kernel[4]*pixel5b + kernel[5]*pixel6b + kernel[6]*pixel7b + kernel[7]*pixel8b + kernel[8]*pixel9b);
        }
        else {
            data[i] = kernel[0]*pixel1r + kernel[1]*pixel2r + kernel[2]*pixel3r + kernel[3]*pixel4r + kernel[4]*pixel5r + kernel[5]*pixel6r + kernel[6]*pixel7r + kernel[7]*pixel8r + kernel[8]*pixel9r;
            data[i + 1] = kernel[0]*pixel1g + kernel[1]*pixel2g + kernel[2]*pixel3g + kernel[3]*pixel4g + kernel[4]*pixel5g + kernel[5]*pixel6g + kernel[6]*pixel7g + kernel[7]*pixel8g + kernel[8]*pixel9g;
            data[i + 2] = kernel[0]*pixel1b + kernel[1]*pixel2b + kernel[2]*pixel3b + kernel[3]*pixel4b + kernel[4]*pixel5b + kernel[5]*pixel6b + kernel[6]*pixel7b + kernel[7]*pixel8b + kernel[8]*pixel9b;
        }
    }

    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    getFrequencies();
    drawHistogram();
}
