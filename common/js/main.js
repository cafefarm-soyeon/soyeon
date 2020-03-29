(function(){
   // console.log(window.innerWidth);


    $(window).scroll(function () {
        var height = $(document).scrollTop();
        //console.log(height);

        if(height > 500){
            $('.arrow').fadeOut();
        }else{
            $('.arrow').fadeIn();
        }
        }); 

}());

