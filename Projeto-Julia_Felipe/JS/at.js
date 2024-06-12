window.onload = function() {

    
    // 4. Crie um array com os seguintes elementos: 'maçã', 'banana', 'laranja', 'uva', 'manga'
    let frutas = new Array();
    frutas[0] = "Maçã";
    frutas[1] = "Banana";
    frutas[2] = "Laranja";
    frutas[3] = "Uva";
    frutas[4] = "Manga";

    //5.Exiba no console o segundo elemento do array.
    console.log(frutas[1]);
    document.write("<br>");

    //6. Exiba no console o último elemento do array sem usar o índice diretamente.
    var ultimo = frutas[frutas.length - 1];
    console.log(ultimo);

    //7.1 Adicione 'abacaxi' no final do array.
    frutas.push('Abacaxi')

    //7.2 Adicione 'morango' no início do array.
    frutas.unshift('Morango');

    //7.3 Remova o primeiro elemento do array.
    frutas.shift();

    //7.4 Remova o último elemento do array.
    frutas.pop();
    
    frutas.forEach(element => {
        document.write(element + '<br>')
    });
    
    //8. Encontre o índice da 'laranja' no array.
    achar = frutas.filter(element => element == "Laranja");
    console.log(achar);
    
    //9. Crie um novo array que contenha apenas as frutas que começam com a letra 'm'.
    let mfru = new Array();
    mfru[0] = "Maçã";
    mfru[1] = "Melancia";
    mfru[2] = "Mamão";
    mfru[3] = "Morango";
    mfru[4] = "Manga";
    
}