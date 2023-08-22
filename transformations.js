var r1 = 0, r2 = 0, s1 = 0, s2 = 0
function get1(value){
    r1 = value
}
function get2(value){
    r2 = value
}
function get3(value){
    s1 = value
}
function get4(value){
    s2 = value
    piecewiseLinear(r1,r2,s1,s2);
}



function rgb2gray(){
    const data = pixels.data;
    for (i = 0; i<data.length; i=i+4){
        const mean = (data[i] + data[i+1] + data[i+2])/3;
        data[i] = mean;
        data[i+1] = mean;
        data[i+2] = mean;

    }
    context.putImageData(pixels,0,0,0,0,canvas.width, canvas.height);
    getFrequencies();
    drawHistogram();
}

function toNegative(){
    const data = pixels.data;
    for (i = 0; i<data.length; i=i+4){        
        data[i] = 255 - data[i];
        data[i+1] = 255 - data[i+1];
        data[i+2] = 255 - data[i+2];

    }
    context.putImageData(pixels,0,0,0,0,canvas.width, canvas.height);
    getFrequencies();
    drawHistogram();
}

function logTransformation(){
    let copypixels = pixels; //copiar valores, novo array
    let data = copypixels.data
    for (i = 0; i<data.length; i=i+4){        
        data[i] = 255*Math.log2(1+data[i]/255.0);
        data[i+1] = 255*Math.log2(1+data[i+1]/255.0);
        data[i+2] = 255*Math.log2(1+data[i+2]/255.0);
    }
    pixels = copypixels;
    
    context.putImageData(pixels,0,0,0,0,canvas.width, canvas.height);
    getFrequencies();
    drawHistogram();
}

function gammaTransformation(gamma){
    let copypixels = pixels; //copiar valores, novo array
    let data = copypixels.data
    for (i = 0; i<data.length; i=i+4){        
        data[i] = 255*Math.pow(original_copy[i]/255.0,gamma);
        data[i+1] = 255*Math.pow(original_copy[i+1]/255.0,gamma);
        data[i+2] = 255*Math.pow(original_copy[i+2]/255.0,gamma);
    }
    //pixels = copypixels;
    
    context.putImageData(pixels,0,0,0,0,canvas.width, canvas.height);
    getFrequencies();
    drawHistogram();
}

function piecewiseLinear(r1,s1,r2,s2){ //r1 deve ser menor que r2.
    let copypixels = pixels; //copiar valores, novo array
    //variaveis das funcoes lineares
    const pf_x = 255, pf_y = 255, a_i = s1/r1, b_i = 0, a = (s2 - s1)/(r2 - r1);
    const b = s1 - a*r1, a_f = (pf_y - s2)/(pf_x  - r2), b_f = s2 - a_f*r2;
    //se r<r1: primeira funcao linear, se r>=r1 e r<=r2 segunda, se r>r2 terceira.
    let data = copypixels.data
    for (i = 0; i<data.length; i=i+4){  
        //intensidade do vermelho  
        if (data[i]<r1){
            data[i] = a_i*original_copy[i]+ b_i;
        }
        else if (data[i]>=r1 && data[i]<=r2){
            data[i] = a*original_copy[i]+ b;
        }
        else{data[i] = a_f*original_copy[i]+ b_f;}

        //intensidade do verde 
        if (data[i+1]<r1){
            data[i+1] = a_i*original_copy[i+1]+ b_i;
        }
        else if (data[i+1]>=r1 && data[i+1]<=r2){
            data[i+1] = a*original_copy[i+1]+ b;
        }
        else{data[i+1] = a_f*original_copy[i+1]+ b_f;}

        //intensidade do azul
        if (data[i+2]<r1){
            data[i+2] = a_i*original_copy[i+2]+ b_i;
        }
        else if (data[i+2]>=r1 && data[i+2]<=r2){
            data[i+2] = a*original_copy[i+2]+ b;
        }
        else{data[i+2] = a_f*original_copy[i+2]+ b_f;}
    }
    //pixels = copypixels;
    
    context.putImageData(pixels,0,0,0,0,canvas.width, canvas.height);
    getFrequencies();
    drawHistogram();
}












