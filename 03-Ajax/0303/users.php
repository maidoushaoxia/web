<?php

/*
  返回的响应就是一个JSON的内容(返回的就是数据)
  对于返回数据的地址一般我们称之为接口（形式上是 Web 形式)
*/ 

//users.php?id=1 :id为1的用户信息

$data = array(
  array(
    'id' => 1,
    'name' => '张三'
  ),
  array(
    'id' => 2,
    'name' => '李四'
  ),
  array(
    'id' => 3,
    'name' => '王五'
  ),
  array(
    'id' => 4,
    'name' => '赵六'
  ),
);

if(empty($_GET['id'])){
  //没有ID,获取全部
  //HTTP协议中约定报文的内容就是字符串,二我们需要传递给客户端的信息是一个有结构的数据
  //一般采用JSON作为数据格式
  $json = json_encode($data); //[{"id":1,"name":"张三},{}]
  echo $json;
}else{
  //传递了ID只获取一条
  foreach($data as $item){
    if($item['id'] != $_GET['id']) continue;
    $json = json_encode($item);
    echo $json;
  }
}
