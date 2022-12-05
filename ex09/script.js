//Object - Construtores

// function criarAluno(nome, n1, n2) {
//     return {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function () {
//             return (this.nota1 + this.nota2) / 2;
//         },
//     };
// }

// var turma = [
//     criarAluno('João', 9, 6),
//     criarAluno('Igor', 7, 4),
//     criarAluno('Marcela', 8, 7.5),
// ];

// turma.forEach(function (elemento) {
//     console.log(elemento);
// });

// for (var aluno of turma) {
//     console.log(aluno.nome + ' - ' + aluno.media());
// }  Segunda forma de imprimir com 'for', a primeira foi com 'forEach'

function aluno(nome, n1, n2) {
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function () {
        return (this.nota1 + this.nota2) / 2;
    };
}

var a = new aluno('Igor', 8, 7);
var a = new aluno('Joao', 5, 7);

console.log(a);
console.log(a.media());
