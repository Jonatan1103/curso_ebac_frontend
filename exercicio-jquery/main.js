$(document).ready(function() {
  const tarefas = []

  $('#lista-tarefa').on('submit', function(event) {
    event.preventDefault()

    const nomeTarefa = $('#nome-tarefa').val()
    const novaTarefa = $('<li style="display: none"></li>')

    if(tarefas.includes(nomeTarefa)) {
      alert('Tarefa já cadastrada')
      $(nomeTarefa).val('')

    } else {
      $(`<p>${nomeTarefa}</p>`).appendTo(novaTarefa)
      $(novaTarefa).appendTo('ul')
      $(novaTarefa).fadeIn(150)
      $(nomeTarefa).val('')

      tarefas.push(nomeTarefa)
    }
  })
})