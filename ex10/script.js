// function obj(nome, sobrenome) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//     };
// }

// var a = obj('Igor', 'Oliveira');

// console.log(a.nome);
// console.log(a.sobrenome);

function obj(n, s) {
    this.nome = n;
    this.sobrenome = s;
}

var a = new obj('Igor', 'Oliveira');

console.log(a["nome"], a["sobrenome"])
