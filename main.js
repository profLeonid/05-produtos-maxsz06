`use strict`

function adicionarProduto(){
    const lista = document.getElementById(`lista`)
    const produto = document.getElementById(`produto`)

    if(produto.value == ""){
        console.log ("Nenhum produto na caixa adicionado")

    }


    const span = document.createElement(`span`)
    span.textContent = produto.value
    span.className=`flex flex-col bg-blue-100 px-8 py-p`

    lista.appendChild(span)
}
