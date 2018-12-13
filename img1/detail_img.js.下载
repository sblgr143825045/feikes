;(function($){
	$.fn.autoImgSlide = function(){
		return this.each(function(){
			var s = $(this);
                        var $maxList;
						//console.log($('.detail-desc .screen'));
                        if($('.detail-desc div.screen').length == $('.detail-desc div.dis_table').length && $('.detail-desc div.screen').length > 0){
							$maxList = s.find('.detail-desc div.screen');

                        }else{
                                return false;
                        }  
			var len = $maxList.length;
			var $minList;
			starting();
            
			function starting(){
                //添加图标
				var nums='';
				for(var i=0;i<len;i++){
					var nums = nums+'<li data-index='+(i+1)+'><a><span class="dot"></span></a></li>';
				}
				var numList = '<ol class="mi1scroll-pagination">'+nums+'</ol>';
				s.append(numList);
				$minList = $('.mi1scroll-pagination li');
				$minList.eq(0).addClass('active').siblings().removeClass('active');
                                var o = $("body,html").scrollTop() + 60;
                               
                                $maxList.each(function() {
									//让图片背景高度自适应高度，防止图片过小，设置背景颜色
									$(this).css("height",$(window).height()-60);
                                    $(this).css('background-color','black');
                                    //$(this).css('border','1px solid yellow');
                                    //$(this).css('text-align','center');
                                    //$(this).attr({ height:$(window).height()-60});//同时设置二个属性
                                    
                                });
                                 //第一次加载时，判断当前位置
                                var img_first = parseInt($('.detail-desc div.screen:first').offset().top),img_last = parseInt($('.detail-desc div.screen:last').offset().top);
                                if(o < img_first){
                                        $minList.eq(0).addClass('active').siblings().removeClass('active');
                                }else if(o > img_last){
                                        $minList.eq(len-1).addClass('active').siblings().removeClass('active');
                                }else{
                                        $maxList.each(function(index) {
                                            if(index < len -1 && index > 0){
                                                if(parseInt($(this).offset().top) <= o && parseInt($(this).next().offset().top) > o){
                                                        $minList.eq(index).addClass('active').siblings().removeClass('active');
                                                }
                                            }
                                        });
                                } 				
			}
		
			$minList.live('click',function(){	
                                
                                $(this).addClass('active').siblings().removeClass('active');
                                $("body,html").animate({
                                        scrollTop: $('.detail-desc div.screen').eq($minList.index($(this))).offset().top - 60
                                    }, 500);
                        });					
		})
	}
}) (jQuery);



//上下滚动
$(function() {

        var detail_flag = 1;
		$(window).scroll(function() {
			//alert('test scroll');
            var o = $(this).scrollTop(),e = parseInt($("#goodsDetail").offset().top),g;
			if($('.detail-desc div.screen').length == $('.detail-desc div.dis_table').length && $('.detail-desc div.screen').length > 0){
				g = parseInt($('.detail-desc div.screen:last').offset().top);
			}else{
				detail_flag = 0;
			}
            if (o >= e - 1) {
                $("#stayTab").show();
                if(detail_flag == 1){
                    $('#goodsDesc').autoImgSlide(); //生成滚动特效
                    detail_flag = 0;
                }else{
                    $(".mi1scroll-pagination").show();
                }
                var i = $("#goodsSubMenu > ul > li").length;
                $("#goodsSubMenu > ul > li").each(function() {
                    var t = $(this).find("a").attr("data-href");
                    if (t) {
                        var e = $(t).offset().top - 70, n = null;
                        n = $(this).index() < i - 1 ? $(this).next().find("a").attr("data-href") : "#recommend_box";
                        var a = $(n).offset().top;
                        o > e && a > o && $(this).addClass("current").siblings().removeClass("current");
                    }
                });
            } else {
                $("#stayTab").hide();
                $(".mi1scroll-pagination").hide();
            }
            if(o >= g + 80){
                $(".mi1scroll-pagination").hide(); 
            }   
        });
		//点击 tab
        $(".subNav li a").click(function() {
			
            var hs = $(this).attr("data-href");
            $("body,html").animate({
                scrollTop: $(hs).offset().top - 60
            }, 100);
        });
        // 鼠标滑轮滚动后执行的函数
            // delta > 0 = 向上滚动
            // delta < 0 = 向下滚动
            function mousewheelEvent(e) {
				var delta = 0;
				
				e=e || window.event;
				if(e.wheelDelta){//IE/Opera/Chrome
					delta = e.wheelDelta/(-120);
					count=(++count)%2;
					
				}else if(e.detail){//Firefox
					
					delta =e.detail;
				}
                var len = $('.detail-desc div.screen').length,o = $(this).scrollTop()+60,img_first = parseInt($('.detail-desc img:first').offset().top),img_last = parseInt($('.detail-desc img:last').offset().top)+ $('.detail-desc img:last').width();   
                    
				if($('.detail-desc div.screen').length == $('.detail-desc div.dis_table').length && $('.detail-desc div.screen').length > 0){
					if(o >= img_first && o < img_last  && count== 0){
                        $('.mi1scroll-pagination li').each(function(index){
                                if(delta < 0 && index >0){//上滑
                                    if($(this).hasClass('active')){
                                           $('.mi1scroll-pagination li').removeClass('active').eq(index-1).addClass('active');
                                           $("body,html").stop(false,true).animate({
                                                 scrollTop: $('.detail-desc .screen').eq(index-1).offset().top - 60
                                            }, 500);
                                            return false;
                                     } 
                                }else if(delta > 0 && index < len -1){ //下滑
                                    if($(this).hasClass('active')){
                                            $('.mi1scroll-pagination li').removeClass('active').eq(index+1).addClass('active');
                                            $("body,html").stop(false,true).animate({
                                                 scrollTop: $('.detail-desc .screen').eq(index+1).offset().top - 60
                                            }, 500);
                                            return false;
                                     } 
                                }

                        });
						
					} 
				}
            }
           
			var count = 0;  //IE/Opera/Chrome/Safari  鼠标滚动一次，事件触发两次
			/*注册事件*/
			if($('.detail-desc div.screen').length == $('.detail-desc div.dis_table').length && $('.detail-desc div.screen').length > 0){
				if(document.addEventListener){
					document.addEventListener('DOMMouseScroll',mousewheelEvent,false);
				}//W3C
				window.onmousewheel=document.onmousewheel=mousewheelEvent;//IE/Opera/Chrome/Safari
			}else{
				return false;
			}
});	

