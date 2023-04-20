// Variaves global
const form = document.getElementById("novoItem");
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) =>{
    //Interroper a função de enviar os dados para a pagina
    evento.preventDefault()
    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

    // Criando o Item na lista

function criaElemento(nome, quantidade){
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome
    lista.appendChild(novoItem)

}