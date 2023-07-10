function calcular() {
    var numero = document.getElementById('txtn')
    var res = document.getElementById('tab')
    if (numero.value.length == 0) {
        window.alert('Digite algum número para gerar a tabuada')
    } else {
        var num = Number(numero.value)
        var con = 1
        res.innerHTML = ``
        while (con <= 10) {
            var item = document.createElement('option')
            item.text = `${num} X ${con} = ${num*con}`
            item.value = `var${con}`
            res.appendChild(item)
            con++
        }
    }
}