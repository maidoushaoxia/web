<?php
$zhangsan = array('name' => '张三','age' => 18);

header('Content-type:application/json');

echo json_encode($zhangsan);
