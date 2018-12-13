$(function(){

	var arr = [];
	if(getCookie("shopcar")!=null && getCookie("shopcar")!=undefined){
		arr = JSON.parse(getCookie("shopcar"))
	}

	for(var i = 0; i<arr.length; i++){
		$(".secondline").prepend("<td><input class='inp' type='checkbox'></td><td class='sectd'><div><img id='bg1' src="+arr[i].img+"><p class='p1'>"+arr[i].fike+"</p></div></td><td>￥<span id='pri'>"+arr[i].price+"</span></td><td class='thtd'><a id='dels' href='javacript:void(0)'>-</a><input type='text' id='sp1' value="+arr[i].number+"><a id='ads' href='javacript:void(0)'>+</a></td><td>￥<span id='smallcount'>"+arr[i].total+"</span></td><td><span id='del'>删除</span></td>")
		var counts = arr[i].number;
		var total = arr[i].number*arr[i].price;
		$("#liss").prepend("<div class='infor'><div class='inform'><div class='imp'><img src="+arr[i].img+"><h4><span>"+arr[i].fike+"</span></h4></div></div><p class='words'><span>"+arr[i].price+"</span>元<span id='nn'>"+arr[i].number+"</span></p></div>");

		$("#c1").html(counts);
		$("#c2").html(counts);
		$("#c3").html(total);
		$("#fonts").html(total)	
		$("#smallcount").html(total);	
	}

	$("#dels").click(function(){
		var count = $("#sp1").val();
		count--;
		if(count<0){
			paserFloat($("#sp1").val())++;
		}
		$("#sp1").val(count);
		$("#c1").html(count);
		$("#c2").html(count);
		$("#fonts").html($("#sp1").val()*$("#pri").html())
		$("#smallcount").html($("#sp1").val()*$("#pri").html())
		$("#c3").html(count*$("#pri").html())
		$("#nn").html(count);

	})

	$("#ads").click(function(){
		var count = $("#sp1").val();
		count++;
		
		$("#sp1").val(count);
		$("#c1").html(count);
		$("#c2").html(count);
		$("#fonts").html($("#sp1").val()*$("#pri").html())
		$("#smallcount").html($("#sp1").val()*$("#pri").html())
		$("#c3").html(count*$("#pri").html())
		$("#nn").html(count);
	})

	// if($("#checkall").checkbox){

	// }

	$("#clearalls").click(function(){
		$("#mask").css("height",$(document).height());
		$("#mask").css("width",$(document).width());
		$("#mask").show();

		var top = ($(window).height() - $(".win").height())/2; 
		var left = ($(window).width() - $(".win").width())/2; 
		var scrollTop = $(document).scrollTop(); 
		var scrollLeft = $(document).scrollLeft(); 
		$(".win").css( { position : 'fixed', 'top' : top + scrollTop, left : left + scrollLeft } ).show();
	});

	$(".close").click(function(){
		$(".win").css("display","none");
		$("#mask").css("height","0");
		$("#mask").css("width","0");

	})

	$("#cl2").click(function(){
		$(".win").css("display","none");
		$("#mask").css("height","0");
		$("#mask").css("width","0");
	})

	$(".pagess").click(function(){
		removeCookie("shopcar","hi",-7);
		$(".win").css("display","none");
		$("#mask").css("height","0");
		$("#mask").css("width","0");
		$(".secondline").remove();
		$("#fonts").html(0);
		removeCookie("shopcar","hi",-3);
	})

	// 有问题代码
	// var sec = $(".tab .secondline").length;
	// console.log(sec)
	// for(var i=0;i<sec;i++){
	// 	if($(".inp")[i].checked==true){
	// 		$("#cleardelss").click(function(){
	// 			$(".secondline")[i].remove();
	// 		})
	// 	}
	// }

	$("#cleardelss").click(function(){
		$(".secondline").remove();
		$("#fonts").html(0);
		removeCookie("shopcar","hi",-3);	
	})	

	$("#del").click(function(){
		$(".secondline").remove();
		$("#fonts").html(0);
	})
	



});