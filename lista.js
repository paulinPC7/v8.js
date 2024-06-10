
const produtos=["cloro","amaciante","detergente","sabonte","sabão","sabão em pedra","sabão em pó","sabão liquido","sabonete liquido","agua sanitaria","pasta de dente","esponja","alcool","alcool perfumado",]
console.log(produtos);
console.log(produtos[2]);
console.log(produtos.length);

produtos.push("cloro")
produtos.pop( )
nprodutos = produtos.splice(3,4)
console.log(nprodutos)
produtos1=produtos.slice(0,5)
produtos2=produtos.slice(5)
console.log(produtos1)
console.log(produtos2)       
produtos1.push(" ")
produtos2.push(" ")
todosprodutos = produtos1.concat(produtos2)
console.log(todosprodutos)
