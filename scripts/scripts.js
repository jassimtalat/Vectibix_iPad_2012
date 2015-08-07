/**********************************************************
Author:
Adam Barry
INDECO
www.indeco.dk

Date: December 30 2010

� 2010 Adam Barry, all rights reserved

-----------------------------------------------------------
Name:
Global variables and related functions

**********************************************************/



/**********************************************************
Author:
Balazs Suhajda @ Agnitio.com

Date: 2010-11-23

-----------------------------------------------------------

Name:
Monitoring script

-----------------------------------------------------------
Description:
Added monitoring functionality using the monitor.js

All function calls are in try{}catch(e){} in case the js is missing
It has been added to the following functions to monitor events:
slideSwiped()

-----------------------------------------------------------
Dependencies:
None

-----------------------------------------------------------
Revision history:

2010-12-29: Adam Barry
Monitoring-function created to simplify monitoring throughout
the site. Each monitoring action is now made by individual objects,
which can execute the monitoring and then "report" to garbage
collection

**********************************************************/
var clearall = function(){
	/*p2l1 = false;
	p2l2 = false;
	r4l1 = false;
	r4l2 = false;
	r4l4 = false;
	etki_state = 1;
	$(".slide .basic div").attr('style','');*/
    $(".opacity0").css("opacity","");
    $(".height0").css("height","");
    $(".width0").css("width","");    
    
}

var monitoringEnabled = true,
  monitorTimeOut;

function monitorObject(slideId,slideName,slideIndex,parentSlideName) {
	if (!slideId || slideId === null) { slideId = "undefined"};
	if (!slideName || slideName === null) { slideName = "undefined"};
	if (!slideIndex || slideIndex === null) { slideIndex = "undefined"};
	if (!parentSlideName || parentSlideName === null) { parentSlideName = "undefined"};

	this.slideId = slideId;
	this.slideName = slideName;
	this.slideIndex = slideIndex;
	this.parentSlideName = parentSlideName;

	/*document.getElementById("test").innerHTML = "<h3>monitorCall()</h3>";
	document.getElementById("test").innerHTML += "<p>slideId: "+slideId+"</p>";
	document.getElementById("test").innerHTML += "<p>slideName: "+slideName+"</p>";
	document.getElementById("test").innerHTML += "<p>slideIndex: "+slideIndex+"</p>";
	document.getElementById("test").innerHTML += "<p>parentSlideName: "+parentSlideName+"</p>";*/

	try {
		submitSlideEnter(
			slideId,
			slideName,
			slideIndex,
			parentSlideName
		);
		//document.getElementById("test").innerHTML += "<p>Monitoring "+noOfMonitorCalls+": Start @"+timestamp()+"</p>";
		//document.getElementById("test").innerHTML += "<p>Monitoring: End</p>";
	} catch(e) {
		//document.getElementById("test").innerHTML += "<p class=\"error\">Monitoring exception @"+timestamp()+":<br/>"+e+"</p>";
	}
}

function monitorCall(slideId,slideName,slideIndex,parentSlideName) {
	//monitorObject(slideId,slideName,slideIndex,parentSlideName);
}
$(document).ready( function(){
    $("#turkCMV").addClass('active');
    $("li.home").addClass('selected');
    });
/**********************************************************
Author:
Adam Barry
INDECO
www.indeco.dk

Date: December 8 2008

� 2007 Adam Barry, all rights reserved

Inspiration: http://simonwillison.net/2004/May/26/addLoadEvent/

-----------------------------------------------------------
Name:
windowOnLoad script

-----------------------------------------------------------
Description:
Function that enables loading of multiple functions during
window.onload

-----------------------------------------------------------
Usage:
Simply place a link to the this script in the top of the
<head>-section of the XHTML page - before including
additional JavaScript files. The script will then
automatically execute on page load.

Include the addLoadEvent code in the scripts that you wish to have
loaded at the time of page-load according to the example below.

<script type="text/javascript" src="windowOnLoad.js"></script>

-----------------------------------------------------------
Example:
<script type="text/javascript" src="windowOnLoad.js"></script>

function functionToLoad() {
	alert("Execute me on page-load, please");
}

addLoadEvent(function(){functionToLoad();});

-----------------------------------------------------------
Dependencies:
None

**********************************************************/
var onLoadScripts = [];

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {

            if (oldonload) {
                oldonload();
            }
            func();
            onLoadScripts.push(func);
        };
    }
}


/*********************************************************
Name:
reloadOnLoadScripts script

-----------------------------------------------------------
Description:
Function that enables reloading of the functions loaded
onpageload for AJAX environments

-----------------------------------------------------------
Usage:
Execute reloadOnLoadScripts() after a part of the website
that is dependent on the windowOnLoad-scripts has been
refreshed.

reloadOnLoadScripts()

-----------------------------------------------------------
Dependencies:
This script depends on the windowOnLoad-script to execute

**********************************************************/
function reloadOnLoadScripts() {

	for (var i = 0; i < onLoadScripts.length; i++) {
		onLoadScripts[i]();
	}
}


/**********************************************************
Author:
Adam Barry
INDECO
www.indeco.dk

Date: May 17 2010

� 2010 Adam Barry, all rights reserved
-----------------------------------------------------------

Name:
prototypes script

-----------------------------------------------------------
Description:
Various prototypes used for extending JavaScript objects

-----------------------------------------------------------
Usage:
Simply place a link to the this script in the head-section
of the XHTML page. The prototypes will then automatically
be available to other JavaScripts when the page has loaded.

<script type="text/javascript" src="prototypes.js"></script>

-----------------------------------------------------------
Dependencies:
None

**********************************************************/


/**********************************************************
String prototypes
**********************************************************/

/*: Prototype string reverse
-----------------------------------------------------------
Example:
var message = "This is a message";
var reversedMessage = message.reverse()

(Result is "egassem a si sihT")
----------------------------------------------------------*/
String.prototype.reverse = function () {
	var s = "";
	var i = this.length;

	while (i > 0) {
		s += this.substring(i - 1, i);
		i--;
	}
	return s;
};


/*: Trim
-----------------------------------------------------------
Example:
var message = "This is a message";
trim(message,'age');

(Restult is "This is a mess")
----------------------------------------------------------*/
String.prototype.trim = function (chars) {
	return this.replace(chars, "");
};

function trim(str, chars) {
	return str.replace(chars, "");
}

/*function trim(str, chars) {
	return ltrim(rtrim(str, chars), chars);
}

function ltrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function rtrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}*/


/*: isNumeric
-----------------------------------------------------------
Example:

----------------------------------------------------------*/
/*function isNumeric(input){
	var RE = /^-{0,1}\d*\.{0,1}\d+$/;
	return (RE.test(input));
}*/

function isNumeric(data){
    return parseFloat(data)==data;
}


/**********************************************************
Array prototypes
**********************************************************/

/*: Prototype array contains
-----------------------------------------------------------

----------------------------------------------------------*/
Array.prototype.contains = function (obj) {
	var i = this.length;
	while (i--) {
		if (this[i] === obj) {
			return true;
		}
	}
	return false;
};

/*: Prototype array position
-----------------------------------------------------------

----------------------------------------------------------*/
Array.prototype.position = function (obj) {
	var i = this.length;
	while (i--) {
		if (this[i] === obj) {
			return i;
		}
	}
	return false;
};

