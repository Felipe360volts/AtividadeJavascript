    valor = [];
    valores = [];
    valores2 = [];
    //Cria um sistema que gerada semana horas/aulas dadas por um professor
    function aula(){
        var n_1 = document.getElementById('n_1').value;
        var n_2 = document.getElementById('n_2').value;
        valor.push(n_1*n_2);
        let total = document.getElementById("total");
        total.innerText = valor
    }

    //2. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente
    
    function cres(){
        var n1 = document.getElementById('n1').value;
        var n2 = document.getElementById('n2').value;
        valores.push(n1, n2)
        valores.sort();
        console.log(valores)
        let text = document.getElementById("texto");
        text.innerText = valores
    }

    //3. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
    function ordem(){
        var nun = document.getElementById("num1").value;
        var nun2 = document.getElementById("num2").value;
        var nun3 = document.getElementById("num3").value;
        valores2.push(nun, nun2, nun3);
        valores2.sort();
        let text2 = document.getElementById("text");
        text2.innerText = valores2  
    }
    
    // 4. Crie um array com os seguintes elementos: 'maçã', 'banana', 'laranja', 'uva', 'manga'
    let frutas = new Array();
    frutas[0] = "Maçã";
    frutas[1] = "Banana";
    frutas[2] = "Laranja";
    frutas[3] = "Uva";
    frutas[4] = "Manga";

    //5.Exiba no console o segundo elemento do array.
    console.log('Segundo elemento: ' + frutas[1]);

    //6. Exiba no console o último elemento do array sem usar o índice diretamente.
    var ultimo = frutas[frutas.length - 1];
    console.log('Último elemento: ' + ultimo);

    //7.1 Adicione 'abacaxi' no final do array.
    frutas.push('Abacaxi')

    //7.2 Adicione 'morango' no início do array.
    frutas.unshift('Morango');

    //7.3 Remova o primeiro elemento do array.
    frutas.shift();

    //7.4 Remova o último elemento do array.
    frutas.pop();

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
    