// 有时候出现图片没有加载出来，导致图片无法自适应
// 等待页面加载完成在改变图片大小
$(function(){
		
		var ww = $(window).width();
		var flag = 1;
		//console.log($(".detail-desc #dis_table img").length);
		$(".detail-desc #dis_table img").each(function(){
				//防止图片过大 
				$($(this)).css("max-width",ww);
				//console.log('begin_load');
				//console.log($(this).load(function(){}));
				flag = 1;
				
				$(this).load(function(){
					//console.log(ww +'--load-desc--'+ $(this).width());
					if($(this).width()<ww){
							$($(this)).css("width",$(this).width());
					}else{
							$($(this)).css("width",ww);
					}
					//console.log($(this).width());
					flag = 0;
				});
				//IE的图片总是从缓存文件里去拿，这就造成load方法根本就不执行，只有是新图片才会走load
				if(flag){
					//console.log(ww +'--111-desc--'+ $(this).width());
					if($(this).width()<ww){
								$($(this)).css("width",$(this).width());
					}else{
								$($(this)).css("width",ww);
					}
					//console.log($(this).width());
				}
				
				//console.log('end_load  '+$(this).width());
					
		});
		//规格参数
		$(".goods-detail-param .container_par .para-info img").each(function(){
				//console.log('par_load');
				$($(this)).css("max-width",ww);
				flag = 1;
				$(this).load(function(){
					//console.log(ww +'--load-par--'+ $(this).width());
					if($(this).width()<ww){
								$($(this)).css("width",$(this).width());
					}else{
								$($(this)).css("width",ww);
					}
					
					//console.log($(this).width());
					flag = 0;	
				});
				
				if(flag){
					//console.log(ww +'--111-par--'+ $(this).width());
					if($(this).width()<ww){
								$($(this)).css("width",$(this).width());
					}else{
								$($(this)).css("width",ww);
					}
					//console.log($(this).width());
				}
				//$($(this)).css("width",1220);
				//$($(this)).css("height",668);
				//$($(this)).css("background-size",'cover');
				$($(this)).css("border",'none');
				//console.log('par_load_end ' + $(this).width());
		});
		/**/		//左右滑动
                /*
                var mySwiper = new Swiper('.swiper-container',{
                  pagination: '.pagination',
                  loop:true,
                  grabCursor: true,
                  paginationClickable: true
                });
                
                $('.arrow-left').bind('click', function(e){
                  e.preventDefault();
                  mySwiper.swipePrev();
                });
                $('.arrow-right').bind('click', function(e){
                  e.preventDefault();
                  mySwiper.swipeNext();
                });
                */
});

$(function(){
		
		var ww = $(window).width();
		$(".detail-desc #dis_table img").css("max-width",ww);
		//规格参数
		$(".goods-detail-param .container_par .para-info img").css("max-width",ww);
});


