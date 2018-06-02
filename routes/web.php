<?php

use Illuminate\Routing\Router;
/** @var $router Router */


$router->get('/', function () {
    return view('home');
});
