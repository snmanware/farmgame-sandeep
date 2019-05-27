
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<?php
if($_SERVER['HTTP_HOST']) $DOMAIN = $_SERVER['HTTP_HOST']; else $DOMAIN = $_SERVER['SERVER_NAME'];
$FOLDER = 'farmgame';
define("SERVER_ABS_PATH",$_SERVER["DOCUMENT_ROOT"]."/".$FOLDER);
define("SITE_URL",$DOMAIN."/".$FOLDER);

$classFile= SERVER_ABS_PATH."/farmClass.php";

require_once($classFile);

$array_all = array('Round','farmer','cow1','cow2','bunny1','bunny2','bunny3','bunny4');

$f = new farmClass($array_all);
$f->total_round = 50;

$str_table = $f->create_table();
   //$str_table = create_table($array_all,$n);
?>

<div class="container">
      <div class="row">
            <div>
                  <table id="formtable" class="" border="1" width="500">
                        <?php echo $str_table; ?>
                  </table>
            </div>
            <div>
            <h3>Game Statistics</h3>
            
                  <table width="50" border="1">
                        <tr>
                            <th>Your Clicks </th>
                            <th>Faramer Dead</th>
                            <th>Cows Dead</th>
                            <th>Bunnies Dead</th>
                        </tr>
                        <tr>
                            <td id="totalClicks">0</td>
                            <td id="farmer_dead">0</td>
                            <td id="cows_dead">0</td>
                            <td id="bunnies_dead">0</td>
                        </tr>
                  </table>
                  <button id="starGame" >Click</button>
                  <label>Your Clicks 
                        <span id="totalClicks">0</span>
                  </label>
                  <label>Game Sataus  
                        <span id="Game_ends"></span>
                  </label>
                  
            </div>
      </div>
</div>

<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  <script>
  var SITEURL = "<?php echo SITE_URL; ?>";
  </script>

  <script src="js/common.js"></script>

  



