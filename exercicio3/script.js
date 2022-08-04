let nacionalidade = prompt('Qual a sua nacionalidade?');

if(nacionalidade.toLowerCase() == 'brasileira'){
    console.log(`Sua nacionalidade é brasileira.`);
} else if(nacionalidade.toLowerCase() == 'argentina'){
    console.log(`Sua nacionalidade é argentina.`);
} else if(nacionalidade.toLowerCase() == 'uruguaia'){
    console.log(`Sua nacionalidade é uruguaia.`);
} else if(nacionalidade.toLowerCase() == 'chilena'){
    console.log(`Sua nacionalidade é chilena.`);
} else if(nacionalidade.toLowerCase() == 'colombiana' ){
    console.log(`Sua nacionalidade é colombiana.`);
} else{
    console.log(`Sua nacionalidade ${nacionalidade} não foi encontrada.`);
}
