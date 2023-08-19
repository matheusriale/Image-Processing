function rgb2gray(){
    const data = pixels.data;
    for (i = 0; i<data.length; i=i+4){
        const mean = (data[i] + data[i+1] + data[i+2])/3;
        data[i] = mean;
        data[i+1] = mean;
        data[i+2] = mean;

    }
    context.putImageData(pixels,0,0,0,0,canvas.width, canvas.height);
}

function toNegative(){
    const data = pixels.data;
    for (i = 0; i<data.length; i=i+4){        
        data[i] = 255 - data[i];
        data[i+1] = 255 - data[i+1];
        data[i+2] = 255 - data[i+2];

    }
    context.putImageData(pixels,0,0,0,0,canvas.width, canvas.height);
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
}

function gammaTransformation(gamma){
    const data = pixels.data;
    for (i = 0; i<data.length; i=i+4){        
        data[i] = 255 - data[i];
        data[i+1] = 255 - data[i+1];
        data[i+2] = 255 - data[i+2];

    }
    context.putImageData(pixels,0,0,0,0,canvas.width, canvas.height);
}












