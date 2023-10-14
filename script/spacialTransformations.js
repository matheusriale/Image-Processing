
// Aplica a transformação de escala na imagem linear
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

    n = (larguraNova*4)*alturaNova;
    data = new Array(n).fill(0);

    // Laço que percorre a nova imagem preenchendo com base na anterior:
    for (i = 0; i < data.length; i = i + 4) {

        linhaAtual = Math.floor( i / (larguraNova*4) );
        colunaAtual = i % (larguraNova*4);

        linhaNaOriginal = Math.round( linhaAtual / ratio );
        colunaNaOriginal = Math.round( colunaAtual / ratio );

        i2 = linhaNaOriginal*larguraOriginal + colunaNaOriginal;

        data[i] = data2[i2];
    }

    context.drawImage(image,0,0,canvas.width,canvas.height)
    pixels = context.getImageData(0,0,canvas.width,canvas.height);
    getFrequencies();
    drawHistogram();
}


// Aplica a transformação de escala na imagem, interpolando pelo mais próximo:
function scaleNearest(ratio) {

    // Pixels da imagem original:
    let data2 = [...pixels.data];

    // Calculando a largura e altura da nova imagem:
    larguraOriginal = canvas.width;
    alturaOriginal = canvas.height;

    larguraNova = ratio * larguraOriginal;
    alturaNova = ratio * alturaOriginal;

    // Atualizando o tamanho do canvas de exibição:
    canvas.width = larguraNova;
    canvas.height = alturaNova;

    // Criando um novo objeto ImageData:
    const imageData = context.createImageData(larguraNova, alturaNova);
    let data3 = imageData.data;

    // Laço que percorre a nova imagem preenchendo com base na anterior:
    for (i = 0; i < data3.length; i = i + 4) {

        // Calculando a linha e coluna do elemento atual da nova imagem:
        linhaAtual = Math.floor( i / (larguraNova*4) );
        colunaAtual = Math.round( (i % (larguraNova*4)) / 4 );

        // Interpolando a linha e coluna correspondente na imagem original:
        linhaNaOriginal = Math.round( linhaAtual / ratio );
        colunaNaOriginal = Math.round( colunaAtual / ratio );

        // Calculando o índice na imagem original:
        i2 = linhaNaOriginal*larguraOriginal*4 + colunaNaOriginal*4;

        // Atribuindo o valor do pixel:
        data3[i] = data2[i2];
        data3[i+1] = data2[i2+1];
        data3[i+2] = data2[i2+2];
        data3[i+3] = data2[i2+3];
    }

    context.putImageData(imageData, 0, 0);
    pixels = context.getImageData(0,0,canvas.width,canvas.height);
    getFrequencies();
    drawHistogram();
}