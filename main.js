$(document).ready(function () {
    // Adiciona uma nova tarefa
    $('#form-tarefa').submit(function (event) {
        event.preventDefault();
        
        const novaTarefaTexto = $('#nova-tarefa').val();
        const novaTarefa = $('<li></li>').text(novaTarefaTexto);
        
        // Adiciona a nova tarefa à lista
        $('#lista-tarefas').append(novaTarefa);

        // Limpa o campo de texto
        $('#nova-tarefa').val('');
    });

    // Adiciona o efeito de riscar o texto ao clicar na tarefa
    $('#lista-tarefas').on('click', 'li', function () {
        $(this).toggleClass('concluida');
    });
});
