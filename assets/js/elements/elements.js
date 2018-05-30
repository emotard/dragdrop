export default function Elements(){
    
    this.addElement = function(id, i){
        var html = `
        <div id="element` + i +`" data-sortid="` + i +`" class="droppable element">
            i am a element
         </div>`;
        return  html;
    }
    

}