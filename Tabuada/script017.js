function gerar() {
    
    var num = document.getElementById('txtn')
    var tab = document.getElementById('tabuada')

    if (num.value.length == 0) {
        res.innerHTML = 'Impossível gerar a tabuada!'
        window.alert('[ERRO] Faltam dados.')        
    } else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <=10) {
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                tab.value = `tab${c}`
                tab.appendChild(item)
                c++
            }
        }
}

