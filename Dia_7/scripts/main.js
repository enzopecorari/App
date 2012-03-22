/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

require.config({
        paths : {
            jquery : 'jquery',
            jquerymobile : 'jquerymobile'
        }
    });
require(["models/Director","models/Movie","jquery","jquerymobile"],function(Director,Movie){
        var alien = new Movie("Alien","7","4598");
        console.log(alien.title);
        var RidleyScott = new Director("Ridley Scott");        
        RidleyScott.setQuotes(["Good movie","disastrous","wretched","poor","inadequate","passable","solid","excellent","formidable","outstanding","brilliant","magnificent","world class","supernatural","mythical","utopian","divine"]);
        alien.setDirector(RidleyScott);
        $(".speak").click(function(){
        alien.getDirector().speak();
        })
    });


