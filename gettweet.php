<?php
require_once("twitteroauth.php");
$consumerKey = "gf22MlZbQGd2zqbweWr23J45f";
$consumerSecret = "P2P4zP8iVNsyfgu8dyc6VQ60M6fI3VDyJHv7DvkQGEUjQmXdOi";
$accessToken = "331085973-MtGBU13vXvoxMKAmV5vi4E7wliWuoMYqQiQcvQVH";
$accessTokenSecret = "xfBtBGvIcnZNj68i1VKyf1Bm2dBYqvfr62o9gXuo3Vgqm";
$twObj = new TwitterOAuth($consumerKey,$consumerSecret,$accessToken,$accessTokenSecret);


$req = $twObj->OAuthRequest('https://api.twitter.com/1.1/statuses/user_timeline.json','GET',array('count'=>'10'));
header("Content-Type: text/javascript; charset=utf-8");
echo $req;
exit();
?>