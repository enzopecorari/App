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

        $.post('api/dispatcher.php',
            {service: 'welcome.hello', params: {"name": ""+param+""}},
            function(res) {
                var resul = $("#result");
                resul.html(res);
                resul.addClass('resultado');
                resul.removeClass('error');  
            });
        $("#alias").val('');
        $("#alias").focus();
    });
    $("#result").ajaxError(function(event, request, settings){
        $(this).html("Error en " + settings.url + ": "+ request.responseText);
        $(this).addClass('error');
        $(this).removeClass('resultado'); 
    }); 