let vitorias = 10
let derrotas = 5

let nivel = ["Ferro","Bronze","Prata","Ouro","Diamante","Lendário","Imortal"]

function calcRank(vitorias, derrotas) {

  let saldoVitoria = vitorias - derrotas

  if (vitorias < 10) {
    return `O Herói tem saldo de ${saldoVitoria} está no nível de ${nivel[0]}`

  } else if (vitorias <= 20) {
    return `O Herói tem saldo de ${saldoVitoria} está no nível de ${nivel[1]}`

  } else if (vitorias <= 50) {
    return `O Herói tem saldo de ${saldoVitoria} está no nível de ${nivel[2]}`

  } else if (vitorias <= 80) {
    return `O Herói tem saldo de ${saldoVitoria} está no nível de ${nivel[3]}`

  } else if (vitorias <= 90) {
    return `O Herói tem saldo de ${saldoVitoria} está no nível de ${nivel[4]}`

  } else if (vitorias <= 100) {
    return `O Herói tem saldo de ${saldoVitoria} está no nível de ${nivel[5]}`

  } else {
    return `O Herói tem saldo de ${saldoVitoria} está no nível de ${nivel[6]}`
  }
}

console.log(calcRank(vitorias, derrotas))
