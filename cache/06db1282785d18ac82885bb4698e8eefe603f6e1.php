<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Drag and drop,one page website builder for FREE.">
    <meta name="author" content="OutboxVision">

    <title>Ui-builder</title>

    <!-- Custom CSS -->
    <link href="assets/css/main.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" />
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <div id="wrapper">
        <!-- Controles -->
        <div id="editor-controles">
            <ul>
                <li id="addContainer"> <span class="oi oi-plus"></span></li>
                <li id="addTextBlock"><span  class="oi oi-pencil"></span></li>
                <li id="addElement"><span  class="oi oi-plus"></li>
            </ul>
        </div>
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <div id="sidebar-button"><span class="oi oi-cog"></span></div>
            <div id="sidebar-header">Header</div>
            <ul class="sidebar-nav">
                <li class="draggable" id="content-1"><img id="content-1" class="img-responsive" src="img/Content-01.jpg" data-type="contents" data-block="content-1"></li>
                <li class="draggable" id="content-2"><img class="img-responsive" src="img/Content-02.jpg" data-type="contents" data-block="content-2"></li>
                <li class="draggable" id="content-3"><img class="img-responsive" src="img/Content-03.jpg" data-type="contents" data-block="content-3"></li>
                <li class="draggable" id="content-4"><img class="img-responsive" src="img/Content-04.jpg" data-type="contents" data-block="content-4"></li>
                <li class="draggable" id="content-5"><img class="img-responsive" src="img/Content-05.jpg" data-type="contents" data-block="content-5"></li>
                <li class="draggable" id="content-6"><img class="img-responsive" src="img/Content-06.jpg" data-type="contents" data-block="content-6"></li>
                <li class="draggable" id="content-7"><img class="img-responsive" src="img/Content-07.jpg" data-type="contents" data-block="content-7"></li>
                <li class="draggable" id="content-7"><img class="img-responsive" src="img/Content-07.jpg" data-type="contents" data-block="content-7"></li>
            </ul>
            <div id="sidebar-footer">Footer</div>
        </div>
        <!-- /#sidebar-wrapper -->

        
        <!-- Page Content -->
        <div id="page-content-wrapper">
           <div class="sortableList">
               <div class="dropZone"></div>
           </div>
           
        </div>

       
        <!-- /#page-content-wrapper -->

    </div>
    <!-- /#wrapper -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <!-- Bootstrap Core JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/js/bootstrap.bundle.js"></script>

    <script src="dist/main.js"></script>
</body>

</html>