/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

require(["models/Director","models/Movie"],function(Director,Movie){
        var alien = new Movie("Alien","7","4598");
        var RidleyScott = new Director("Ridley Scott");        
        RidleyScott.setQuotes(["Good movie","disastrous","wretched","poor","inadequate","passable","solid","excellent","formidable","outstanding","brilliant","magnificent","world class","supernatural","mythical","utopian","divine"]);
        alien.setDirector(RidleyScott);
        RidleyScott.speak();
    });

