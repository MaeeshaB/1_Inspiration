// Scroll.js
// Work with Cookies

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
		if(target != ""){
			$('html, body').stop().animate({
				'scrollTop': $(target).offset().top
			}, 1000, 'swing', function () {
				window.location.hash = target;
			});
		}
	}); 

	// Navigation

	$(".hamburger").click(function(){
		$(this).removeClass('active');
		$('.close').addClass('active');
		$(".nav").addClass("opened");
		$("body").addClass("modal-open");
		
	});

	$(".nav .close").click(function(){
		$(this).removeClass('active');
		$('.hamburger').addClass('active');
		$(".nav").removeClass("opened");
		$("body").removeClass("modal-open");
	}); 

	// Popups
  	$("a.sign-in").click(function(){
		$('.sign-up-popup').removeClass('show'); 
		$('.restore-password-popup').removeClass('show');
		$('.sign-in-popup').addClass('show');
		$('body').addClass('modal-open');
	});
	
	$(".sign-in-popup").click(function(event){
		if($(event.target).closest(".close-btn").length || $(event.target).closest(".popup-content").length==0){
			$('.sign-in-popup').removeClass('show');
			$('body').removeClass('modal-open');			
		}
	});

  	$("a.sign-up").click(function(){
		$('.sign-in-popup').removeClass('show');
		$('.sign-up-popup').addClass('show');
		$('body').addClass('modal-open');
	});

  	$(".sign-up-popup").click(function(){
		if($(event.target).closest(".close-btn").length || $(event.target).closest(".popup-content").length==0){
			$('.sign-up-popup').removeClass('show');
			$('body').removeClass('modal-open');			
		}
	});

  	$("a.restore-password").click(function(){
		$('.sign-up-popup').removeClass('show'); 
		$('.sign-in-popup').removeClass('show');
		$('.restore-password-popup').addClass('show');
		$('body').addClass('modal-open');
	});

	$(".restore-password-popup").click(function(event){
		if($(event.target).closest(".close-btn").length || $(event.target).closest(".popup-content").length==0){
			$('.restore-password-popup').removeClass('show');
			$('body').removeClass('modal-open');			
		}
	});

	// Отправка заявки
		
	$(".ajax-form").submit(function(event){
		event.preventDefault();
	 
		var form = $(this),
			term = form.serialize(),
			url = form.attr("action");
	 
		var posting = $.post( url, term );
	 
		posting.done(function(data) {
			form.html('<div class="lead medium ajax-form-result">'+data+'</div>');
		});
	});

	// slick

	if($(".block-1 .slider-1").length>0){
		$(".block-1 .slider-1").each(function(index){
			$(this).slick({
				dots: false,
				arrows: false, 
				slidesToShow: 1, 
				slidesToScroll: 1,
				swipeToSlide:true,
				infinite: false,
				variableWidth: false,				
				variableHeight: true,
				responsive: [
					{
					  breakpoint: 991.98,
					  settings: {
						centerMode: true,
						centerPadding: '0px',
					  }
					}
				]				
			});
			
			$(this).parent().find(".slick-prev").click(function(){
				$(this).closest(".block-1").find(".slider-1").slick('slickPrev');
			});
			
			$(this).parent().find(".slick-next").click(function(){
				$(this).closest(".block-1").find(".slider-1").slick('slickNext');
			});
		});
	}

	if($(".slider-3-container .slider-3").length>0){
		$(".slider-3-container .slider-3").each(function(index){
			$(this).slick({
				dots: false,
				arrows: false, 
				slidesToShow: 3, 
				slidesToScroll: 1,
				swipeToSlide:true,
				infinite: false,
				variableWidth: true,				
				variableHeight: true,				
			});
			
			$(this).parent().find(".slick-prev").click(function(){
				$(this).closest(".slider-3-container").find(".slider-3").slick('slickPrev');
			});
			
			$(this).parent().find(".slick-next").click(function(){
				$(this).closest(".slider-3-container").find(".slider-3").slick('slickNext');
			});			
			
		});
	}

	if($(".slider-4-container .slider-4").length>0){
		$(".slider-4-container .slider-4").each(function(index){
			$(this).slick({ 
				dots: false,
				arrows: false, 
				slidesToShow: 3, 
				slidesToScroll: 1,
				swipeToSlide:true,
				infinite: false,
				variableWidth: true,				
				variableHeight: true,				
			});
			
			$(this).parent().find(".slick-prev").click(function(){
				$(this).closest(".slider-4-container").find(".slider-4").slick('slickPrev');
			});
			
			$(this).parent().find(".slick-next").click(function(){
				$(this).closest(".slider-4-container").find(".slider-4").slick('slickNext');
			});				
			
		});
	}

	if($(".slider-5-container .slider-5").length>0){
		$(".slider-5-container .slider-5").each(function(index){
			$(this).slick({ 
				dots: false,
				arrows: false, 
				slidesToShow: 3, 
				slidesToScroll: 1,
				swipeToSlide:true,
				infinite: false,
				variableWidth: true,				
				variableHeight: true,				
			});
			
			$(this).parent().find(".slick-prev").click(function(){
				$(this).closest(".slider-5-container").find(".slider-5").slick('slickPrev');
			});
			
			$(this).parent().find(".slick-next").click(function(){
				$(this).closest(".slider-5-container").find(".slider-5").slick('slickNext');
			});			
			
		});
	}

	if($(".slider-6-container .slider-6").length>0){
		$(".slider-6-container .slider-6").each(function(index){
			$(this).slick({ 
				dots: false,
				arrows: false, 
				slidesToShow: 3, 
				slidesToScroll: 1,
				swipeToSlide:true,
				infinite: false,
				variableWidth: true,				
				variableHeight: true,				
			});
			
			$(this).parent().find(".slick-prev").click(function(){
				$(this).closest(".slider-6-container").find(".slider-6").slick('slickPrev');
			});
			
			$(this).parent().find(".slick-next").click(function(){
				$(this).closest(".slider-6-container").find(".slider-6").slick('slickNext');
			});			
			
		});
	}
	
	//swiper

	if($(".slider-2").length>0){
		var swiper = new Swiper(".slider-2", {
			slidesPerView: 'auto',
			spaceBetween: 30,
			grabCursor: true,		
			scrollbar: {
			  el: ".swiper-scrollbar",
			  hide: true,
			},
		});
	}
	
	//Save btn

  	$(".save-btn").click(function(){
		if ($(this).hasClass('saved')) {
            $(this).removeClass('saved');
		} else {
            $(this).addClass('saved');
        };
	}); 

  	$(".play-btn").click(function(){
		if ($(this).hasClass('paused')) {
            $(this).removeClass('paused'); 
            $('.audio-container').removeClass('show');
			$('.audio-container').find("audio").get(0).pause();
		} else {
            $(this).addClass('paused');
            $('.audio-container').addClass('show');
        };
	}); 



	// Гугл карта
	// В HTML нужно воткнуть <script src="//maps.googleapis.com/maps/api/js?key=AIzaSyCwL1fgUC6AMz6et2ejriLjU2wVj11YAK8" type="text/javascript"></script>
	// или wp_enqueue_script("googlemap", 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCwL1fgUC6AMz6et2ejriLjU2wVj11YAK8', array("jquery"), $ver);

	if($("#map").length>0){

		var map, markers_data, markers, marker;
		markers_data = [];
		markers = [];
		
		$(".marker").each(function(){
			var coords = $(this).attr("data-coords").split(",");
			markers_data[markers_data.length] = {coordX:parseFloat(coords[0]),coordY:parseFloat(coords[1]),img:$(this).attr("data-placemark")}
		});

		// Подключаем карту
		var mapOptions = {
			zoom: 14,
			minZoom:3,
			maxZoom:18,
			mapTypeControl: false,
			streetViewControl: false,
			//fullscreenControl:false,
			//scaleControl:false,
			//zoomControl:false,
			
			center: new google.maps.LatLng(55.753282, 37.621816),
			styles: [	{"featureType":"all",		"stylers":[			{"saturation":0},			{"hue":"#e7ecf0"}		]	},	{"featureType":"road",		"stylers":[			{"saturation":-70}		]	},	{"featureType":"transit",		"stylers":[			{"visibility":"off"}		]	},	{"featureType":"poi",		"stylers":[			{"visibility":"off"}		]	},	{"featureType":"water",		"stylers":[			{"visibility":"simplified"},			{"saturation":-60}		]	}]
		};
		map = new google.maps.Map(document.getElementById('map'), mapOptions);
		
		//var bounds = new google.maps.LatLngBounds();
		
		function initMarkers(map, markers_data) {
			for(var i=0; i<markers_data.length; i++) {
				// create markers
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(markers_data[i].coordX,markers_data[i].coordY),
					map: map,
					icon: {
						url: markers_data[i].img, 
						size: new google.maps.Size(22, 33), // размер пикчи
						origin: new google.maps.Point(0,0), 
						anchor: new google.maps.Point(11, 33), // коррекция позиции: половина ширины, высота
						scaledSize: new google.maps.Size(22, 33)
					}
				});

				//bounds.extend(new google.maps.LatLng(markers_data[i].coordX,markers_data[i].coordY));
				
				markers.push(marker);		
			}
			return markers;
		}
		
		// Призываем маркеры на карту
		markers = initMarkers(map, markers_data);

		//map.fitBounds(bounds);
		
		// Приближение карты до маркера
		
		$(".js-zoom-to-marker").click(function(){
			var coords = $(this).attr("data-coords").split(",");
			map.setCenter(new google.maps.LatLng(parseFloat(coords[0]), parseFloat(coords[1])));
			map.setZoom(17);
		});

	}

});
