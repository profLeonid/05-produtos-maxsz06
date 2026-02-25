`use strict`

function adicionarProduto() {

    const lista = document.getElementById(`lista`)
    const produto = document.getElementById(`produto`)
    const codigo = document.getElementById(`codigo`)
    const quantidade = document.getElementById(`quantidade`)

    if (produto.value.trim() === "") {
        alert("Complete as caixas")
        e.preventDefault()
        return
    } else if (codigo.value.trim === "") {
        alert("Complete as caixas")
        e.preventDefault()
        return
    } else if (quantidade.value.trim() == "") {
        alert("Complete as caixas")
        e.preventDefault()
        return
    }


    const tr = document.createElement("tr")
    tr.className = "bg-white shadow-md rounded-lg hover:shadow-lg hover:bg-gray-50 transition";
    tr.innerHTML = 
        <td class="px-4 py-4 rounded-l-lg font-semibold">${}</td>




    lista.appendChild(span)
}

function removerProduto() {
    const lista = document.getElementById('lista') // pega a lista com os elementos dentro 

    // pega o último elemento adicionado
    const ultimoProduto = lista.lastElementChild

    // se existir, remove
    if (ultimoProduto) {
        ultimoProduto.remove()
    } else {
        alert("Nenhum Elemento Para Excluir")
    }
}
