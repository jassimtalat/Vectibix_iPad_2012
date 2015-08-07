var rej2start21 = function(){
	jQuery("#rej2start21_anim #anim11").animate({height:'20px'},function(){
		jQuery("#rej2start21_anim #anim12").animate({height:'38px'},function(){
			jQuery("#rej2start21_anim #anim13").animate({height:'18px'},function(){
				jQuery("#rej2start21_anim #anim14").animate({height:'146px'},function(){
					jQuery("#rej2start21_anim #anim15").animate({height:'38px'},function(){
						jQuery("#rej2start21_anim #anim16").animate({height:'18px'},function(){
							jQuery("#rej2start21_anim #anim17").animate({height:'73px'});
						});
					});
				});						
			});
		});
	});	
}
var immediately_rej2start21 = function(state){
    jQuery("#rej2start21_anim #anim11").css('height',(state)?'20px':'');
    jQuery("#rej2start21_anim #anim12").css('height',(state)?'38px':'');
    jQuery("#rej2start21_anim #anim13").css('height',(state)?'18px':'');
    jQuery("#rej2start21_anim #anim14").css('height',(state)?'146px':'');
    jQuery("#rej2start21_anim #anim15").css('height',(state)?'38px':'');
    jQuery("#rej2start21_anim #anim16").css('height',(state)?'18px':'');
    jQuery("#rej2start21_anim #anim16").css('height',(state)?'73px':'');
}


var rej2start22 = function(){
	jQuery("#rej2start22_anim #anim21").animate({height:'70px'},function(){
		jQuery("#rej2start22_anim #anim22").animate({width:'163px'},function(){
			jQuery("#rej2start22_anim #anim23").animate({width:'213px'});
		});
	});
}
var immediately_rej2start22 = function(state){
    jQuery("#rej2start22_anim #anim21").css('height',(state)?'70px':'');
    jQuery("#rej2start22_anim #anim22").css('width',(state)?'163px':'');
    jQuery("#rej2start22_anim #anim23").css('width',(state)?'213px':'');
}

var etki_state = 0;
var etki_anim = function(e){
	if((etki_state==0) && (e.touches.length==1)){
		etki_anim_1();
		etki_state = 1;
		return;
	}
	
	if((etki_state==1) && (e.touches.length==2)){
		etki_anim_2();
		etki_state = 2;
		return;
	}
	
	if((etki_state==2) && (e.touches.length==3)){
		etki_anim_3();
		etki_state = 3;
		return;
	}
		
}

var etki_anim_1 = function(){
	jQuery("#etki_anim #first1").animate({opacity:"1"},function(){
		jQuery("#etki_anim #first2").animate({height:"72px"});
	});	
}

var etki_anim_2 = function(){
	jQuery("#etki_anim #second1").animate({width:"50px"},function(){
		jQuery("#etki_anim #second2").animate({opacity:"1"},function(){
			jQuery("#etki_anim #second3").animate({opacity:"1"},function(){
				jQuery("#etki_anim #second4").animate({height:"31px"});
			});			
		});		
	});	
}

var etki_anim_3 = function(){
	jQuery("#etki_anim #third1").animate({width:"155px"},function(){
		jQuery("#etki_anim #third2").animate({opacity:"1"},function(){
			jQuery("#etki_anim #third3").animate({height:"30px"},function(){
				jQuery("#etki_anim #third4").animate({opacity:"1"},function(){
					jQuery("#etki_anim #third5").animate({height:"55px"},function(){
						jQuery("#etki_anim #third6").animate({opacity:"1"},function(){
							jQuery("#etki_anim #third7").animate({width:"70px"});
						});
					});
				});
			});
		});		
	});
}	

var immediately_etki = function(state){
    jQuery("#etki_anim #first1").css('opacity',(state>=1)?'1':'');
    jQuery("#etki_anim #first2").css('height',(state>=1)?'72px':'');
    jQuery("#etki_anim #second1").css('width',(state>=2)?'50px':'');
    jQuery("#etki_anim #second2").css('opacity',(state>=2)?'1':'');
    jQuery("#etki_anim #second3").css('opacity',(state>=2)?'1':'');
    jQuery("#etki_anim #second4").css('height',(state>=2)?'31px':'');
    jQuery("#etki_anim #third1").css('width',(state>=3)?'155px':'');
    jQuery("#etki_anim #third2").css('opacity',(state>=3)?'1':'');
    jQuery("#etki_anim #third3").css('height',(state>=3)?'30px':'');
    jQuery("#etki_anim #third4").css('opacity',(state>=3)?'1':'');
    jQuery("#etki_anim #third5").css('height',(state>=3)?'55px':'');
    jQuery("#etki_anim #third6").css('opacity',(state>=1)?'50px':'');
    jQuery("#etki_anim #third7").css('width',(state>=3)?'70px':'');    
}

