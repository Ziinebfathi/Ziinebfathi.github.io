
var win=true;
$(function(){
    $('#maze .boundary').off();
    $('#end').off();
    $('#start').click(reset);
});

function red(){
    win=false;
    $('#status').text('You lose!').css('color','red');
    $('.boundary').each(function(){
        $(this).addClass('youlose')
    });
}

function reset(){
    win=true;
    $('#status').text('Game Started!').css('color','green');
    $('.boundary').each(function(){
        $(this).removeClass('youlose');
    });

    $('#maze .boundary').on('mouseover',red);
    $('#end').on('mouseover',end);
}

function end(){
    let sts= win==true?'Yaaaay!!  You win! :)':'Sorry, you lost! :('
    $('#status').text(sts);
    $('#maze .boundary').off();
}