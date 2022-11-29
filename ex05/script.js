// Array (Vetores)

//var alunos = new Array('Igor', 'José', 'Marcos', 'Mariana'); //menos usado

var alunos = ['Igor', 'José', 'Marcos', 'Mariana', 'Joana', 'Leo', 'João'];



for (var i = 0; i < alunos.length; i++){
	console.log(alunos[i])
};
console.log('')


for (var aluno in alunos){
    console.log(aluno)
};
console.log('')


for (var aluno of alunos){
    console.log(aluno)
}