/*upper*/
var r4l1 = false;
var r4l1_show = function(){
	if(r4l1)		
		jQuery("#r4l3,#r4l4").animate({opacity:1}),
		jQuery("#r4l2_show").css("z-index", 4000);
	else
		jQuery("#r4l1,#r4l2").animate({opacity:1}),
		jQuery("#r4l2_show").css("z-index", -1000);
	r4l1 = !r4l1;
}
var immediately_r4l1 = function(state){
    jQuery("#r4l1").css('opacity',(state)?'0':'');    
}



/*hide all*/
var r4l1,r4l2,r4l3,r4l4 = false;
var r4l2_show = function(){
	if(r4l1,r4l2,r4l3,r4l4)
		jQuery("#r4l1").animate({opacity:1}),
		jQuery("#r4l2").animate({opacity:1}),
		jQuery("#r4l3").animate({opacity:1}),
		jQuery("#r4l4").animate({opacity:1});
		
	else
		jQuery("#r4l1").animate({opacity:0}),
		jQuery("#r4l2").animate({opacity:0}),	
		jQuery("#r4l3").animate({opacity:0}),
		jQuery("#r4l4").animate({opacity:0}),
		jQuery("#r4l2_show").css("z-index", -1000);
		var r4l1 = false;
	r4l1 = !r4l1,
	r4l2 = !r4l2,
	r4l3 = !r4l3,
	r4l4 = !r4l4;
}


/*red final*/
var r4l2 = false;
var r4l10_show = function(){
	if(r4l2)
		jQuery("#r4l2").animate({opacity:0}),
		jQuery("#r4l4").animate({opacity:0});
	else
		jQuery("#r4l2").animate({opacity:1}),
		jQuery("#r4l4").animate({opacity:1}),
		jQuery("#r4l1").animate({opacity:0}),
		jQuery("#r4l3").animate({opacity:0});
	r4l2 = !r4l2;
}

var immediately_r4l2 = function(state){
    jQuery("#r4l2").css('opacity',(state)?'1':'');    
}


/*green final*/
var r4l3 = false;
var r4l20_show = function(){
	if(r4l3)
		jQuery("#r4l1").animate({opacity:0}),
		jQuery("#r4l3").animate({opacity:0});
	else
		jQuery("#r4l1").animate({opacity:1}),
		jQuery("#r4l3").animate({opacity:1}),
		jQuery("#r4l2").animate({opacity:0}),
		jQuery("#r4l4").animate({opacity:0});
	r4l3 = !r4l3;
}

var immediately_r4l3 = function(state){
    jQuery("#r4l3").css('opacity',(state)?'1':'');    
}


