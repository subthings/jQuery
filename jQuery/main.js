$('button').click(function(event) {
    let data;

    $.ajax({
        method: 'GET',
        url: 'https://swapi.co/api/films/1/',
        dataType: 'json',
    }).done((response) => {
        console.log(response);
        $.map(response => {
            $('result').append('<h3>+result.director+</h3>')
            }
        )
    })
        .fail((status) => {
            console.log(status)
        });

});
