// formas de criar o array
// tipos de criações de array: indice, associativo 
//1º forma

window.onload = function() {

    let frutas = new Array();
    frutas[0] = "Maçã";
    frutas[1] = "Banana";
    frutas[2] = "Laranja";
    frutas[3] = "Uva";
    frutas[4] = "Manga";

    //mostra um elemento do array
    console.log(frutas[1]);
    document.write("<br>");
    //for, while
    frutas.forEach(element => {
        document.write(element + '<br>')
    });

    document.write("<br>")

    for(const key in frutas){
        //document.write(key + " : " + frutas[key] + '<br>');
        //interpolação de string
        document.write(`${key} : ${frutas[key]} <br>`);
    }
    // 2 forma
    let nomes = new Array('Ricardo', 'Carlos', 'NIcolas', 'Maria')
    nomes.push('Luiza'); //ultima coisa no array
    nomes.unshift('Vinicius', 'Moises', 'Sofia Lopes') //adiciona no começo do array
    for(let i=0 ; i < nomes.length; i++){
        console.log(nomes[i]+ '\n');
    }

    let mudanca = nomes.map((texto)=>texto + " IPI"); //adiciona uma escrita a mais nos elementos
    console.log(mudanca.reverse()); //O primeiro vira o ultimo e o ultimo o primeiro

    //3 forma
    let objArray = [
        {
            nome: 'Carlos', 
            cidade:'Sorocaba', 
            bairro:'Vitória Régia', 
            tipo:'passa fome!'
        },
        {
            nome: 'Maria', 
            cidade:'Votorantim', 
            bairro:'Rio Acima', 
            tipo:'sla'
        },
    ]
    document.write(`<p>
                        ${objArray[0].nome}, 
                        ${objArray[0]['cidade']}, 
                        ${objArray[0].bairro}, 
                        ${objArray[0]["tipo"]}
                    </p>`)
    document.write(`<p>
                        ${objArray[1].nome}, 
                        ${objArray[1]['cidade']}, 
                        ${objArray[1].bairro}, 
                        ${objArray[1]["tipo"]}
                    </p>`)
}