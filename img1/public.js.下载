//文本框输入
$.fn.setDefauleValue = function() {
    return this.each(function() {
    var defauleValue = $(this).val();
	$(this).val(this.defaultValue).css("color","#a9a9a9");
        $(this).focus(function() {
            if ($(this).val() == defauleValue) {
                $(this).val("").css("color","#000");
            }
        }).blur(function() {
            if ($(this).val() == "") {
                $(this).val(defauleValue).css("color","#a9a9a9");
            }
        });
    });
}
$(function(){
	$(".search_box .txt").focus(function() {
            $(".hot_words").hide();           
        }).blur(function() {
            $(".hot_words").show();    
        });
    //购物车
    $(".cart_section").hover(
		function(){
			$(this).find(".mini-cart-list").show();
			$(this).find(".mini_cart").addClass("mini-cart-on");
            
		},function(){
			$(this).find(".mini-cart-list").hide();
            $(this).find(".mini_cart").removeClass("mini-cart-on");
		}
	);
    //返回顶部
	var windowW = $(window).width();
	if($(document).scrollTop() != 0) 
		$("#backto-top").css('display','block');
	$(window).scroll(function (){
		var st=$(document).scrollTop();
		(st > 10)?$("#backto-top").fadeIn():$("#backto-top").css('display','none');
	});
	$(".backto-top","#backto-top").click(function(){
		$('html,body').animate({scrollTop:'0px'},200);
		return false;
	});
    $(".home_show a").last().addClass("last");
    $(".star_goods").each(function(){
        $(this).find(".star_item").last().addClass("starLast");
    })
	
   
	//全部商品分类
	/*
	$("#classify").bind("mouseover",function(){
		$("#category_list").show();
	});
	$("#classify").bind("mouseleave",function(){
		//$("#category_list").hide();
	});	
	$('.category_list .category_main').mouseover(function(){
		var index=$('.category_list .category_main').index(this);
		$('.category_list .category_main').find(".category_info").removeClass('categoryInfo').eq(index).addClass('categoryInfo');
		$('.categoryDetail').hide().eq(index).show();	
		$('.left-nav').addClass('bd_hover');			
	});
	$('.classify .left-nav').mouseleave(function(){
		$('.category_list .category_main').find(".category_info").removeClass('categoryInfo');
		$('.left-nav').removeClass('bd_hover');
	});
	$(".category_main").live('mouseout',function(){
		$(this).find(".categoryDetail").hide();
	});
	*/
	
	$('.category_list .category_main').hover(
		function(){
			var index=$('.category_list .category_main').index(this);
			$('.category_list .category_main').find(".category_info").removeClass('categoryInfo').eq(index).addClass('categoryInfo');
			$('.categoryDetail').hide().eq(index).show();
		},function(){
			$(this).find(".category_info").removeClass('categoryInfo');
			$(this).find(".categoryDetail").hide();
		}
	)
	
    //微信
    $(".header_top .weixin").hover(
		function(){
			$(this).find("img").show();
		},function(){
			$(this).find("img").hide();
		}
	);
 
	
    $(".search_box .txt").setDefauleValue();
    $(".reg_content .txt").setDefauleValue();
    $(".find_wrapper .txt").setDefauleValue();
    $(".address_layer .txt").setDefauleValue();
    $(".address_layer textarea").setDefauleValue();
    
    $(".nav_list li").last().addClass("last");

    //全部商品分类
    /*$(".category_list").each(function(){
        var item = $(this).find(".perfume_list").length;
        if( item <= 11){
            var H = (421-item)/item;
            $(this).find(".perfume_list").height(H);
            $(".perfume_list a").css("line-height",H+"px");    
        }
        else{
            var H = (592-item)/item;
            $(this).find(".perfume_list").height(H);
            $(".perfume_list a").css("line-height",H+"px");    
        }      
    });*/
    //搜索页
    $(".search_item").each(function() {
        if (($(this).index() + 1) % 2 == 0) {
            $(this).addClass("searchMargin");
        }
    });
    //订单页收货地址
    $(".address_list").each(function() {
        if (($(this).index() + 1) % 4 == 0) {
            $(this).addClass("addressLast");
        }
    });
    
    $(".pay_item").click(function(){
		$(this).find("span").addClass("selected").end().siblings().find("span").removeClass("selected");  
		$(this).parent().parent().siblings().find("span").removeClass("selected");
    });
    $(".point_info").each(function() {
        if (($(this).index() + 1) % 3 == 0) {
            $(this).css("margin-right", "0");
        }
    });
    $(".point_info").each(function() {
        if (($(this).index() + 1) % 3 == 0) {
            $(this).css("margin-right", "0");
        }
    });
    $(".team_info").each(function() {
        if (($(this).index() + 1) % 3 == 0) {
            $(this).css("margin-right", "3px");
        }
    });
    $(".spikes_info").each(function() {
        if (($(this).index() + 1) % 2 == 0) {
            $(this).css("margin-left", "30px");
        }
    });

});

