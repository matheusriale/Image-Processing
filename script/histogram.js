var hist = new Array(256).fill(0);
var max_frequency = 0;

function getFrequencies(){
    //receber pixels
    hist = new Array(256).fill(0);
    max_frequency = 0;
    const pixel =  new Uint32Array(pixels.data.buffer);
    for (let i = 0; i<pixel.length;i++){
        const r = pixel[i] & 0xff;  // Calc de intensidades
        const g = (pixel[i] >> 8) & 0xff;
        const b = (pixel[i] >> 16) & 0xff;
        hist[r] = hist[r] + 1; // Calc de Frequencias
        hist[g] = hist[g] + 1; 
        hist[b] = hist[b] + 1; 
    }
    
    for (let i = 0;i<256;i++){
        if (hist[i]>max_frequency){
            max_frequency = hist[i];
        }
    }
    
}

var canvashist = document.getElementById("histogram"); // criar canvas (representa desenho)
var contexthist = canvashist.getContext("2d");         // estrutura que recebe dados para desenho

function drawHistogram(){
    if(pixels){
        contexthist.clearRect(0,0,canvashist.width,canvashist.height);
        const sizebar= 10;
        const starty = canvashist.height - sizebar;
        const pixelx = canvashist.width/255;
        const pixely = canvashist.height/max_frequency;
        for (let i = 0;i<256;i++){
          const x = i*pixelx;
          contexthist.strokeStyle = "green";
          contexthist.beginPath();
          contexthist.moveTo(x,starty);                 //linha daqui
          contexthist.lineTo(x,starty-hist[i]*pixely)   //ate aqui
          contexthist.closePath();
          contexthist.stroke();
            
        }
        contexthist.fillStyle = "white";
        contexthist.font = "normal 12px Arial";
        contexthist.fillText("0",0,canvashist.height);
        contexthist.fillText("255",canvashist.width-20,canvashist.height);
    
    }
}

// HIST GRAYSCALE
// function getFrequencies(){
//     //receber pixels
//     const data = pixels.data;
//     hist = new Array(256).fill(0);
//     means = new Array(data.length).fill(0);
//     max_frequency = 0;
 
//     for (i = 0; i < pixels.data.length; i = i + 4) {
//       means[i] = (data[i] + data[i + 1] + data[i + 2]) / 3;
//       if (means[i]>max_intensity){max_intensity = means[i]}
//     }

//     for (let i = 0; i<pixels.data.length;i = i + 4){
        
//         hist[means[i]] = hist[means[i]] + 1; // Calc de Frequencias
//     }
    
//     for (let i = 0;i<256;i++){
//         if (hist[i]>max_frequency){
//             max_frequency = hist[i];
//         }
//     }
    
// }