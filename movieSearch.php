<?php

$query = $_GET['query'];
$apikey = 'r3mds54zy4fkjfqtkgtqe5c7';
$endpoint = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=' . $apikey . '&q=' . urlencode($query) . '&page_limit=10';

$contents = file_get_contents($endpoint);
echo $contents;

?>