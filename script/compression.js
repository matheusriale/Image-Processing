
let compressedImage = [];
let compImageCL = [];
let compressedImageUint8;
let decompressedImage = [];
let decompressedImageUint8;
let decompressedImageRL = []
let compressedHSVUint8;
var datac;

function runLength () {

    //let data = pixels.data;
    
    let countr = 1;
    for (let i = 0; i < compImageCL.length; i += 6) {
        // Verifica se o próximo elemento é igual ao atual
        if (compImageCL[i] === compImageCL[i + 6] && compImageCL[i+1] === compImageCL[i+1 + 6] && compImageCL[i+2] === compImageCL[i+2 + 6] && compImageCL[i+3] === compImageCL[i+3 + 6] && compImageCL[i+4] === compImageCL[i+4 + 6] && compImageCL[i+5] === compImageCL[i+5 + 6] && countr < 255) {
            countr++;
        } else {
            // Se não for igual, adiciona o elemento atual e a contagem ao vetor comprimido
            compressedImage.push(compImageCL[i], compImageCL[i+1], compImageCL[i+2], compImageCL[i+3],compImageCL[i+4],compImageCL[i+5], countr);
            countr = 1; // Reinicia a contagem para o próximo elemento
        }
    }

    compressedImageUint8 = new Uint8ClampedArray(compressedImage);
    console.log("Imagem Comprimida run length: " + compressedImageUint8);
    console.log(compressedImageUint8);
}



function chrominanceLuminance(){
    let data = pixels.data;
    let hsvImage = [];
    for(let i = 0; i<data.length;i+=4){ 
        hsvPixel = rgbToHSV(data[i],data[i+1],data[i+2]);
        hsvImage.push(hsvPixel[0],hsvPixel[1],hsvPixel[2],data[i+3]);
        hsvPixel = [];
    }
    //console.log(hsvImage)//imagem com HSV, no formato: [h1,s1,v1,h2,s2,v2,...,hn,sn,vn]
    // Aplicar hn = (h1+h2)/2, sn = (s1+s2)/2
    //let compressedHsv = [];
    let x = 360/255;
    for(let i = 0; i <hsvImage.length;i+=8){
        let hn = (hsvImage[i]+hsvImage[i+4])/2;
        let sn = (hsvImage[i+1]+hsvImage[i+5])/2;
        hn = hn/x // garantir que hn esteja dentro do intervalo 0 - 255
        compImageCL.push(Math.round(hn),Math.round(sn),Math.round(hsvImage[i+2]),hsvImage[i+3],Math.round(hsvImage[i+6]),hsvImage[i+7])
    }
    console.log("Compressed HSV chrominance luminance:",compImageCL)

    //compressedImageUint8 = new Uint8ClampedArray(compImageCL)
    //console.log(compressedImageUint8)
}

function undoChrominanceLuminance(){
    //decompressedImage
    let x = 360/255;
    for(let i = 0;i<decompressedImageRL.length;i+=6){
        let rgb_values1 = hsvToRGB(decompressedImageRL[i]*x,decompressedImageRL[i+1],decompressedImageRL[i+2])
        let rgb_values2 = hsvToRGB(decompressedImageRL[i]*x,decompressedImageRL[i+1],decompressedImageRL[i+4])
        decompressedImage.push(Math.round(rgb_values1[0]),rgb_values1[1],rgb_values1[2],decompressedImageRL[i+3],Math.round(rgb_values2[0]),rgb_values2[1],rgb_values2[2],decompressedImageRL[i+5])
        rgb_values1 = [];
        rgb_values2 = [];
    }

    decompressedImageUint8 = new Uint8ClampedArray(decompressedImage);
    console.log("Decompressed Image: " + decompressedImageUint8);
    console.log(decompressedImageUint8);

    var imgdt = new ImageData(decompressedImageUint8, canvas.width);
    context.putImageData(imgdt, 0, 0);
    pixels = context.getImageData(0, 0, canvas.width, canvas.height);
    original_copy = [...pixels.data]
    getFrequencies();
    drawHistogram();
    closeSubmenu();
}


function downloadCompressed() {

    var blob = new Blob([compressedImageUint8]);
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = "compressed.mr";
    link.click();
}

function uploadCompressed (event) {
    const fileList = event.target.files;

    var fr = new FileReader();
    fr.readAsArrayBuffer(fileList[0]);

    fr.onload = function(e) {
        datac = new Uint8ClampedArray(fr.result);
        console.log("Imagem Comprimida (upload): " + datac);
        console.log(datac);
    }
}

function undoRunLength () {

    for (let i = 0; i < datac.length; i += 7) {
        for (let j = 0; j < datac[i+6]; j += 1) {
            // Adiciona o elemento repetido a quantidade de vezes especificada pela contagem
            decompressedImageRL.push(datac[i], datac[i+1], datac[i+2], datac[i+3],datac[i+4],datac[i+5]);
        }
    }

    // decompressedImageUint8 = new Uint8ClampedArray(decompressedImage);
    console.log("Imagem Descomprimida runlength: " + decompressedImageRL);
    console.log(decompressedImageRL);

    // var imgdt = new ImageData(decompressedImageUint8, canvas.width);
    // context.putImageData(imgdt, 0, 0);
    // pixels = context.getImageData(0, 0, canvas.width, canvas.height);
    // original_copy = [...pixels.data]
    getFrequencies();
    drawHistogram();
    closeSubmenu();
}


function fullCompress(){
    chrominanceLuminance()
    runLength()
}

function fullDecompress(){
    undoRunLength()
    undoChrominanceLuminance()
}