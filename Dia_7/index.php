<!DOCTYPE html>
<html>
    <head>
        <title>App</title> 
	<meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <link rel="stylesheet" href="http://code.jquery.com/mobile/1.1.0-rc.1/jquery.mobile-1.1.0-rc.1.min.css" />
	<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.1.0-rc.1/jquery.mobile-1.1.0-rc.1.min.js"></script>
        <script data-main="scripts/main" src="scripts/require.js"></script>
    </head>
    <body>
    
    <div data-role="page" id="home"> 
        <div data-role="header">Day 7</div> 
        <div data-role="content">            
            This is the home page
        </div>
    </div>  
          
    <!-- Dialog for movie information-->
    <div data-role="page" data-rel="dialog" id="dialog" data-theme="e">
            <div data-role="header" data-theme="a">
                    <h1>Quotes</h1>
            </div><!-- /header -->
            <div data-role="content" data-theme="a" id="moviedata">
                <div  id="quote" style="text-align:center">fhfgmhfgh</div>
                <div class="ui-bar ui-bar-a">
                    <a href="#home" data-role="button">OK</a> 
                </div> 
            </div><!-- /content -->
            
    </div><!-- /page -->

    
    </body>
</html>

