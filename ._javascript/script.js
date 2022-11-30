var aluno = ['João', 'Maria', 'Thiago', 'Clara', 'Victor'];
var nota1 = [5.4, 9.2, 7.1, 7.6, 3.2];
var nota2 = [1.9, 5, 9.4, 8, 6];

function media(n1, n2){
    return (n1 + n2) / 2;
     
}

for (var index in aluno){

    console.log(aluno[index] + " - " + nota1[index] + " - " + nota2[index] + " - " + media(nota1[index], nota2[index]));
}