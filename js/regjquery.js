$(function(){

	var regobj = /^1[3-8]\d{9}$/i;
	var regobj2 = /^\d{6,20}$/i;

	$("#username").blur(function(){
		if($("#username").val()!=""&&regobj.test($("#username").val())){
			$(".dt").css("background-color","skyblue","color","white");
			$.get("checkname.php",{username:$("#username").val()},
			function(date){
				console.log(date);
				if(date==1){
					$("#spanError").css("display","block");
					$("#spanError").html("手机号码已经注册");
				}else{
					$("#spanError").css("display","block");
					$("#spanError").html("");
				}
			})
		}else{
			$("#spanError").css("display","block");
			$("#spanError").html("请输入正确的手机号码");
		}
	})

	$("#userpass").blur(function(){
		if($("#userpass").val()!=""&&regobj2.test($("#userpass").val())){
			$("#spanError1").css("display","block");
			$("#spanError1").html("");

		}else{
			$("#spanError1").css("display","block");
			$("#spanError1").html("密码的长度必须大于6位数");
			// setTimeout(function(){
			// 	$("#spanError1").css("display","none");
			// },1000)
		}
	})


	$("#userp").blur(function(){
		if($("#userp").val()!=""&&regobj2.test($("#userp").val())){
			$("#spanError2").css("display","block");
			$("#spanError2").html("");
			if($("#userp").val()!=$("#userpass").val()){
			$("#spanError2").css("display","block");
			$("#spanError2").html("两次密码输入不一样");	
			}
		}else{
			$("#spanError2").css("display","block");
			$("#spanError2").html("密码的长度必须大于6位数");
			// setTimeout(function(){
			// 	$("#spanErro2").css("display","none");
			// },1000)
		}
	})

	$("#getma").click(function(){
		var str="";
		for(var i=0;i<4;i++){
			str+=parseInt(Math.random()*9);
		}
		$(".random").html(str);
	})

	$("#yzm").blur(function(){
		if($("#yzm").val()!=$("#please").val()){
			$("#spanError3").css("display","block");
			$("#spanError3").html("验证码输入有误");	
		}else{
			$("#spanError3").css("display","block");
			$("#spanError3").html("");
		}
	})


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

	

})