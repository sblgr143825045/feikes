// $(function(){
// 	$(".yanz").click(function(){
// 		$(".yanz1").removeClass("current1")
// 		$(this).css("background-color","blue")
// 	});
// 	$(".yanz1").click(function(){
// 		$(".yanz").css("background-color","#cccccc")
// 		$(this).addClass("current1")
// 	});
// });
// 
 $(function(){
	$(".yanz").click(function(){
		$(".yanz1").css("background-color","#cccccc")
		$(this).css("background-color","#0c82d9")
		$(".co").css("height","100px");
		$("#dologins").css("display","none");
		$("#d-logins").css("display","block");
	});
	$(".yanz1").click(function(){
		$(".yanz").css("background-color","#cccccc")
		$(this).css("background-color","#0c82d9")
		$(".co").css("height","164px");
		$("#d-logins").css("display","none");
		$("#dologins").css("display","block");
	});

	$(".tx a:first-child").hover(function(){
		$(this).css("background-position","0 -33px")
	},function(){
		$(this).css("background-position","0 0")
	});

	$(".tx a:last-child").hover(function(){
		$(this).css("background-position","-99px -33px")
	},function(){
		$(this).css("background-position","-99px 0")
	});


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

});

