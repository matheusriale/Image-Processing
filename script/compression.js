
let compressedImage = [];

function runLength () {
    let copypixels = pixels; // Copiar valores, novo array
    let data = copypixels.data;
    
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
    console.log(compressedImage);
    console.log(data);
}

function UndoRunLength () {
    let copypixels = pixels; //copiar valores, novo array
    let data = copypixels.data;
    
    const decompressedImage = [];

    for (let i = 0; i < compressedImage.length; i += 2) {
        // Adiciona o elemento repetido a quantidade de vezes especificada pela contagem
        decompressedImage.push(...Array(compressedImage[i + 1]).fill(compressedImage[i]));
    }

    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    getFrequencies();
    drawHistogram();
}

function downloadCompressed() {

    console.log(compressedImage);
    var blob = new Blob([compressedImage]);
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = "compressed.mr";
    link.click();
}
