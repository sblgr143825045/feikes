<?php
	header("Content-type:text/html;charset=utf-8");

	// 接收数据
	$username = $_GET['username'];
	// 连接数据库
	$conn=mysql_connect("localhost","root","root");
	if(!$conn){
		// die("连接失败",mysql_error());
	}else{
		// 查询数据库
		mysql_select_db("feike",$conn);
		// 执行sql语句
		$sqlstr="select * from feikes where users = '$username'";
		$result = mysql_query($sqlstr,$conn);
		mysql_close($conn);
		if(mysql_num_rows($result)==0){
			echo "0";
		}else{
			echo "1";
		}
		
	}
?>