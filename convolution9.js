
function convolution9x9(kernel) {
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
                pixel3r = original_copy[i-4-canvas.width*4*3];
                pixel3g = original_copy[i-3-canvas.width*4*3];
                pixel3b = original_copy[i-2-canvas.width*4*3];
            }
            // Se estiver na terceira coluna da imagem, pixels 1 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel1r = pixel1g = pixel1b = 0;
                pixel2r = original_copy[i-4-4-canvas.width*4*3];
                pixel2g = original_copy[i-3-4-canvas.width*4*3];
                pixel2b = original_copy[i-2-4-canvas.width*4*3];
                pixel3r = original_copy[i-4-canvas.width*4*3];
                pixel3g = original_copy[i-3-canvas.width*4*3];
                pixel3b = original_copy[i-2-canvas.width*4*3];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel1r = original_copy[i-4-4-4-canvas.width*4*3];
                pixel1g = original_copy[i-3-4-4-canvas.width*4*3];
                pixel1b = original_copy[i-2-4-4-canvas.width*4*3];
                pixel2r = original_copy[i-4-4-canvas.width*4*3];
                pixel2g = original_copy[i-3-4-canvas.width*4*3];
                pixel2b = original_copy[i-2-4-canvas.width*4*3];
                pixel3r = original_copy[i-4-canvas.width*4*3];
                pixel3g = original_copy[i-3-canvas.width*4*3];
                pixel3b = original_copy[i-2-canvas.width*4*3];
            }
            // Pixel 4:
            pixel4r = original_copy[i-canvas.width*4*3];
            pixel4g = original_copy[i+1-canvas.width*4*3];
            pixel4b = original_copy[i+2-canvas.width*4*3];
            // Pixels 5, 6 e 7:
            // Se estiver na ultima coluna da imagem, pixels 5, 6 e 7 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel5r = pixel5g = pixel5b = pixel6r = pixel6g = pixel6b = pixel7r = pixel7g = pixel7b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 6 e 7 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel6r = pixel6g = pixel6b = pixel7r = pixel7g = pixel7b = 0;
                pixel5r = original_copy[i+4-canvas.width*4*3];
                pixel5g = original_copy[i+5-canvas.width*4*3];
                pixel5b = original_copy[i+6-canvas.width*4*3];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 7 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel7r = pixel7g = pixel7b = 0;
                pixel5r = original_copy[i+4-canvas.width*4*3];
                pixel5g = original_copy[i+5-canvas.width*4*3];
                pixel5b = original_copy[i+6-canvas.width*4*3];
                pixel6r = original_copy[i+4+4-canvas.width*4*3];
                pixel6g = original_copy[i+5+4-canvas.width*4*3];
                pixel6b = original_copy[i+6+4-canvas.width*4*3];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel5r = original_copy[i+4-canvas.width*4*3];
                pixel5g = original_copy[i+5-canvas.width*4*3];
                pixel5b = original_copy[i+6-canvas.width*4*3];
                pixel6r = original_copy[i+4+4-canvas.width*4*3];
                pixel6g = original_copy[i+5+4-canvas.width*4*3];
                pixel6b = original_copy[i+6+4-canvas.width*4*3];
                pixel7r = original_copy[i+4+4+4-canvas.width*4*2];
                pixel7g = original_copy[i+5+4+4-canvas.width*4*2];
                pixel7b = original_copy[i+6+4+4-canvas.width*4*2];
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
                pixel10r = original_copy[i-4-canvas.width*4*2];
                pixel10g = original_copy[i-3-canvas.width*4*2];
                pixel10b = original_copy[i-2-canvas.width*4*2];
            }
            // Se estiver na segunda coluna da imagem, pixels 8 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel8r = pixel8g = pixel8b = 0;
                pixel9r = original_copy[i-4-4-canvas.width*4*2];
                pixel9g = original_copy[i-3-4-canvas.width*4*2];
                pixel9b = original_copy[i-2-4-canvas.width*4*2];
                pixel10r = original_copy[i-4-canvas.width*4*2];
                pixel10g = original_copy[i-3-canvas.width*4*2];
                pixel10b = original_copy[i-2-canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel8r = original_copy[i-4-4-4-canvas.width*4*2];
                pixel8g = original_copy[i-3-4-4-canvas.width*4*2];
                pixel8b = original_copy[i-2-4-4-canvas.width*4*2];
                pixel9r = original_copy[i-4-4-canvas.width*4*2];
                pixel9g = original_copy[i-3-4-canvas.width*4*2];
                pixel9b = original_copy[i-2-4-canvas.width*4*2];
                pixel10r = original_copy[i-4-canvas.width*4*2];
                pixel10g = original_copy[i-3-canvas.width*4*2];
                pixel10b = original_copy[i-2-canvas.width*4*2];
            }
            // Pixel 11:
            pixel11r = original_copy[i-canvas.width*4*2];
            pixel11g = original_copy[i+1-canvas.width*4*2];
            pixel11b = original_copy[i+2-canvas.width*4*2];
            // Pixels 12, 13 e 14:
            // Se estiver na ultima coluna da imagem, pixels 12, 13 e 14 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel12r = pixel12g = pixel12b = pixel13r = pixel13g = pixel13b = pixel14r = pixel14g = pixel14b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 13 e 14 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel13r = pixel13g = pixel13b = pixel14r = pixel14g = pixel14b = 0;
                pixel12r = original_copy[i+4-canvas.width*4*2];
                pixel12g = original_copy[i+5-canvas.width*4*2];
                pixel12b = original_copy[i+6-canvas.width*4*2];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 14 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-7) {
                pixel14r = pixel14g = pixel14b = 0;
                pixel12r = original_copy[i+4-canvas.width*4*2];
                pixel12g = original_copy[i+5-canvas.width*4*2];
                pixel12b = original_copy[i+6-canvas.width*4*2];
                pixel13r = original_copy[i+4+4-canvas.width*4*2];
                pixel13g = original_copy[i+5+4-canvas.width*4*2];
                pixel13b = original_copy[i+6+4-canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel12r = original_copy[i+4-canvas.width*4*2];
                pixel12g = original_copy[i+5-canvas.width*4*2];
                pixel12b = original_copy[i+6-canvas.width*4*2];
                pixel13r = original_copy[i+4+4-canvas.width*4*2];
                pixel13g = original_copy[i+5+4-canvas.width*4*2];
                pixel13b = original_copy[i+6+4-canvas.width*4*2];
                pixel14r = original_copy[i+4+4+4-canvas.width*4*2];
                pixel14g = original_copy[i+5+4+4-canvas.width*4*2];
                pixel14b = original_copy[i+6+4+4-canvas.width*4*2];
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
                pixel17r = original_copy[i-4-canvas.width*4];
                pixel17g = original_copy[i-3-canvas.width*4];
                pixel17b = original_copy[i-2-canvas.width*4];
            }
            // Se estiver na segunda coluna da imagem, pixels 15 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel15r = pixel15g = pixel15b = 0;
                pixel16r = original_copy[i-4-4-canvas.width*4];
                pixel16g = original_copy[i-3-4-canvas.width*4];
                pixel16b = original_copy[i-2-4-canvas.width*4];
                pixel17r = original_copy[i-4-canvas.width*4];
                pixel17g = original_copy[i-3-canvas.width*4];
                pixel17b = original_copy[i-2-canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel15r = original_copy[i-4-4-4-canvas.width*4];
                pixel15g = original_copy[i-3-4-4-canvas.width*4];
                pixel15b = original_copy[i-2-4-4-canvas.width*4];
                pixel16r = original_copy[i-4-4-canvas.width*4];
                pixel16g = original_copy[i-3-4-canvas.width*4];
                pixel16b = original_copy[i-2-4-canvas.width*4];
                pixel17r = original_copy[i-4-canvas.width*4];
                pixel17g = original_copy[i-3-canvas.width*4];
                pixel17b = original_copy[i-2-canvas.width*4];
            }
            // Pixel 18:
            pixel18r = original_copy[i-canvas.width*4];
            pixel18g = original_copy[i+1-canvas.width*4];
            pixel18b = original_copy[i+2-canvas.width*4];
            // Pixels 19, 20 e 21:
            // Se estiver na ultima coluna da imagem, pixels 19, 20 e 21 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel19r = pixel19g = pixel19b = pixel20r = pixel20g = pixel20b = pixel21r = pixel21g = pixel21b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 20 e 21 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel20r = pixel20g = pixel20b = pixel21r = pixel21g = pixel21b = 0;
                pixel19r = original_copy[i+4-canvas.width*4];
                pixel19g = original_copy[i+5-canvas.width*4];
                pixel19b = original_copy[i+6-canvas.width*4];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 21 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel21r = pixel21g = pixel21b = 0;
                pixel19r = original_copy[i+4-canvas.width*4];
                pixel19g = original_copy[i+5-canvas.width*4];
                pixel19b = original_copy[i+6-canvas.width*4];
                pixel20r = original_copy[i+4+4-canvas.width*4];
                pixel20g = original_copy[i+5+4-canvas.width*4];
                pixel20b = original_copy[i+6+4-canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel19r = original_copy[i+4-canvas.width*4];
                pixel19g = original_copy[i+5-canvas.width*4];
                pixel19b = original_copy[i+6-canvas.width*4];
                pixel20r = original_copy[i+4+4-canvas.width*4];
                pixel20g = original_copy[i+5+4-canvas.width*4];
                pixel20b = original_copy[i+6+4-canvas.width*4];
                pixel21r = original_copy[i+4+4+4-canvas.width*4];
                pixel21g = original_copy[i+5+4+4-canvas.width*4];
                pixel21b = original_copy[i+6+4+4-canvas.width*4];
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
            pixel24r = original_copy[i-4];
            pixel24g = original_copy[i-3];
            pixel24b = original_copy[i-2];
        }
        // Se estiver na segunda coluna da imagem, pixels 22 serão zerados:
        else if (i%(canvas.width*4)===8) {
            pixel22r = pixel22g = pixel22b = 0;
            pixel23r = original_copy[i-4-4];
            pixel23g = original_copy[i-3-4];
            pixel23b = original_copy[i-2-4];
            pixel24r = original_copy[i-4];
            pixel24g = original_copy[i-3];
            pixel24b = original_copy[i-2];
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel22r = original_copy[i-4-4-4];
            pixel22g = original_copy[i-3-4-4];
            pixel22b = original_copy[i-2-4-4];
            pixel23r = original_copy[i-4-4];
            pixel23g = original_copy[i-3-4];
            pixel23b = original_copy[i-2-4];
            pixel24r = original_copy[i-4];
            pixel24g = original_copy[i-3];
            pixel24b = original_copy[i-2];
        }
        // Pixels 25:
        pixel25r = original_copy[i];
        pixel25g = original_copy[i+1];
        pixel25b = original_copy[i+2];
        // Pixels 26, 27 e 28:
        // Se estiver na ultima coluna da imagem, pixels 26, 27 e 28 serão zerados:
        if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
            pixel26r = pixel26g = pixel26b = pixel27r = pixel27g = pixel27b = pixel28r = pixel28g = pixel28b = 0;
        }
        // Se estiver na penúltima coluna da imagem, pixels 27 e 28 serão zerados:
        else if (i%(canvas.width*4)===(canvas.width*4)-5) {
            pixel27r = pixel27g = pixel27b = pixel28r = pixel28g = pixel28b = 0;
            pixel26r = original_copy[i+4];
            pixel26g = original_copy[i+5];
            pixel26b = original_copy[i+6];
        }
        // Se estiver na penúltima coluna da imagem, pixels 28 serão zerados:
        else if (i%(canvas.width*4)===(canvas.width*4)-5) {
            pixel28r = pixel28g = pixel28b = 0;
            pixel26r = original_copy[i+4];
            pixel26g = original_copy[i+5];
            pixel26b = original_copy[i+6];
            pixel27r = original_copy[i+4+4];
            pixel27g = original_copy[i+5+4];
            pixel27b = original_copy[i+6+4];
        }
        // Se estiver em qualquer outra coluna:
        else {
            pixel26r = original_copy[i+4];
            pixel26g = original_copy[i+5];
            pixel26b = original_copy[i+6];
            pixel27r = original_copy[i+4+4];
            pixel27g = original_copy[i+5+4];
            pixel27b = original_copy[i+6+4];
            pixel28r = original_copy[i+4+4+4];
            pixel28g = original_copy[i+5+4+4];
            pixel28b = original_copy[i+6+4+4];
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
                pixel31r = original_copy[i-4+canvas.width*4];
                pixel31g = original_copy[i-3+canvas.width*4];
                pixel31b = original_copy[i-2+canvas.width*4];
            }
            // Se estiver na segunda coluna da imagem, pixels 29 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel29r = pixel29g = pixel29b = 0;
                pixel30r = original_copy[i-4-4+canvas.width*4];
                pixel30g = original_copy[i-3-4+canvas.width*4];
                pixel30b = original_copy[i-2-4+canvas.width*4];
                pixel31r = original_copy[i-4+canvas.width*4];
                pixel31g = original_copy[i-3+canvas.width*4];
                pixel31b = original_copy[i-2+canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel29r = original_copy[i-4-4-4+canvas.width*4];
                pixel29g = original_copy[i-3-4-4+canvas.width*4];
                pixel29b = original_copy[i-2-4-4+canvas.width*4];
                pixel30r = original_copy[i-4-4+canvas.width*4];
                pixel30g = original_copy[i-3-4+canvas.width*4];
                pixel30b = original_copy[i-2-4+canvas.width*4];
                pixel31r = original_copy[i-4+canvas.width*4];
                pixel31g = original_copy[i-3+canvas.width*4];
                pixel31b = original_copy[i-2+canvas.width*4];
            }
            // Pixel 32:
            pixel32r = original_copy[i+canvas.width*4];
            pixel32g = original_copy[i+1+canvas.width*4];
            pixel32b = original_copy[i+2+canvas.width*4];
            // Pixels 33, 34 e 35:
            // Se estiver na ultima coluna da imagem, pixels 33, 34 e 35 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel33r = pixel33g = pixel33b = pixel34r = pixel34g = pixel34b = pixel35r = pixel35g = pixel35b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 34 e 35 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-5) {
                pixel34r = pixel34g = pixel34b = pixel35r = pixel35g = pixel35b = 0;
                pixel33r = original_copy[i+4+canvas.width*4];
                pixel33g = original_copy[i+5+canvas.width*4];
                pixel33b = original_copy[i+6+canvas.width*4];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 35 serão zerados:
            else if (i%(canvas.width*4)===(canvas.width*4)-9) {
                pixel35r = pixel35g = pixel35b = 0;
                pixel33r = original_copy[i+4+canvas.width*4];
                pixel33g = original_copy[i+5+canvas.width*4];
                pixel33b = original_copy[i+6+canvas.width*4];
                pixel34r = original_copy[i+4+4+canvas.width*4];
                pixel34g = original_copy[i+5+4+canvas.width*4];
                pixel34b = original_copy[i+6+4+canvas.width*4];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel33r = original_copy[i+4+canvas.width*4];
                pixel33g = original_copy[i+5+canvas.width*4];
                pixel33b = original_copy[i+6+canvas.width*4];
                pixel34r = original_copy[i+4+4+canvas.width*4];
                pixel34g = original_copy[i+5+4+canvas.width*4];
                pixel34b = original_copy[i+6+4+canvas.width*4];
                pixel35r = original_copy[i+4+4+4+canvas.width*4];
                pixel35g = original_copy[i+5+4+4+canvas.width*4];
                pixel35b = original_copy[i+6+4+4+canvas.width*4];
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
                pixel38r = original_copy[i-4+canvas.width*4*2];
                pixel38g = original_copy[i-3+canvas.width*4*2];
                pixel38b = original_copy[i-2+canvas.width*4*2];
            }
            // Se estiver na terceira coluna da imagem, pixels 36 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel36r = pixel36g = pixel36b = 0;
                pixel37r = original_copy[i-4-4+canvas.width*4*2];
                pixel37g = original_copy[i-3-4+canvas.width*4*2];
                pixel37b = original_copy[i-2-4+canvas.width*4*2];
                pixel38r = original_copy[i-4+canvas.width*4*2];
                pixel38g = original_copy[i-3+canvas.width*4*2];
                pixel38b = original_copy[i-2+canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel36r = original_copy[i-4-4-4+canvas.width*4*2];
                pixel36g = original_copy[i-3-4-4+canvas.width*4*2];
                pixel36b = original_copy[i-2-4-4+canvas.width*4*2];
                pixel37r = original_copy[i-4-4+canvas.width*4*2];
                pixel37g = original_copy[i-3-4+canvas.width*4*2];
                pixel37b = original_copy[i-2-4+canvas.width*4*2];
                pixel38r = original_copy[i-4+canvas.width*4*2];
                pixel38g = original_copy[i-3+canvas.width*4*2];
                pixel38b = original_copy[i-2+canvas.width*4*2];
            }
            // Pixel 39:
            pixel39r = original_copy[i+canvas.width*4*2];
            pixel39g = original_copy[i+1+canvas.width*4*2];
            pixel39b = original_copy[i+2+canvas.width*4*2];
            // Pixels 40, 41 e 42:
            // Se estiver na última coluna da imagem, pixels 40, 41 e 42 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel40r = pixel40g = pixel40b = pixel41r = pixel41g = pixel41b = pixel42r = pixel42g = pixel42b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 41 e 42 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-5) {
                pixel41r = pixel41g = pixel41b = pixel42r = pixel42g = pixel42b = 0;
                pixel40r = original_copy[i+4+canvas.width*4*2];
                pixel40g = original_copy[i+5+canvas.width*4*2];
                pixel40b = original_copy[i+6+canvas.width*4*2];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 42 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-9) {
                pixel42r = pixel42g = pixel42b = 0;
                pixel40r = original_copy[i+4+canvas.width*4*2];
                pixel40g = original_copy[i+5+canvas.width*4*2];
                pixel40b = original_copy[i+6+canvas.width*4*2];
                pixel41r = original_copy[i+4+4+canvas.width*4*2];
                pixel41g = original_copy[i+5+4+canvas.width*4*2];
                pixel41b = original_copy[i+6+4+canvas.width*4*2];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel40r = original_copy[i+4+canvas.width*4*2];
                pixel40g = original_copy[i+5+canvas.width*4*2];
                pixel40b = original_copy[i+6+canvas.width*4*2];
                pixel41r = original_copy[i+4+4+canvas.width*4*2];
                pixel41g = original_copy[i+5+4+canvas.width*4*2];
                pixel41b = original_copy[i+6+4+canvas.width*4*2];
                pixel42r = original_copy[i+4+4+4+canvas.width*4*2];
                pixel42g = original_copy[i+5+4+4+canvas.width*4*2];
                pixel42b = original_copy[i+6+4+4+canvas.width*4*2];
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
                pixel45r = original_copy[i-4+canvas.width*4*3];
                pixel45g = original_copy[i-3+canvas.width*4*3];
                pixel45b = original_copy[i-2+canvas.width*4*3];
            }
            // Se estiver na terceira coluna da imagem, pixels 43 serão zerados:
            else if (i%(canvas.width*4)===8) {
                pixel43r = pixel43g = pixel43b = 0;
                pixel44r = original_copy[i-4-4+canvas.width*4*3];
                pixel44g = original_copy[i-3-4+canvas.width*4*3];
                pixel44b = original_copy[i-2-4+canvas.width*4*3];
                pixel45r = original_copy[i-4+canvas.width*4*3];
                pixel45g = original_copy[i-3+canvas.width*4*3];
                pixel45b = original_copy[i-2+canvas.width*4*3];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel43r = original_copy[i-4-4-4+canvas.width*4*3];
                pixel43g = original_copy[i-3-4-4+canvas.width*4*3];
                pixel43b = original_copy[i-2-4-4+canvas.width*4*3];
                pixel44r = original_copy[i-4-4+canvas.width*4*3];
                pixel44g = original_copy[i-3-4+canvas.width*4*3];
                pixel44b = original_copy[i-2-4+canvas.width*4*3];
                pixel45r = original_copy[i-4+canvas.width*4*3];
                pixel45g = original_copy[i-3+canvas.width*4*3];
                pixel45b = original_copy[i-2+canvas.width*4*3];
            }
            // Pixel 46:
            pixel46r = original_copy[i+canvas.width*4*3];
            pixel46g = original_copy[i+1+canvas.width*4*3];
            pixel46b = original_copy[i+2+canvas.width*4*3];
            // Pixels 47, 48 e 49:
            // Se estiver na última coluna da imagem, pixels 47, 48 e 49 serão zerados:
            if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
                pixel47r = pixel47g = pixel47b = pixel48r = pixel48g = pixel48b = pixel49r = pixel49g = pixel49b = 0;
            }
            // Se estiver na penúltima coluna da imagem, pixels 48 e 49 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-5) {
                pixel48r = pixel48g = pixel48b = pixel49r = pixel49g = pixel49b = 0;
                pixel47r = original_copy[i+4+canvas.width*4*3];
                pixel47g = original_copy[i+5+canvas.width*4*3];
                pixel47b = original_copy[i+6+canvas.width*4*3];
            }
            // Se estiver na antepenúltima coluna da imagem, pixels 49 serão zerados:
            else if ((i+3)%(canvas.width*4)===(canvas.width*4)-9) {
                pixel49r = pixel49g = pixel49b = 0;
                pixel47r = original_copy[i+4+canvas.width*4*3];
                pixel47g = original_copy[i+5+canvas.width*4*3];
                pixel47b = original_copy[i+6+canvas.width*4*3];
                pixel48r = original_copy[i+4+4+canvas.width*4*3];
                pixel48g = original_copy[i+5+4+canvas.width*4*3];
                pixel48b = original_copy[i+6+4+canvas.width*4*3];
            }
            // Se estiver em qualquer outra coluna:
            else {
                pixel47r = original_copy[i+4+canvas.width*4*3];
                pixel47g = original_copy[i+5+canvas.width*4*3];
                pixel47b = original_copy[i+6+canvas.width*4*3];
                pixel48r = original_copy[i+4+4+canvas.width*4*3];
                pixel48g = original_copy[i+5+4+canvas.width*4*3];
                pixel48b = original_copy[i+6+4+canvas.width*4*3];
                pixel49r = original_copy[i+4+4+4+canvas.width*4*3];
                pixel49g = original_copy[i+5+4+4+canvas.width*4*3];
                pixel49b = original_copy[i+6+4+4+canvas.width*4*3];
            }
        }

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

    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    getFrequencies();
    drawHistogram();
}
