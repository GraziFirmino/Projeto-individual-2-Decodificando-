const select = document.getElementById('selection')

select.addEventListener('change', function () {
  if (select.value == 'cesar') {
    steps.style.display = 'flex'
  } else {
    steps.style.display = 'none'
  }
})
const radioCodificar = document.getElementById('radiocodificar')
const radioDecodificar = document.getElementById('radiodecodificar')
const criptografarBtn = document.getElementById('criptografarbtn')

radioCodificar.addEventListener('change', function () {
  criptografarBtn.innerHTML = 'Codificar Mensagem'
})
radioDecodificar.addEventListener('change', function () {
  criptografarBtn.innerHTML = 'Decodificar Mensagem'
})

function criptografia() {
  const text = document.getElementById('textToDecode')
  const method = document.getElementById('selection')
  if (method.value === 'cesar') {
    toCaesar(text.value)
  } else {
    toB64(text)
  }
}
