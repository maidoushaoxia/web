<?php
header("Content-Type:application/json;charset=utf-8");
$rows = [];
$rows[] = ["name" => "tom"];
$rows[] = ["name" => "jerry"];
$rows[] = ["name" => "hh"];
$rows[] = ["name" => "xixi"];
echo json_encode($rows);
