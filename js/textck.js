(function($){
		$.fn.switching=function(para){
			
			this.each(function() {
				var uslides=$(this).find('#slides');
				var sli=uslides.find('li');
				var count=sli.length;
				var that=this;
				var index=0;
				var time=null;

				$(this).find('.ck-prev').on('click', function() {
					var old=index;
					if (index<=0) {
						index=count-1;
					}else{
						index--;
					}
					change.call(that,index,old);
				});
				
				$(this).find('.ck-next').on('click', function() {
					var old=index;
					if (index>=count-1) {
						index=0;
					} else {
						index++;
					}
					change.call(that,index,old);
				});

				$(this).find('#slides1 li').each(function(i) {
					$(this).on('click', function() {
						change.call(that,i,index);
						index=i;
					});	
				});

				$(this).on('mouseover',function() {
					if (para.autoPlay) {
						clearInterval(time);
					}
					$(this).find('.side0').css('opacity', '0.7');
				});

				$(this).on('mouseleave',function() {
					if (para.autoPlay) {
						startAutoPlay();
					}
					$(this).find('.side0').css('opacity', '0.3');
				});

				startAutoPlay();

				function startAutoPlay(){
					if (para.autoPlay) {
						time = setInterval(function(){
							var old = index;
							if (index>=count - 1) {
								index=0;
							}else{
								index++;
							}
							change.call(that,index,old);
						},2000);
					}
				}

			});
		};

	function change(show,hide){
		 $(this).find('#slides li').eq(hide).stop().animate({opacity: 0});
         $(this).find('#slides li').eq(show).show().css({opacity: 0}).stop().animate({opacity: 1});
         $(this).find('#slides1 li').removeClass('current');
         $(this).find('#slides1 li').eq(show).addClass('current');
	}

	})(jQuery);