let idade = +prompt('Qual a sua idade?');;
let isMaiorIdade = prompt('Você terminou o ensino médio?')
let isCursandoOutraFaculdade = prompt('Você está cursando a universidade?');

if(idade >= 18){
    console.log(`Você tem ${idade} anos, e portanto é maior de idade.`);
}else{
	console.log(`Você tem ${idade}, e portanto é menor de idade.`);
}
if(isMaiorIdade.toLowerCase() == 'sim'){
    console.log(`Você terminou o ensino médio.`);
}else{
    console.log(`Você não terminou o ensino médio`);
}
if(isCursandoOutraFaculdade.toLowerCase() == 'sim'){
    console.log(`Você está cursando a universidade`);
}else{
    console.log(`Você não está cursando a universidade.`);
}