/*: Prototype array contains array
-----------------------------------------------------------

----------------------------------------------------------*/
Array.prototype.containsArray = function (arrayObject) {
	var matches = [];
	for (var i = 0; i < arrayObject.length; i++) {
		me = arrayObject[i];
		for (var x = 0; x < this.length; x++) {
			if (this[x] == me) {
				matches.push(true);
			}
		}
	}
	if (matches.length == arrayObject.length) {
		return true;
	}
	else {
		return false;
	}
};


/**********************************************************
DOM-element manipulation
**********************************************************/
function addClass(element,className) {
	/* Do not add the className if element.className already contains it */
	if (element.className.indexOf(className) <= -1) {
		element.className += " " + className;
	}
}

function removeClass(element,className) {
	if (element.className.indexOf(" " + className) > -1) {
		element.className = element.className.replace(new RegExp(" "+className+"\\b"), "");
	}
	else if (element.className.indexOf(className) > -1) {
		element.className = element.className.replace(new RegExp(className+"\\b"), "");
	}
}

function findPosition(element) {

	var curtop = 0;
	var curleft = 0;

	if (element.offsetParent) {
		do {
			curleft += element.offsetLeft;
			curtop += element.offsetTop;
			element = element.offsetParent;
		} while (element.offsetParent);
	}
	return [curtop,curleft];
}

function findAncestorWithClassName(element,className) {
	var ancestor = element;

	while (ancestor.className.indexOf(className) <= -1) {
		ancestor = ancestor.parentNode;
	}
	return ancestor;
}

function timestamp() {
	var now = new Date();
	var curr_hour = now.getHours();
	var curr_min = now.getMinutes();
	var curr_sec = now.getSeconds();
	var curr_msec = now.getMilliseconds();
	now = curr_hour + ":" + curr_min + ":" + curr_sec + ":" + curr_msec;
	return now;
}


/*function getStyle(el, styleProp) {
	var x = el;
	if (x.currentStyle)
		var y = x.currentStyle[styleProp];
	else if (window.getComputedStyle)
		var y = document.defaultView.getComputedStyle(x, null).getPropertyValue(styleProp);
	return y;
}*/

var clickSource;
function clickListener(event) {
	var evt = event || window.event;

	if (evt) {
		var targ;
		if (evt.target) { targ = evt.target; }
		else if (evt.srcElement) { targ = evt.srcElement; }
		if (targ.nodeType == 3) {
		/* defeat Safari bug */
			targ = targ.parentNode;
		}

		clickSource = targ;
	}
} /*document.onclick = clickListener;*/


/**********************************************************
Author:
Adam Barry
INDECO
www.indeco.dk

Date: October 10 2010

� 2010 Adam Barry, all rights reserved
-----------------------------------------------------------

Name:
orientation script

-----------------------------------------------------------
Description:
Function that registeres run-time orientation switching e.g.
for mobile devices like iPhone/iPad.

-----------------------------------------------------------
Usage:
Simply place a link to the this script in the head-section
of the XHTML page. The script will then automatically
execute on page load.

<script type="text/javascript" src="orientation.js"></script>

-----------------------------------------------------------
Example:
<script type="text/javascript" src="orientation.js"></script>

-----------------------------------------------------------
Dependencies:
windowOnLoad.js
prototypes.js

**********************************************************/
var landscapeContainer = "";
var landscapeVideo = "";

function initLandscapeVideo() {
	if (!document.getElementById("landscape")) {return;}
	landscapeContainer = document.getElementById("landscape");
	landscapeVideo = document.getElementById("landscapeVideo");
} addLoadEvent(function(){initLandscapeVideo();});

function activateLandscapeVideo(mode) {
    if (!document.getElementById("landscape")) {return;}
	if (mode === true) {
		if (landscapeContainer.className.indexOf("active") <= 0) {
			addClass(landscapeContainer, "active");
		}
	}
	if (mode === false) {
		if (landscapeContainer.className.indexOf("active") > -1) {
			landscapeVideo.pause();
			removeClass(landscapeContainer, "active");
		}
	}
}

function getOrientation() {
	/*window.orientation returns a value that indicates whether iPhone/iPad is in portrait mode, landscape mode with the screen turned to the
	  left, or landscape mode with the screen turned to the right. */
	return window.orientation;
}

function presentationMode(orientation,homeButtonPosition) {
	/* Add or change the current orientation in body.className */
	if (orientation == "portrait" && document.body.className.indexOf("portrait") <= -1) {
		if (document.body.className.indexOf("landscape") > -1) {
			removeClass(document.body,"landscape");
			/*document.body.className = document.body.className.replace(new RegExp("landscape\\b"), "");*/
		}
		/*document.body.className += " portrait";*/
		addClass(document.body,"portrait");
	}
	else if (orientation == "landscape" && document.body.className.indexOf("landscape") <= -1) {
		if (document.body.className.indexOf("portrait") > -1) {
			/*document.body.className = document.body.className.replace(new RegExp("portrait\\b"), "");*/
			removeClass(document.body,"portrait");
		}
		/*document.body.className += " landscape";	*/
		addClass(document.body,"landscape");

	}

	/* If in landscape-mode, display the video window */
	if (orientation == "landscape") {
		activateLandscapeVideo(true);
	}
	else {
		activateLandscapeVideo(false);
	}
}


function updateOrientation() {
	/*window.orientation returns a value that indicates whether iPhone/iPad is in portrait mode, landscape mode with the screen turned to the
	  left, or landscape mode with the screen turned to the right. */
	/*var orientation = window.orientation;*/
	var orientation = getOrientation();
	switch(orientation)	{

		case 0:
				/* iPad is now in portrait orientation (Home button on the bottom).";*/
				presentationMode("portrait","bottom");
				break;

		case 180:
				/* iPad is now in portrait orientation (Home button on the top)."; */
				presentationMode("portrait","top");
				break;

		case 90:
				/* iPad is now in landscape orientation and turned to the left (Home button to the right)."; */
				presentationMode("landscape","right");
				break;

		case -90:
				/* iPad is now in landscape orientation and turned to the right (Home button to the left)."; */
				presentationMode("landscape","left");
				break;
	}
} window.onorientationchange = updateOrientation;


/**********************************************************
Author:
Adam Barry
INDECO
www.indeco.dk

Date: December 30 2010

� 2010 Adam Barry, all rights reserved
-----------------------------------------------------------

Name:
page-animation scripts

-----------------------------------------------------------
Description:


-----------------------------------------------------------
Usage:

-----------------------------------------------------------
Example:

-----------------------------------------------------------
Dependencies:
windowOnLoad.js

**********************************************************/

/*: Fade-in animations
----------------------------------------------------------*/
var fadeInAnimations = [];
function fadeInAnimation(element,trigger) {
	this.element = element;
	this.trigger = trigger;

	/*element.style.webkitTransform = "opacity";
	element.style.webkitTransitionDuration = "2500ms";
	element.style.webkitTransitionTimingFunction = "linear";
	element.style.webkitTransformStyle = "preserve-3d";
	element.style.webkitTransitionDelay = "1000ms";*/
}

function initFadeInAnimations() {
	var fadeIns = document.getElementsByClassName("fadeIn");

	for (var i = 0; i < fadeIns.length; i++) {
		fadeInAnimations.push(new fadeInAnimation(fadeIns[i],''));
	}
} addLoadEvent(function(){initFadeInAnimations();});


