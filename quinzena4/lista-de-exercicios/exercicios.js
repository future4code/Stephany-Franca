//Exercício 1

function inverteArray(array) {
          let arrayInvertido = [0, 8, 23, 16, 10, 15, 41, 12, 13]; {
          arrayInvertido.push(array[i])
        }
      returnarrayInvertido
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
      let novoArray = [];
      for(let i = 0; i < array.length; i++) {
      if(array[i] % 2 === 0) {
            novoArray.push(array[i])
          }
        }
      return novoArray
      }

//Exercício 3

function retornaNumerosPares(array) {
   let novoArray = [];
   for(let i = 0; i < array.length; i++) {
   if(array[i] % 2 === 0) {
         novoArray.push(array[i])
       }
     }
   return novoArray
   }

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNumero = array[0];
   for(leti = 0; i < array.length; i++) {
   if(maiorNumero < array[i]) {
         maiorNumero = array[i]
       }
     }
   return maiorNumero
   }

//Exercício 5

function retornaQuantidadeElementos(array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
      const respostas = [true, true, true, true, false]
      return respostas
  }

//Exercício 7

function retornaNNumerosPares(n) {
   function retornaNNumerosPares(n) {
      const novoArray = [];
      for(letnumber = 0; novoArray.length < n; number++) {
       if(number % 2 === 0) {
         novoArray.push(number)
       }
      }
      return novoArray
     }

// Exercício 8
function checaTriangulo(a, b, c) {
      if(a !== b && b !== c) {
       return'Escaleno'
      } else if(a === b && b === c) {
        return'Equilátero'
       } else {
         return'Isósceles'
       }
     }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   function comparaDoisNumeros(num1, num2) {
      let maiorNumero;
      let menorNumero;
      let maiorDivisivelporMenor;
     
      if(num1 > num2) {
         maiorNumero = num1;
         menorNumero = num2;
      } else {
         maiorNumero = num2;
         menorNumero = num1;
       }
     
       maiorDivisivelporMenor = maiorNumero % menorNumero === 0;
     
       const diferenca = maiorNumero - menorNumero;
     
       return {
         maiorNumero: maiorNumero,
         maiorDivisivelporMenor: maiorDivisivelporMenor,
         diferenca: diferenca
       }
     }
}

// Exercício 10

function segundoMaiorEMenor(array) {
   let menor = Infinity
   let maior = 0
   let segundoMenor = Infinity
   let segundoMaior = 0
   let indiceMenor = 0
   let indiceMaior = 0
   let novoArray = []
  
   for(let i of array) {
    if(i < menor) {
       menor = i
       indiceMenor = array.indexOf(menor)
    } 
    if(i > maior) {
       maior = i
       indiceMaior = array.indexOf(maior)
       }
    }
     array.splice(indiceMaior, 1)
     array.splice(indiceMenor, 1)
  
    for(let i of array) {
     if(i < segundoMenor) {
       segundoMenor = i
    }
    if(i > segundoMaior) {
       segundoMaior = i
    }
   }
    novoArray.push(segundoMaior)
    novoArray.push(segundoMenor)
  
    return novoArray
  }

//Exercício 11

function ordenaArray(array) {
 const len = array.length;
   for(leti = 0; i < len; i++) {
    for(letj = 0; j < len; j++) {
     if(array[j] > array[j + 1]) {
      let tmp = array[j];
       array[j] = array[j + 1];
       array[j + 1] = tmp;
      }
     }
    }
  return array
  }
  
// Exercício 12

function filmeFavorito() {
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
  
   return filme
  }

// Exercício 13
function imprimeChamada() {
   const filme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
  
   letatoresConcat = ""
   for(leti = 0; i < filme.atores.length; i++) {
    if(i === filme.atores.length - 1) {
      atoresConcat += filme.atores[i]
    } else {
       atoresConcat += filme.atores[i] + ", "
      }
    }
  
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido pOr ${filme.diretor} e estrelado por ${atoresConcat}.`
  }

// Exercício 14

function criaRetangulo(lado1, lado2) {
 const retangulo = {
   largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }

  return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   return {
    ...pessoa, 
    nome: 'ANÔNIMO'
   }
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A
function maioresDe18(arrayDePessoas) {
   const novoArray = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade >= 18
   })
   return novoArray
  }
  
  // Exercício 16, letra B
  function menoresDe18(arrayDePessoas) {
  const novoArray = arrayDePessoas.filter((pessoa) => {
   return pessoa.idade < 18
   })
  return novoArray
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const novoArray = array.map((num) => {
    return num * 2
    })
   return novoArray
  }
  
  // Exercício 17, letra B
  
  function multiplicaArrayPor2S(array) {
   const novoArray = array.map((num) => {
    return(num * 2).toString()
    })
   return novoArray
  }
  
  // Exercício 17, letra C
  
  function verificaParidade(array) {
    const novoArray = array.map((num) => {
      if (num % 2 === 0) {
        return `${num} é par`
      } else {
        return `${num} é ímpar`
      }
    })
  
    return novoArray
  }

// Exercício 18

function retornaPessoasAutorizadas() {

  let pessoasAutorizadas = [];
  for(const pessoa of pessoas) {
    if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
      pessoasAutorizadas.push(pessoa)
    }
  }
  return pessoasAutorizadas;
}

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
  let pessoasNaoAutorizadas = [];
  for(const pessoa of pessoas) {
    if(pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60) {
      pessoasNaoAutorizadas.push(pessoa)
    }
  }
  return pessoasNaoAutorizadas;
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}