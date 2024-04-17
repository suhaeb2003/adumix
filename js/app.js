$(document).ready(function(){
    $(window).scroll(function(){
        $val = $(window).scrollTop();
        if($val > 150){
           $('.main_header').css({
               position : 'fixed',
               top : 0,
               left : 0,
               background: '#00000069',
               borderBottom: '1px solid #ffffff91',
               boxShadow: '0px 2px 8px #ffffffb3',
               zIndex:'11111'
               
           })
        }else{
          $('.main_header').css({
               position : 'relative',
               background: 'none',
               borderBottom: 'none',
               boxShadow: 'none',
          })  
        }
    })
})