function showFadeIns(element) {
	var fadeIns = element.getElementsByClassName("fadeIn");

	/* Remove chart animation if it exists on the current page */
	var s5Chart = element.getElementsByClassName("s5chart");

	if(s5Chart.length > 0) {
		removeClass(document.getElementById("s5chart"),"active");
		removeClass(document.getElementById("pie2"),"active");
	}

	/* Hide all fadeIns*/
	for (var i = 0; i < fadeInAnimations.length; i++) {
		removeClass(fadeInAnimations[i].element,"active");
	}

	/* Activate all fadeIns on the current page */
	for (i = 0; i < fadeIns.length; i++) {
		addClass(fadeIns[i],"active");
	}
}


/*: Step animations
----------------------------------------------------------*/
var stepAnimations = [];
function stepAnimation(element,elements,currentStep,running) {
	this.element = element;
	this.elements = [];
	this.currentStep = currentStep;
	this.running = running;
}

function stepAnimationElement(element) {
	this.element = element;
}

function initStepAnimations() {
	var elements = document.getElementsByClassName("stepAnimation");

	for (var i = 0; i < elements.length; i++) {
		stepAnimations.push(new stepAnimation(elements[i]));
	}

	for (i = 0; i < stepAnimations.length; i++) {
		var steps = stepAnimations[i].element.getElementsByTagName("li");

		for (var x = 0; x < steps.length; x++) {
			stepAnimations[i].elements.push(new stepAnimationElement(steps[x],false));
			removeClass(steps[x],"active");
		}
	}
} addLoadEvent(function(){initStepAnimations();});

function clearStepAnimations(element) {
	var elements = document.getElementsByClassName("stepAnimation");


	for (var i = 0; i < elements.length; i++) {
		for (var x = 0; x < stepAnimations.length; x++) {
			if (elements[i] == stepAnimations[x].element) {
				stepAnimations[x].running = false;
				stepAnimations[x].currentStep = 0;
			}
		}

		var animationSteps = elements[i].getElementsByTagName("li");

		for (x = 0; x < animationSteps.length; x++) {
			removeClass(animationSteps[x],"active");
		}
	}
}

function showStepAnimationElement(stepAnimationObject,elementNumber) {
	/*if (stepAnimationObject.running == false) return;*/

	var steps = stepAnimationObject.elements.length;

	if (elementNumber >= steps) { return; }
	if (!elementNumber) { elementNumber = 0; }
	if (stepAnimationObject.elements[elementNumber].element.className.indexOf("active") > -1) {
		elementNumber = elementNumber + 1;
	}

	/*document.getElementById("test").innerHTML += "<p>showStepAnimationElement("+elementNumber+"), steps: "+steps+"</p>";*/

	if (elementNumber < steps) {
		stepAnimationObject.currentStep = elementNumber;

		stepAnimationObject.elements[elementNumber].element.addEventListener('webkitTransitionEnd', function( event ) { showStepAnimationElement(stepAnimationObject,elementNumber+1);this.removeEventListener('webkitTransitionEnd',arguments.callee,false); }, false);

		jQuery(stepAnimationObject.elements[elementNumber].element).animate({'opacity':1},function(){
			addClass(stepAnimationObject.elements[elementNumber].element,"active");
		});
		

		/* Pure JavaScript step-animation */
		/*setTimeout(function(thisObj) {
				thisObj.showStepAnimationElement(stepAnimationObject,elementNumber +1);
			},1000,this
		);*/
	}
}

function showStepAnimation(element) {
	/*Run step-animations from the begining every time the parent-slide is entered */
	/*clearStepAnimations(element);*/

	var elements = element.getElementsByClassName("stepAnimation");

	for (var i = 0; i < elements.length; i++) {
		for (var x = 0; x < stepAnimations.length; x++) {

			if (elements[i] == stepAnimations[x].element) {
				stepAnimations[x].running = true;
				showStepAnimationElement(stepAnimations[x],stepAnimations[x].currentStep);
			}
		}
	}
}


/*: Init animations
----------------------------------------------------------*/
function getCurrentSlide(element) {
	var slideObject;

	if (element.className.indexOf("slide") > -1) {
	    slideObject = getSlideObject(findAncestorWithClassName(element, "slides"));
	}
	else {
	    slideObject = getSlideObject(element.getElementsByClassName("slides")[0]);
	}

	if (!slideObject) {return;}

	var currentScroller = "";

	for (var i = 0; i < scrollers.length; i++) {
		if (scrollers[i].element.parentNode == slideObject.element) {
			currentScroller = scrollers[i];
			break;
		}
	}

	if (!currentScroller) {return;}

	var siteOffset = findPosition(document.getElementById("site"))[1];
	/*var slideObjectElement = element.getElementsByClassName("slides")[0];*/

	for (i = 0; i < slideObject.slides.length; i++) {
		var elementPosition = findPosition(slideObject.slides[i])[1] * -1;
		elementPosition = siteOffset - Math.abs(elementPosition);
		var translateString = "translate3d(" + elementPosition + "px, 0px, 0px)";

		if (translateString == currentScroller.element.style.webkitTransform) {
			return slideObject.slides[i];
		}
	}
}

function showAnimations(element) {
	var currentSlide = getCurrentSlide(element);
	if (!currentSlide) {return;}

	showFadeIns(currentSlide);
	showStepAnimation(currentSlide);
}


/**********************************************************
Author:
Adam Barry
INDECO
www.indeco.dk

Date: November 6 2010

� 2010 Adam Barry, all rights reserved
-----------------------------------------------------------

Name:
slides script

-----------------------------------------------------------
Description:
A script that enables slide-transitioning functionality to
multiple slide structures. The construction of the
thumbnail list means that browsers that do not support
document.getElementsByTagName will still be able to view
the standard-images, although in new windows.

-----------------------------------------------------------
Usage:
Simply place a link to the this script in the head-section
of the XHTML page. The script will then automatically
execute on page load.

<script type="text/javascript" src="slides.js"></script>

-----------------------------------------------------------
Example:
<script type="text/javascript" src="slides.js"></script>

<div class="slides">
	<div class="fullView scroller">

		<div class="slideContainer">

			<div class="slide">
				<img src="page1.jpg" alt=""/>
			</div>

			<div class="slide">
				<img src="page2.jpg" alt=""/>
			</div>

			<div class="slide">
				<h1>Slide with content</h1>
			</div>

		</div>

	</div>

	<div class="thumbnailContainer">
		<ul class="thumbnails">
			<li>
				<a href="#" class="selected">
					Link-text of some sort.
				</a>
			</li>
			<li>
				<a href="#">
					<img src="page2-thumb.png" alt=""/>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="page3-thumb.png" alt=""/>
				</a>
			</li>
		</ul>
	</div>
</div>

-----------------------------------------------------------
Dependencies:
windowOnLoad.js
prototypes.js
iScroll.js

Optional:
None

-----------------------------------------------------------
Revision history:


**********************************************************/
var slideElements = [];
function slideElement(element, slides, thumbnails) {
	this.element = element;
	this.slides = [];
	this.thumbnails = [];
}

function getSlideObject(element) {
	for (var i = 0; i < slideElements.length; i++) {
		if (slideElements[i].element == element) {
			return slideElements[i];
		}
	}
}

