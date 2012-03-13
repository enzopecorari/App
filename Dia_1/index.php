<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="styles.css">
        <title>App</title>
    </head>
    <body>
    <script src='https://www.google.com/jsapi' type='text/javascript'></script>
    <script type='text/javascript'>
      //<![CDATA[
        google.load("jquery", "1.7.1");
      //]]>
    </script>
    <br/><br/><br/><br/>
    <input type="text" value="" id="alias" />
    <input type="button" value="click!" id="button" />
    <br/><br/>

    <div id="result"></div>
  
    <script>
    window.onload = function(){ alert("Page loaded"); }
    $('#alias').focus();
    
    
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
    
    </script> 
    
    </body>
</html>
