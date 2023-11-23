
let compressedImage = [];
let decompressedImage = [];
var datac;

function runLength () {

    let data = pixels.data;
    
    let countr = 1;
    for (let i = 0; i < data.length; i += 4) {
        // Verifica se o próximo elemento é igual ao atual
        if (data[i] === data[i + 4] && data[i+1] === data[i+1 + 4] && data[i+2] === data[i+2 + 4]) {    // Math.abs(data[i] - data[i + 4]) < 10 && Math.abs(data[i+1] - data[i+1 + 4]) < 10 && Math.abs(data[i+2] - data[i+2 + 4]) < 10
            countr++;
        } else {
            // Se não for igual, adiciona o elemento atual e a contagem ao vetor comprimido
            compressedImage.push(data[i], data[i+1], data[i+2], data[i+3], countr);
            countr = 1; // Reinicia a contagem para o próximo elemento
        }
    }

    compressedImage = new Uint8ClampedArray(compressedImage);
    console.log("Imagem Comprimida: " + compressedImage);
}

function downloadCompressed() {

    var blob = new Blob([compressedImage]);
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
    }
}

function UndoRunLength () {

    for (let i = 0; i < datac.length; i += 5) {
        for (let j = 0; j < datac[i+4]; j += 1) {
            // Adiciona o elemento repetido a quantidade de vezes especificada pela contagem
            decompressedImage.push(datac[i], datac[i+1], datac[i+2], datac[i+3]);
        }
    }

    // PROBLEMA COM O TAMANHO DA IMAGEM DESCOMPRIMIDA (NÃO É MULTIPLA DA LARGURA DO CANVAS)
    decompressedImage = new Uint8ClampedArray(decompressedImage);
    console.log("Imagem Descomprimida: " + decompressedImage);

    console.log(canvas.width);
    console.log(decompressedImage);
    var imgdt = new ImageData(decompressedImage, canvas.width);
    context.putImageData(imgdt, 0, 0);
    pixels = context.getImageData(0, 0, canvas.width, canvas.height);
    original_copy = [...pixels.data]
    getFrequencies();
    drawHistogram();
}