//fire functions//
var mixer = mixitup('.mixContainer');
var mixContainer = document.querySelector('.mixContainer');
            var mixer = mixitup(mixContainer);
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
	WOW.prototype.addBox = function(element){
    this.boxes.push(element);
};
$('.wow').on('scrollSpy:exit',function(){
	var element = $(this);
	element.css({
			'visibility' : 'hidden',
			'animation-name' : 'none'
	}).removeClass('animated');
	wow.addBox(this);
});
new WOW().init();
$('.all').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
		
		gallery: {
			enabled: true,
			preload: [1,1],
			navigateByImgClick: true,			
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button			
			tPrev: 'Previous (Left arrow key)', // title for left button
			tNext: 'Next (Right arrow key)', // title for right button
			tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
		}
	});

$('.owl-carousel').owlCarousel({
	loop:true,
	autoWidth:true,
	margin:30,
	
	items:6,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
					items:1
			},
			600:{
					items:2
			},
			1000:{
					items:3
			}
	}
		})

//fire functions//

// loader beg
$(document).ready(function(){
	$(".spinner").fadeOut(2000,function(){
			$(".loader").fadeOut(1000,function(){
			$("body").css("overflow","auto")
	})
})})

// loader end
//changing bg of nav during scrolling//
$(document).ready(function(){
  $(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var navHeight=$('.navbar').height();
	  if (scroll > navHeight) {
		var navHeight=$('.navbar').height();
		$(".navbar").css("background" , "#fff",5000);
	  }

	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
  })
})
//
//changing bg of nav during scrolling//
//btn scroll top //
$(".scrTop").click(function(){
	$("body,html").animate({scrollTop:0},2000,function(){
			$(".scrTop").fadeOut()  
	})

})
//habndle the btn moving to  top //
$(window).scroll(function(){
var services=$("#services").offset().top;
var scrTop=$(window).scrollTop();
if(scrTop >=services){
	$(".scrTop").fadeIn()  ;
}
else{
	$(".scrTop").fadeOut(2000)  ;
}
})
//habndle the btn moving to  top //
//btn scroll top //
// moving between sections and changing font color of nav li during click //
$(".nav-link").click(function(){
   
	var aHref=$(this).attr("href");
var d = $(aHref).offset().top-30;
$(this).parent().siblings().removeClass('active');
$(this).parent().children().addClass('active');
			$("body,html").animate({scrollTop:d},1200);
	})
	// moving between sections and changing font color of nav li during click //
	//changing font color of nav li during scroll to its sections//
	var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
//changing font color of nav li during scroll to its sections//
//handle active tab of porofolio //
$(".control").click(function(){
$(this).parent().children().css({"backgroundColor" : "transparent ","color":"#000"});
$(this).css({"backgroundColor" : "#5658db","color":"#fff"});
	})
	//handle active tab of porofolio //
	
		
	/* /////////////////////////////////
		Validate Contact Form
   	   ///////////////////////////////// */	

		
		//handle Validation of user name//
			$("#name").blur(function(){
				var namRegex =/^[a-zA-Z]{5,9}[-_. /s]{0,1}[a-zA-Z]{5,9}$/;
				var userName =$("#name").val();
			if (namRegex.test(userName)==false){
				$(".alertName").fadeIn(500);
				$("#name").css("color","#dc3545");
				
			}
			else{
				$(".alertName").fadeOut(1);
				$("#name").css("color","#20c997");
			}
			})
			//end of Validation regex of user name//
			//handle Validation of user email//
			$("#email").blur(function(){
				var mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
				var userMail=$("#email").val();
			if (mailRegex.test(userMail)==false){
				$(".alertMail").fadeIn(500);
				$("#email").css("color","#dc3545");
				
			}
			else{
				$(".alertMail").fadeOut(1);
				$("#email").css("color","#20c997");
			}
			})
			// end of handle Validation of user mail//
			//handle Validation of user subject//
			$("#subject").blur(function(){
				var subRegex =/^[a-zA-Z]{5,10}$/;
				var usersub =$("#subject").val();
			if (subRegex.test(usersub)==false){
				$(".alertSub").fadeIn(500);
				$("#subject").css("color","#dc3545");
				
			}
			else{
				$(".alertSub").fadeOut(1);
				$("#subject").css("color","#20c997");
			}
		})
		//end of handle Validation of user subject//
		//handle Validation of user message//
		$("#message").blur(function(){
			if ($("#message").val().length != 40){
			$(".alertMsg").fadeIn(500);
			$("#message").css("color","#dc3545");
			
		}
		else{
			$(".alertMsg").fadeOut(1);
			$("#message").css("color","#20c997");
		}
	})
	//end of handle Validation of user message//
		//handle text area length
		$("textarea").keyup(function(){
			var le =$(this).val().length;
			 var character = 40 - le;
		 console.log(character);
if (character<=0){
	$("#char").text("your available character finished") ;
	
}
else{
		$("#char").text(character);
		
}
									 });
   //handle text area length