function getScroller(slideObjectElement) {
	for (var i = 0; i < scrollers.length; i++) {
		if (scrollers[i].element.parentNode == slideObjectElement) { 
			return scrollers[i];
		}
	}
}

function clearSlideThumbnails(slideObjectElement) {
	var slideObject = getSlideObject(slideObjectElement);


	for (var i = 0; i < slideObject.thumbnails.length; i++) {
		removeClass(slideObject.thumbnails[i],"selected");
	}
}

function showSlide(slideObjectElement,thumbnail) {
	var slideObject = getSlideObject(slideObjectElement);
	var currentScroller = getScroller(slideObjectElement);
	if (!currentScroller) {return;}

	for (var i = 0; i < slideObject.thumbnails.length; i++) {
		if (slideObject.thumbnails[i] == thumbnail) {

			/*Check if there exists a slide for the thumbnail based on thumbnail-order*/
			if (slideObject.slides[i]) {
				currentScroller.scrollToElement(slideObject.slides[i],'400ms');
				break;
			}
		}
	}
}

function slideThumbnailHandler(slideObjectElement,thumbnail) {
	clearSlideThumbnails(slideObjectElement);
	addClass(thumbnail,"selected");
	thumbnail.blur();
	showSlide(slideObjectElement,thumbnail);
}

function initSlideElements() {
	if (!document.getElementsByTagName) {return;}

	var elements = document.getElementsByTagName("div");

	/* When an element with the classname 'slides' is found
	   create a new entry in the slideElements array */
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].className.indexOf('slides') > -1) {   
			slideElements.push(new slideElement(elements[i],'',''));
		}
	}

	/* If the slideElements array is empty do not proceed  */
	if (!slideElements[0]) {return;}

	/* Run through each element in the slideElements array */
	for (i = 0; i < slideElements.length; i++) {
		var slideObject = slideElements[i];
		var slideObjectElement = slideObject.element;
		var slideObjects = slideObjectElement.getElementsByClassName("slide");

		/*Identify the slides in the slideObject */
		for (var x = 0; x < slideObjects.length; x++) {
			slideObject.slides.push(slideObjects[x]);
		}

		/*Identify the thumbnails in the slideObject */
		var thumbnailList;
		var lists = slideObjectElement.getElementsByTagName("ul");

		for (x = 0; x < lists.length; x++) {
			if (lists[x].className.indexOf("thumbnails") > -1) {
				thumbnailList = lists[x];
			}
		}

		/* Identify the child items of the thumbnailList */
		var thumbnails = thumbnailList.getElementsByTagName("a");

		/* If there is only one thumbnail, then hide the thumbnail-list */
		if (thumbnails.length <= 1) {
			addClass(thumbnailList,"hidden");
		}

		/* When a thumbnail element is found add it to thumbnails array in
		   the current imageGallery object */
		for (x = 0; x < thumbnails.length; x++) {
			slideObject.thumbnails.push(thumbnails[x]);
		}

		/* The thumbnails have now been stored in the slideObject
		   so now add some functionality to them */
		for (x = 0; x < thumbnails.length; x++) {
			thumbnails[x].onclick = function() {
				var parentNode = this.parentNode.parentNode.parentNode.parentNode;

				slideThumbnailHandler(parentNode,this);
				return false;	/* make sure the link is not actually followed */
			};
		}

	}
} addLoadEvent(function(){initSlideElements();});

function slideThumbnailScroll(slideObject,thumbnailNumber) {
	var currentScroller;
	for (var i = 0; i < scrollers.length; i++) {
		if (scrollers[i].element.parentNode.parentNode == slideObject.element) {
			currentScroller = scrollers[i];
			break;
		}
	}

	if (!currentScroller) {return;}

	/*Find out how much the thumbnails have been scrolled*/
	var currentScroll = currentScroller.element.style.webkitTransform;
	currentScroll = trim(currentScroll,"px, 0px, 0px)");
	currentScroll = trim(currentScroll,"translate3d(");

	var siteOffset = findPosition(document.getElementById("site"))[1];
	var siteWidth = document.getElementById("site").offsetWidth;
	var thumbnail = slideObject.thumbnails[thumbnailNumber];

	var thumbnailPosition = findPosition(thumbnail)[1] * -1;
	thumbnailPosition = siteOffset - Math.abs(thumbnailPosition);

	thumbnailWidth = thumbnail.offsetWidth;
	var thumbnailEnd = thumbnailPosition - (thumbnailWidth)-200;


	if (thumbnailNumber === 0) {
		currentScroller.element.style.webkitTransform = "translate3d(0px, 0px, 0px)";
	}
	else if (thumbnailPosition > currentScroll || siteWidth < Math.abs(thumbnailEnd)) {
		currentScroller.scrollToElement(thumbnail, '400ms');
	}
	
	
	// ---------------- Following code snippet is added to add selected class to relevant menu item upon clicking of a slide thumbnail-------------
	var lis = navigation.getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++)
	{
		removeClass(lis[i], "selected");
	}

	var indx = thumbnailNumber;
	if(indx < 8)
	{
		indx = parseInt(indx) + 3;
		addClass(lis[indx], "selected");
	}
	//--------------------------------------------------------------------------------------------------------------------------------------------
}

function slideHighlightThumb(slideObject,thumbnailNumber) {
	clearall();
	for (var i = 0; i < slideObject.thumbnails.length; i++) {
		if (i == thumbnailNumber) {
			addClass(slideObject.thumbnails[i],"selected");
		}
		else {
			removeClass(slideObject.thumbnails[i],"selected");
		}
	}

	slideThumbnailScroll(slideObject,thumbnailNumber);
}

function slideSwiped(scroller) {
	var siteOffset = findPosition(document.getElementById("site"))[1];
	var slideObjectElement = findAncestorWithClassName(scroller.element,"slides");
	var slideObject = getSlideObject(slideObjectElement);

	for (var i = 0; i < slideObject.slides.length; i++) {
		var elementPosition = findPosition(slideObject.slides[i])[1] * -1;
		elementPosition = siteOffset - Math.abs(elementPosition);
		var translateString = "translate3d(" + elementPosition + "px, 0px, 0px)";

		if (translateString == scroller.element.style.webkitTransform) {
			slideHighlightThumb(slideObject,i);

			/* activate fadeIn animatins*/
			showAnimations(slideObject.slides[i]);

			/*	monitoring */
			monitorCall(slideObject.slides[i].getAttribute( 'data-monitoring-id' )/*slideID */,slideObject.slides[i].getAttribute( 'data-monitoring-name' )/*slideName */,i/*slideIndex */,scroller.wrapper.parentNode.getAttribute( 'data-monitoring-id' )	/*parentSlideName, */);
			break;
		}
	}
}


/*: Internal slides
----------------------------------------------------------*/
var internalSlideElements = [];
function internalSlideElement(element, scrollerElement, slides, thumbnails) {
	this.element = element;
	this.scrollerElement = scrollerElement;
	this.slides = [];
	this.thumbnails = [];
}

