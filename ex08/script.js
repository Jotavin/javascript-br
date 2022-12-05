// Object Method

function calcMedia(n1, n2){
    return (this.notas[0] + this.notas[1]) / 2;
};


var aluno1 = {nome:"Igor", 
            notas: [7, 8], 
            media: calcMedia
};

var aluno2 = {
    nome: "João",
    notas: [5, 9],
    media: calcMedia
};

console.log(aluno1.nome)
console.log(aluno1.media())

console.log(aluno2.nome)
console.log(aluno2.media())