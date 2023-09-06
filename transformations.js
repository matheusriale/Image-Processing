var r1 = 0,
  r2 = 0,
  s1 = 0,
  s2 = 0;
function get1(value) {
  r1 = value;
}
function get2(value) {
  r2 = value;
}
function get3(value) {
  s1 = value;
}
function get4(value) {
  s2 = value;
  piecewiseLinear(r1, r2, s1, s2);
}

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
  getFrequencies();'  '
  drawHistogram();

}

function convolutionMean(dim){

}

function convolutionMedian(dim){

}

function convolution(filter){

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
