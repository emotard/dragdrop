export default function Container(){
    
    this.addContainer = function(i){
        var html = `
        <div id="container` + i +`" data-sortid="` + i +`" class="droppable container">
            <div class="container-buttons">
                <ul>
                    <li id="addElement"><span  class="oi oi-plus"></li>
                    <li id="addTextBlock"><span  class="oi oi-pencil"></span></li>
                    <li id="binContainer"><span class="oi oi-trash"></span></li>
                </ul>
            </div>
         </div>`;
        return  html;
    }
    

}