function initInternalSlideElements() {
	if (!document.getElementsByTagName) {return;}

	var elements = document.getElementsByTagName("div");

	/* When an element with the classname 'slides' is found
	   create a new entry in the slideElements array */
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].className.indexOf('internalContainer') > -1) {
			internalSlideElements.push(new slideElement(elements[i]/*,'','',''*/));
		}
	}

	/* If the slideElements array is empty do not proceed  */
	if (!internalSlideElements[0]) {return;}


	/* Run through each element in the slideElements array */
	for (i = 0; i < internalSlideElements.length; i++) {
		var slideObject = internalSlideElements[i];
		var slideObjectElement = slideObject.element;
		var slideObjects = slideObjectElement.getElementsByClassName("part");

		slideObject.scrollerElement = slideObject.element.getElementsByClassName("scroller")[0];

		/*Identify the slides in the slideObject */
		for (var x = 0; x < slideObjects.length; x++) {
			slideObject.slides.push(slideObjects[x]);
		}

		/*Identify the thumbnails in the slideObject */
		var thumbnailList;
		/*var lists = slideObjectElement.getElementsByTagName("ul");*/
		var lists = slideObjectElement.getElementsByClassName("thumbnails");


		if (lists.length > 0) {

			for (x = 0; x < lists.length; x++) {
				if (lists[x].className.indexOf("thumbnails") > -1) {
					thumbnailList = lists[x];
				}
			}

			/* Identify the child items of the thumbnailList */
			var thumbnails = thumbnailList.getElementsByTagName("a");

			/* When a thumbnail element is found add it to thumbnails array in
			   the current imageGallery object */
			for (x = 0; x < thumbnails.length; x++) {
				slideObject.thumbnails.push(thumbnails[x]);
			}

			/* The thumbnails have now been stored in the slideObject
			   so now add some functionality to them */
			for (x = 0; x < thumbnails.length; x++) {
				thumbnails[x].onclick = function() {
					return false;	/* make sure the link is not actually followed */
				};
			}
		}

		/*Identify the arrows in the slideObject */
		var arrows = slideObjectElement.getElementsByClassName("arrow");

		if (arrows.length > 0) {
			/*for (var x = 0; x < arrows.length; x++) {
				if (arrows[x].className.indexOf("previous") > -1) {
					arrows[x].onclick = function() {
						var parentNode = this.parentNode.parentNode;
						previousInternalSlide(parentNode);
						return false;
					}
				}
				if (arrows[x].className.indexOf("next") > -1) {
					arrows[x].onclick = function() {
						var parentNode = this.parentNode.parentNode;
						nextInternalSlide(parentNode);
						return false;
					}
				}
			}*/
			if (arrows.length > 1) {
				addClass(slideObjectElement,"first");
			}
		}
	}
} addLoadEvent(function(){initInternalSlideElements();});

function getInternalSlideObject(element) {
	for (var i = 0; i < internalSlideElements.length; i++) {
		if (internalSlideElements[i].element == element) {
			return internalSlideElements[i];
		}
	}
}

function getInternalScroller(scrollerElement) {
	for (var i = 0; i < scrollers.length; i++) {
		if (scrollers[i].element == scrollerElement) {
			return scrollers[i];
		}
	}
}

function previousInternalSlide(slideObjectElement) {
	slideObject = getInternalSlideObject(slideObjectElement);
	if (!slideObject.scrollerElement) {return;}

	getInternalScroller(slideObject.scrollerElement).scrollToPage('prev', 0);
}

function nextInternalSlide(slideObjectElement) {
	slideObject = getInternalSlideObject(slideObjectElement);
	if (!slideObject.scrollerElement) {return;}

	getInternalScroller(slideObject.scrollerElement).scrollToPage('next', 0);
}

function internalSlideHighlightThumb(slideObject,thumbnailNumber) {
	for (var i = 0; i < slideObject.thumbnails.length; i++) {
		if (i == thumbnailNumber) {
			addClass(slideObject.thumbnails[i],"selected");
		}
		else {
			removeClass(slideObject.thumbnails[i],"selected");
		}
	}
}

function internalSlidePosition(slideObject, slideNumber, numberOfSlides) {
	lastPosition = numberOfSlides - 1;

	removeClass(slideObject.element,"first");
	removeClass(slideObject.element,"last");

	if (slideNumber === 0) {
		addClass(slideObject.element,"first");
	}
	if (slideNumber == lastPosition) {
		addClass(slideObject.element,"last");
	}
}

function internalSwiped(scroller) {
	var siteOffset = findPosition(findAncestorWithClassName(scroller.element,"slide"))[1];
	var slideObjectElement = findAncestorWithClassName(scroller.element,"internalContainer");
	var slideObjectElementOffset = siteOffset - findPosition(slideObjectElement)[1];
	var slideObject = getInternalSlideObject(slideObjectElement);

	var firstSlideOffset = findPosition(slideObject.slides[0])[1] * -1;
	firstSlideOffset = siteOffset - Math.abs(firstSlideOffset);
	firstSlideOffset = firstSlideOffset - slideObjectElementOffset;


	for (var i = 0; i < slideObject.slides.length; i++) {
		var elementPosition = findPosition(slideObject.slides[i])[1] * -1;
		elementPosition = siteOffset - Math.abs(elementPosition);
		elementPosition = elementPosition - slideObjectElementOffset;

		var translateString = "translate3d(" + (elementPosition - firstSlideOffset) + "px, 0px, 0px)";

		if (translateString == scroller.element.style.webkitTransform) {

			if (slideObject.thumbnails.length > 0) {
				internalSlideHighlightThumb(slideObject, i);
			}

			internalSlidePosition(slideObject, i, slideObject.slides.length);

			/*	monitoring */
			monitorCall(
				slideObject.slides[i].getAttribute( 'data-monitoring-id' ) || 0,    /*slideID */
				slideObject.slides[i].getAttribute( 'data-monitoring-name' ) || 0,  /*slideName */
				i || 0,                                                             /*slideIndex */
				slideObject.element.parentNode.parentNode.getAttribute( 'data-monitoring-id' )     /*parentSlideName */
			);
			break;
		}
	}
}


/**********************************************************
Author:
Adam Barry
INDECO
www.indeco.dk

Date: November 7 2010

� 2010 Adam Barry, all rights reserved
-----------------------------------------------------------

Name:
scrollers script

-----------------------------------------------------------
Description:
A script that auto-enables iScroll-based scrollers for
iOS devices

-----------------------------------------------------------
Usage:
Simply place a link to the this script in the head-section
of the XHTML page. The script will then automatically
execute on page load.

<script type="text/javascript" src="scrollers.js"></script>

-----------------------------------------------------------
Example:
<script type="text/javascript" src="iScroll.js"></script>
<script type="text/javascript" src="slides.js"></script>

<div class="wrapper">
	<div class="scroller">

		<h1>Scrollable content</h1>

	</div>
</div>

-----------------------------------------------------------
Dependencies:
windowOnLoad.js
iScroll.js

Optional:
None

-----------------------------------------------------------
Revision history:


**********************************************************/
var scrollers = [];

/*var checkScrollPosition = function(scroller){
	if(scroller.touchStartY>250)
        scroller.abortMove();
    if(!allowslideing )
		scroller.abortMove();
}*/

