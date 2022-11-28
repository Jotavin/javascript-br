// Condicionais - Switch
// var nota = 2.5;

// if (nota >= 7) {
//     console.log('Você passou com a nota ' + nota + '.')
// }
// else {
//     console.log('Você reprovou com a nota ' + nota + '.')
// }

var nota1 = 8;
var nota2 = 9;

var media = (nota1 + nota2) / 2;

var conceito = ""

if(media >= 8){

    conceito = "Ótimo";
}
else if(media > 6.5){

    conceito = "Bom";
}
else{

    conceito = "Regular";
}


console.log(media)
console.log(conceito)