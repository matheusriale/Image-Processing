function applyChromakey(bg_img,d){ //d = distancia da cor setada para o chromakey(verde)
    const data = pixels.data;//original image = data
    let pix_distance;
    for (let i = 0; i < data.length; i = i + 4) {
        pix_distance = Math.sqrt(Math.pow(0-data[i],2),Math.pow(255-data[i+1],2),Math.pow(0-data[i+2],2))
        if(pix_distance<=d){
            data[i] = bg_img[i]
            data[i+1] = bg_img[i+1]
            data[i+2] = bg_img[i+2]
        }
    }
    context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
    // getFrequencies();
    // drawHistogram();
}