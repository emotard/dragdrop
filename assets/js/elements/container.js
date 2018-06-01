import controls from '../controls';
import elements from '../elements/elements';

export default function Container(){

    this.addContainer = function(containerID){
        var html = `
        <div id="container` + containerID +`" data-sortid="` + containerID +`" class="droppable container">
            <span class="handle fa fa-arrows"></span>
            <div class="container-buttons">
                <ul>
                    <li id="addElement" data-container-id="` + containerID +`" ><span  class="oi oi-plus"></li>
                    <li id="addTextBlock" data-container-id="` + containerID +`"><span  class="oi oi-pencil"></span></li>
                    <li id="binContainer" data-container-id="` + containerID +`"><span class="oi oi-trash"></span></li>
                </ul>
            </div>
         </div>`;

        $(".container li#addElement").unbind( "click" );

        return  html;




    }

    this.initControles = function(){
        
        var containerID;
        var element = new elements();

        $('.container li#addElement').each(function(el, i){
            
            $(this).on('click', function(){
               containerID = $(this).data('container-id');
               element.addElement(containerID)
            });

        });


        $('.container li#addTextBlock').each(function(el, i){
            $(this).on('click', function(){
                console.log('clicked');
            });

        });


        $('.container li#binContainer').each(function(el, i){
            $(this).on('click', function(){
               containerID = $(this).data('container-id');
               console.log(containerID);
               removeContainer(containerID);
            });
        });


        $('.container').hover(function(){

            $(this).find('.container-buttons').css('display', 'block');

        }, function(){

            $(this).find('.container-buttons').css('display', 'none');

        });

        function removeContainer(containerID){
            $('#container' + containerID).remove();
        }

    }

}