function initScrollers() {
	document.addEventListener('touchmove', function(e){ e.preventDefault(); }, false);
	var elements = document.getElementsByClassName("scroller");

	for (var i = 0; i < elements.length;i++) {
		var myScroll;

		if (elements[i].parentNode.className.indexOf("slide") > -1) {
			myScroll = new iScroll(elements[i], {snap: true, momentum: false, hScrollbar: false, vScrollbar: false, bounce: false, desktopCompatibility: true, /*onScrollStart:function(){checkScrollPosition(this);},*/ onScrollEnd: function() { slideSwiped(this); } });
		}
		else if (elements[i].className.indexOf("internal") > -1) {
			myScroll = new iScroll(elements[i], {snap: true, momentum: false, hScrollbar: false, vScrollbar: false, bounce: false, desktopCompatibility: true, onScrollEnd: function () { internalSwiped(this); } });
		}
		else if (elements[i].className.indexOf("thumbnails") > -1) {
			myScroll = new iScroll(elements[i], { bounce: true, hScrollbar: false, bounceLock: true, desktopCompatibility: true});
		}
		else {
			myScroll = new iScroll(elements[i], {bounce: true, hScrollbar: true, bounceLock: true});
		}

		scrollers.push(myScroll);
	}
} addLoadEvent(function(){initScrollers();});


function refreshScrollers() {
	if (!scrollers) {return;}

	for (var i = 0; i < scrollers.length; i++) {
		/*if (scrollers[i] != navigationIScroll) {*/
			scrollers[i].refresh();
		/*}*/
	}
}


/**********************************************************
Author:
Adam Barry
INDECO
www.indeco.dk

Date: September 16 2010

� 2010 Adam Barry, all rights reserved
-----------------------------------------------------------

Name:
Webkit scripts

-----------------------------------------------------------
Description:
Functions used for iPad/iPhone-touch-functionality on the
website.

-----------------------------------------------------------
Usage:
Simply place a link to the this script in the head-section
of the XHTML page. The script will then automatically
execute when the related functions are called.

<script type="text/javascript" src="webkit.js"></script>

-----------------------------------------------------------
Example:
<script type="text/javascript" src="webkit.js"></script>

-----------------------------------------------------------
Dependencies:
windowOnLoad.js
prototypes.js
iScroll.js

-----------------------------------------------------------
Revision history:
2010-11-19: Navigation-swipe changed to iScroll

**********************************************************/
var navigation;
var siteOffset;
var siteSize;
var visibleAreaStart;
var visibleAreaEnd;

/*: Navigation related functions
----------------------------------------------------------*/
function addSwipeListener(element, listener) {
	var startX;
	var startY;
	var dx;
	var dy;
	var direction;

	function cancelTouch() {
		element.removeEventListener('touchmove', onTouchMove);
		element.removeEventListener('touchend', onTouchEnd);
		startX = null;
		startY = null;
		direction = null;
	}

	function onTouchStart(e) {
		e.preventDefault();
		e.stopPropagation();

		if (e.touches.length == 1) {
			startX = e.touches[0].pageX;
			startY = e.touches[0].pageY;
			element.addEventListener('touchmove', onTouchMove, false);
			element.addEventListener('touchend', onTouchEnd, false);
		}
	}

	function onTouchMove(e) {
		if (e.touches.length > 1) {
			cancelTouch();
		}
		else {
			dx = e.touches[0].pageX - startX;
			dy = e.touches[0].pageY - startY;
			if (direction === null) {
				direction = dx;
			}
			else if ((direction < 0 && dx > 0) || (direction > 0 && dx < 0) || Math.abs(dy) > 200) {
				cancelTouch();
			}
		}
	}

	function onTouchEnd(e) {
		cancelTouch();

		if (Math.abs(dx) > 80) {
			listener({ target: element, direction: dx > 0 ? 'right' : 'left' });
			dx = 0;
		}
		else if (Math.abs(dy) > 20) {
			listener({ target: element, direction: dy > 0 ? 'down' : 'up' });
			dy = 0;
		}
		else {
			listener({ target: element, direction : 'click'});
		}

	}
	element.addEventListener('touchstart', onTouchStart, false);
}

var bodyActive = false;
function activeContent(mode) {
	/* Specify whether the content is active (open) or not */
	bodyActive = mode;	/* Set the global variable for other functions to access */
	var body = document.body;

	if (mode === true && body.className.indexOf("active") <= -1) {
		addClass(body,"active");
	}
	else if (mode === false) {
		removeClass(body,"active");
	}
}

function getUrl(href) {
	var url = href.reverse();
	url = url.split("#");
	url = url[0];
	url = url.reverse();
	return url;
}

var navigationRefs = [];
function navigationRef(element,href) {
	this.element = element;
	this.href = href;
}


/*: Section-related functions
----------------------------------------------------------*/
var pageSections = [];

function initSections() {
	if (!document.getElementById("main")) {return;}
	var article = document.getElementById("main");
	var sections = article.getElementsByTagName("section");

	for (var i = 0; i < sections.length; i++) {
		pageSections.push(sections[i]);
	}
} addLoadEvent(function(){initSections();});

function clearBodySectionDisplay() {
	body = document.body;

	/* Clear section name from body.className */
	for (var i = 0; i < navigationRefs.length; i++) {
		if (body.className.indexOf(navigationRefs[i].href) > -1) {
			removeClass(body,navigationRefs[i].href);
		}
	}
}

function initSectionElements(section) {
	var elements = section.getElementsByClassName("scroller");

	for (var i = 0; i < elements.length; i++) {
		if (elements[i].className.indexOf("scroller") > -1) {
			refreshScrollers();
		}
	}
}

function doMonitorTrick()
{
	var pixel = document.createElement("div");
	pixel.style.width = "1px";
	pixel.style.height = "1px";
	pixel.style.position = "absolute";
	pixel.style.opacity = 0;
	document.body.appendChild(pixel);
	setTimeout(function(){document.body.removeChild(pixel), 1});
}

function selectSection(elementId) {
	clearall();
	clearBodySectionDisplay();

	for (var i = 0; i < pageSections.length; i++) {
		if (pageSections[i].id.toLowerCase() == elementId.toLowerCase()) {

			/*selectNavigation(elementId);*/
			addClass(pageSections[i],"active");
			addClass(document.body, pageSections[i].id);
			selectNavigation(elementId);
			initSectionElements(pageSections[i]);

			/* Activate animations on the first slide of the section */
			showAnimations(pageSections[i]);

			/*	monitoring */
			doMonitorTrick(); //To avoid lagging
			monitorCall(pageSections[i].getAttribute( 'data-monitoring-id' )/*slideID */,pageSections[i].getAttribute( 'data-monitoring-name' )/*slideName */,null/*slideIndex *//*parentSlideName *//*parentOfParentSlideName */);
		}
		else if (pageSections[i].className.indexOf("active") > -1) {
			removeClass(pageSections[i],"active");
		}
	}

	if (bodyActive === false) {
		activeContent(true);
	}
}


/*: Navigation
----------------------------------------------------------*/
/*function navigationPosition(currentScroller) {
	var currentScroll = currentScroller.style.webkitTransform;
	currentScroll = trim(currentScroll, "translate3d(");
	currentScroll = trim(currentScroll, "px, 0px, 0px)");

	if (currentScroll < homePosition) {
		addClass(home, "contentOnBoth");
	}
	else {
		removeClass(home, "contentOnBoth");
	}
}*/

