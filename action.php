<?php
$city = $_GET['city'];
$data = json_decode(file_get_contents('./link.json'), true);

print_r(json_encode($data[$city]));