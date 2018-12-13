$(function(){

	// var arr = [];
	// if(getCookie("shopcar")!=null && getCookie("shopcar")!=undefined){
	// 	arr = JSON.parse(getCookie("shopcar"))
	// }

	// for(var i = 0; i<arr.length; i++){
	// 	$(".secondline").prepend("<td><input class='inp' type='checkbox'></td><td class='sectd'><div><img id='bg1' src="+arr[i].img+"><p class='p1'>"+arr[i].fike+"</p></div></td><td>￥<span id='pri'>"+arr[i].price+"</span></td><td class='thtd'><a id='dels' href='javacript:void(0)'>-</a><input type='text' id='sp1' value="+arr[i].number+"><a id='ads' href='javacript:void(0)'>+</a></td><td>￥<span id='smallcount'>"+arr[i].total+"</span></td><td><span id='del'>删除</span></td>")
	// 	var counts = arr[i].number;
	// 	var total = arr[i].number*arr[i].price;
	// 	$("#liss").prepend("<div class='infor'><div class='inform'><div class='imp'><img src="+arr[i].img+"><h4><span>"+arr[i].fike+"</span></h4></div></div><p class='words'><span>"+arr[i].price+"</span>元<span id='nn'>"+arr[i].number+"</span></p></div>");

	// 	$("#c1").html(counts);
	// 	$("#c2").html(counts);
	// 	$("#c3").html(total);
	// 	$("#fonts").html(total)	
	// 	$("#smallcount").html(total);	
	// }

	// 放大镜效果
	$(".uls").children("li").children("img").click(function(){
		var src = $(this).attr("src");
		$("#bigBox").children("img").attr("src",src);
		var ul = $(".uls img").length;
		console.log(ul);
		for(var i=0;i<ul;i++){
			$("#showBox").css({"background":"url(img1/FS375_000_0"+(i+1)+".jpg) no-repeat",
								"background-size":"744px 736px"
		});

		}			
	})

	$(".a1").click(function(){
		$("#t").css("top","0")
	})

	// 顶部吸附效果
	$(window).scroll(function(){
	if($(window).scrollTop()>=623){
		console.log($(window).scrollTop());
		$(".goodlists").css("display","none");
		$(".lists").css("display","none");
		$(".sec").css("display","none");
		$(".header_top").css("display","none");
		$("#ib").css("opacity","1");
		$("#price").css("opacity","1");
		$("#buy").css("opacity","1");
		$("#buys").css("opacity","1");
		$(".goods").css({
			"position":"fixed",
			"top":"0",
			"z-index":"999"
		})
	}else{
		$(".goodlists").css("display","block");
		$(".lists").css("display","block");
		$(".sec").css("display","block");
		$(".header_top").css("display","block");
		$("#price").css("opacity","0");
		$("#buy").css("opacity","0");
		$("#buys").css("opacity","0");
		$("#ib").css("opacity","0");

		$(".goods").css({
			"position":"static",
			"top":""
		})
	}
	})
	
	// $("#car").click(function(){
	// 	$("#mask").css("height",$(document).height());
	// 	$("#mask").css("width",$(document).width());
	// 	$("#mask").show();

	// 	var top = ($(window).height() - $(".win").height())/2; 
	// 	var left = ($(window).width() - $(".win").width())/2; 
	// 	var scrollTop = $(document).scrollTop(); 
	// 	var scrollLeft = $(document).scrollLeft(); 
	// 	$(".win").css( { position : 'fixed', 'top' : top + scrollTop, left : left + scrollLeft } ).show();
	// })


	$(".close").click(function(){
		$(".win").css("display","none");
		$("#mask").css("height","0");
		$("#mask").css("width","0");

	})

	$("#cl").click(function(){
		$(".win").css("display","none");
		$("#mask").css("height","0");
		$("#mask").css("width","0");
	})

	$(".del").click(function(){
		var count = $("#numb").val();
		count--;
		if(count<0){
			paserFloat($("#numb").val())++;
		}
		$("#numb").val(count);
		$("")
	})

	$(".add").click(function(){
		var count = $("#numb").val();
		count++;
		$("#numb").val(count)
	})

	var arr = [];
	if(getCookie("shopcar")!=null && getCookie("shopcar")!=undefined){
		arr = JSON.parse(getCookie("shopcar"))
	}

	$("#car").click(function(){
		$("#mask").css("height",$(document).height());
		$("#mask").css("width",$(document).width());
		$("#mask").show();

		var top = ($(window).height() - $(".win").height())/2; 
		var left = ($(window).width() - $(".win").width())/2; 
		var scrollTop = $(document).scrollTop(); 
		var scrollLeft = $(document).scrollLeft(); 
		$(".win").css( { position : 'fixed', 'top' : top + scrollTop, left : left + scrollLeft } ).show();
		var count = $("#numb").val();
		var price = $("#hand").html();
		// $("#c1").html(count);
		// $("#c2").html(count);
		// $("#c3").html(count*price);


		var goods = {
			"price":$("#hand").html(),
			"number":$("#numb").val(),
			"total":$("#hand").html()*$("#numb").val(),
			"fike":$("#fk").html(),
			"img":$("#simg").attr("src")
		}
		// parseFloat($("#numb").val());
		if(arr.length!=0){
			var flag = true;
			for(let i=0;i<arr.length;i++){
				if(arr[i].fike == goods.fike){
					var n = parseFloat(arr[i].number);
					arr[i].number = n+parseFloat($("#numb").val());
					flag = false;
				}
			}
			flag&&arr.push(goods);
		}else{
			arr.push(goods);
		}

		var str = JSON.stringify(arr);
		addCookie("shopcar",str,7);
		for(let i=0;i<arr.length;i++){
			var counts = arr[i].number;
			var total = arr[i].number*arr[i].price;
			$("#liss").prepend("<div class='infor'><div class='inform'><div class='imp'><img src="+arr[i].img+"><h4><span>"+arr[i].fike+"</span></h4></div></div><p class='words'><span>"+arr[i].price+"</span>元<span>"+arr[i].number+"</span></p></div>");

			$("#c1").html(counts);
			$("#c2").html(counts);
			$("#c3").html(total);
		}

	})


	// $("#buynow").click(function(){
	// 	var str = getCookie("shopcar");
	// 	if(str==null){
	// 		return;
	// 	}
	// })

});