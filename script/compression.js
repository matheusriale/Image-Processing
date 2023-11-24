
let compressedImage = [];
let compressedImageUint8;
let decompressedImage = [];
let decompressedImageUint8;
var datac;

function runLength () {

    let data = pixels.data;
    
    let countr = 1;
    for (let i = 0; i < data.length; i += 4) {
        // Verifica se o próximo elemento é igual ao atual
        if (data[i] === data[i + 4] && data[i+1] === data[i+1 + 4] && data[i+2] === data[i+2 + 4] && countr < 255) {
            countr++;
        } else {
            // Se não for igual, adiciona o elemento atual e a contagem ao vetor comprimido
            compressedImage.push(data[i], data[i+1], data[i+2], data[i+3], countr);
            countr = 1; // Reinicia a contagem para o próximo elemento
        }
    }

    compressedImageUint8 = new Uint8ClampedArray(compressedImage);
    console.log("Imagem Comprimida: " + compressedImageUint8);
    console.log(compressedImageUint8);
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

    for (let i = 0; i < datac.length; i += 5) {
        for (let j = 0; j < datac[i+4]; j += 1) {
            // Adiciona o elemento repetido a quantidade de vezes especificada pela contagem
            decompressedImage.push(datac[i], datac[i+1], datac[i+2], datac[i+3]);
        }
    }

    decompressedImageUint8 = new Uint8ClampedArray(decompressedImage);
    console.log("Imagem Descomprimida: " + decompressedImageUint8);
    console.log(decompressedImageUint8);

    var imgdt = new ImageData(decompressedImageUint8, canvas.width);
    context.putImageData(imgdt, 0, 0);
    pixels = context.getImageData(0, 0, canvas.width, canvas.height);
    original_copy = [...pixels.data]
    getFrequencies();
    drawHistogram();
    closeSubmenu();
}