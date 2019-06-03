<?php

//接收用户提交的用户名密码
if(empty($_POST['username']) || empty($_POST['password'])) {
  exit('请提交用户名和密码');
}

//校验
$username = $_POST['username'];
$password = $_POST['password'];
if($username === 'admin' && $password === '123') {
  exit('恭喜你登陆成功');
}

exit('用户名或密码错误');
//响应
