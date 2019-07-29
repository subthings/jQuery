/*
$.ajax({
    type: 'GET',
    url: 'http https://swapi.co/api/films/1/',
    data: {name: 'Ivan', age: 15},
    dataType: 'json'
}).done ((response) => {
    console.log(response)
}).fail((jqXHR, textStatus) => {
    console.log(status)
});
*/

$(document).ready(function () {
    $('body div').css('border', 'solid 3px blue');
});