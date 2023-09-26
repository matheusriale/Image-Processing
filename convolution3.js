
function convolution3x3(kernel, mediana) {
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
                pixel1r = original_copy[i-4-canvas.width*4];
                pixel1g = original_copy[i+1-4-canvas.width*4];
                pixel1b = original_copy[i+2-4-canvas.width*4];
            }
            // Pixel 2:
            pixel2r = original_copy[i-canvas.width*4];
            pixel2g = original_copy[i+1-canvas.width*4];
            pixel2b = original_copy[i+2-canvas.width*4];
            // Pixel 3:
            // Se estiver na ultima coluna da imagem, pixels 3 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel3r = pixel3g = pixel3b = 0;
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel3r = original_copy[i+4-canvas.width*4];
                pixel3g = original_copy[i+1+4-canvas.width*4];
                pixel3b = original_copy[i+2+4-canvas.width*4];
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
            pixel4r = original_copy[i-4];
            pixel4g = original_copy[i+1-4];
            pixel4b = original_copy[i+2-4];
        }
        // Pixel 5:
        pixel5r = original_copy[i];
        pixel5g = original_copy[i+1];
        pixel5b = original_copy[i+2];
        // Pixel 6:
        // Se estiver na ultima coluna da imagem, pixels 6 serão zerados:
        if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
            pixel6r = pixel6g = pixel6b = 0;
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel6r = original_copy[i+4];
            pixel6g = original_copy[i+1+4];
            pixel6b = original_copy[i+2+4];
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
                pixel7r = original_copy[i-4+canvas.width*4];
                pixel7g = original_copy[i+1-4+canvas.width*4];
                pixel7b = original_copy[i+2-4+canvas.width*4];
            }
            // Pixel 8:
            pixel8r = original_copy[i+canvas.width*4];
            pixel8g = original_copy[i+1+canvas.width*4];
            pixel8b = original_copy[i+2+canvas.width*4];
            // Pixel 9:
            // Se estiver na última coluna da imagem, pixels 9 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel9r = pixel9g = pixel9b = 0;
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel9r = original_copy[i+4+canvas.width*4];
                pixel9g = original_copy[i+1+4+canvas.width*4];
                pixel9b = original_copy[i+2+4+canvas.width*4];
            }
        }

        if (mediana) {
            data[i] = 0;
            data[i + 1] = 0;
            data[i + 2] = 0;
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

    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    getFrequencies();
    drawHistogram();
}
