<?php
	header("Content-type:text/html;charset=utf-8");

	// 接收数据
	$username = $_GET['username'];
	$userpass=$_GET['userpass'];
	// 连接数据库
	$conn=mysql_connect("localhost","root","root");
	if(!$conn){
		// die("连接失败",mysql_error());
	}else{
		// 查询数据库
		mysql_select_db("feike",$conn);
		// 执行sql语句
		$sqlstr="select * from feikes where users = '$username' and userpass='$userpass'";
		$result = mysql_query($sqlstr,$conn);

		if(mysql_num_rows($result)==0){
			$sqlstr = "insert into feikes(users,userpass) values($username,$userpass)";
			// 执行sql语句
			$result = mysql_query($sqlstr,$conn);

			// 关闭数据库
			mysql_close($conn);
			if($result==1){
				echo "1";
			}else{
				echo "0";
			}
		}else{
			echo "-1";
		}
	}
?>