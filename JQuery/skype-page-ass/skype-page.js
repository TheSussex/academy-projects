$(document).ready(function(){

    $(".cancel").click(function(){
        $(".chat-div").hide()
    })

    $("#user-input").keydown(function(){
        $(this).addClass("color-text-change")
    })

    $(".chat").click(function(){
        $(".chat-div").toggle()
    })



})