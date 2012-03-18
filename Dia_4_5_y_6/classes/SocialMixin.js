/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var SocialMixin = function(){};
SocialMixin.prototype = {
    share: function(friendName){
        console.log('Sharing '+this.getTitle()+' with '+friendName);
        },
    like: function(){
        console.log('Like!');
        }
    };    
function augment( receivingClass, givingClass ) {
        for (var i=2, len=arguments.length; i<len; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
}

