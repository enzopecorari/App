/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function Actor(_name,_biography){ 

    var name = _name;
    var biography = _biography;
    
    this.getName=function(){return  name}
    this.setName = function(_title){ name = _name} 
    this.getBiography=function(){return  biography}
    this.setBiography = function(_biography){ biography = _biography} 
} 
