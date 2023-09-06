function rgb2gray() {
  const data = pixels.data;
  for (i = 0; i < data.length; i = i + 4) {
    const mean = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = mean;
    data[i + 1] = mean;
    data[i + 2] = mean;
  }
  context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
  getFrequencies();
  drawHistogram();
}

function toNegative() {
  const data = pixels.data;
  for (i = 0; i < data.length; i = i + 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
  }
  context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
  getFrequencies();
  drawHistogram();
}

function logTransformation() {
  let copypixels = pixels; //copiar valores, novo array
  let data = copypixels.data;
  for (i = 0; i < data.length; i = i + 4) {
    data[i] = 255 * Math.log2(1 + data[i] / 255.0);
    data[i + 1] = 255 * Math.log2(1 + data[i + 1] / 255.0);
    data[i + 2] = 255 * Math.log2(1 + data[i + 2] / 255.0);
  }
  pixels = copypixels;

  context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
  getFrequencies();
  drawHistogram();
}

function gammaTransformation(gamma) {
  let copypixels = pixels; //copiar valores, novo array
  let data = copypixels.data;
  for (i = 0; i < data.length; i = i + 4) {
    data[i] = 255 * Math.pow(original_copy[i] / 255.0, gamma);
    data[i + 1] = 255 * Math.pow(original_copy[i + 1] / 255.0, gamma);
    data[i + 2] = 255 * Math.pow(original_copy[i + 2] / 255.0, gamma);
  }
  //pixels = copypixels;

  context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
  getFrequencies();
  drawHistogram();
}

function piecewiseLinear(r1, s1, r2, s2) {
  let copypixels = pixels; //copiar valores, novo array
  //variaveis das funcoes lineares

  const pf_x = 255,
    pf_y = 255,
    a_i = s1 / r1,
    b_i = 0;
  const a = (s2 - s1) / (r2 - r1),
    b = s1 - a * r1,
    a_f = (pf_y - s2) / (pf_x - r2),
    b_f = s2 - a_f * r2;

  //se r<r1: primeira funcao linear, se r>=r1 e r<=r2 segunda, se r>r2 terceira.
  let data = copypixels.data;
  for (i = 0; i < data.length; i = i + 4) {
    //intensidade do vermelho
    if (original_copy[i] < r1) {
      data[i] = a_i * original_copy[i] + b_i;
    } else if (original_copy[i] >= r1 && original_copy[i] <= r2) {
      data[i] = a * original_copy[i] + b;
    } else {
      data[i] = a_f * original_copy[i] + b_f;
    }

    //intensidade do verde
    if (original_copy[i + 1] < r1) {
      data[i + 1] = a_i * original_copy[i + 1] + b_i;
    } else if (original_copy[i + 1] >= r1 && original_copy[i + 1] <= r2) {
      data[i + 1] = a * original_copy[i + 1] + b;
    } else {
      data[i + 1] = a_f * original_copy[i + 1] + b_f;
    }

    //intensidade do azul
    if (original_copy[i + 2] < r1) {
      data[i + 2] = a_i * original_copy[i + 2] + b_i;
    } else if (original_copy[i + 2] >= r1 && original_copy[i + 2] <= r2) {
      data[i + 2] = a * original_copy[i + 2] + b;
    } else {
      data[i + 2] = a_f * original_copy[i + 2] + b_f;
    }
  }
  //pixels = copypixels;

  context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
  getFrequencies();
  drawHistogram();
}

function histEqualize() {
  let copypixels = pixels;
  let probabilities = hist;
  let sk = Array(256).fill(0.0)
  let mn = canvas.width * canvas.height;
  let data = copypixels.data;

  for (let i = 0; i < 256; i = i + 1) {
    probabilities[i] = (hist[i] / mn); 

  } 
  //probabilidades acumuladas
  for (let i = 1; i<probabilities.length; i = i + 1){
    probabilities[i] = probabilities[i]+probabilities[i-1];                                     
  }

  for (let i = 0;i<probabilities.length; i = i + 1){
    sk[i] = Math.round(255.0*probabilities[i]);
  }

  for (let i = 0; i<pixels.data.length;i = i+4){
    data[i]=sk[original_copy[i]]
    data[i+1]=sk[original_copy[i+1]]
    data[i+2]=sk[original_copy[i+2]]

  }
  context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
  getFrequencies();
  drawHistogram();
}

//Limiarizacao
function thresholding(t){
  let copypixels = pixels; //copiar valores, novo array
  let data = copypixels.data;
  for (i = 0; i < data.length; i = i + 4) {
    if (original_copy[i]>t) {data[i] = 255;}
    else {data[i]=0};
    if (original_copy[i+1]>t) {data[i+1] = 255;}
    else {data[i+1]=0;}
    if (original_copy[i+2]>t) {data[i+2] = 255;}
    else {data[i+2]=0;}
  }

  context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
  getFrequencies();
  drawHistogram();

}

function convolution3x3(kernel, gaussian){
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
      // Se estiver na primeira coluna da imagem, pixels 1, 4 e 7 serão zerados:
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
      // Se estiver na ultima coluna da imagem, pixels 3, 6 e 9 serão zerados:
      if ((i+3)%(canvas.width*4)===(canvas.width*4)-1) {
        pixel3r, pixel3g, pixel3b = 0;
      }
      else {
        pixel3r = original_copy[i+4-canvas.width*4];
        pixel3g = original_copy[i+5-canvas.width*4];
        pixel3b = original_copy[i+6-canvas.width*4];
      }
    }

    // Se estiver na primeira coluna da imagem, pixels 1, 4 e 7 serão zerados:
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
    // Se estiver na ultima coluna da imagem, pixels 3, 6 e 9 serão zerados:
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
      // Se estiver na primeira coluna da imagem, pixels 1, 4 e 7 serão zerados:
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
      // Se estiver na ultima coluna da imagem, pixels 3, 6 e 9 serão zerados:
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

function convolutionGauss(){
  let kernel = [1, 2, 1, 2, 4, 2, 1, 2, 1];
  convolution3x3(kernel, true);
}

function convolutionLaplace(){
  let kernel = [0, -1, 0, -1, 4, -1, 0, -1, 0];
  convolution3x3(kernel, false);
}

function convolutionMedian(){
}

function convolutionMedian(){
}

/* 
r_final = 0;
g_final = 0;
b_final = 0;
    
  for i <length etc ...{
    r=Math.abs(255*(FREQUENCIA DAQUELA INTENSIDADE DE VERMELHO / MN))
    g=Math.abs(255(FREQUENCIA DAQUELA INTENSIDADE DE VERDE / MN))
    b=Math.abs(255(FREQUENCIA DAQUELA INTENSIDADE DE AZUL / MN))
    const j = 0; 
    for j = 0 a i{
          r_final = r + r_final;
          g_final = g + g_final;
          b_final = b + b_final;
          if (j == i){
            data[i] = r_final;
            data[i + 1] = g_final;
            data[i + 2] = b_final;
          }
    }
}*/
