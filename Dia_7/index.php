<?php 
    $title = "HTML5 Practice";
    $subtitle = "Day 4";
?>

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title><?php echo "$title: $subtitle"; ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <link rel="stylesheet" href="http://code.jquery.com/mobile/1.1.0-rc.1/jquery.mobile-1.1.0-rc.1.min.css" />
        
             
        <!-- default javascript content -->
        <!-- include your default js file here -->
        <script data-main="scripts/main" src="scripts/require.js"></script>
    </head>
    <body>
        <div data-role="page" id="home"> 
        <header>
            <h1><?php echo "<span class='title'>$title</span>: <span class='subtitle'>$subtitle</span>"; ?></h1>
        </header>   
      
         <a href="#dialog" class="speak" data-rel="dialog" data-role="button" data-theme="a">Speak</a> 
        <!-- add your content here -->
        <h3>-- Enjoy! --</h3>
        
        
        <footer>
            <div><?php echo $title; ?> v1.0</div>
            <div>@author Alberto Miranda <a href="mailto:alberto@nextive.com">&lt;alberto@nextive.com&gt;</a></div>
            <div>@author Esteban Abait <a href="mailto:esteban.abait@nextive.com">&lt;esteban.abait@nextive.com&gt;</a></div>
        </footer>
        </div> 
        
        <div data-role="page" data-rel="dialog" id="dialog" data-theme="e">
            <div data-role="header" data-theme="a">
                    <h1>Quotes</h1>
            </div><!-- /header -->
            <div data-role="content" data-theme="a" id="moviedata">
                <div  id="quote" style="text-align:center"></div>
                <div class="ui-bar ui-bar-a">
                    <a href="#home" data-role="button">OK</a> 
                </div> 
            </div><!-- /content -->            
        </div><!-- /page -->
        
    </body>
</html>