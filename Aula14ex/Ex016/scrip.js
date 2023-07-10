function contar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pass = document.getElementById('txtpass')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        window.alert('[ERRO FALTAM DADOS]')
    } else {
        res.innerHTML = 'contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando passo 1')
            p = 1
        }
        if ( i < f) {
            for(let c = i; c <= f;c += p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            for(let c = i;c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
          res.innerHTML += `\u{1F3C1}`
        }
    }
}