import Container from './elements/container';
import Elements from './elements/elements';

$(document).ready(function () {


    var wh = $( window ).height();
    var canvas = $('ul.sortableList');
    var sidebar =  $('#sidebar-wrapper');
    var sidebarbutton = $('#sidebar-button');
    sidebar.height(wh);

    var i = 0;
    $('#addContainer').on('click', function(){
        
        var container = new Container();
        var el = container.addContainer(i++);
        $('.sortableList').append(el);

        initContanierDroppable();

    });



    $('#addElement').on('click', function(){
        var id = 1;
        var element = new Elements();
        var el = row.addElement(1, i++);
        $(this).parent().parent().parent().prepend(el);

        initContanierDroppable(); 

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
        placeholder: 'ui-state-highlight',
        over: function () {
            $('.placeholder').hide();
        },
        out: function () {
            $('.placeholder').hide();
        },
        update: function( event, ui ) {
            var id = ui.item.attr("id");
            console.log(id);
        },
        start: function (event, ui) {
            if (event.handleObj.namespace == "sortable")
                $('.remove-item').show();
            $('ul.sortableList .testing').css("width", "600")
            console.log(ui);
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



    function initContanierDroppable(){


        $('.container').hover(function(){
            var id = $(this).attr('id');
            $(id + ' .container-buttons').css('display', 'block');
        },function(){
            var id = $(this).attr('id');
            $(id +  ' .container-buttons').css('display', 'none');
        });
        
        $(".droppable").droppable({
            accept: 'div',
            drop: function (event, ui) {
              $(this).append(ui.item)
            }
    
    
        });

    }


    




});