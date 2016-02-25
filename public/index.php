<?php

/**
 * fewlines Framework
 *
 *  - Copyright:  fewlines
 *  - Developers: Davide Perozzi
 *
 * -------------------------------------
 *
 * If you find any bugs feel free to contact
 * a developer :)
 */

$autoloader = require realpath(__DIR__ . '/../vendor/autoload.php');

/**
 * Bootstrap application and render the
 * frontend with the given parameters
 */

$application = new \Fewlines\Core\Application\Application(__DIR__, $autoloader);
$application->bootstrap()->run();