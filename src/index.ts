import {fecha} from './fech';
import  './styles.scss';
import  $ from 'jquery';

$(document).ready(function(e) {
    var fecha1,fecha2 : fecha.Fecha;
    var d1,m1,a1,d2,m2,a2 :number;
// suma
  $('#registrar').on('click',function(e){
    procesar();
    e.preventDefault();
  });
        function procesar(){
          fecha1 = new fecha.Fecha( $("#ano1").val() , m1= $("#mes1").val(),  d1= $("#dia1").val());
          fecha1.getdate();
           fecha2 = new fecha.Fecha( $("#ano2").val() ,$("#mes2").val(),$("#dia2").val());
           fecha2.getdate();
            $("#eldia1").val(fecha1.getdia());
            $("#eldia2").val(fecha2.getdia());
            $("#totafecha1").val(fecha1.getdate());
            $("#totafecha2").val(fecha2.getdate());
            $("#calc_d").val(fecha.Fecha.calc_date(fecha1,fecha2));

      }

});
