'use strict'

function adicionarProduto() {

    const tbody = document.getElementById('atributos')
    const produto = document.getElementById('produto')
    const codigo = document.getElementById('codigo')
    const quantidade = document.getElementById('quantidade')

    if (
        produto.value.trim() === "" ||
        codigo.value.trim() === "" ||
        quantidade.value.trim() === "") {

        alert("Complete todas as caixas")
        return false
    }


    const tr = document.createElement("tr")
    
    tr.className =
        "bg-white shadow-md rounded-lg hover:shadow-lg hover:bg-gray-50 transition"

    tr.innerHTML = `
        <td class="px-4 py-2 font-semibold">${codigo.value}</td>
        <td class="px-4 py-2">${produto.value}</td>
        <td class="px-4 py-2">${quantidade.value}</td>
    `

    tbody.appendChild(tr)

    // limpa os inputs
    codigo.value = ""
    produto.value = ""
    quantidade.value = ""
}

function removerProduto() {
    const tbody = document.getElementById('atributos')
    const ultimoProduto = tbody.lastElementChild

    if (ultimoProduto) {
        ultimoProduto.remove()
    } else {
        alert("Nenhum elemento para excluir")
    }
}