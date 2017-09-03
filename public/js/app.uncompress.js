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


    // Keydown
    $(document).keydown(function(event) {
        // Disable F12
        if (event.keyCode == 123) {
            return false;
        }
        else if (event.ctrlKey && event.shiftKey && event.keyCode==73) {
            return false;
        }
        // -->
    });
    // -->

    // Disable Click Select
    function disableselect(e){
    return false
    }
    function reEnable(){
    return true
    }
    document.onselectstart=new Function ("return false")
    if (window.sidebar){
    document.onmousedown=disableselect
    document.onclick=reEnable
    }
    // -->


    // Disable Right Click
    function clickIE() {if (document.all) {(message);return false;}}
    function clickNS(e) {if
    (document.layers||(document.getElementById&&!document.all)) {
    if (e.which==2||e.which==3) {(message);return false;}}}
    if (document.layers)
    {document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
    else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
    document.oncontextmenu=new Function("return false")
    // -->
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
