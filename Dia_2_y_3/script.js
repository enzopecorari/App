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
        if (event.which != 13) { 
        $.mobile.hidePageLoadingMsg();
    }
    });