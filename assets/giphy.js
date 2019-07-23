$('#add-player').on('click', function(event){
    event.preventDefault();

    let newPlayer = $('#search-player').val().trim();
    console.log(newPlayer);

    let newPlayerButton = $('<button>');
    newPlayerButton.text(newPlayer);
    $('#player-buttons').append(newPlayerButton);
})