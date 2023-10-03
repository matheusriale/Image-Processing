
function convolution7x7(kernel, mediana) {
    let copypixels = pixels; //copiar valores, novo array
    let data = copypixels.data;
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
                pixel3r = data[i-4-canvas.width*4*3]; // original_copy
                pixel3g = data[i-3-canvas.width*4*3]; // original_copy
                pixel3b = data[i-2-canvas.width*4*3]; // original_copy
            }
            // Se estiver na terceira coluna da imagem, pixels 1 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel1r = pixel1g = pixel1b = 0;
                pixel2r = data[i-4-4-canvas.width*4*3]; // original_copy
                pixel2g = data[i-3-4-canvas.width*4*3]; // original_copy
                pixel2b = data[i-2-4-canvas.width*4*3]; // original_copy
                pixel3r = data[i-4-canvas.width*4*3]; // original_copy
                pixel3g = data[i-3-canvas.width*4*3]; // original_copy
                pixel3b = data[i-2-canvas.width*4*3]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel1r = data[i-4-4-4-canvas.width*4*3]; // original_copy
                pixel1g = data[i-3-4-4-canvas.width*4*3]; // original_copy
                pixel1b = data[i-2-4-4-canvas.width*4*3]; // original_copy
                pixel2r = data[i-4-4-canvas.width*4*3]; // original_copy
                pixel2g = data[i-3-4-canvas.width*4*3]; // original_copy
                pixel2b = data[i-2-4-canvas.width*4*3]; // original_copy
                pixel3r = data[i-4-canvas.width*4*3]; // original_copy
                pixel3g = data[i-3-canvas.width*4*3]; // original_copy
                pixel3b = data[i-2-canvas.width*4*3]; // original_copy
            }
            // Pixel 4:
            pixel4r = data[i-canvas.width*4*3]; // original_copy
            pixel4g = data[i+1-canvas.width*4*3]; // original_copy
            pixel4b = data[i+2-canvas.width*4*3]; // original_copy
            // Pixels 5, 6 e 7:
            // Se estiver na ultima coluna da imagem, pixels 5, 6 e 7 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel5r = pixel5g = pixel5b = pixel6r = pixel6g = pixel6b = pixel7r = pixel7g = pixel7b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 6 e 7 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel6r = pixel6g = pixel6b = pixel7r = pixel7g = pixel7b = 0;
                pixel5r = data[i+4-canvas.width*4*3]; // original_copy
                pixel5g = data[i+5-canvas.width*4*3]; // original_copy
                pixel5b = data[i+6-canvas.width*4*3]; // original_copy
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 7 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel7r = pixel7g = pixel7b = 0;
                pixel5r = data[i+4-canvas.width*4*3]; // original_copy
                pixel5g = data[i+5-canvas.width*4*3]; // original_copy
                pixel5b = data[i+6-canvas.width*4*3]; // original_copy
                pixel6r = data[i+4+4-canvas.width*4*3]; // original_copy
                pixel6g = data[i+5+4-canvas.width*4*3]; // original_copy
                pixel6b = data[i+6+4-canvas.width*4*3]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel5r = data[i+4-canvas.width*4*3]; // original_copy
                pixel5g = data[i+5-canvas.width*4*3]; // original_copy
                pixel5b = data[i+6-canvas.width*4*3]; // original_copy
                pixel6r = data[i+4+4-canvas.width*4*3]; // original_copy
                pixel6g = data[i+5+4-canvas.width*4*3]; // original_copy
                pixel6b = data[i+6+4-canvas.width*4*3]; // original_copy
                pixel7r = data[i+4+4+4-canvas.width*4*3]; // original_copy
                pixel7g = data[i+5+4+4-canvas.width*4*3]; // original_copy
                pixel7b = data[i+6+4+4-canvas.width*4*3]; // original_copy
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
                pixel10r = data[i-4-canvas.width*4*2]; // original_copy
                pixel10g = data[i-3-canvas.width*4*2]; // original_copy
                pixel10b = data[i-2-canvas.width*4*2]; // original_copy
            }
            // Se estiver na terceira coluna da imagem, pixels 8 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel8r = pixel8g = pixel8b = 0;
                pixel9r = data[i-4-4-canvas.width*4*2]; // original_copy
                pixel9g = data[i-3-4-canvas.width*4*2]; // original_copy
                pixel9b = data[i-2-4-canvas.width*4*2]; // original_copy
                pixel10r = data[i-4-canvas.width*4*2]; // original_copy
                pixel10g = data[i-3-canvas.width*4*2]; // original_copy
                pixel10b = data[i-2-canvas.width*4*2]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel8r = data[i-4-4-4-canvas.width*4*2]; // original_copy
                pixel8g = data[i-3-4-4-canvas.width*4*2]; // original_copy
                pixel8b = data[i-2-4-4-canvas.width*4*2]; // original_copy
                pixel9r = data[i-4-4-canvas.width*4*2]; // original_copy
                pixel9g = data[i-3-4-canvas.width*4*2]; // original_copy
                pixel9b = data[i-2-4-canvas.width*4*2]; // original_copy
                pixel10r = data[i-4-canvas.width*4*2]; // original_copy
                pixel10g = data[i-3-canvas.width*4*2]; // original_copy
                pixel10b = data[i-2-canvas.width*4*2]; // original_copy
            }
            // Pixel 11:
            pixel11r = data[i-canvas.width*4*2]; // original_copy
            pixel11g = data[i+1-canvas.width*4*2]; // original_copy
            pixel11b = data[i+2-canvas.width*4*2]; // original_copy
            // Pixels 12, 13 e 14:
            // Se estiver na ultima coluna da imagem, pixels 12, 13 e 14 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel12r = pixel12g = pixel12b = pixel13r = pixel13g = pixel13b = pixel14r = pixel14g = pixel14b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 13 e 14 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel13r = pixel13g = pixel13b = pixel14r = pixel14g = pixel14b = 0;
                pixel12r = data[i+4-canvas.width*4*2]; // original_copy
                pixel12g = data[i+5-canvas.width*4*2]; // original_copy
                pixel12b = data[i+6-canvas.width*4*2]; // original_copy
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 14 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel14r = pixel14g = pixel14b = 0;
                pixel12r = data[i+4-canvas.width*4*2]; // original_copy
                pixel12g = data[i+5-canvas.width*4*2]; // original_copy
                pixel12b = data[i+6-canvas.width*4*2]; // original_copy
                pixel13r = data[i+4+4-canvas.width*4*2]; // original_copy
                pixel13g = data[i+5+4-canvas.width*4*2]; // original_copy
                pixel13b = data[i+6+4-canvas.width*4*2]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel12r = data[i+4-canvas.width*4*2]; // original_copy
                pixel12g = data[i+5-canvas.width*4*2]; // original_copy
                pixel12b = data[i+6-canvas.width*4*2]; // original_copy
                pixel13r = data[i+4+4-canvas.width*4*2]; // original_copy
                pixel13g = data[i+5+4-canvas.width*4*2]; // original_copy
                pixel13b = data[i+6+4-canvas.width*4*2]; // original_copy
                pixel14r = data[i+4+4+4-canvas.width*4*2]; // original_copy
                pixel14g = data[i+5+4+4-canvas.width*4*2]; // original_copy
                pixel14b = data[i+6+4+4-canvas.width*4*2]; // original_copy
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
                pixel17r = data[i-4-canvas.width*4]; // original_copy
                pixel17g = data[i-3-canvas.width*4]; // original_copy
                pixel17b = data[i-2-canvas.width*4]; // original_copy
            }
            // Se estiver na terceira coluna da imagem, pixels 15 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel15r = pixel15g = pixel15b = 0;
                pixel16r = data[i-4-4-canvas.width*4]; // original_copy
                pixel16g = data[i-3-4-canvas.width*4]; // original_copy
                pixel16b = data[i-2-4-canvas.width*4]; // original_copy
                pixel17r = data[i-4-canvas.width*4]; // original_copy
                pixel17g = data[i-3-canvas.width*4]; // original_copy
                pixel17b = data[i-2-canvas.width*4]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel15r = data[i-4-4-4-canvas.width*4]; // original_copy
                pixel15g = data[i-3-4-4-canvas.width*4]; // original_copy
                pixel15b = data[i-2-4-4-canvas.width*4]; // original_copy
                pixel16r = data[i-4-4-canvas.width*4]; // original_copy
                pixel16g = data[i-3-4-canvas.width*4]; // original_copy
                pixel16b = data[i-2-4-canvas.width*4]; // original_copy
                pixel17r = data[i-4-canvas.width*4]; // original_copy
                pixel17g = data[i-3-canvas.width*4]; // original_copy
                pixel17b = data[i-2-canvas.width*4]; // original_copy
            }
            // Pixel 18:
            pixel18r = data[i-canvas.width*4]; // original_copy
            pixel18g = data[i+1-canvas.width*4]; // original_copy
            pixel18b = data[i+2-canvas.width*4]; // original_copy
            // Pixels 19, 20 e 21:
            // Se estiver na ultima coluna da imagem, pixels 19, 20 e 21 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel19r = pixel19g = pixel19b = pixel20r = pixel20g = pixel20b = pixel21r = pixel21g = pixel21b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 20 e 21 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel20r = pixel20g = pixel20b = pixel21r = pixel21g = pixel21b = 0;
                pixel19r = data[i+4-canvas.width*4]; // original_copy
                pixel19g = data[i+5-canvas.width*4]; // original_copy
                pixel19b = data[i+6-canvas.width*4]; // original_copy
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 21 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel21r = pixel21g = pixel21b = 0;
                pixel19r = data[i+4-canvas.width*4]; // original_copy
                pixel19g = data[i+5-canvas.width*4]; // original_copy
                pixel19b = data[i+6-canvas.width*4]; // original_copy
                pixel20r = data[i+4+4-canvas.width*4]; // original_copy
                pixel20g = data[i+5+4-canvas.width*4]; // original_copy
                pixel20b = data[i+6+4-canvas.width*4]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel19r = data[i+4-canvas.width*4]; // original_copy
                pixel19g = data[i+5-canvas.width*4]; // original_copy
                pixel19b = data[i+6-canvas.width*4]; // original_copy
                pixel20r = data[i+4+4-canvas.width*4]; // original_copy
                pixel20g = data[i+5+4-canvas.width*4]; // original_copy
                pixel20b = data[i+6+4-canvas.width*4]; // original_copy
                pixel21r = data[i+4+4+4-canvas.width*4]; // original_copy
                pixel21g = data[i+5+4+4-canvas.width*4]; // original_copy
                pixel21b = data[i+6+4+4-canvas.width*4]; // original_copy
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
            pixel24r = data[i-4]; // original_copy
            pixel24g = data[i-3]; // original_copy
            pixel24b = data[i-2]; // original_copy
        }
        // Se estiver na terceira coluna da imagem, pixels 22 serão zerados:
        else if (i%(canvas.width*4)===8) {
            pixel22r = pixel22g = pixel22b = 0;
            pixel23r = data[i-4-4]; // original_copy
            pixel23g = data[i-3-4]; // original_copy
            pixel23b = data[i-2-4]; // original_copy
            pixel24r = data[i-4]; // original_copy
            pixel24g = data[i-3]; // original_copy
            pixel24b = data[i-2]; // original_copy
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel22r = data[i-4-4-4]; // original_copy
            pixel22g = data[i-3-4-4]; // original_copy
            pixel22b = data[i-2-4-4]; // original_copy
            pixel23r = data[i-4-4]; // original_copy
            pixel23g = data[i-3-4]; // original_copy
            pixel23b = data[i-2-4]; // original_copy
            pixel24r = data[i-4]; // original_copy
            pixel24g = data[i-3]; // original_copy
            pixel24b = data[i-2]; // original_copy
        }
        // Pixels 25:
        pixel25r = data[i]; // original_copy
        pixel25g = data[i+1]; // original_copy
        pixel25b = data[i+2]; // original_copy
        // Pixels 26, 27 e 28:
        // Se estiver na ultima coluna da imagem, pixels 26, 27 e 28 serão zerados:
        if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
            pixel26r = pixel26g = pixel26b = pixel27r = pixel27g = pixel27b = pixel28r = pixel28g = pixel28b = 0;
        }
        // Se estiver na penúltima coluna da imagem, pixels 27 e 28 serão zerados:
        else if (i%(canvas.width*4)===(canvas.width*4)-5) {
            pixel27r = pixel27g = pixel27b = pixel28r = pixel28g = pixel28b = 0;
            pixel26r = data[i+4]; // original_copy
            pixel26g = data[i+5]; // original_copy
            pixel26b = data[i+6]; // original_copy
        }
        // Se estiver na antepenúltima coluna da imagem, pixels 28 serão zerados:
        else if (i%(canvas.width*4)===(canvas.width*4)-9) {
            pixel28r = pixel28g = pixel28b = 0;
            pixel26r = data[i+4]; // original_copy
            pixel26g = data[i+5]; // original_copy
            pixel26b = data[i+6]; // original_copy
            pixel27r = data[i+4+4]; // original_copy
            pixel27g = data[i+5+4]; // original_copy
            pixel27b = data[i+6+4]; // original_copy
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel26r = data[i+4]; // original_copy
            pixel26g = data[i+5]; // original_copy
            pixel26b = data[i+6]; // original_copy
            pixel27r = data[i+4+4]; // original_copy
            pixel27g = data[i+5+4]; // original_copy
            pixel27b = data[i+6+4]; // original_copy
            pixel28r = data[i+4+4+4]; // original_copy
            pixel28g = data[i+5+4+4]; // original_copy
            pixel28b = data[i+6+4+4]; // original_copy
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
                pixel31r = data[i-4+canvas.width*4]; // original_copy
                pixel31g = data[i-3+canvas.width*4]; // original_copy
                pixel31b = data[i-2+canvas.width*4]; // original_copy
            }
            // Se estiver na terceira coluna da imagem, pixels 29 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel29r = pixel29g = pixel29b = 0;
                pixel30r = data[i-4-4+canvas.width*4]; // original_copy
                pixel30g = data[i-3-4+canvas.width*4]; // original_copy
                pixel30b = data[i-2-4+canvas.width*4]; // original_copy
                pixel31r = data[i-4+canvas.width*4]; // original_copy
                pixel31g = data[i-3+canvas.width*4]; // original_copy
                pixel31b = data[i-2+canvas.width*4]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel29r = data[i-4-4-4+canvas.width*4]; // original_copy
                pixel29g = data[i-3-4-4+canvas.width*4]; // original_copy
                pixel29b = data[i-2-4-4+canvas.width*4]; // original_copy
                pixel30r = data[i-4-4+canvas.width*4]; // original_copy
                pixel30g = data[i-3-4+canvas.width*4]; // original_copy
                pixel30b = data[i-2-4+canvas.width*4]; // original_copy
                pixel31r = data[i-4+canvas.width*4]; // original_copy
                pixel31g = data[i-3+canvas.width*4]; // original_copy
                pixel31b = data[i-2+canvas.width*4]; // original_copy
            }
            // Pixel 32:
            pixel32r = data[i+canvas.width*4]; // original_copy
            pixel32g = data[i+1+canvas.width*4]; // original_copy
            pixel32b = data[i+2+canvas.width*4]; // original_copy
            // Pixels 33, 34 e 35:
            // Se estiver na ultima coluna da imagem, pixels 33, 34 e 35 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel33r = pixel33g = pixel33b = pixel34r = pixel34g = pixel34b = pixel35r = pixel35g = pixel35b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 34 e 35 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel34r = pixel34g = pixel34b = pixel35r = pixel35g = pixel35b = 0;
                pixel33r = data[i+4+canvas.width*4]; // original_copy
                pixel33g = data[i+5+canvas.width*4]; // original_copy
                pixel33b = data[i+6+canvas.width*4]; // original_copy
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 35 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel35r = pixel35g = pixel35b = 0;
                pixel33r = data[i+4+canvas.width*4]; // original_copy
                pixel33g = data[i+5+canvas.width*4]; // original_copy
                pixel33b = data[i+6+canvas.width*4]; // original_copy
                pixel34r = data[i+4+4+canvas.width*4]; // original_copy
                pixel34g = data[i+5+4+canvas.width*4]; // original_copy
                pixel34b = data[i+6+4+canvas.width*4]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel33r = data[i+4+canvas.width*4]; // original_copy
                pixel33g = data[i+5+canvas.width*4]; // original_copy
                pixel33b = data[i+6+canvas.width*4]; // original_copy
                pixel34r = data[i+4+4+canvas.width*4]; // original_copy
                pixel34g = data[i+5+4+canvas.width*4]; // original_copy
                pixel34b = data[i+6+4+canvas.width*4]; // original_copy
                pixel35r = data[i+4+4+4+canvas.width*4]; // original_copy
                pixel35g = data[i+5+4+4+canvas.width*4]; // original_copy
                pixel35b = data[i+6+4+4+canvas.width*4]; // original_copy
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
                pixel38r = data[i-4+canvas.width*4*2]; // original_copy
                pixel38g = data[i-3+canvas.width*4*2]; // original_copy
                pixel38b = data[i-2+canvas.width*4*2]; // original_copy
            }
            // Se estiver na terceira coluna da imagem, pixels 36 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel36r = pixel36g = pixel36b = 0;
                pixel37r = data[i-4-4+canvas.width*4*2]; // original_copy
                pixel37g = data[i-3-4+canvas.width*4*2]; // original_copy
                pixel37b = data[i-2-4+canvas.width*4*2]; // original_copy
                pixel38r = data[i-4+canvas.width*4*2]; // original_copy
                pixel38g = data[i-3+canvas.width*4*2]; // original_copy
                pixel38b = data[i-2+canvas.width*4*2]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel36r = data[i-4-4-4+canvas.width*4*2]; // original_copy
                pixel36g = data[i-3-4-4+canvas.width*4*2]; // original_copy
                pixel36b = data[i-2-4-4+canvas.width*4*2]; // original_copy
                pixel37r = data[i-4-4+canvas.width*4*2]; // original_copy
                pixel37g = data[i-3-4+canvas.width*4*2]; // original_copy
                pixel37b = data[i-2-4+canvas.width*4*2]; // original_copy
                pixel38r = data[i-4+canvas.width*4*2]; // original_copy
                pixel38g = data[i-3+canvas.width*4*2]; // original_copy
                pixel38b = data[i-2+canvas.width*4*2]; // original_copy
            }
            // Pixel 39:
            pixel39r = data[i+canvas.width*4*2]; // original_copy
            pixel39g = data[i+1+canvas.width*4*2]; // original_copy
            pixel39b = data[i+2+canvas.width*4*2]; // original_copy
            // Pixels 40, 41 e 42:
            // Se estiver na última coluna da imagem, pixels 40, 41 e 42 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel40r = pixel40g = pixel40b = pixel41r = pixel41g = pixel41b = pixel42r = pixel42g = pixel42b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 41 e 42 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-5) {
                pixel41r = pixel41g = pixel41b = pixel42r = pixel42g = pixel42b = 0;
                pixel40r = data[i+4+canvas.width*4*2]; // original_copy
                pixel40g = data[i+5+canvas.width*4*2]; // original_copy
                pixel40b = data[i+6+canvas.width*4*2]; // original_copy
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 42 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-9) {
                pixel42r = pixel42g = pixel42b = 0;
                pixel40r = data[i+4+canvas.width*4*2]; // original_copy
                pixel40g = data[i+5+canvas.width*4*2]; // original_copy
                pixel40b = data[i+6+canvas.width*4*2]; // original_copy
                pixel41r = data[i+4+4+canvas.width*4*2]; // original_copy
                pixel41g = data[i+5+4+canvas.width*4*2]; // original_copy
                pixel41b = data[i+6+4+canvas.width*4*2]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel40r = data[i+4+canvas.width*4*2]; // original_copy
                pixel40g = data[i+5+canvas.width*4*2]; // original_copy
                pixel40b = data[i+6+canvas.width*4*2]; // original_copy
                pixel41r = data[i+4+4+canvas.width*4*2]; // original_copy
                pixel41g = data[i+5+4+canvas.width*4*2]; // original_copy
                pixel41b = data[i+6+4+canvas.width*4*2]; // original_copy
                pixel42r = data[i+4+4+4+canvas.width*4*2]; // original_copy
                pixel42g = data[i+5+4+4+canvas.width*4*2]; // original_copy
                pixel42b = data[i+6+4+4+canvas.width*4*2]; // original_copy
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
                pixel45r = data[i-4+canvas.width*4*3]; // original_copy
                pixel45g = data[i-3+canvas.width*4*3]; // original_copy
                pixel45b = data[i-2+canvas.width*4*3]; // original_copy
            }
            // Se estiver na terceira coluna da imagem, pixels 43 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel43r = pixel43g = pixel43b = 0;
                pixel44r = data[i-4-4+canvas.width*4*3]; // original_copy
                pixel44g = data[i-3-4+canvas.width*4*3]; // original_copy
                pixel44b = data[i-2-4+canvas.width*4*3]; // original_copy
                pixel45r = data[i-4+canvas.width*4*3]; // original_copy
                pixel45g = data[i-3+canvas.width*4*3]; // original_copy
                pixel45b = data[i-2+canvas.width*4*3]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel43r = data[i-4-4-4+canvas.width*4*3]; // original_copy
                pixel43g = data[i-3-4-4+canvas.width*4*3]; // original_copy
                pixel43b = data[i-2-4-4+canvas.width*4*3]; // original_copy
                pixel44r = data[i-4-4+canvas.width*4*3]; // original_copy
                pixel44g = data[i-3-4+canvas.width*4*3]; // original_copy
                pixel44b = data[i-2-4+canvas.width*4*3]; // original_copy
                pixel45r = data[i-4+canvas.width*4*3]; // original_copy
                pixel45g = data[i-3+canvas.width*4*3]; // original_copy
                pixel45b = data[i-2+canvas.width*4*3]; // original_copy
            }
            // Pixel 46:
            pixel46r = data[i+canvas.width*4*3]; // original_copy
            pixel46g = data[i+1+canvas.width*4*3]; // original_copy
            pixel46b = data[i+2+canvas.width*4*3]; // original_copy
            // Pixels 47, 48 e 49:
            // Se estiver na última coluna da imagem, pixels 47, 48 e 49 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel47r = pixel47g = pixel47b = pixel48r = pixel48g = pixel48b = pixel49r = pixel49g = pixel49b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 48 e 49 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-5) {
                pixel48r = pixel48g = pixel48b = pixel49r = pixel49g = pixel49b = 0;
                pixel47r = data[i+4+canvas.width*4*3]; // original_copy
                pixel47g = data[i+5+canvas.width*4*3]; // original_copy
                pixel47b = data[i+6+canvas.width*4*3]; // original_copy
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 49 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-9) {
                pixel49r = pixel49g = pixel49b = 0;
                pixel47r = data[i+4+canvas.width*4*3]; // original_copy
                pixel47g = data[i+5+canvas.width*4*3]; // original_copy
                pixel47b = data[i+6+canvas.width*4*3]; // original_copy
                pixel48r = data[i+4+4+canvas.width*4*3]; // original_copy
                pixel48g = data[i+5+4+canvas.width*4*3]; // original_copy
                pixel48b = data[i+6+4+canvas.width*4*3]; // original_copy
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel47r = data[i+4+canvas.width*4*3]; // original_copy
                pixel47g = data[i+5+canvas.width*4*3]; // original_copy
                pixel47b = data[i+6+canvas.width*4*3]; // original_copy
                pixel48r = data[i+4+4+canvas.width*4*3]; // original_copy
                pixel48g = data[i+5+4+canvas.width*4*3]; // original_copy
                pixel48b = data[i+6+4+canvas.width*4*3]; // original_copy
                pixel49r = data[i+4+4+4+canvas.width*4*3]; // original_copy
                pixel49g = data[i+5+4+4+canvas.width*4*3]; // original_copy
                pixel49b = data[i+6+4+4+canvas.width*4*3]; // original_copy
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
    getFrequencies();
    drawHistogram();
}