/*


var r4l1 = false;
var r4l1_show = function(){
	if(r4l1)
		jQuery("#r4l1").animate({opacity:0});
	else
		jQuery("#r4l1").animate({opacity:1});	
	r4l1 = !r4l1;
	
}

var immediately_r4l1 = function(state){
    jQuery("#r4l1").css('opacity',(state)?'1':'');    
}





var r4l2 = false;
var r4l2_show = function(){
	if(r4l2)
		jQuery("#r4l2").animate({opacity:0});
	else
		jQuery("#r4l2").animate({opacity:1}),	
		jQuery("#r4l3").animate({opacity:1});
		
	r4l2 = !r4l2;
	
}
var immediately_r4l2 = function(state){
    jQuery("#r4l2").css('opacity',(state)?'1':'');    
}


var r4l1,r4l2,r4l3 = false;
var r4l2_show = function(){
	if(r4l2)
		jQuery("#r4l1").animate({opacity:0}),
		jQuery("#r4l2").animate({opacity:0}),
		jQuery("#r4l3").animate({opacity:0});
	else
		jQuery("#r4l1").animate({opacity:1}),
		jQuery("#r4l2").animate({opacity:1}),	
		jQuery("#r4l3").animate({opacity:1});
		
	r4l2 = !r4l2;
	
}

var immediately_r4l2 = function(state){
    jQuery("#r4l2").css('opacity',(state)?'1':'');    
}




var r4l2 = false;
var r4l10_show = function(){
	if(r4l2)
		jQuery("#r4l2").animate({opacity:0});
	else
		jQuery("#r4l2").animate({opacity:1});	
	r4l2 = !r4l2;
}

var immediately_r4l2 = function(state){
    jQuery("#r4l2").css('opacity',(state)?'1':'');    
}





var r4l3 = false;
var r4l20_show = function(){
	if(r4l3)
		jQuery("#r4l3").animate({opacity:0});
	else
		jQuery("#r4l3").animate({opacity:1});	
	r4l3 = !r4l3;
}

var immediately_r4l3 = function(state){
    jQuery("#r4l3").css('opacity',(state)?'1':'');    
}





var r4l4 = false;
var r4l4_show = function(){
	if(r4l4){
		jQuery("#r4l4").animate({opacity:0});
		jQuery("#r4s4").animate({opacity:0});
	}
	else{
		jQuery("#r4l4").animate({opacity:1},500,
		function(){
			jQuery("#r4s4").animate({opacity:1});

			}
			);	
	}
	r4l4 = !r4l4;		
}

var immediately_r4l4 = function(state){
		jQuery("#r4l4").css('opacity',(state)?'1':'');  
		jQuery("#r4s4").css('opacity',(state)?'1':''); 
}



*/


var r5l1 = false;
var r5l1_show = function(){	
	if(r5l1)
		jQuery("#r5l1").animate({opacity:0});
	else
			jQuery("#r5l1").animate({opacity:1});
	r5l1 = !r5l1;
}

var immediately_r5l1 = function(state){
		jQuery("#r5l1").css('opacity',(state)?'1':'');  
}


var r5l2 = false;
var r5l2_show = function(){
	if(r5l2){
		jQuery("#r5l2").animate({opacity:0});
		jQuery("#r5s2").animate({opacity:0});
	}
	else{
		jQuery("#r5l2").animate({opacity:1},500,
		function(){
			jQuery("#r5s2").animate({opacity:1});

			}
			);	
	}
	r5l2 = !r5l2;		
}

var immediately_r5l2 = function(state){
		jQuery("#r5l2").css('opacity',(state)?'1':'');  
		jQuery("#r5s2").css('opacity',(state)?'1':''); 
}

var r7l1 = false;
var r7l1_show = function(){	
	if(r7l1)
		jQuery("#r7l1").animate({opacity:0});
	else
			jQuery("#r7l1").animate({opacity:1});
	r7l1 = !r7l1;
}

var immediately_r7l1 = function(state){
		jQuery("#r7l1").css('opacity',(state)?'1':'');  
}


var r7l2 = false;
var r7l2_show = function(){	
	if(r7l2)
		jQuery("#r7l2").animate({opacity:0});
	else
			jQuery("#r7l2").animate({opacity:1});
	r7l2 = !r7l2;
}

var immediately_r7l2 = function(state){
		jQuery("#r7l2").css('opacity',(state)?'1':'');  
}


var r7l3 = false;
var r7l3_show = function(){	
	if(r7l3)
		jQuery("#r7l3").animate({opacity:0});
	else
			jQuery("#r7l3").animate({opacity:1});
	r7l3 = !r7l3;
}

var immediately_r7l3 = function(state){
		jQuery("#r7l3").css('opacity',(state)?'1':'');  
}




var r7l4 = false;
var r7l4_show = function(){
	if(r7l4){
		jQuery("#r7l4").animate({opacity:0});
		jQuery("#r7s1").animate({opacity:0});
	}
	else{
		jQuery("#r7l4").animate({opacity:1},500,
		function(){
			jQuery("#r7s1").animate({opacity:1});

			}
			);	
	}
	r7l4 = !r7l4;		
}

var immediately_r7l4 = function(state){
		jQuery("#r7l4").css('opacity',(state)?'1':'');  
		jQuery("#r7s1").css('opacity',(state)?'1':''); 
}



