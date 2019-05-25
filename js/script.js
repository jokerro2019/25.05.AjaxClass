'use strict';

$(document).ready(function(){

        $('.js-link').on('click', function(event){
            event.preventDefault();

            $.ajax({
                url: $(this).attr('href'),
                beforeSend: function(){
                    console.log('BeforeSend')
                },
                success: function(data) {
                    setTimeout(function(){
                        $('.js-container').html(data)
                    }, 1000);
                },
                error: function(){
                    alert('Error of page')
                },
                complete: function(){
                    console.log('complete')
                }
            });

        });
        


})