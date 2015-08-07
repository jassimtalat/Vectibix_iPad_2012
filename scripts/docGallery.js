var docGallery = ( function ( window, document, undefined ) {

	var cont,
		wrapper,
		nav,
		path,
		imgnum,
		img,
		cnv,
		ctx,
		current,
		viewed,
		to;			//	timeout
		
		
		var blankSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Njg1MzE2OTNFNzREMTFERkI3NEJBNDRGNDk5NUNCRTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Njg1MzE2OTRFNzREMTFERkI3NEJBNDRGNDk5NUNCRTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2ODUzMTY5MUU3NEQxMURGQjc0QkE0NEY0OTk1Q0JFNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2ODUzMTY5MkU3NEQxMURGQjc0QkE0NEY0OTk1Q0JFNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
		
	
	// major usefulness from iScroll
	var isTouch = ('ontouchstart' in window),
	START_EVENT = isTouch ? 'touchstart' : 'mousedown',
	MOVE_EVENT = isTouch ? 'touchmove' : 'mousemove',
	END_EVENT = isTouch ? 'touchend' : 'mouseup';
	
	
	var open = function ( e ) {
		e.preventDefault();
		
		if ( !this.href ) return;
		
		cont = document.getElementById( 'doc-gallery' );
		if ( !cont ) {
			cont = document.createElement( 'div' );
			cont.id = 'doc-gallery';
		}
		cont.innerHTML = '<header><input type="button" onclick="docGallery.close();" value="Back"/></header>' +
						 '<div class="wrapper"></div>' +
						 '<nav></nav>';
						 
		document.body.appendChild( cont );
		cont.style.display = 'block';
		
		wrapper = cont.querySelector( '.wrapper' );
		nav = cont.querySelector( 'nav' );
		//	read folder name and image count from href
		var config = this.href.match( /docs\/([a-z0-9]+)\/\?imgs=(\d+)/ );
		path = 'docs/' + config[ 1 ];
		imgnum = parseInt( config[ 2 ] );
		current = 0;
		
	
		//	add images
		var thumbs = '';
		for ( var i = 1; i < imgnum + 1; i++ ) {
			thumbs += '<figure><img data-num="' + i + '" src="' + path + '/lowres/' + i + '.jpg"/></figure>';
		}
	
		nav.innerHTML = thumbs;
		nav.figs = nav.querySelectorAll( 'figure' );
		var navW = 0;
		for ( var i = 0, l = nav.figs.length; i < l; i++ ) {
			navW += nav.figs[i].offsetWidth;
		}
		if (navW > nav.offsetWidth ) {
			nav.thumbHeight = Math.floor( 15 * ( nav.offsetWidth / navW ) );
			for ( var i = 0, l = nav.figs.length; i < l; i++ ) {
				nav.figs[i].firstChild.style.height = nav.thumbHeight + 'px';
			}
		}
		
		cnv = document.createElement("canvas");
		ctx = cnv.getContext("2d");
	//	wrapper.img = document.createElement( 'img' );
	//	wrapper.img.src = path + '/highres/1.jpg';
	//	wrapper.img.onload = scaleToFit;
		var fig = document.createElement( 'figure' );
		fig.appendChild( cnv );
		wrapper.appendChild( fig );
		slide( current );
		
		
		//	double tap detection
		cnv.addEventListener( START_EVENT, startHandler, false );
		//	let's slide
		nav.addEventListener( START_EVENT, getSlidePosition, false );
		nav.addEventListener( MOVE_EVENT, getSlidePosition, false );
		
		enableDrag();
		//	
		window.addEventListener( 'onorientationchange' in window ? 'orientationchange' : 'resize', scaleToFit, false );
		
		
		//wrapper.addEventListener( 'gesturestart', onGestureStart, false );
		
		//	prevent default browser behaviour for static page elements
		//window.addEventListener( 'touchmove', function ( e ) { e.preventDefault();}, false );
	}
	
	var loadImg = function ( src ) {
		img = new Image();
		img.src = src;
		img.onload = function () {
			cnv.width = img.width;
			cnv.height = img.height;
			
			ctx.drawImage( img, 0, 0 );
			scaleToFit();
			img.onload = function () {};
			img.src = blankSrc;
		}
	}
		
	//	fit img in wrapper proportionally
	var scaleToFit = function () {
		
		if ( wrapper.offsetWidth / wrapper.offsetHeight > cnv.width / cnv.height ) {
			cnv.fitScale = wrapper.offsetHeight / cnv.height;
		}
		else {
			cnv.fitScale = wrapper.offsetWidth / cnv.width;
		}
		cnv.style.height = ( cnv.height * cnv.fitScale ) + 'px';
		cnv.style.width = ( cnv.width * cnv.fitScale ) + 'px';
	}
	
	var startHandler = function ( e ) {
		if ( e.touches && e.touches.length > 1 ) return;
		
		//	check double tap
		var ts = e.timeStamp;
		this.startX = this.endX = isTouch ? e.touches[ 0 ].clientX + e.layerX : e.clientX;
		if ( this.ts && this.ts + 350 > ts ) {
			e.preventDefault();
			toggleZoom({
				x: this.startX,
				y: isTouch ? e.touches[ 0 ].clientY + e.layerY : e.clientY
			});
		}
		this.ts = ts;
		
		//	swipe?
		//this.addEventListener( 'touchmove', moveHandler, false );
		//this.addEventListener( 'touchend', endHandler, false );
	}
	
	var moveHandler = function ( e ) {
		this.endX = isTouch ? e.touches[ 0 ].clientX + e.layerX : e.clientX;
	}
	var endHandler = function ( e ) {
		if ( Math.abs( this.startX - this.endX ) > 30 && !cnv.zoomed ) {
			if ( this.startX > this.endX ) slide( current + 2 > imgnum ? imgnum - 1 : current + 1 );
			else slide( current - 1 < 0 ? 0 : current - 1 );
		}
		this.removeEventListener( 'touchmove', moveHandler, false );
		this.removeEventListener( 'touchend', endHandler, false );
	} 
	
	var onGestureStart = function( e )
	{
		// Prevent the browser from doing its default thing (scroll, zoom)
		e.preventDefault();
	 	
		wrapper.startHeight = parseInt(cnv.style.height);
		wrapper.addEventListener('gesturechange', onGestureChange, true);
		wrapper.addEventListener('gestureend', onGestureEnd, true);
	 
		return false;
	}
	
	var onGestureChange = function(e)
	{
		// Prevent the browser from doing its default thing (scroll, zoom)
		e.preventDefault();
	 	
		var h = wrapper.startHeight * e.scale;
		if ( h < cnv.scaledHeight ||  h > cnv.naturalHeight ) return;
		cnv.zoomed = ( h != cnv.scaledHeight );
		cnv.style.height =  h + 'px';
	 	//wrapper.iscroll.refresh();
		return false;
	}
	
	var onGestureEnd = function(e)
	{
		// Prevent the browser from doing its default thing (scroll, zoom)
		e.preventDefault();
	 	wrapper.iscroll.refresh();
		wrapper.removeEventListener('gesturechange', onGestureChange, true);
		wrapper.removeEventListener('gestureend', onGestureEnd, true);
	 
		return false;
	}
	
	var close = function () {
		cnv.removeEventListener( START_EVENT, startHandler, false );
		nav.removeEventListener( START_EVENT, getSlidePosition, false );
		nav.removeEventListener( MOVE_EVENT, getSlidePosition, false );
		window.removeEventListener( 'onorientationchange' in window ? 'orientationchange' : 'resize', scaleToFit, false );
		
		// replace all images with blank gif to free memo
		var imgs = cont.querySelectorAll( 'img' );
		for ( var i = 0, l = imgs.length; i < l; i++ ) imgs[i].src = blankSrc;
		
		//	clear canvas
		loadImg( blankSrc );
		
		if ( wrapper.iscroll ) wrapper.iscroll.destroy( true );
		
		cont.parentNode.removeChild( cont );
		 
		current = viewed = undefined;
	}	
	
	var toggleZoom = function ( coord ) {
		//	zoom out
		if ( cnv.zoomed ) {
			cnv.style.height = ( cnv.height * cnv.fitScale ) + 'px';
			cnv.style.width = ( cnv.width * cnv.fitScale ) + 'px';
			cnv.zoomed = false;
		}
		else {
		// zoom in
			cnv.style.height = cnv.height + 'px';
			cnv.style.width = cnv.width + 'px';
			setTimeout( function () { 
				var x = ( wrapper.offsetWidth - cnv.width ) * coord.x / ( cnv.fitScale * cnv.width );
				var y = ( wrapper.offsetHeight - cnv.height ) * coord.y / ( cnv.fitScale * cnv.height );
				wrapper.iscroll.scrollTo( x, y );
			},100);
			cnv.zoomed = true;
		}
		wrapper.iscroll.refresh();
	}
	
	var enableDrag = function () {
		
		wrapper.iscroll = new iScroll( cnv, { 
			hScrollbar: true,
			vScrollbar: true,
			checkDOMChanges: false,
			desktopCompatibility: true,
			directionLock: false
		});
	}
	var resetDrag = function () {
		scaleToFit();
		if ( wrapper.iscroll ) wrapper.iscroll.destroy();
	}
	
	var enableSwipe = function () {
		
	}
	
	var view = function () {
		if ( viewed == current ) return;
		loadImg( path + '/highres/' + ( current + 1 ) + '.jpg' );
		
		cnv.style.WebkitTransform = 'translate3d(0px, 0px, 0px)';
		wrapper.iscroll.refresh();
		viewed = current;
	}
	
	var getSlidePosition = function ( e ) {
		e.preventDefault();
		
		for ( var i = 0, l = nav.figs.length, x = isTouch ? e.touches[ 0 ].clientX : e.clientX; i < l; i++ ) {
			if (
				nav.figs[ i ].offsetLeft < x 
				&& 	nav.figs[ i ].offsetLeft + nav.figs[ i ].offsetWidth > x
			) {
				slide( i );
				return false;
			}
		}
	}
	
	var slide = function ( i ) {
		//cnv.style.WebkitTransform = 'scale(1) translate3d(0,0,0)';
		//disableDrag( current );
		nav.figs[ current ].className = '';
		nav.figs[ current ].firstChild.style.height = nav.thumbHeight + 'px';
		nav.figs[ i ].className = 'current';
		nav.figs[ i ].firstChild.style.height = ''
		clearTimeout ( to );
		current = i;
		to = setTimeout( view, 250 );
	}
	
	var attach = function ( sel ) {
		var els = document.querySelectorAll( sel );
		for ( var i = 0, l = els.length; i < l; i++ ) {
			els[ i ].addEventListener( 'touchstart' in window ? 'touchstart' : 'click', open, false);
		}
	}
	
	return {
		attach : attach,
		close : close,
	}
})( window, document );
	
