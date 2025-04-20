function rgbtoHex(r, g, b){
    //Convertendo os números para hexadecimal

    
    
    const red = r.toString(16).padStart(2, "0");
    // .toString(16) converte os valores para a base hexadecimal
        /*
        
            A função .toString possui essa propriedade especial de converter strings para bases numéricas, como hexadecimal. Basta colocar o valor da base no () e GG!

        */
    
    // o uso de constantes diminui o risco de erros
    
    
    // .padStart adiciona um zero à esquerda se necessário
        /*
        
        .padStart funciona assim:
        Ele adiciona caracteres no início de uma string até que ela atinja um comprimento especificado, no modelo:
            - .padStart(X, "[string]")
                - em que X é número de caracteres adicionados no começo da string;
                - e a string entre parenteses é o(s) caractere(s) a ser adicionado.
        
        */ 
    const green = g.toString(16).padStart(2, "0");
    const blue = b.toString(16).padStart(2, "0");

    return `#${red}${green}${blue}`
}
console.log(rgbtoHex(2,99,71))