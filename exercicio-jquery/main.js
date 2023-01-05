$(document).ready(function() {
  const tarefas = []

  $('#lista-tarefa').on('submit', function(event) {
    event.preventDefault()

    const nomeTarefa = $('#nome-tarefa').val()
    const novaLista = $('<li></li>')
    $(`<li>${nomeTarefa}</li>`)

    if(tarefas.includes(nomeTarefa)) {
      alert('Tarefa já cadastrada')
      $(nomeTarefa).val('')

    } else {
      $(`<p>${nomeTarefa}</p>`).appendTo(novaLista)
      $(novaLista).appendTo('ul')
      $(novaLista).fadeIn(150)
      $(nomeTarefa).val('')

      tarefas.push(nomeTarefa)
    }

    $('li').on('click', function(event) {
      const element = event.target
      $(element).css("text-decoration","line-through")
    })
  })
})