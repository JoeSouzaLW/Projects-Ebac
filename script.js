$(document).ready(function() {
    $('#formTarefa').on('submit', function(event) {
        event.preventDefault(); 

        var tarefa = $('#nomeTarefa').val();


        if (tarefa.trim() !== "") {

            $('#listaTarefas').append('<li>' + tarefa + '</li>');

            $('#nomeTarefa').val('');
        }
    });


    $('#listaTarefas').on('click', 'li', function() {
        console.log('Item clicado:', $(this).text());
        $(this).toggleClass('completed');
    });
});