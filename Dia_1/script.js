/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

    $(document).ready(function() {
 
   // alert("Page loaded");
    $("#alias").focus();
    });     
    
    $("#alias").keypress(function(event) {
    if (event.which == 13) {
        $("#btn").click();        
    }
    });      
    
    $("#button").click(function(event) {
        var param = $("#alias").val();
        $.post('api/dispatcher.php',
            {service: 'welcome.hello', params: {"name": ""+param+""}},
            function(res) {
                var result = $("#result");
                result.html(res);
                result.addClass('resultado');
                result.removeClass('error');                 
            });
        $("#alias").val('');
        $("#alias").focus();
        });
    
    .$("#btnm").click(function(event) {
        var param = null;        
        $.post('api/dispatcher.php',
        {service: 'movie.getTop', params: {"name": ""+param+""}},
        function(resu) {               
              var myObject = eval(resu);
              var lista = "";
              var i=0;
              lista += "<div>";
              while (myObject[i]!=null){
                 lista += "<div class='titulo'>"+myObject[i].Name+"</div>"; 
                 lista += "<div><img src='"+myObject[i].BoxArt.SmallUrl+"'/></div>";
                 lista += "<div class='resultado'> Year:"+myObject[i].ReleaseYear+"</div>"; 
                 lista += "<div>Synopsis: "+myObject[i].Synopsis+"</div>";
                 ++i;
              } //se puede poner un floated div al medio?              
              lista += "</div>";
              $("#standout").html(lista);
              $("#the_lights").fadeTo(1,0);
              document.getElementById("the_lights").style.display="block";
              $("#the_lights").fadeTo("slow",0.6);
        });
    });
    
    var result = $("#result");
    result.ajaxError(function() {
    result.addClass('error');
    result.removeClass('resultado');
    result.text("ERROR");  
    });
    
$(document).keypress(function(event) {
        if (event.which == 13 || event.which == 27) {
            document.getElementById("the_lights").style.display="block";
            $("#the_lights").fadeTo("slow",0); 
            document.getElementById("the_lights").style.display="none";
        }
    });