/*
var r7l4 = false;
var r7l4_show = function(){	
	if(r7l4){
		jQuery("#r7l4").animate({'height':"0px"},0);
		jQuery("#r7s4").animate({'height':"0px"},0);
	}
	else{
		jQuery("#r7l4").animate({'height':"270px"},500,function(){
			jQuery("#r7s4").animate({'height':"270px"},500);
		});	
	}
	r7l4 = !r7l4;	
}

var immediately_r7l4 = function(state){
		jQuery("#r7l4").css('height',(state)?'270px':'');
}
*/
var r8l1 = false;
var r8l1_show = function(){
	if(r8l1)
		jQuery("#r8l1").animate({'height':"0px"},1);
	else
		jQuery("#r8l1").animate({'height':"246px"},500);
	r8l1 = !r8l1;
}

var immediately_r8l1 = function(state){
		jQuery("#r8l1").css('height',(state)?'246px':'');  
}


var r8l2 = false;
var r8l2_show = function(){
	if(r8l2){
		jQuery("#r8l2").animate({'height':"0px"},0);
		jQuery("#r8s2").animate({'height':"0px"},0);
	}
	else{
		jQuery("#r8l2").animate({'height':"157px"},500,function(){
			jQuery("#r8s2").animate({'height':"10px"},500);
		});	
	}
	r8l2 = !r8l2;		
}

var immediately_r8l2 = function(state){
		jQuery("#r8l2").css('height',(state)?'157px':'');  
		jQuery("#r8s2").css('height',(state)?'10px':'');  
}

var r8l3 = false;
var r8l3_show = function(){
	if(r8l3){
		jQuery("#r8l3").animate({'height':"0px"},1);
		jQuery("#r8s3").animate({'height':"0px"},1);
	}
	else{
		jQuery("#r8l3").animate({'height':"127px"},500,function(){
			jQuery("#r8s3").animate({'height':"120px"},500);
		});	
	}
	r8l3 = !r8l3;			
}

var immediately_r8l3 = function(state){
		jQuery("#r8l3").css('height',(state)?'127px':'');  
		jQuery("#r8s3").css('height',(state)?'120px':'');  
}

var r8l4 = false;
var r8l4_show = function(){
	if(r8l4){
		jQuery("#r8l4").animate({'height':"0px"},1);
		jQuery("#r8s4").animate({'height':"0px"},1);
	}
	else{
		jQuery("#r8l4").animate({'height':"84px"},500,function(){
			jQuery("#r8s4").animate({'height':"179px"},500);
		});
	}
	r8l4 = !r8l4;			
}

var immediately_r8l4 = function(state){
		jQuery("#r8l4").css('height',(state)?'84px':'');  
		jQuery("#r8s4").css('height',(state)?'179px':'');  
}

var r8l5 = false;
var r8l5_show = function(){
	if(r8l5){
		jQuery("#r8l5").animate({'height':"0px"},1);
		jQuery("#r8s5").animate({'height':"0px"},1);
	}
	else{
		jQuery("#r8l5").animate({'height':"172px"},500,function(){
			jQuery("#r8s5").animate({'height':"83px"},500);
		});		
	}
	r8l5 = !r8l5;
}

var immediately_r8l5 = function(state){
		jQuery("#r8l5").css('height',(state)?'172px':'');  
		jQuery("#r8s5").css('height',(state)?'83px':'');  
}

var r9l1 = false;
var r9l1_show = function(){
	if(r9l1)
		jQuery("#r9l1").animate({'height':"0px"},1);
	else
		jQuery("#r9l1").animate({'height':"292px"},500);
	r9l1 = !r9l1;
}

var immediately_r9l1 = function(state){
		jQuery("#r9l1").css('height',(state)?'292px':'');  
}

var r9l2 = false;
var r9l2_show = function(){	
	if(r9l2)
		jQuery("#r9l2").animate({'height':"0px"},1);
	else
		jQuery("#r9l2").animate({'height':"108px"},500);
	r9l2 = !r9l2;
}

var immediately_r9l2 = function(state){
		jQuery("#r9l2").css('height',(state)?'108px':'');  
}

var p1l1 = false;
var p1l1_show = function(){
	if(p1l1)
		jQuery("#p1l1").animate({'height':"0"},1);
	else
		jQuery("#p1l1").animate({'height':"305px"},500);
	p1l1 = !p1l1;
}

