
function binaryToBinaryList(binary){ //retorna lista de 0s e 1s do numero binario em cada posicao, para passarmos a imagem.
    let n_len = binary
    n_len = n_len.toString().length
    bin_vector = []
    bin_string = binary.toString()
    for (let i = 0; i<n_len;i++){
        let bin_number = parseInt(bin_string.charAt(i))
        bin_vector.push(bin_number)
    }
    return bin_vector
}

function decimalToBinary(number){
    binary = 0
    cont = 1
    while (number>=1){
        let resto = number%2
        number = Math.floor(number/2)
        binary = binary + resto*cont
        cont = cont*10
    }
    console.log(binary)
    return binary
}

function encrypt(mensagem){
    let msg_len = mensagem.length
    let binary_vector = []
    let img_counter = 0
    for(let i = 0; i < msg_len;i++){ //pegar caracteres
        ascii_number = mensagem.charCodeAt(i)
        binary_number = decimalToBinary(ascii_number)
        binList = binaryToBinaryList(binary_number) //lista de 0s e 1s do char para adicionarmos a imagem
        for (let j = 0; j<binList.length;j++){
            if (original_copy[img_counter+j]%2==1 && binList[j]==1){
                continue}
            else if (original_copy[img_counter+j]%2==1 && binList[j]==0){
                original_copy[img_counter+j] = original_copy[img_counter+j] - 1}
            else if (original_copy[img_counter+j]%2==0 && binList[j]==0){
                continue}
            else if (original_copy[img_counter+j]%2==0 && binList[j]==1){
                original_copy[img_counter+j] = original_copy[img_counter+j] + 1}
        }
        img_counter = img_counter + 7
    }
    //finalizar encrypt aplicar 7 0s
    for (let j = 0; j<7;j++){
        if (original_copy[img_counter+j]%2==1){
            original_copy[img_counter+j] = original_copy[img_counter+j] - 1}
        else if (original_copy[img_counter+j]%2==0){
            continue}
    }
}

function decrypt(){
    return
}
/*

*/










