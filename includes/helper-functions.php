<?php

use Jenssegers\Blade\Blade;

function view($view, $options = array()){

    $blade = new Blade('views', 'cache');

    echo $blade->make($view, $options);

}