//tab切换
function tabFun(tab,content,current){
	var conNum = 0;
	$(tab).click(function(){
		$(this).addClass(current).siblings().removeClass(current);
		conNum =$(this).index();
		$(content).eq(conNum).show().siblings().hide();				
	});
}

//方法调用
$(function(){
	//ie下a标签消除虚线
	$("a").click(function(){
		$(this).blur();					  
	});
	 //地址选择
	
	$(".address_list").live("click",function(){
		$(this).addClass("order_selected").siblings().removeClass("order_selected");
		$(this).siblings().find('.order_address .address-detail .defauleAdd').addClass('none');
		$(this).siblings().find('.order_address .address-detail .defauleAdd').addClass('none');
		
		$(this).siblings().find('.order_address .address-detail .is-def').removeClass('none');
		$(this).find('.order_address .address-detail .defauleAdd').removeClass('none');
	});
	//侧栏去最后元素下边框
	$(".sidebarBoxContent .borderBot:last-child").removeClass("borderBot");

	//商品详细页商品介绍、商品评论、商品咨询、售后服务tab切换
	tabFun(".informationTitle li",".informationCon>div","current");
	//秒杀列表所有活动、正在进行、即将开场、往期活动
	tabFun(".groupButtonBox a",".seckillMainContent>div","groupCurrentBtn");
	//我的订单tab切换
	tabFun(".myOrdersTab li",".myOrdersCon>div","current");
	tabFun("#reg_tab h3","#reg_con>ul","current");
	//tabFun(".inforTitle a",".information>div","current");
    //添加新收货地址
	$(".layer_bg").height( $(document).height() );
	$(".address_new").click(function(){
		$(".layer_bg").show();
		$(this).find(".address_layer").show();
	});
	$(".address_new").click(function(event){
		var e=window.event || event;
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
	});
	
	$(".edit").click(function(){
		$(".layer_bg").show();
		$(this).parent().find(".address_layer").show();
	});
	$(".refund_address").click(function(event){
		var e=window.event || event;
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
	});
	
	document.onclick = function(){
		$(".address_layer").hide();
		$(".layer_bg").hide();
	};
	$(".agress").click(function(){
		$(this).find("em").toggleClass("selected");
	});
	
	

})

//rate快速评价
; (function($) {
    $.fn.rate = function() {
        var obj = $(this);
        //starRate
        var rateFlag = true;
        obj.find("img").click( function() {
				rateFlag = false;
                var $oldSrc = $(this).attr("src");
                var $newSrc = $oldSrc.replace("starE", "starF");
                var $oldSrc = $oldSrc.replace("starF", "starE");
                $(this).attr("src", $newSrc).prevAll("img").attr("src", $newSrc).end().nextAll("img").attr("src", $oldSrc);
                obj.attr("rate",$(this).parent().find("img").index(this) + 1);
            })
        obj.find("img").mouseover(function() {
                if (rateFlag) {
                    var $oldSrc = $(this).attr("src");
                    var $newSrc = $oldSrc.replace("starE", "starF");
                    $(this).attr("src", $newSrc).prevAll("img").attr("src", $newSrc);
                }
            });
       	obj.find("img").mouseleave(function() {
                if (rateFlag) {
                    var $oldSrc = $(this).attr("src");
                    var $newSrc = $oldSrc.replace("starF", "starE");
                    $(this).attr("src", $newSrc).prevAll("img").attr("src", $newSrc);
                }
            });
    };
})(jQuery);
