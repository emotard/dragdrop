import Container from './elements/container';

$(document).ready(function () {

  
    var wh = $( window ).height();
    var canvas = $('ul.sortableList');
    var sidebar =  $('#sidebar-wrapper');
    var sidebarbutton = $('#sidebar-button');  
    var containerID = 0;

    sidebar.height(wh);
 
    
    $('#addContainer').on('click', function(){
        var container = new Container();
        var el = container.addContainer(containerID);
        $('.sortableList').append(el);
        container.initControles();
        containerID++;
    });

            
    $('.container-buttons').each(function(el, i){
           
    });

    sidebarbutton.on('click', function(){
        
        if(sidebar.hasClass('active')){
            sidebar.css('left', '-400px');
            sidebar.removeClass('active');
        }else{
            sidebar.css('left', '0px');
            sidebar.addClass('active');
        }

    });

    $(".sortableList").sortable({
        handle: '.handle',
        placeholder: 'ui-state-highlight',
        over: function () {
            $('.placeholder').hide();
        },
        out: function () {
            $('.placeholder').hide();
        },
        update: function( event, ui ) {
            var id = ui.item.attr("id");
        },
        start: function (event, ui) {
            if (event.handleObj.namespace == "sortable")
                $('.remove-item').show();
            $('ul.sortableList .testing').css("width", "600")
        },
        stop: function (event, ui) {
            if (event.handleObj.namespace == "sortable")
                $('.remove-item').hide();
            $('ul.sortableList .testing').css("width", "")

        }
    });


    $(".draggable").draggable({
        connectToSortable: '.sortableList',
        cursor: 'pointer',
        helper: 'clone',
        start: function (event, ui) {
            $(this).addClass('testing');
        }
    });

    $("#sidebar-wrapper").droppable({
        accept: 'div',
        drop: function (event, ui) {
            ui.helper.remove();
        }


    });

});

