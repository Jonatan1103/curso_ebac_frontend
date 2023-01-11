$(document).ready(function () {
  $('form').validate({
    rules: {
      nomeCompleto: {
        required: true
      },
      email: {
        required: true
      },
      telefone: {
        required: true
      },
      cpf: {
        required: true
      },
      endereco: {
        required: true
      },
      cep: {
        required: true
      },
    }, 
    messages: {
      nomeCompleto:'Por favor, informe seu nome completo',
      email: 'Por favor, informe um email válido',
      telefone: 'Por favor, numero de telefone obrigatório',
      cpf: 'Por favor, CPF obrigatório',
      endereco: 'Por favor, endereço é obrigatório',
      cep: 'Por favor, CEP é obrigatório',
    },
  })

  $('#telefone').mask('(00) 00000-0000', {
    placeholder: '(00)00000-0000'
  })

  $('#cpf').mask('000.000.000-00', {
    placeholder: '000.000.000-00',
  })

  $('#cep').mask('00000-000', {
    placeholder: '00000-000'
  })
})