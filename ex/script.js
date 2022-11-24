var a = "3";

var b = "6.5";

// var c = parseInt(a) + parseInt(b)
// var c = Number(a) + Number(b)
// var c = Number.parseInt(a) + Number.parseInt(b)
var c = Number.parseFloat(a) + Number.parseFloat(b)

var n1 = 1543.5

n1.toLocaleString('pt-br',{style:'currency',currency:'BRL'})

console.log(n1)