    var param = null;        
    $.post('api/dispatcher.php',
    {service: 'movie.getTop', params: {"name": ""+param+""}},
    function(resu) {               
            var myObject = eval(resu);
            var lista = "";
            var i=0;
            while (myObject[i]!=null){
                lista += "<li><a data-identity='"+i+"' href='javascript:void(0);' data-rel='dialog'><img src='"+myObject[i].BoxArt.SmallUrl+"'/>";
                lista += "<h3>"+myObject[i].Name+"</h3></a></li>"; 
                ++i;
            } 
            $('#moviees').html(lista);
            $('#moviees').listview('refresh');
    });
    
   
