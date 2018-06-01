export default function Elements(){
    
    this.addElement = function(id, i){

        console.log(id);
        $('#container' + id).append("<div class='element'>I am an element</div>");
    }
    

    this.fecthElement = function(){

    }

}