$(function(){

	var arr = [];
	if(getCookie("shopcar")!=null && getCookie("shopcar")!=undefined){
		arr = JSON.parse(getCookie("shopcar"))
	}

	for(var i = 0; i<arr.length; i++){
		$(".secondline").prepend("<td><input class='inp' type='checkbox'></td><td class='sectd'><div><img id='bg1' src="+arr[i].img+"><p class='p1'>"+arr[i].fike+"</p></div></td><td>￥<span id='pri'>"+arr[i].price+"</span></td><td class='thtd'><a id='dels' href='javacript:void(0)'>-</a><input type='text' id='sp1' value="+arr[i].number+"><a id='ads' href='javacript:void(0)'>+</a></td><td>￥<span id='smallcount'>"+arr[i].total+"</span></td><td><span id='del'>删除</span></td>")
		var counts = arr[i].number;
		var total = arr[i].number*arr[i].price;
		$("#liss").prepend("<div class='infor'><div class='inform'><div class='imp'><img src="+arr[i].img+"><h4><span>"+arr[i].fike+"</span></h4></div></div><p class='words'><span>"+arr[i].price+"</span>元<span>"+arr[i].number+"</span></p></div>");

		$("#c1").html(counts);
		$("#c2").html(counts);
		$("#c3").html(total);
		$("#fonts").html(total)	
		$("#smallcount").html(total);	
	}


	
})