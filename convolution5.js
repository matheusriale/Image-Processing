
function convolution5x5(kernel, mediana) {
    let copypixels = pixels; //copiar valores, novo array
    let data = copypixels.data;
    /*
    pixel1   pixel2   pixel3   pixel4   pixel5
    pixel6   pixel7   pixel8   pixel9   pixel10
    pixel11  pixel12  pixel13  pixel14  pixel15
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
                pixel2r = data[i-4-canvas.width*4*2]; // original_copy
                pixel2g = data[i-3-canvas.width*4*2]; // original_copy
                pixel2b = data[i-2-canvas.width*4*2]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel1r = data[i-4-4-canvas.width*4*2]; // original_copy
                pixel1g = data[i-3-4-canvas.width*4*2]; // original_copy
                pixel1b = data[i-2-4-canvas.width*4*2]; // original_copy
                pixel2r = data[i-4-canvas.width*4*2]; // original_copy
                pixel2g = data[i-3-canvas.width*4*2]; // original_copy
                pixel2b = data[i-2-canvas.width*4*2]; // original_copy
            }
            // Pixel 3:
            pixel3r = data[i-canvas.width*4*2]; // original_copy
            pixel3g = data[i+1-canvas.width*4*2]; // original_copy
            pixel3b = data[i+2-canvas.width*4*2]; // original_copy
            // Pixels 4 e 5:
            // Se estiver na ultima coluna da imagem, pixels 4 e 5 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel4r = pixel4g = pixel4b = pixel5r = pixel5g = pixel5b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 5 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel5r = pixel5g = pixel5b = 0;
                pixel4r = data[i+4-canvas.width*4*2]; // original_copy
                pixel4g = data[i+5-canvas.width*4*2]; // original_copy
                pixel4b = data[i+6-canvas.width*4*2]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel4r = data[i+4-canvas.width*4*2]; // original_copy
                pixel4g = data[i+5-canvas.width*4*2]; // original_copy
                pixel4b = data[i+6-canvas.width*4*2]; // original_copy
                pixel5r = data[i+4+4-canvas.width*4*2]; // original_copy
                pixel5g = data[i+5+4-canvas.width*4*2]; // original_copy
                pixel5b = data[i+6+4-canvas.width*4*2]; // original_copy
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
                pixel7r = data[i-4-canvas.width*4]; // original_copy
                pixel7g = data[i-3-canvas.width*4]; // original_copy
                pixel7b = data[i-2-canvas.width*4]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel6r = data[i-4-4-canvas.width*4]; // original_copy
                pixel6g = data[i-3-4-canvas.width*4]; // original_copy
                pixel6b = data[i-2-4-canvas.width*4]; // original_copy
                pixel7r = data[i-4-canvas.width*4]; // original_copy
                pixel7g = data[i-3-canvas.width*4]; // original_copy
                pixel7b = data[i-2-canvas.width*4]; // original_copy
            }
            // Pixel 8:
            pixel8r = data[i-canvas.width*4]; // original_copy
            pixel8g = data[i+1-canvas.width*4]; // original_copy
            pixel8b = data[i+2-canvas.width*4]; // original_copy
            // Pixels 9 e 10:
            // Se estiver na ultima coluna da imagem, pixels 9 e 10 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel9r = pixel9g = pixel9b = pixel10r = pixel10g = pixel10b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 10 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel10r = pixel10g = pixel10b = 0;
                pixel9r = data[i+4-canvas.width*4]; // original_copy
                pixel9g = data[i+5-canvas.width*4]; // original_copy
                pixel9b = data[i+6-canvas.width*4]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel9r = data[i+4-canvas.width*4]; // original_copy
                pixel9g = data[i+5-canvas.width*4]; // original_copy
                pixel9b = data[i+6-canvas.width*4]; // original_copy
                pixel10r = data[i+4+4-canvas.width*4]; // original_copy
                pixel10g = data[i+5+4-canvas.width*4]; // original_copy
                pixel10b = data[i+6+4-canvas.width*4]; // original_copy
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
            pixel12r = data[i-4]; // original_copy
            pixel12g = data[i-3]; // original_copy
            pixel12b = data[i-2]; // original_copy
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel11r = data[i-4-4]; // original_copy
            pixel11g = data[i-3-4]; // original_copy
            pixel11b = data[i-2-4]; // original_copy
            pixel12r = data[i-4]; // original_copy
            pixel12g = data[i-3]; // original_copy
            pixel12b = data[i-2]; // original_copy
        }
        // Pixels 13:
        pixel13r = data[i]; // original_copy
        pixel13g = data[i+1]; // original_copy
        pixel13b = data[i+2]; // original_copy
        // Pixels 14 e 15:
        // Se estiver na ultima coluna da imagem, pixels 14 e 15 serão zerados:
        if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
            pixel14r = pixel14g = pixel14b = pixel15r = pixel15g = pixel15b = 0;
        }
        // Se estiver na penúltima coluna da imagem, pixels 15 serão zerados:
        else if (i%(canvas.width*4)===(canvas.width*4)-5) {
            pixel15r = pixel15g = pixel15b = 0;
            pixel14r = data[i+4]; // original_copy
            pixel14g = data[i+5]; // original_copy
            pixel14b = data[i+6]; // original_copy
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel14r = data[i+4]; // original_copy
            pixel14g = data[i+5]; // original_copy
            pixel14b = data[i+6]; // original_copy
            pixel15r = data[i+4+4]; // original_copy
            pixel15g = data[i+5+4]; // original_copy
            pixel15b = data[i+6+4]; // original_copy
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
                pixel17r = data[i-4+canvas.width*4]; // original_copy
                pixel17g = data[i-3+canvas.width*4]; // original_copy
                pixel17b = data[i-2+canvas.width*4]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel6r = data[i-4-4+canvas.width*4]; // original_copy
                pixel6g = data[i-3-4+canvas.width*4]; // original_copy
                pixel6b = data[i-2-4+canvas.width*4]; // original_copy
                pixel7r = data[i-4+canvas.width*4]; // original_copy
                pixel7g = data[i-3+canvas.width*4]; // original_copy
                pixel7b = data[i-2+canvas.width*4]; // original_copy
            }
            // Pixel 18:
            pixel18r = data[i+canvas.width*4]; // original_copy
            pixel18g = data[i+1+canvas.width*4]; // original_copy
            pixel18b = data[i+2+canvas.width*4]; // original_copy
            // Pixels 19 e 20:
            // Se estiver na última coluna da imagem, pixels 19 e 20 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel19r = pixel19g = pixel19b = pixel20r = pixel20g = pixel20b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 20 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-5) {
                pixel20r = pixel20g = pixel20b = 0;
                pixel19r = data[i+4+canvas.width*4]; // original_copy
                pixel19g = data[i+5+canvas.width*4]; // original_copy
                pixel19b = data[i+6+canvas.width*4]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel19r = data[i+4+canvas.width*4]; // original_copy
                pixel19g = data[i+5+canvas.width*4]; // original_copy
                pixel19b = data[i+6+canvas.width*4]; // original_copy
                pixel20r = data[i+4+4+canvas.width*4]; // original_copy
                pixel20g = data[i+5+4+canvas.width*4]; // original_copy
                pixel20b = data[i+6+4+canvas.width*4]; // original_copy
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
                pixel22r = data[i-4+canvas.width*4*2]; // original_copy
                pixel22g = data[i-3+canvas.width*4*2]; // original_copy
                pixel22b = data[i-2+canvas.width*4*2]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel21r = data[i-4-4+canvas.width*4*2]; // original_copy
                pixel21g = data[i-3-4+canvas.width*4*2]; // original_copy
                pixel21b = data[i-2-4+canvas.width*4*2]; // original_copy
                pixel22r = data[i-4+canvas.width*4*2]; // original_copy
                pixel22g = data[i-3+canvas.width*4*2]; // original_copy
                pixel22b = data[i-2+canvas.width*4*2]; // original_copy
            }
            // Pixel 23:
            pixel23r = data[i+canvas.width*4*2]; // original_copy
            pixel23g = data[i+1+canvas.width*4*2]; // original_copy
            pixel23b = data[i+2+canvas.width*4*2]; // original_copy
            // Pixels 24 e 25:
            // Se estiver na ultima coluna da imagem, pixels 24 e 25 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel24r = pixel24g = pixel24b = pixel25r = pixel25g = pixel25b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 25 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel25r = pixel25g = pixel25b = 0;
                pixel24r = data[i+4+canvas.width*4*2]; // original_copy
                pixel24g = data[i+5+canvas.width*4*2]; // original_copy
                pixel24b = data[i+6+canvas.width*4*2]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel24r = data[i+4+canvas.width*4*2]; // original_copy
                pixel24g = data[i+5+canvas.width*4*2]; // original_copy
                pixel24b = data[i+6+canvas.width*4*2]; // original_copy
                pixel25r = data[i+4+4+canvas.width*4*2]; // original_copy
                pixel25g = data[i+5+4+canvas.width*4*2]; // original_copy
                pixel25b = data[i+6+4+canvas.width*4*2]; // original_copy
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
    getFrequencies();
    drawHistogram();
}
