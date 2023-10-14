var canvas = document.getElementById("image"); // criar canvas (representa desenho)
var context = canvas.getContext("2d");         // estrutura que recebe dados para desenho
var pixels = undefined;
var original_width = undefined;
var original_height = undefined;
var image = new Image();
var original_copy = pixels;

function upload(event){       // função chamada
    image.onload = function(){  // Chamada pos carregamento da imagem (transforma URL em estrutura de image)
        URL.revokeObjectURL(image.src);

    }
    image.src = URL.createObjectURL(event.target.files[0]); //Pegar link da imagem
    image.addEventListener("load",()=>{   // Força tag a ter certo comportamento
        canvas.width = 500;
        canvas.height = (500/image.width) *image.height;
        original_width = canvas.width;
        original_height = canvas.height;
        context.drawImage(image,0,0,canvas.width,canvas.height); // Desenhar imagem dentro do contexto
        pixels  = context.getImageData(0,0,canvas.width,canvas.height); // Captura pixels da imagem
        original_copy = [...pixels.data]
        getFrequencies();
        drawHistogram();
        image.style.display="none"; // Não mostrar a imagem
        // Vemos apenas o Canvas
        
    })
}


function undo(){
    canvas.width = original_width;
    canvas.height = original_height;
    context.drawImage(image,0,0,original_width,original_height);
    pixels = context.getImageData(0,0,original_width,original_height);
    getFrequencies();
    drawHistogram();
}