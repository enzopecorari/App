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
    
    $("#btn").click(function(event) {
        var param = $("#alias").val();
        $.mobile.showPageLoadingMsg("d", "Loading", false);
        $.post('api/dispatcher.php',
            {service: 'welcome.hello', params: {"name": ""+param+""}},
            function(res) {
                var resul = $("#result");
                resul.addClass('resultado');
                resul.removeClass('error'); 
                resul.html(res);
            });
        $("#alias").val('');
        $("#alias").focus();       
        
    });
    $("#result").ajaxError(function(event, request, settings){
        $(this).addClass('error');
        $(this).removeClass('resultado'); 
        $(this).html("Error en " + settings.url + ": "+ request.responseText);
    }); 
    
    $(document).keypress(function(event) {
        if (event.which == 27) { 
        $.mobile.hidePageLoadingMsg();
    }
    });
    
    $('div[id="list"] ul[data-role="listview"] a').live("click", function() {  
        var dataidentity = $(this).attr("data-identity");  
            var param = null;   

            $.post('api/dispatcher.php',
            {service: 'movie.getTop', params: {"name": ""+param+""}},
            function(resu) {               
                    myObject = eval(resu);
                    $('#moviedata').html("<div class='ui-bar ui-bar-e'><h3>Titulo: "+myObject[dataidentity].Name+"</h3><div><img src='"+myObject[dataidentity].BoxArt.LargeUrl+"'/></div><p>Synopsis: "+myObject[dataidentity].Synopsis+"</p></div>");
                    $.mobile.changePage('#moviedialog', {transition: 'pop', role: 'dialog'});   
            });     
    });  
    
 
   
