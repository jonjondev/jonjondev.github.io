$(document).ready(function(){
  
  var meme = $("#meme")

  meme.click(function(){ 
  	$('html, body').animate({
	    scrollTop: $("#my-story")
	},500);
  });
})