
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