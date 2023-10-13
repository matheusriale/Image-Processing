
// Aplica a transformação de escala na imagem
function scale(ratio) {
    let copypixels = pixels; // copiar valores, novo array
    let data = copypixels.data;
    let data2 = [...pixels.data];

    larguraOriginal = canvas.width;
    alturaOriginal = canvas.height;

    larguraNova = ratio * larguraOriginal;
    alturaNova = ratio * alturaOriginal;

    canvas.width = larguraNova;
    canvas.height = alturaNova;

    const imageData = context.createImageData(larguraNova, alturaNova);
    let data3 = imageData.data;

    // Laço que percorre a nova imagem preenchendo com base na anterior:
    for (i = 0; i < data3.length; i = i + 4) {

        linhaAtual = Math.floor( i / (larguraNova*4) );
        colunaAtual = i % (larguraNova*4);

        linhaNaOriginal = Math.round( linhaAtual / ratio );
        colunaNaOriginal = Math.round( colunaAtual / ratio );

        i2 = linhaNaOriginal*larguraOriginal*4 + colunaNaOriginal;

        data[i] = 0;
        data[i+1] = 0;
        data[i+2] = 0;
        data[i+3] = 0;

        data3[i] = data2[i2];
        data3[i+1] = data2[i2+1];
        data3[i+2] = data2[i2+2];
        data3[i+3] = data2[i2+3];
    }

    context.putImageData(imageData, 0, 0);
    getFrequencies();
    drawHistogram();
}