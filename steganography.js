
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
    return binary
}


function encrypt(mensagem){
    let msg_len = mensagem.length
    let binary_vector = []
    let img_counter = 0
    for(let i = 0; i < msg_len;i++){ //pegar caracteres
        ascii_number = mensagem.charCodeAt(i)
        console.log(ascii_number)
        binary_number = decimalToBinary(ascii_number)
        binList = binaryToBinaryList(binary_number) //lista de 0s e 1s do char para adicionarmos a imagem
        
        while(binList.length<7){ //caso em que temos 0s à esquerda do binario
            binList.unshift(0)
        }
        console.log(binList)
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
    for (let j = 0; j<7;j++){
        if (original_copy[img_counter+j]%2==1){
            original_copy[img_counter+j] = original_copy[img_counter+j] - 1}
        else if (original_copy[img_counter+j]%2==0){
            continue}
    }
    //console.log(original_copy)
}

function decrypt(){
    let counter = Math.pow(10,6)
    let message = ''
    let char_bin = 0
    let next_char = ''
    let reset_counter = false
    for (let i = 0; i<original_copy.length;i++){
        reset_counter = false
        char_bin = char_bin + (original_copy[i]%2)*counter
        //console.log(char_bin,i)
        if ( original_copy[i]%2==0 //&& counter == 1//bom por pra testar, se nao analisa imagem toda
            && original_copy[i + 1]%2==0
            && original_copy[i + 2]%2==0
            && original_copy[i + 3]%2==0
            && original_copy[i + 4]%2==0
            && original_copy[i + 5]%2==0
            && original_copy[i + 6]%2==0){
            counter = Math.pow(10,6)
            let decimal_code = parseInt(char_bin,2)
           
            message = message.concat(String.fromCharCode(decimal_code))
            break
        }
        if (counter == 1){ //ultimo bit do caractere
            reset_counter = true
            let decimal_code = parseInt(char_bin,2)
            message = message.concat(String.fromCharCode(decimal_code))//concatenar mensagem com ultimo caractere descriptografado
            char_bin = 0
            next_char = ''
            console.log(decimal_code)
        }
        counter = counter/10
        if (reset_counter){
            counter = Math.pow(10,6)
        }
    }
    console.log(message)
}


/*
function decrypt(){
    let counter = Math.pow(10,6)
    let img_counter = 0
    let message = ''
    let char_bin = 0
    let next_char = ''
    let reset_counter = false
    for (let i = img_counter; i<original_copy.length;i++){
        reset_counter = false
        char_bin = char_bin + (original_copy[img_counter + i]%2)*counter
        //console.log(char_bin,i)
        console.log(counter,i)
        if ( original_copy[img_counter + i]%2==0 //&& counter == 1
            && original_copy[img_counter + i + 1]%2==0
            && original_copy[img_counter + i + 2]%2==0
            && original_copy[img_counter + i + 3]%2==0
            && original_copy[img_counter + i + 4]%2==0
            && original_copy[img_counter + i + 5]%2==0
            && original_copy[img_counter + i + 6]%2==0){
            counter = Math.pow(10,6)
            let decimal_code = parseInt(char_bin,2)
            console.log(decimal_code)
            next_char.concat(String.fromCharCode(decimal_code))
            message.concat(message,next_char)
            img_counter = img_counter + 7 //opcional
            break
        }
        if (counter == 1){ //fim do caractere
            reset_counter = true
            let decimal_code = parseInt(char_bin,2)
            console.log(decimal_code)
            next_char.concat(String.fromCharCode(decimal_code))
            message.concat(message,next_char)
            //img_counter = img_counter + 7
            char_bin = 0
            next_char = ''
            //NAO TA PEGANDO O MEIO
        }
        counter = counter/10
        if (reset_counter){
            counter = Math.pow(10,6)
        }

    }
}
*/