function navigationSlider(scroller,startElement) {
	myScroll = new iScroll(scroller, { bounce: false, hScrollbar: false, bounceLock: true, desktopCompatibility: true/*, onScrollEnd: function () { navigationPosition(scroller); }*/ });
	if (startElement) {
	   	myScroll.scrollToElement(startElement.parentNode, '400ms');
	}
	scrollers.push(myScroll);
	navigationIScroll = myScroll;
}

function navigationScroll(element) {
	var elementStart = (element.offsetParent.offsetLeft) * -1;
	var elementEnd = elementStart - element.offsetWidth;
	var currentScroll = navigation.style.webkitTransform;
	var viewPortStart = trim(currentScroll,"px, 0px, 0px)");
	viewPortStart = trim(viewPortStart,"translate3d(");
	var viewPortEnd = viewPortStart - Math.abs(visibleAreaEnd);

	if (elementStart > viewPortStart) {
		navigationIScroll.scrollToElement(element.parentNode,'400ms');
	}
	else if (elementEnd < viewPortEnd) {
		navigationIScroll.scrollToElement(element.parentNode,'400ms');
	}
}

function selectNavigation(url) {
	for (var i = 0; i < navigationRefs.length; i++) {
		if (navigationRefs[i].href == url && navigationRefs[i].element.parentNode.className.indexOf("selected") < 0) {
			addClass(navigationRefs[i].element.parentNode,"selected");
			navigationScroll(navigationRefs[i].element);
		}
		/* Deselect previously selected navigation element */
		else if (navigationRefs[i].href != url && navigationRefs[i].element.parentNode.className.indexOf("selected") > -1) {
			removeClass(navigationRefs[i].element.parentNode,"selected");
		}
	}
}

function navigationSwipe(e) {
	if(e.direction == "left") {
		navigationIScroll.scrollToElement(home.parentNode, '400ms');
		return false;
	}
	if(e.direction == "right") {
		navigationIScroll.scrollToPage('0', '0', '400ms');
		return false;
	}
	if(e.direction == "up") {
		activeContent(true);
		return false;
	}
	if(e.direction == "down") {
		activeContent(false);
		return false;
	}
	if(e.direction == "click") {
		var url = getUrl(e.target.toString());
		selectNavigation(url);
		selectSection(url);
		return false;
	}
}

function showSlideByIndex(index, parent_li)
{
	var slide = document.getElementById("mainSlides");
	var link = document.getElementById("link_"+index);
	slideThumbnailHandler(slide,link);
	return false;
}

function initNavigation() {
	if (!document.getElementById("mainNavigation")) {return;}
	navigation = document.getElementById("mainNavigation");
	var anchors = navigation.getElementsByTagName("a");

	for (var i = 0; i < anchors.length; i++) {
		var vurl = getUrl(anchors[i].href);
		navigationRefs.push(new navigationRef(anchors[i],vurl));
		if(vurl == "#turkCMV")
		{
			anchors[i].onclick = function() {
				var url = getUrl(this.href);
				selectSection(url);
				/*selectNavigation(url);*/
				return false;
			};
		}
	}

	/* Calculate various global variables */
	siteOffset = findPosition(document.getElementById("site"))[1];
	siteSize = document.getElementById("site").offsetWidth;
	visibleAreaStart = (siteOffset - findPosition(navigation)[1]) * -1;
	visibleAreaEnd = (visibleAreaStart - siteSize);

	if (home) {
		/* Calculate the position of the home-button relative to the site-element */
		/*homeWidth = home.offsetWidth;
		homeOffset = findPosition(home)[1] * -1;
		homePosition = siteOffset - Math.abs(homeOffset);*/

		/* Make the whole navigation swipe-slidable */
		/* Set the navigation so that the home-button is aligned with the left side of the site-element */
		navigationSlider(navigation, home);

		/* Add a swipe-listener to the home-button */
		document.addEventListener('touchmove', function(e){ e.preventDefault(); }, false);
		addSwipeListener(document.getElementById("home"), function (e) { navigationSwipe(e); });
	}
	else {
		/* Make the whole navigation swipe-slidable */
		navigationSlider(navigation);
	}
} addLoadEvent(function(){initNavigation();});


/**********************************************************
Author:
Adam Barry
INDECO
www.indeco.dk

Date: December 29 2010

� 2010 Adam Barry, all rights reserved
-----------------------------------------------------------

Name:
page-interaction scripts

-----------------------------------------------------------
Description:


-----------------------------------------------------------
Usage:


-----------------------------------------------------------
Example:

-----------------------------------------------------------
Dependencies:
windowOnLoad.js

**********************************************************/

/*: Lidocaine mechanisms
----------------------------------------------------------*/
function initLidocaineMechanisms() {
	var overlay = document.getElementById("overlay");
	if (!overlay) {return;}

	var trigger = document.getElementById("lidocaineMechanisms");
	if (!trigger) {return;}

	trigger.onclick = function() {
		if (overlay.className.indexOf("visible") > -1) {
			removeClass(overlay,"visible");
		}
		else {
			addClass(overlay,"visible");
		}
		return false;
	};
} addLoadEvent(function(){initLidocaineMechanisms();});


/*: Pain stimulus
----------------------------------------------------------*/
var lightnings = [];

function painStimuliAnimate() {
	var painStimulus1 = document.getElementById("plasterImpulse1");
	var painStimulus2 = document.getElementById("plasterImpulse2");

	for (var i = 0; i < lightnings.length; i++) {
		addClass(lightnings[i],"animate");
		lightnings[i].addEventListener( 'webkitAnimationEnd', function( event ) { removeClass(this,"animate"); this.removeEventListener('webkitAnimationEnd',arguments.callee,false); }, false );
	}

	addClass(painStimulus1,"animate");
	painStimulus1.addEventListener( 'webkitAnimationEnd', function( event ) { removeClass(this,"animate"); this.removeEventListener('webkitAnimationEnd',arguments.callee,false); }, false );

	addClass(painStimulus2,"animate");
	painStimulus2.addEventListener( 'webkitAnimationEnd', function( event ) { removeClass(this,"animate"); this.removeEventListener('webkitAnimationEnd',arguments.callee,false); }, false );
}

function painStimuli() {
	var lightningContainers = document.getElementsByClassName("lightningContainer");
	var painSti = document.getElementsByClassName("lightning");

	for (var i = 0; i < lightningContainers.length; i++) {
		lightningContainers[i].onclick = function() {
			painStimuliAnimate();
		};
	}

	for (i = 0; i < painSti.length; i++) {
		lightnings.push(painSti[i]);
	}

} addLoadEvent(function(){painStimuli();});


/*: Chart
----------------------------------------------------------*/
/*function chart() {
	if (!document.getElementById("chart")) return;

	var chart = document.getElementById("chart");
	var blue = document.getElementById("chartBlue");
	var yellow = document.getElementById("chartYellow");
	var pointStart = document.getElementById("pointStart");
	var pointEnd = document.getElementById("pointEnd");
	var chartResult = document.getElementById("chartResult");

	chart.onclick = function() {
		addClass(blue,"animate");
		addClass(yellow,"animate");
		pointStart.style.opacity = 0;
		pointStart.addEventListener( 'webkitTransitionEnd', function( event ) { pointEnd.style.opacity = 1; this.removeEventListener('webkitTransitionEnd',arguments.callee,false); }, false );
		chartResult.style.opacity = 1;
	}

} addLoadEvent(function(){chart();});*/