var immediately_p1l1 = function(state){
		jQuery("#p1l1").css('height',(state)?'305px':'');  
}


var p2l1 = false;
var p2l1_show = function(){
	if(p2l1)
		jQuery("#p2l1").animate({opacity:0});
	else
		jQuery("#p2l1").animate({opacity:1});		
	p2l1 = !p2l1;
}

var immediately_p2l1 = function(state){
		jQuery("#p2l1").css('opacity',(state)?'1':'');  
}

var p2l2 = false;
var p2l2_show = function(){
	if(p2l2)
		jQuery("#p2l2").animate({opacity:0});
	else
		jQuery("#p2l2").animate({opacity:1});		
	p2l2 = !p2l2;
}

var immediately_p2l2 = function(state){
		jQuery("#p2l2").css('opacity',(state)?'1':'');  
}


var select_hltable = function (){
		jQuery('#hltable tr td').removeClass('active');
		jQuery('td',this).addClass('active');
}

var immediately_hltable = function(){
		jQuery('#hltable tr td').removeClass('active');
}


jQuery(document).ready(function() {
	jQuery('.rcorner').bind('click',function(e){
		jQuery('.rcorner').css('visibility','hidden');
		jQuery(document.elementFromPoint(e.clientX,e.clientY)).trigger('click');
		jQuery('.rcorner').css('visibility','visible');
	});
	jQuery('.rcorner').bind('touchstart',function(e){
		jQuery('.rcorner').css('visibility','hidden');
		jQuery(document.elementFromPoint(e.clientX,e.clientY)).trigger('touchstart');
		jQuery('.rcorner').css('visibility','visible');
	});

	/*jQuery('.rcorner').bind('touchmove',function(e){
		jQuery('.rcorner').css('display','none');
		jQuery(document.elementFromPoint(e.clientX,e.clientY)).trigger('touchmove');
		jQuery('.rcorner').css('display','block');
	});*/
	jQuery('.references').bind('click',function(){		
		selectSection('references');
	});
    jQuery("#animationChangeOffOn").live("click",ChangeFixAnimation);

    SetAnimation();

});

var endika_graph1 = function(){
	jQuery('#endika_1_toshow').fadeIn('slow',function(){				
		jQuery('#endika_90').animate({ height: '66px'});
	});	
}	

var immediately_endika_graph1 = function(state){
		jQuery("#endika_1_toshow").css('display',(state)?'block':'');  
		jQuery('#endika_90').css('height',(state)?'66px':'');
}

/** added **/

var IsFixAnimation=false;
function ChangeFixAnimation(){
    IsFixAnimation=!IsFixAnimation;
    SetAnimation();
    return false;
}   

function SetAnimation(){
   if(!IsFixAnimation){
       AddSlideAnimation();
       jQuery('#animationChangeOffOn').removeClass('off');
       jQuery('#animationChangeOffOn').addClass('on');
    }
    else{
       RemoveSlideAnimation();
       jQuery('#animationChangeOffOn').removeClass('on');
       jQuery('#animationChangeOffOn').addClass('off');        
    }
}

