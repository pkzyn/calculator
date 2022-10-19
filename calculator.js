function insertOne(num) {
  const result = document.getElementById('result')
  const numero = result.innerHTML

  result.innerHTML = numero + num
}

function insert(num) {
  const numero = document.getElementById('result').innerHTML

  document.getElementById('result').innerHTML = numero + num
}

function clean() {
  document.getElementById('result').innerHTML = ''
}

function back() {
  const result = document.getElementById('result')
  var resultado = result.innerHTML
  resultado = resultado.substring(0, resultado.length - 1)
  result.innerHTML = resultado
}

function calcular() {
  const result = document.getElementById('result')
  var resultado = result.innerHTML
  if (resultado) {
    resultado = eval(resultado)
  } else {
    resultado = 'nada para calcular.'
  }

  result.innerHTML = resultado
}
