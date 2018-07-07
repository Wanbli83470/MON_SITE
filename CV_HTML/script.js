$(function(){

    $("#header").mouseover(function(){
            $(".page_blanche").animate({
        opacity: '0.5',

    });
    });

    $(".page_blanche").mouseover(function(){
            $(".page_blanche").animate({
        opacity: '1',

    });
    });

});
