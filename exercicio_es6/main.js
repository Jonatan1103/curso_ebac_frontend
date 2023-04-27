const alunos = [
  {nome: 'jonatan', nota: 10},
  {nome: 'andressa', nota: 10},
  {nome: 'gael', nota: 8},
  {nome: 'florinda', nota: 5},
  {nome: 'madruga', nota: 4},
  {nome: 'chaves', nota: 2},
]

const notaMaiorQueSeis = aluno => aluno.nota > 6
const alunosAprovados = alunos.filter(notaMaiorQueSeis)

console.log(alunosAprovados);