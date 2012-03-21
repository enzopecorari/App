/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(
    function(){
        var instanceCount = 0;
        var getNewInstanceID = function(){
            return( ++instanceCount );
        };
        // return an initialized object.
        function Model(){
            this._instanceID = getNewInstanceID();
            return( this );
        }
        Model.getInstanceCount = function(){
            return( instanceCount );
        };
        // Define the class methods.
        Model.prototype = {
            getInstanceID: function(){
                return( this._instanceID );
            }
        };
        return( Model );
    }
);

