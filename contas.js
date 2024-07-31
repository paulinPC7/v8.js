const objetoCliente = {
    id: 5,
    nome: "Paulo",
    idade: 18,
    cpf: "999.888.777-22"
}

console.log(`nome: ${objetoCliente.nome}`)
console.log(`idade: ${objetoCliente['idade']}`)
console.log(`cpf: ${objetoCliente['cpf']}`)

const chaves = ["nome", "idade", "cpf"]

chaves.forEach((chave) => {
    console.log(`chave: ${chave} valor: ${objetoCliente[chave]}`)
});






*****************************************************************************








const pessoa = {
    nome:"Monica",
    profissão: "pedagoga"
}

console.log(pessoa.nome)

console.log(pessoa.telefone)

pessoa.telefone = "41 999777666"

console.log(pessoa.telefone)

console.log(pessoa)

const novaPessoa = {
    nome: 'teste'
}

pessoa = novaPessoa
