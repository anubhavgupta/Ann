/**
 *  TODO: Docs...
 * To create Annotation use "ann" method:
 * example
 * ["@annotationName"]
 *      .ann(function(originalFunction,originalFunctionArguments,annotationInput,annotationNameArgs){
 *
 *      })
 *
 *
 */
+function(){

    var arrPro = Array.prototype;

    var annotations = {};

    arrPro.ann = function(annotationInstrFn){
        // annotation name should start with "@"
        if(this[0][0] =="@"){
            annotations[this[0].split(":")[0].toLowerCase()] = annotationInstrFn;
        }
        else{
            throw "PLEASE DEFINE ANNOTATION PROPERLY by: ['@annotationName'].ann(function(){})"
        }
    };

    arrPro.ex = function(fnToAnnotate){
        var fnArgs = Array.prototype.splice.call(arguments,0);
        var annotationNameArgs = this[0].split(":");
        return annotations[annotationNameArgs[0].toLowerCase()](fnToAnnotate,fnArgs,this.splice(1),annotationNameArgs);
    };

    arrPro.rt = function(fnToAnnotate){
        var self = this;
        return function(){
            var annotationNameArgs = self[0].split(":");
            var fnArgs = Array.prototype.splice.call(arguments,0);
            return annotations[annotationNameArgs[0].toLowerCase()](fnToAnnotate,fnArgs,self.splice(1),annotationNameArgs);
        }
    }


}();
