var GAMECLICK = 0;
//var bunnies = [];
var bunnies = {4:0, 5:0, 6:0,7:0};
var total_animal_obj = [1,2,3,4,5,6,7];
var cows =[];
var farmer = [];
var liveAnimalCount =7;
var counterClick = 0;
var delet_number = 0;


$('document').ready(function(){


$('#starGame').on('click',function(e){
  GAMECLICK++;
  counterClick++;
  delet_number = counterClick-1;
  if(GAMECLICK ==15){
    counterClick = 0;
  }
  
 delete total_animal_obj[delet_number];
 console.log('total_animal_obj',total_animal_obj,'counterClick',counterClick);
  var random_num 	= total_animal_obj[Math.floor(Math.random()*total_animal_obj.length)];
  //console.log('random',random_num);
  var randomtd = $('#tr'+GAMECLICK+' td').eq(random_num);
  //var td_id = $(randomtd).attr('id');
  $(randomtd).actionOn();
  //$(randomtd).css('background-color','red');
  //console.log(' randomtd', td_id);
  
});

});
$.fn.actionOn = function(){
  var actiontd = $(this);
  $('#totalClicks').text(GAMECLICK);
  $('#counterClicks').text(counterClick);
  
  var data_num= actiontd.data('number');
  if(data_num>3){
    bunnies[data_num] = 1;
    
  }
  if(data_num>1 && data_num<4){
    cows[data_num] = 1;
  }
  if(data_num ==1){
    cows[data_num] = 1;
  }
  if(counterClick ==8){
    
    $.each(bunnies,function(i,v){ 
      console.log(i,v);
       if(bunnies[i]==0){
         console.log('this buniie died',i);
         $("td[data-number='"+i+"']").css('background-color','gray');
         $("td[data-number='"+i+"']").addClass('dead');
         delete bunnies[i];
         
       }else{
         console.log('herer in else');
        bunnies[i] =0;
       } 
      });
  }
  if(counterClick ==10){
    
    cows.forEach(function(v,i){ 
       if(v==0){
         console.lof('this cow died',i);
         $("td[data-number='"+i+"']").css('background-color','gray');
         
       } 
      })
  }
  if(counterClick ==15){
    counterClick = 0;
    farmer.forEach(function(v,i){ 
       if(v==0){
         console.lof('this former died',i);
         $("td[data-number='"+i+"']").css('background-color','gray');
         
       } 
      })
  }
  console.log('bunnies',bunnies);
  actiontd.css('background-color','red').html('fed');
  
}

function mapObject(animal_object){
  var animal_object = $.map (animal_object,function(value, index) {
   return 0;
});
}

$.fn.iterateAnimalObject = function(){ 
  console.log('in iterator',$(this));
}