var canvas = document.getElementById("image"); // criar canvas (representa desenho)
var context = canvas.getContext("2d");         // estrutura que recebe dados para desenho
var pixels = undefined;
var image ;
var original_copy = pixels;

function upload(event){       // função chamada
    image = new Image();
    image.src = URL.createObjectURL(event.target.files[0]); //Pegar link da imagem
    image.addEventListener("load",()=>{   // Força tag a ter certo comportamento
        const width = image.width > 500 ? 500 : image.width;
        canvas.width = width;
        canvas.height = (width/image.width) *image.height;
        context.drawImage(image,0,0,canvas.width,canvas.height); // Desenhar imagem dentro do contexto
        pixels  = context.getImageData(0,0,canvas.width,canvas.height); // Captura pixels da imagem
        original_copy = [...pixels.data]
        // getFrequencies();
        // drawHistogram();
        image.style.display="none"; // Não mostrar a imagem
        // Vemos apenas o Canvas
        closeSubmenu();
        
    })
}