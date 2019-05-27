<?php
class farmClass{
    //public  $str_table ='';
    public $total_round=0;
    public $array_tr_id =array();
    public $array_all_id = array();
    public $array_all = array();
    
    function __construct($array_farm){
      $this->array_all = $array_farm;
    }
    function get_table_td($i){
      $str_td = '';
      foreach($this->array_all as $k=>$v){
          $r= '';
          if($v == 'Round') $r = $i;
          $str_td .= '<td id="'.$v.$i.$k.'" data-number = "'.$k.'" >'.$r.'</td>';
          $this->array_tr_id[$k]=$v; 
      }
    return $str_td;
  }
    function get_table_header(){
        $str_th = '';
        foreach($this->array_all as $k=>$v){
            $str_th .= '<th id="th'.$k.'" class="animal-all" >'.$v.'</th>';
        }
        return $str_th;
    }

    function create_table(){
      $str_table='';
      $str_table = '';
      $str_table_header = $this->get_table_header();
      $str_table .='<tr>'.$str_table_header.'</tr>';
      for ($i = 1; $i <= $this->total_round; $i++) {
        $str_table_td ='';
        $str_table_td = $this->get_table_td($i);
        //print_R($array_tr_id);
        $str_table .='<tr  data-round="round" id="tr'.$i.'" >'.$str_table_td.'</tr>';
        $this->array_all_id[$i] = $this->array_tr_id;
      }
      $str_table .= '';
      return $str_table;
    }
  }

?>