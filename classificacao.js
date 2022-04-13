let listaAlunos = ["Leonardo", "Robson", "Rafael", "Raiane"]

let quantidadeAlunos = 5;

for(let contador = 0; contador < listaAlunos.length; contador++) {
    console.log(contador)

    // contador % 2 == 0 -> PAR
    // contador % 2 == 1 -> ÍMPAR

    if (contador == 0) {
        console.log(`O aluno ${listaAlunos[contador]} é o número ZERO`)
    } else if (contador % 2 == 0) {
        // elif (Python)
        // Concatenação -> Junção de texto -> Operador: +
        console.log("O aluno " + listaAlunos[contador] + " é o número " + contador + ": PAR")
    } else if (contador % 2 == 1) {
        // Interpolação -> Formata um texto inserindo valores dentro do texto
        console.log(`O aluno ${listaAlunos[contador]} é o número ${contador}: ÍMPAR`)  
    }
}