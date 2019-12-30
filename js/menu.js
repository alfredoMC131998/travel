$(document).ready(function(){
    var btn=0;
    $('.menu-button').click(function(){
    $('.menu').toggleClass('menu-responsive');
    $('.nav-bar').toggleClass('nav-responsive');
    $('.nav-item').toggleClass('item-responsive');
    $('.social-media').toggleClass('social-reponsive');    
     if( btn==1 ){
         $('.nav-item').hide();
         btn=0;
     }else{
         btn=1;
         $('.nav-item').show();
     }
        
    });
    
    
    $('.slider li').hide();
    $('.slider li:first').show();
    
});