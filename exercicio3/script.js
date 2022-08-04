let nacionalidade = prompt('Qual a sua nacionalidade?');
let nacionalidadesPermitidas = ['brasileira', 'brasileiro', 'argentina', 'argentino', 'uruguaia', 'uruguaio', 'chilena', 'chileno', 'colombiana', 'colombiano'];

if(nacionalidadesPermitidas.includes(nacionalidade.toLowerCase())){
    console.log(`Sua nacionalidade é ${nacionalidade}.`);
}else{
    console.log(`Sua nacionalidade ${nacionalidade} não foi encontrada.`);
}
