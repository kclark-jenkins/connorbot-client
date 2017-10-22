$(document).ready(function() {
    $('#ex1').slider({
        reversed : true,
        formatter: function(value) {
            if(value > 0) {
                console.log(value);

                $('#lblMusicVolume').html(value);
            }
        }
    });

    $('body').find('button').on('click', function() {
       var id = $(this).attr('id');

       switch(id) {
           case 'btnJoke':
               $.ajax({
                   url: 'http://' + window.location.hostname + ':3000/joke'
               }).then(function(data) {
               });

               break;
           case 'btnSayIt':
               var text = encodeURI($('#textToSpeak').val());

               $.ajax({
                   url: 'http://' + window.location.hostname + ':3000/talk?text=' + text
               }).then(function(data) {
               });

               break;
           case 'btnSecret':
               var text = encodeURI('Poop!  Ha ha ha');

               $.ajax({
                   url: 'http://' + window.location.hostname + ':3000/talk?text=' + text
               }).then(function(data) {
               });

           default:
               break;
       }
    });

    $('body').find('a').on('click', function() {
        var id = $(this).attr('id');

        switch(id) {
            case 'btnMoveForward':
                alert(id);
                break;
            case 'btnMoveBackward':
                alert(id);
                break;
            case 'btnMoveLeft':
                alert(id);
                break;
            case 'btnMoveRight':
                alert(id);
                break;
            case 'btnMusic':
                $('#myInput').focus();
                alert(id);
                break;
            case 'btnTalk':
                alert(id);
                break;
            case 'btnJoke':
                alert(id);
                break;
            case 'btnSecret':
                alert(id);
                break;
            default:
                break;
        }
    });

    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
                alert('Left keypress');
                break;

            case 38: // up
                alert('Up keypress');
                break;

            case 39: // right
                alert('Right keypress');
                break;

            case 40: // down
                alert('Down keypress');
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
});