'use strict';

$(document).ready(function() {
    
    
    $('#toggle').click(function(e) {
        e.stopPropagation();
        $('#main-nav').animate({
            'left' : '0px'
        }, 1000);
          
    });
    
    $('body').click(function(){
        $('#main-nav').animate({
            'left' : '-300px'   
        }, 1000);
    });
    
    $('#main-nav').click(function(e){
        e.stopPropagation();
    })
    
    
    
});

