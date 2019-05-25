'use strict'
$(document).ready(function () {
    $.getJSON("playlist.json", function (data) {
    
    var items = [];
    $.each(data, function (key, val) {


        items.push( 
        "<ol>" + 
        "<li>" +"<span>"+  "author - " +"</span>"  +val.author + "</li>" +
        "<li>" +"<span>"+ "song - "+"</span>" +val.song+ "</li>" +
        "<li>" +"<span>"+ "duration - "+"</span>" +val.duration+ "</li>" +
        "<button>ShowTextSong</button>" +

        "<li class= 'js-show'>" +"<span>"+ "text - "+"</span>" + val.text + "</li>" + 

        "</ol>");


    });
    items = items.join('');
    var list = document.querySelector(".list");
    list.innerHTML = items;

   $(".js-show").hide()

   $('button').on('click', function(){
    
    $(this).next().toggle()
 })

    })

    

    });




