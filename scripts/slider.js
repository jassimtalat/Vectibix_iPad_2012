
    $(document).ready(function (){
        $('#button a').click(function(){
            var integer = $(this).attr('rel');
            $('#myslide .cover').animate({left:-26*(parseInt(integer)-1)})  /*----- Width of div mystuff ------ */
            $('#button a').each(function(){
            $(this).removeClass('active');
                if($(this).hasClass('button'+integer)){
                    $(this).addClass('active')}
            });
        });	
    });

    

    $(document).ready(function (){
        $('#buttonl a').click(function(){
            var integer = $(this).attr('rel');
            $('#myslidel .coverl').animate({left:-26*(parseInt(integer)-1)})  /*----- Width of div mystuff ------ */
            $('#buttonl a').each(function(){
            $(this).removeClass('active');
                if($(this).hasClass('buttonl'+integer)){
                    $(this).addClass('active')}
            });
        });	
    });
