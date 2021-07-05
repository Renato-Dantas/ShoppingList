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
    lista.innerHTML += '<li class = "item">'+ item.value + '</li>'
}

function clearTitle(){
    title.style.setProperty('display', 'none')
    item.value = ''  
}

function countList(){
    let count = lista
    for(i=0;i<count.lenght; i++){
        console.log(i)
    }

}