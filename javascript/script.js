function gerar() {
  let num = window.document.getElementById('numero')
  let tab = window.document.getElementById('tabuada')
  if (num.value.length == 0) {
    window.alert('Digite um número!')
  } else {
    let n = Number(num.value)
    tab.innerHTML = ''
    for (let c = 1; c <= 10; c++) {
      let item = window.document.createElement('option')
      item.text = `${n} X ${c} = ${n*c}`
      item.value = `tab${c}`
      tab.appendChild(item)
    }
  }
}