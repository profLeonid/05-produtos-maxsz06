`use strict`

function adicionarProduto(){

    const lista = document.getElementById(`lista`)
    const produto = document.getElementById(`produto`)
    const codigo = document.getElementById(`codigo`)
    const quantidade = document.getElementById(`quantidade`)

    if(produto.value.trim()===""){
        alert ("Complete as caixas")
        e.preventDefault()
        return
    }else if(codigo.value.trim === ""){
        alert ("Complete as caixas")
        e.preventDefault()
        return
    }else if (quantidade.value.trim() == ""){
        alert ("Complete as caixas")
        e.preventDefault()
        return
    }


    const tableAtributos = document.getElementById(`atributos`)

    

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