function RemoveSlideAnimation(){
    jQuery(".stepAnimation").removeClass('stepAnimation').addClass('stepAnimation_was_here');
    jQuery(".fadeIn").removeClass('fadeIn').addClass('fadeIn_was_here');
    
    immediately_rej2start21(true);
   	jQuery('#rej2start21').die('click',rej2start21);
    immediately_rej2start22(true);
	jQuery('#rej2start22').die('click',rej2start22);
    immediately_r4l1(true);
	jQuery('#r4l1_show').die('click',r4l1_show);
    immediately_r4l2(true);
	jQuery('#r4l2_show').die('click',r4l2_show);
	
	immediately_r4l1(true);
	jQuery('#r4l10_show').die('click',r4l10_show);
    immediately_r4l2(true);
	jQuery('#r4l20_show').die('click',r4l20_show);
	
    immediately_r5l1(true);
	jQuery('#r5l1_show').die('click',r5l1_show);
    immediately_r5l2(true);    
	jQuery('#r5l2_show').die('click',r5l2_show);
    immediately_r7l1(true);    
	jQuery('#r7l1_show').die('click',r7l1_show);
    immediately_r7l2(true);    
	jQuery('#r7l2_show').die('click',r7l2_show);
    immediately_r7l3(true);    
	jQuery('#r7l3_show').die('click',r7l3_show);
    immediately_r7l4(true);    
	jQuery('#r7l4_show').die('click',r7l4_show);
    immediately_r8l1(true);    
	jQuery('#r8l1_show').die('click',r8l1_show);
    immediately_r8l2(true);    
	jQuery('#r8l2_show').die('click',r8l2_show);
    immediately_r8l3(true);    
	jQuery('#r8l3_show').die('click',r8l3_show);
    immediately_r8l4(true);    
	jQuery('#r8l4_show').die('click',r8l4_show);
    immediately_r8l5(true);    
	jQuery('#r8l5_show').die('click',r8l5_show);
    immediately_r9l1(true);    
	jQuery('#r9l1_show').die('click',r9l1_show);
    immediately_r9l2(true);    
	jQuery('#r9l2_show').die('click',r9l2_show);
    immediately_p1l1(true);    
	jQuery('#p1l1_show').die('click',p1l1_show);
    immediately_p2l1(true);    
	jQuery('#p2l1_show').die('click',p2l1_show);
    immediately_p2l2(true);    
	jQuery('#p2l2_show').die('click',p2l2_show);
    immediately_etki(3);
	document.getElementById('etki_anim').removeEventListener('touchstart', etki_anim, false);
	jQuery('#hltable tr').die('click',immediately_hltable);
}

function AddSlideAnimation(){
    jQuery(".stepAnimation_was_here").removeClass('stepAnimation_was_here').addClass('stepAnimation');
    jQuery(".fadeIn_was_here").removeClass('fadeIn_was_here').addClass('fadeIn');
    
    immediately_rej2start21(false);
   	jQuery('#rej2start21').live('click',rej2start21);
    immediately_rej2start22(false);
	jQuery('#rej2start22').live('click',rej2start22);
    immediately_r4l1(r4l1);
	jQuery('#r4l1_show').live('click',r4l1_show);
    immediately_r4l2(r4l2);
	jQuery('#r4l2_show').live('click',r4l2_show);
	
    immediately_r4l1(r4l1);
	jQuery('#r4l10_show').live('click',r4l10_show);
    immediately_r4l2(r4l2);
	jQuery('#r4l20_show').live('click',r4l20_show);
		
    immediately_r5l1(r5l1);
	jQuery('#r5l1_show').live('click',r5l1_show);
    immediately_r5l2(r5l2);    
	jQuery('#r5l2_show').live('click',r5l2_show);
    immediately_r7l1(r7l1);    
	jQuery('#r7l1_show').live('click',r7l1_show);
    immediately_r7l2(r7l2);    
	jQuery('#r7l2_show').live('click',r7l2_show);
    immediately_r7l3(r7l3);    
	jQuery('#r7l3_show').live('click',r7l3_show);
    immediately_r7l4(r7l4);    
	jQuery('#r7l4_show').live('click',r7l4_show);
    immediately_r8l1(r8l1);    
	jQuery('#r8l1_show').live('click',r8l1_show);
    immediately_r8l2(r8l2);    
	jQuery('#r8l2_show').live('click',r8l2_show);
    immediately_r8l3(r8l3);    
	jQuery('#r8l3_show').live('click',r8l3_show);
    immediately_r8l4(r8l4);    
	jQuery('#r8l4_show').live('click',r8l4_show);
    immediately_r8l5(r8l5);    
	jQuery('#r8l5_show').live('click',r8l5_show);
    immediately_r9l1(r9l1);    
	jQuery('#r9l1_show').live('click',r9l1_show);
    immediately_r9l2(r9l2);    
	jQuery('#r9l2_show').live('click',r9l2_show);
    immediately_p1l1(p1l1);    
	jQuery('#p1l1_show').live('click',p1l1_show);
    immediately_p2l1(p2l1);    
	jQuery('#p2l1_show').live('click',p2l1_show);
    immediately_p2l2(p2l2);    
	jQuery('#p2l2_show').live('click',p2l2_show);
    immediately_etki(etki_state);
	document.getElementById('etki_anim').addEventListener('touchstart', etki_anim, false);
	jQuery('#hltable tr').live('click',immediately_hltable);
}
