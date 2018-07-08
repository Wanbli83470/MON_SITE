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
    
$("h1").mouseover(function(){
    $("h1").removeClass(".titre_graphisme");
    $("h1").addClass(".titre_graphisme2");
});

});
