const fatorial = 5;
let resultado = 0;
resultado = fatorial * (fatorial-1) * (fatorial-2) * (fatorial-3) * (fatorial-4);
console.log("o resultado é:" + resultado);


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~






const fatorial = 6;
let resultado = 0;
resultado = fatorial * (fatorial-1) * (fatorial-2) * (fatorial-3) * (fatorial-4) * (fatorial-5) ;
console.log("o resultado é:" + resultado);




~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




const fatorial = 10;
let resultado = 0;
resultado = fatorial * (fatorial-1) * (fatorial-2) * (fatorial-3) * (fatorial-4) * (fatorial-5) * (fatorial-6)* (fatorial-7)* (fatorial-8)* (fatorial-9);
console.log("o resultado é:" + resultado);





~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





  const fatorial = 30;
let i = 0;
let resultado = 0;

resultado = fatorial;
console.log(resultado + "!");
for (i = 1; i < fatorial; i++ ) {

    console.log(resultado + " = ("+resultado+" * ( "+ 
                
    fatorial+ " - " + i + ")");
    resultado = resultado * (fatorial - i);
}
