//accordion function
function toggle_accordion(clickedBtn){
		var nextSibling = clickedBtn.nextElementSibling;
		var panelHeight = window.getComputedStyle(nextSibling).getPropertyValue("height");
		
		if(panelHeight == "0px") {
			nextSibling.style.height = nextSibling.scrollHeight + "px";  
		}
		
		else {
			nextSibling.style.height = "0px";
		}
	
	}
//accordion function end
//stop slider when scrolling 600px
var $document = $(document),
    $element = $('.slide'),
    className = 'hasScrolled';

$document.scroll(function() {
  if ($document.scrollTop() >= 1080) {
    // user scrolled 600 pixels or more;
    // do stuff
    $element.carousel('pause');
  } else {
    $element.carousel('');
  }
});




//stop slider end