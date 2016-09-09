$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:1000,
  });
});

var lastScrollTop = 0;
var skipToScrollCounter = 0;
var skip = document.getElementById("skip");
var skipTop = skip.getBoundingClientRect();
var skip2 = document.getElementById("skip2");
var skip2Top = skip2.getBoundingClientRect();
var sectionPreview = document.getElementById("preview");
var sectionPreviewTop = sectionPreview.getBoundingClientRect();
var windowHeight = screen.height/1.2;

document.onscroll = function() {
	navSticky();
	watchTransform();
	skipTo();
};

function navSticky() {
	if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("nav2").className = "nav2-sticky"; 
    }
    else {
        document.getElementById("nav2").className = "";
    }
}

function watchTransform() {		
   	var newScrollTop = $(this).scrollTop();
   	if (newScrollTop > lastScrollTop){
       $(".watch").animate({
		top: "-=1"
		}, 200);
   	}
   	else {
      $(".watch").animate({
		top: "+=1"
		}, 200);
   	}
   	lastScrollTop = newScrollTop;
}

function skipTo() {
	var bottomScroll = document.body.scrollTop + windowHeight;
   	var newScrollTop = $(this).scrollTop();

   	if (newScrollTop > skipToScrollCounter) {
      	if (bottomScroll >= skipTop.top - 30 && bottomScroll <= skipTop.top + 30) {
	   	   	$('body').animate({
		    	scrollTop: skipTop.top+250
			});
			$(".watch-s1").removeClass("watch watch-anime");
			$(".watch-s2").addClass("watch watch-anime");			
		}
		if (bottomScroll >= skip2Top.top - 30 && bottomScroll <= skip2Top.top + 30) {
	   	   	$('body').animate({
		    	scrollTop: skip2Top.top+250
			});
			$(".watch-s2").removeClass("watch watch-anime");
			$(".watch-s4").addClass("watch watch-anime");			
		}
		if (bottomScroll >= sectionPreviewTop.top - 30 && bottomScroll <= sectionPreviewTop.top + 30) {
			$(".watch-s4").removeClass("watch watch-anime");
		}
	}
  	else if (newScrollTop < skipToScrollCounter) {
  	 	if (bottomScroll >= skipTop.top + windowHeight-30 && bottomScroll <= skipTop.top + windowHeight+30) {
	   	   	$('body').animate({
			   	scrollTop: 0
			}); 
	   	   	$(".watch-s1").addClass("watch watch-anime");
	   	   	$(".watch-s2").removeClass("watch watch-anime");
   		}
   		if (bottomScroll >= skip2Top.top + windowHeight-30 && bottomScroll <= skip2Top.top + windowHeight+30) {
	   	   	$('body').animate({
			   	scrollTop: skipTop.top+250
			}); 
	   	   	$(".watch-s2").addClass("watch watch-anime");
	   	   	$(".watch-s4").removeClass("watch watch-anime");
   		}
   		if (bottomScroll >= sectionPreviewTop.top + windowHeight-30 && bottomScroll <= sectionPreviewTop.top + windowHeight+30) {
	   	   	$(".watch-s4").addClass("watch watch-anime");
   		}
   	}
   	skipToScrollCounter = newScrollTop;
}
