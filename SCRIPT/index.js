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

//base 64
function toBase64(text) {
  const code = document.querySelector('input[name="code"]:checked').value
  if (code === 'codificar') {
    document.getElementById('decodedText').value = btoa(text.value)
  } else if (code === 'decodificar') {
    document.getElementById('decodedText').value = atob(text.value)
  } else {
    alert('selecione codificar ou decodificar')
  }
}


//cifradecesar
function toCaesar(text) {
  let steps = parseInt(document.getElementById('passos').value)
  const code = document.querySelector('input[name="code"]:checked').value
  if (code === 'decodificar') {
    steps = steps * -1
  }
  const alfabeto = 'abcdefghijklmnopqrstuwxyz'.split('')

  const textoOriginal = text.split('')
  let textoCriptografado = ''
  for (let i = 0; i < textoOriginal.length; i++) {
    let posicaoNoAlfabeto = alfabeto.indexOf(textoOriginal[i])
    if (posicaoNoAlfabeto + steps > alfabeto.length) {
      const somaSteps = posicaoNoAlfabeto + steps
      const diferenca = somaSteps - alfabeto.length
      posicaoNoAlfabeto = diferenca
    } else if (posicaoNoAlfabeto + steps < 0) {
      const somaSteps = posicaoNoAlfabeto + steps
      const diferenca = alfabeto.length - somaSteps
      posicaoNoAlfabeto = alfabeto.length + diferenca - 1
      console.log({ posicaoNoAlfabeto, diferenca, somaSteps })
    } else {
      posicaoNoAlfabeto += steps
    }
    console.log(alfabeto[posicaoNoAlfabeto])
    
    if (textoOriginal[i] === ' ') {
      textoCriptografado += ' '
    } else {
      textoCriptografado += alfabeto[posicaoNoAlfabeto]
    }

  }
  document.getElementById('decodedText').value = textoCriptografado
}

