$(function() {
    var container = $('.flex-container div');
    container.animate({
        opacity : 1
    }, 1000, 'easeInQuad');

    setTimeout(function() {
        var button = $('.button span');
        button.animate({
            top: '2px',
            opacity : 1
        }, 500, 'easeInQuad');

        $('.audio').animate({
            opacity : 1,
            right : '2.5%'
        }, 800, 'easeInQuad');
    }, 800);

});

function audioOff(event) {
    var volume = $(event.target);
    $('audio').prop('muted', true);
    $('.audio').html('<i class="fa fa-volume-off" aria-hidden="true" onclick="audioOn(this)"></i>');
}

function audioOn(event) {
    var volume = $(event.target);
    $('audio').prop('muted', false);
    $('.audio').html('<i class="fa fa-volume-up" aria-hidden="true" onclick="audioOff(this)"></i>');
}
