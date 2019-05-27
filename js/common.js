var GAMECLICK = 0;
//var bunnies = [];

var bunnies = {4:0, 5:0, 6:0,7:0};
var total_animal_obj = {1:1,2:2,3:3,4:4,5:5,6:6,7:7};
var cows ={2:2,3:3};
var farmer = {1:1};

var animal_type= {'farmer':farmer,'cows':cows,'bunnies':bunnies};
var liveAnimalCount =7;
var counterClick = 0;
var delet_number = 0;
var count_bunneis = 0
var count_cows = 0
var count_farmer = 0



$.fn.actionOn = function(){
    var actiontd = $(this);
    $('#totalClicks').text(GAMECLICK);
    $('#counterClicks').text(counterClick);
    console.log('totalClicks',GAMECLICK,'counterClick',counterClick,'animal_type',animal_type);
    
    var data_num= actiontd.data('number');
    if(data_num>3) bunnies[data_num] = 1;
    if(data_num>1 && data_num<4) cows[data_num] = 1;
    if(data_num ==1) cows[data_num] = 1;
    
    if(count_bunneis ==8){
        $.each(bunnies,function(i,v){ 
            console.log(i,v,delet_number);
            if(bunnies[i]==0){
                $("td[data-number='"+i+"']").css('background-color','gray');
                $("td[data-number='"+i+"']").addClass('dead');
                delete bunnies[i];
                delete total_animal_obj[i];
                console.log('total_animal_obj',total_animal_obj,'bunnies',bunnies);
            }else{
                console.log('herer in else');
                bunnies[i] =0;
            } 
        });
        count_bunneis=0;
    }
    console.log('bunnies',bunnies,'total_animal_obj',total_animal_obj);
    actiontd.css('background-color','red').html('fed');
}

$('document').ready(function(){
    $('#starGame').on('click',function(e){
        GAMECLICK++;
        counterClick++;
        count_bunneis++;
        count_cows ++;
        count_farmer ++;
        delet_number = counterClick-1;
        
        total_animal = Object.keys(total_animal_obj).length;
        total_animal_array = Object.values(total_animal_obj);
        var random_num 	= total_animal_array[Math.floor(Math.random()*total_animal_array.length)];
        var randomtd = $('#tr'+GAMECLICK+' td').eq(random_num);
        $(randomtd).actionOn();
    });
  
  });