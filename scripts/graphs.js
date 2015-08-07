	// choose your transition type, ex: fade, scrollUp /Down /Left /Right, shuffle, zoom, fadeZoom, slideX /slideY, turnUp /Down /Left /Right, blindX /Y /Z, growX /Y , curtainX / Y, cover, , uncover, toss, wipe, etc...
	
    $(document).ready(function() {
		$('.whiteareapage3-1').cycle({ 
			fx:     'blindX', 
			speed:  200, 
			next:   '.whiteareapage3-1 ', 
			timeout: 0  
		});
    });
	    $(document).ready(function() {
		$('.whiteareapage3-2').cycle({ 
			fx:     'blindX', 
			speed:  200, 
			next:   '.whiteareapage3-2 ', 
			timeout: 0 
		});
    });
	    $(document).ready(function() {
		$('.whiteareapage3-3').cycle({ 
			fx:     'blindX', 
			speed:  200, 
			next:   '.whiteareapage3-3 ', 
			timeout: 0 
		});
    });
	    $(document).ready(function() {
		$('.whiteareapage3-4').cycle({ 
			fx:     'blindX', 
			speed:  200, 
			next:   '.whiteareapage3-4 ', 
			timeout: 0 
		});
    });
	    $(document).ready(function() {
		$('.whiteareapage4-1').cycle({ 
			fx:     'blindX', 
			speed:  200, 
			next:   '.whiteareapage4-1', 
			timeout: 0 
		});
    });
	    $(document).ready(function() {
		$('.whiteareapage4-2').cycle({ 
			fx:     'blindX', 
			speed:  200, 
			next:   '.whiteareapage4-2', 
			timeout: 0 
		});
    });
	    $(document).ready(function() {
		$('.page6imagearea').cycle({ 
			fx:     'fade', 
			speed:  10000, 
			next:   '.whiteareapage4-1', 
			timeout: 0, speedIn: 1000, sync: 0
			});
    });
	    $(document).ready(function() {
		$('.page6imagearea2').cycle({ 
			fx:     'fade', 
			speed:  12000, 
			next:   '.whiteareapage4-1', 
			timeout: 0, speedIn: 1000 , sync: 0
		});
    });	$(document).ready(function() {
		$('.page7imagearea').cycle({ 
			fx:     'fade', 
			speed:  1500, 
			next:   '.whiteareapage4-2', 
			timeout: 0, sync: 0
		});
    });
	/*graph 3 new code*/
	    $(document).ready(function() {
		$('.graph3-100-50').cycle({ 
			fx:     'fade', 
			speed:  0, 
			next:   '.graph3-100-50' 
			});
    });		
	    $(document).ready(function() {
		$('.graph3-50-0').cycle({ 
			fx:     'fade', 
			speed:  0, 
			next:   '.graph3-50-0'
		});
    });	
	    $(document).ready(function() {
		$('.graph3-50-0').cycle({ 
			fx:     'fade', 
			speed:  500, 
			next:   '.graph3-glow'
		});
    });			
		$(document).ready(function() {
		$('.page5graph').cycle({ 
			fx:     'fade', 
			speed:  0, 
			next:   '.page5graph', 
			timeout: 0
		});
    });	
	/*----------------*/
		$(document).ready(function() {
		$('.page5graph-1').cycle({ 
			fx:     'wipe', 
			speed:  500, 
			next:   '.page5graph-1', 
			timeout: 0
		});
    });	
	$(document).ready(function() {
		$('.page5graph-5').cycle({ 
			fx:     'fade', 
			speed:  1000, 
			next:   '.page5graph-5', 
			timeout: 0
		});
    });	