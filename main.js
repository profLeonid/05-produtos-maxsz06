`use strict`

function adicionarProduto(){
    const lista = document.getElementById(`lista`)
    const produto = document.getElementById(`produto`)

    if(produto.value.trim() == ""){
        alert ("Nenhum produto na caixa adicionado")
        e.preventDefault()
        return
    }


    const span = document.createElement(`span`)
    span.textContent = produto.value
    span.className=`flex flex-col bg-blue-100 px-8 py-p`

    lista.appendChild(span)
}

function removerProduto() {
    const lista = document.getElementById('lista') // pega a lista com os elementos dentro 
  
    // pega o último elemento adicionado
    const ultimoProduto = lista.lastElementChild
  
    // se existir, remove
    if (ultimoProduto) {
      ultimoProduto.remove()
    }else{
        alert("Nenhum Elemento Para Excluir")
    }
  }
