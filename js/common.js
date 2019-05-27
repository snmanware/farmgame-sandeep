var GAMECLICK = 0;
var stop_counter = 50;
//var bunnies = [];
var bunnies = {4:0, 5:0, 6:0,7:0};
var total_animal_obj = {1:1,2:2,3:3,4:4,5:5,6:6,7:7};
var total_animal_array = [];
var cows ={2:0,3:0};
var farmer = {1:0};
var animal_type= {'farmer':'farmer','cows':'cows','bunnies':'bunnies'};
var FARMERCLICKS = 0;
var BUNNYCLICK = 0
var COWSCLICK = 0
var ANIMAL_STATUS = 0;


$('document').ready(function(){
  $('#starGame').on('click',function(e){
      if(GAMECLICK<stop_counter){
          GAMECLICK++;
          FARMERCLICKS++;
          BUNNYCLICK++;
          COWSCLICK ++;
          total_animal = Object.keys(total_animal_obj).length;
          total_animal_array = Object.values(total_animal_obj);
          var random_num 	= total_animal_array[Math.floor(Math.random()*total_animal_array.length)];
          $('#tr'+GAMECLICK).css('background-color','#ffff99');
          var randomtd = $('#tr'+GAMECLICK+' td').eq(random_num);
          $(randomtd).actionOn();
      }else{
          var result_msg = checkWhoisRemained();
          $('#game_status strong').text(result_msg);
          return false;
      }
  });
});

$.fn.actionOn = function(){
    var actiontd = $(this);
    $('#totalClicks').text(GAMECLICK);
    var data_num= actiontd.data('number');
    if(data_num>3) bunnies[data_num] = 1;
    if(data_num>1 && data_num<4) cows[data_num] = 1;
    if(data_num ==1) farmer[data_num] = 1;
    if(BUNNYCLICK ==8){
        checkWhoIsDead(bunnies);
        BUNNYCLICK=0;
    }
    if(COWSCLICK==10){
        checkWhoIsDead(cows);
        COWSCLICK =0;
    }
    if(FARMERCLICKS==15){
        checkWhoIsDead(farmer);
        FARMERCLICKS =0;
    }
    actiontd.css('background-color','green').html('fed');
}
function checkWhoisRemained(){
  //console.log('total_animal_obj',total_animal_obj);
  var lb = Object.keys(bunnies).length; // count remained bunnies
  var lc = Object.keys(cows).length;// count remained cows
    
  if(lb >0  && lc>0){
      msg = 'Conratulations! You are the Winner !';
    }else{
      var msg ='You loss the game! To win you need a cow and a bunnie alive';
      
    }
    alert(msg);
}
function checkWhoIsDead(obj_animal){
    $.each(obj_animal,function(i,v){ 
        if(obj_animal[i]==0){
            $("td[data-number='"+i+"']").css('background-color','green');
            $("td[data-number='"+i+"']").addClass('dead');
            delete obj_animal[i];
            delete total_animal_obj[i];
            changeScoreBoard(i);
        }else{
            obj_animal[i] =0;
        } 
    });
}
function changeScoreBoard(animal_number){
  $('#th'+animal_number).css('background-color','red');
    if(animal_number==1){
        $('.animal-all').css('background-color','red');
        var msg = 'Game is Over! You loss the Game! , Please try you luck again.';
        $('#game_status strong').text(msg);
        alert(msg);

        $('#starGame').attr("disabled", true);
            $('#farmer_dead').text('1').css('background-color','red');
            $('#totalClicks').text(GAMECLICK);
    }
    if(animal_number>1 && animal_number<4){
        var cd = parseInt($('#cows_dead').text());
        cd = cd+1;
        $('#cows_dead').text(cd);
    }
    if(animal_number>3){
      var bd = parseInt($('#bunnies_dead').text());
      bd=bd+1;
      $('#bunnies_dead').text(bd);
  }
}



