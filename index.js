// Definindo objetos que representam processos com labels, custos e prioridades
let a = { label: "A", custo: 4, prioridade: 3 };
let b = { label: "B", custo: 1, prioridade: 2 };
let c = { label: "C", custo: 3, prioridade: 4 };
let d = { label: "D", custo: 2, prioridade: 5 };
let e = { label: "E", custo: 1, prioridade: 1 };
let f = { label: "F", custo: 5, prioridade: 1 };
let g = { label: "G", custo: 1, prioridade: 2 };
let h = { label: "H", custo: 3, prioridade: 4 };
let i = { label: "I", custo: 6, prioridade: 1 };
let j = { label: "J", custo: 1, prioridade: 2 };
let k = { label: "K", custo: 4, prioridade: 3 };

// Simula a entrada de processos em uma linha temporal
const tempo = [0, a, 0, c, 0, b, e, f, g, h, i, j, k];
// Calcula o tempo total que vai ser gasto para consumir todos os processos
const tempoComputacionalTotal = tempo.reduce(
  (a, b) => (b === 0 ? a + 1 : b.custo + a),
  0
);

// Inicialização da fila de processos vazia
let fila = [];
// Loop para iterar sobre o tempo total de computação
for (let i = 0; i < tempoComputacionalTotal; i++) {
  // Verifica se a iteração atual está dentro dos limites da linha do tempo
  if (i < tempo.length) {
    // Atribui o objeto na posição da linha do tempo à variável "processo"
    let processo = tempo[i];
    // Verifica se o objeto não é um número (ou seja, é um processo)
    if (typeof processo !== "number") {
      // Adiciona o processo à fila
      fila.push(processo);
    }
  }

  // Verifica se há um processo na primeira posição da fila
  if (fila[0]) {
    // Verifica se o primeiro processo foi completamente processado e o remove da fila
    if (fila[0].custo === 0) {
      fila.shift();

      // Se a fila estiver vazia, passa para a próxima iteração
      if (fila.length === 0) {
        continue;
      }
    }
    // Organiza a fila de acordo com a ordem de prioridade
    fila = fila.sort((a, b) => a.prioridade - b.prioridade);
    // Reduz o custo do primeiro processo na fila e simula processamento
    fila[0] = { ...fila[0], custo: --fila[0].custo };
  }

  // Imprime o estado atual da fila (processos em execução e em espera)
  console.log(fila);
}