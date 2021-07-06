let item = document.getElementById('searchArea')
let title = document.getElementById('empty')
let lista = document.getElementById('items')
let nItems = document.getElementById('nItems')

function addProduct(){
    addItemToList()
    clearTitle()
    countList()
}

function addItemToList(){
    lista.innerHTML += '<li class = "item">'+ item.value + '</li>' + '<input type= "number" placeholder = "Preço" id = "preçoGeral" class = "precos">'
}

function clearTitle(){
    title.style.setProperty('display', 'none')
    item.value = ''  
}

function countList(){
    const textBase = 'Número de itens na lista: '
    let count = parseInt(document.querySelectorAll("#items li").length)
    nItems.innerHTML = textBase + count
}

//Observações:
/*
    No input de preço, o valor some após inserir um novo item
    Seria interessante mudar a cor do placeholder do input de preço
    Acrescentar botão para retirar um item
    Acrescentar checkbox para dar check em um item já comprado
    Salvar os valores dos itens numa lista e calcular o total
    Salvar os nomes e valores dos itens COM check em uma lista e calcular o total
    Salvar os nomes e valores dos itens SEM check em uma lista e calcular o total
    Ajustar automaticamente a fonte do texto para caber na área do parágrafo
*/