$('.spinner-border').hide();

$('button').click(function(event) {
    let data;

    let numPool = [ 1, 3, 5, 7, 9, 10 ],
        rand = numPool[Math.floor(Math.random() * numPool.length)];
    $('button').hide();
    $('.spinner-border').show();
    $.ajax({
        method: 'GET',
        url: 'https://swapi.co/api/films/'+rand,
        dataType: 'json',
    }).done((response) => {
        console.log(response);
        $('button').show();
        $('.spinner-border').hide();
        $('#inputTitle').attr("placeholder", response.title);
        $('#inputDirector').attr("placeholder", response.director);
        $('#inputProducer').attr("placeholder", response.producer);
        $('#inputReleaseDate').attr("placeholder", response.release_date);
    })
        .fail((status) => {
            console.log(status)
        });

});
