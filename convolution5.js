
function convolution5x5(kernel, gaussian) {
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
                pixel2r = original_copy[i-4-canvas.width*4*2];
                pixel2g = original_copy[i-3-canvas.width*4*2];
                pixel2b = original_copy[i-2-canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel1r = original_copy[i-4-4-canvas.width*4*2];
                pixel1g = original_copy[i-3-4-canvas.width*4*2];
                pixel1b = original_copy[i-2-4-canvas.width*4*2];
                pixel2r = original_copy[i-4-canvas.width*4*2];
                pixel2g = original_copy[i-3-canvas.width*4*2];
                pixel2b = original_copy[i-2-canvas.width*4*2];
            }
            // Pixel 3:
            pixel3r = original_copy[i-canvas.width*4*2];
            pixel3g = original_copy[i+1-canvas.width*4*2];
            pixel3b = original_copy[i+2-canvas.width*4*2];
            // Pixels 4 e 5:
            // Se estiver na ultima coluna da imagem, pixels 4 e 5 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel4r = pixel4g = pixel4b = pixel5r = pixel5g = pixel5b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 5 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel5r = pixel5g = pixel5b = 0;
                pixel4r = original_copy[i+4-canvas.width*4*2];
                pixel4g = original_copy[i+5-canvas.width*4*2];
                pixel4b = original_copy[i+6-canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel4r = original_copy[i+4-canvas.width*4*2];
                pixel4g = original_copy[i+5-canvas.width*4*2];
                pixel4b = original_copy[i+6-canvas.width*4*2];
                pixel5r = original_copy[i+4+4-canvas.width*4*2];
                pixel5g = original_copy[i+5+4-canvas.width*4*2];
                pixel5b = original_copy[i+6+4-canvas.width*4*2];
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
                pixel7r = original_copy[i-4-canvas.width*4];
                pixel7g = original_copy[i-3-canvas.width*4];
                pixel7b = original_copy[i-2-canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel6r = original_copy[i-4-4-canvas.width*4];
                pixel6g = original_copy[i-3-4-canvas.width*4];
                pixel6b = original_copy[i-2-4-canvas.width*4];
                pixel7r = original_copy[i-4-canvas.width*4];
                pixel7g = original_copy[i-3-canvas.width*4];
                pixel7b = original_copy[i-2-canvas.width*4];
            }
            // Pixel 8:
            pixel8r = original_copy[i-canvas.width*4];
            pixel8g = original_copy[i+1-canvas.width*4];
            pixel8b = original_copy[i+2-canvas.width*4];
            // Pixels 9 e 10:
            // Se estiver na ultima coluna da imagem, pixels 9 e 10 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel9r = pixel9g = pixel9b = pixel10r = pixel10g = pixel10b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 10 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel10r = pixel10g = pixel10b = 0;
                pixel9r = original_copy[i+4-canvas.width*4];
                pixel9g = original_copy[i+5-canvas.width*4];
                pixel9b = original_copy[i+6-canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel9r = original_copy[i+4-canvas.width*4];
                pixel9g = original_copy[i+5-canvas.width*4];
                pixel9b = original_copy[i+6-canvas.width*4];
                pixel10r = original_copy[i+4+4-canvas.width*4];
                pixel10g = original_copy[i+5+4-canvas.width*4];
                pixel10b = original_copy[i+6+4-canvas.width*4];
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
            pixel12r = original_copy[i-4];
            pixel12g = original_copy[i-3];
            pixel12b = original_copy[i-2];
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel11r = original_copy[i-4-4];
            pixel11g = original_copy[i-3-4];
            pixel11b = original_copy[i-2-4];
            pixel12r = original_copy[i-4];
            pixel12g = original_copy[i-3];
            pixel12b = original_copy[i-2];
        }
        // Pixels 13:
        pixel13r = original_copy[i];
        pixel13g = original_copy[i+1];
        pixel13b = original_copy[i+2];
        // Pixels 14 e 15:
        // Se estiver na ultima coluna da imagem, pixels 14 e 15 serão zerados:
        if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
            pixel14r = pixel14g = pixel14b = pixel15r = pixel15g = pixel15b = 0;
        }
        // Se estiver na penúltima coluna da imagem, pixels 15 serão zerados:
        else if (i%(canvas.width*4)===(canvas.width*4)-5) {
            pixel15r = pixel15g = pixel15b = 0;
            pixel14r = original_copy[i+4];
            pixel14g = original_copy[i+5];
            pixel14b = original_copy[i+6];
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel14r = original_copy[i+4];
            pixel14g = original_copy[i+5];
            pixel14b = original_copy[i+6];
            pixel15r = original_copy[i+4+4];
            pixel15g = original_copy[i+5+4];
            pixel15b = original_copy[i+6+4];
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
                pixel17r = original_copy[i-4+canvas.width*4];
                pixel17g = original_copy[i-3+canvas.width*4];
                pixel17b = original_copy[i-2+canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel6r = original_copy[i-4-4+canvas.width*4];
                pixel6g = original_copy[i-3-4+canvas.width*4];
                pixel6b = original_copy[i-2-4+canvas.width*4];
                pixel7r = original_copy[i-4+canvas.width*4];
                pixel7g = original_copy[i-3+canvas.width*4];
                pixel7b = original_copy[i-2+canvas.width*4];
            }
            // Pixel 18:
            pixel18r = original_copy[i+canvas.width*4];
            pixel18g = original_copy[i+1+canvas.width*4];
            pixel18b = original_copy[i+2+canvas.width*4];
            // Pixels 19 e 20:
            // Se estiver na última coluna da imagem, pixels 19 e 20 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel19r = pixel19g = pixel19b = pixel20r = pixel20g = pixel20b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 20 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-5) {
                pixel20r = pixel20g = pixel20b = 0;
                pixel19r = original_copy[i+4+canvas.width*4];
                pixel19g = original_copy[i+5+canvas.width*4];
                pixel19b = original_copy[i+6+canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel19r = original_copy[i+4+canvas.width*4];
                pixel19g = original_copy[i+5+canvas.width*4];
                pixel19b = original_copy[i+6+canvas.width*4];
                pixel20r = original_copy[i+4+4+canvas.width*4];
                pixel20g = original_copy[i+5+4+canvas.width*4];
                pixel20b = original_copy[i+6+4+canvas.width*4];
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
                pixel22r = original_copy[i-4+canvas.width*4*2];
                pixel22g = original_copy[i-3+canvas.width*4*2];
                pixel22b = original_copy[i-2+canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel21r = original_copy[i-4-4+canvas.width*4*2];
                pixel21g = original_copy[i-3-4+canvas.width*4*2];
                pixel21b = original_copy[i-2-4+canvas.width*4*2];
                pixel22r = original_copy[i-4+canvas.width*4*2];
                pixel22g = original_copy[i-3+canvas.width*4*2];
                pixel22b = original_copy[i-2+canvas.width*4*2];
            }
            // Pixel 23:
            pixel23r = original_copy[i+canvas.width*4*2];
            pixel23g = original_copy[i+1+canvas.width*4*2];
            pixel23b = original_copy[i+2+canvas.width*4*2];
            // Pixels 24 e 25:
            // Se estiver na ultima coluna da imagem, pixels 24 e 25 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel24r = pixel24g = pixel24b = pixel25r = pixel25g = pixel25b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 25 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel25r = pixel25g = pixel25b = 0;
                pixel24r = original_copy[i+4+canvas.width*4*2];
                pixel24g = original_copy[i+5+canvas.width*4*2];
                pixel24b = original_copy[i+6+canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel24r = original_copy[i+4+canvas.width*4*2];
                pixel24g = original_copy[i+5+canvas.width*4*2];
                pixel24b = original_copy[i+6+canvas.width*4*2];
                pixel25r = original_copy[i+4+4+canvas.width*4*2];
                pixel25g = original_copy[i+5+4+canvas.width*4*2];
                pixel25b = original_copy[i+6+4+canvas.width*4*2];
            }
        }

        // Multiplica os pixels 1 a 25 pelo kernel 5x5:
        if (gaussian) {
            data[i] = 1/256 * (kernel[0]*pixel1r + kernel[1]*pixel2r + kernel[2]*pixel3r + kernel[3]*pixel4r + kernel[4]*pixel5r
                             + kernel[5]*pixel6r + kernel[6]*pixel7r + kernel[7]*pixel8r + kernel[8]*pixel9r + kernel[9]*pixel10r
                             + kernel[10]*pixel11r + kernel[11]*pixel12r + kernel[12]*pixel13r + kernel[13]*pixel14r + kernel[14]*pixel15r
                             + kernel[15]*pixel16r + kernel[16]*pixel17r + kernel[17]*pixel18r + kernel[18]*pixel19r + kernel[19]*pixel20r
                             + kernel[20]*pixel21r + kernel[21]*pixel22r + kernel[22]*pixel23r + kernel[23]*pixel24r + kernel[24]*pixel25r);
            data[i + 1] = 1/256 * (kernel[0]*pixel1g + kernel[1]*pixel2g + kernel[2]*pixel3g + kernel[3]*pixel4g + kernel[4]*pixel5g
                                 + kernel[5]*pixel6g + kernel[6]*pixel7g + kernel[7]*pixel8g + kernel[8]*pixel9g + kernel[9]*pixel10g
                                 + kernel[10]*pixel11g + kernel[11]*pixel12g + kernel[12]*pixel13g + kernel[13]*pixel14g + kernel[14]*pixel15g
                                 + kernel[15]*pixel16g + kernel[16]*pixel17g + kernel[17]*pixel18g + kernel[18]*pixel19g + kernel[19]*pixel20g
                                 + kernel[20]*pixel21g + kernel[21]*pixel22g + kernel[22]*pixel23g + kernel[23]*pixel24g + kernel[24]*pixel25g);
            data[i + 2] = 1/256 * (kernel[0]*pixel1b + kernel[1]*pixel2b + kernel[2]*pixel3b + kernel[3]*pixel4b + kernel[4]*pixel5b
                                 + kernel[5]*pixel6b + kernel[6]*pixel7b + kernel[7]*pixel8b + kernel[8]*pixel9b + kernel[9]*pixel10b
                                 + kernel[10]*pixel11b + kernel[11]*pixel12b + kernel[12]*pixel13b + kernel[13]*pixel14b + kernel[14]*pixel15b
                                 + kernel[15]*pixel16b + kernel[16]*pixel17b + kernel[17]*pixel18b + kernel[18]*pixel19b + kernel[19]*pixel20b
                                 + kernel[20]*pixel21b + kernel[21]*pixel22b + kernel[22]*pixel23b + kernel[23]*pixel24b + kernel[24]*pixel25b);
        }
        else {
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