/*: Pie-chart
----------------------------------------------------------*/
function pieChart() {
	if(!document.getElementById("pieContainer")) {return;}

	var chart = document.getElementById("pieContainer");
	var pie1 = document.getElementById("pie1");
	var pie2 = document.getElementById("pie2");

	var slide = findAncestorWithClassName(chart,"slide");
	var fadeIns = slide.getElementsByClassName("fadeIn");

	var s5chart = document.getElementById("s5chart");

	chart.onclick = function() {
		if (pie1.className.indexOf("active") > -1) {

			pie1.addEventListener('webkitTransitionEnd', function(event) {addClass(pie2,"active"); this.removeEventListener('webkitTransitionEnd',arguments.callee,false); }, false);
			removeClass(pie1,"active");
		}
		else {
			pie2.addEventListener('webkitTransitionEnd', function(event) {
				addClass(s5chart,"active");
				this.removeEventListener('webkitTransitionEnd',arguments.callee,false);
				for (var i = 0; i < fadeIns.length; i++) {
					removeClass(fadeIns[i],"active");
				}
			}, false);

			removeClass(pie2,"active");
		}
	};

	s5chart.onclick = function() {
		this.addEventListener('webkitTransitionEnd', function(event) {
			addClass(pie1,"active");
			showAnimations(this.parentNode);
			this.removeEventListener('webkitTransitionEnd',arguments.callee,false);
		}, false);

		removeClass(this,"active");
	};

} addLoadEvent(function(){pieChart();});


/*: Glossary-interaction
----------------------------------------------------------*/

function glossaryEstimate(scaleNumber,scrollLeft) {
	var estimate = document.getElementById("estimate");
	/*scrollLeft = scrollLeft.replace(new RegExp("px\\b"), "");*/
	/*scrollLeft = Math.round((scrollLeft / 100) * 8);

	estimate.style.left = scrollLeft + "px";*/
	estimate.innerHTML = Math.round((scaleNumber / 100) * 8);
}

function newGlossarySlider(scroller,sliderScale) {
	var sliderStartLeft = 0; /* px */

	slider = new webkit_draggable(scroller, {
		disableY: true,
		onMove: function(i, newLeft) {

			var scrollerSize = scroller.offsetWidth -110;
			var sliderLength = scroller.parentNode.offsetWidth;
			var maxSlide = sliderLength - scrollerSize;

			/*Find the numeric scrollerPosition, i.e. remove the px-suffix*/
			var scrollerPosition = scroller.style.left.replace(new RegExp("px\\b"), "");

			/*if the scroller is dragged beyond the slider, then keep it inside the slider*/
			var scrollLeft = 0;
			if (scrollerPosition < sliderStartLeft) {
				scrollLeft = sliderStartLeft;
			}
			else if (scrollerPosition > maxSlide) {
				scrollLeft = maxSlide + "px";
			}
			else {
				scrollLeft = scrollerPosition + "px";
			}

			/* Move the scroller */
			scroller.style.left = scrollLeft;

			/* Calculations */
			var percentage = (scrollerPosition * 100) / maxSlide;

			if (sliderScale) {
				var scaleNumber = Math.round((sliderScale / 100) * percentage);
				if (scaleNumber < 0) {
					scaleNumber = 0;
				}
				else if (scaleNumber > sliderScale) {
					scaleNumber = sliderScale;
				}

				/* Set the slide-value on the scroller */
				scroller.innerHTML = scaleNumber;

				/* Move the estimate-scroller and set the current value */
				glossaryEstimate(scaleNumber,scrollLeft);

				/*  monitoring */
				if( typeof submitCustomEvent == 'function' ) {
				  clearTimeout( monitorTimeOut );
				  monitorTimeOut = setTimeout( function(){
					  submitCustomEvent( 'slider', 'number of patients', scaleNumber, 'number' );
					}, 1000 );
				}
			}


			return true;
		}

		/*onEnd: function(i,newLeft) {
			setTimeout("resetScroller()",1000);
		}*/
	});
}

function initGlossary() {
	if(!document.getElementById("glossaryContainer")) {return;}

	var glossaryContainer = document.getElementById("glossaryContainer");
	var glossary = document.getElementById("glossary");

	glossaryContainer.onclick = function() {
		addClass(glossary,"active");
	};

	newGlossarySlider(document.getElementById("glossaryScroller"),5000);

} addLoadEvent(function(){initGlossary();});


/*: People-interaction
----------------------------------------------------------*/
var peopleSelected = 0;
var people = "";

function selectPeople(amount,selected) {
	if (!people) {return;}

	if (!selected) {
		for (var i = 0; i < people.length; i++) {
			if (i < amount) {
				addClass(people[i],"selected");
				removeClass(people[i],"difference");
			} else {
				removeClass(people[i],"selected");
				removeClass(people[i],"difference");
			}
		}
	}
	else {
		for (var x = 0; x < people.length; x++) {
			if (x < selected) {
				addClass(people[x],"selected");
			}
			if (x >= selected && x < amount) {
				addClass(people[x],"difference");
			}
			if (selected > amount && x >= amount && x < selected) {
				addClass(people[x],"difference");
			}
		}
	}
}

function newPeopleSlider(scroller) {
	var sliderStartTop = 0; /* px */

	slider = new webkit_draggable(scroller, {
		disableX: true,
		onMove: function(i, newLeft) {

			/*scroller.style.top = 0;*/
			var scrollerSize = scroller.offsetHeight;
			var sliderLength = scroller.parentNode.offsetHeight;
			var maxSlide = sliderLength - scrollerSize;

			/*Find the numeric scrollerPosition, i.e. remove the px-suffix*/
			var scrollerPosition = scroller.style.top.replace(new RegExp("px\\b"), "");

			/*if the scroller is dragged beyond the slider, then keep it inside the slider*/
			var scrollTop = 0;
			if (scrollerPosition < sliderStartTop) {
				scrollTop = sliderStartTop;
			}
			else if (scrollerPosition > maxSlide) {
				scrollTop = maxSlide + "px";
			}
			else {
				scrollTop = scrollerPosition + "px";
			}

			/* Move the scroller */
			scroller.style.top = scrollTop;

			/* Calculations */
			var percentage = Math.round((scrollerPosition * 100) / maxSlide);

			if (percentage < 0) {
				percentage = 0;
			}
			if (percentage > 100) {
				percentage = 100;
			}

			document.getElementById("peopleResult").innerHTML = "%" + percentage;
			selectPeople(percentage);
			peopleSelected = percentage;

			return true;
		}
	});
}


function peopleResult() {
	selectPeople(64,peopleSelected);
	document.getElementById("peopleResult").innerHTML = "64%";

	/*  monitoring */
	if( typeof submitCustomEvent == 'function' ) {
		  submitCustomEvent( 'slider', 'localised pain percentage', peopleSelected, 'number' );
	}

	peopleSelected = 0;
}


function initPeople() {
	if(!document.getElementById("people")) {return;}

	var peopleList = document.getElementById("people");
	people = peopleList.getElementsByTagName("li");

	newPeopleSlider(document.getElementById("peopleScroller"));

	/*document.getElementById("peopleResult").onclick = function() {
		peopleResult();
		return false;
	};*/
} addLoadEvent(function(){initPeople();});
