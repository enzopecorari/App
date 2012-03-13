/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

    $(document).ready(function() {
    alert("Page loaded");
    $("#alias").focus();
    });
    
    $("#alias").keypress(function(event) {
    if (event.which == 13) {
        $("#btn").click();
    }
    });
    $("#button").click(function(event) {
        event.preventDefault();
        var param = $("#alias").val();

        $.post('api/dispatcher.php',
            {service: 'welcome.hello', params: {"name": ""+param+""}},
            function(res) {
                $("#result").html(res);
                $("#result").addClass('resultado');
                $("#result").removeClass('error');      
            });
        $("#alias").val('');
        $("#alias").focus();
    });
    $("#result").ajaxError(function() {
    $("#result").addClass('error');
    $("#result").removeClass('resultado');
    $("#result").text("ERROR");  
    });
