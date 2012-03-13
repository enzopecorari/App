<?php
/**
 * Simple backend communication test.
 * 
 * @author Alberto Miranda <alberto@nextive.com>
 */
require 'classes/Dispatcher.class.php';
require 'classes/ErrorHandler.class.php';
$dispatcher = new Dispatcher($_REQUEST);
echo $dispatcher->dispatch();