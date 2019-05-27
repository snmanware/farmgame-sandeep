
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<?php
$FOLDER = 
define("ABSPATH",$_SERVER["DOCUMENT_ROOT"]."/".$FOLDER);

$server_path = $_SERVER['DOCUMENT_ROOT'];
$path=$server_path;
$path .= "/farmgame-local/farmgame.php";
include_once($path);
$array_all = array('Round','farmer','cow1','cow2','bunny1','bunny2','bunny3','bunny4');
$f = new farmClass($array_all);
$f->total_round = 50;
$str_table = $f->create_table();
   //$str_table = create_table($array_all,$n);
?>

<div class="container">
<div class="row">
<div><?php echo $str_table; ?></div><div><button id="starGame" >Start</button></div>
</div>
</div>
<script>
$('document').ready(function(){
console.log('hello sandeep');

$('#starGame').on('click',function(){
console.log('start');

});

});
</script>



