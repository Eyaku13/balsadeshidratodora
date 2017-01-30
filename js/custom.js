(function ($) {

	new WOW().init();
	var jWindow;
	jQuery(window).load(function() { 
			jWindow = $(window).width();
			if (jWindow <= 768) {
				$(".navbar-fixed-top").addClass("top-nav-collapse");
			}
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if (jWindow > 768) {
			if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
			} else {
				$(".navbar-fixed-top").removeClass("top-nav-collapse");
			}
		}
		
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		/***************** Fancybox ******************/
		$(".youtube-media").on("click", function(e) {
			var jWindow = $(window).width();
			if (jWindow <= 768) {
				return;
			}
			$.fancybox({
				href: this.href,
				padding: 4,
				type: "iframe",
				'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			});
			return false;
		});
		$(".youtube-media").fancybox({
		  padding: 0,
		  helpers: {
			overlay: {
			  locked: false
			}
		  }
		});
	});
})(jQuery);


