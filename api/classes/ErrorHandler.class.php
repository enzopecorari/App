<?php
/**
 * Default error handler.
 *
 * @author Alberto Miranda <alberto@nextive.com>
 */
class ErrorHandler {
    private static $defaultErrorHeader = 'HTTP/1.1 500 Oops! Something went wrong!';
    
    /**
     * Outputs passed error message setting a server 500 header.
     * 
     * @author Alberto Miranda <alberto@nextive.com>
     * @param string $errorMessage 
     */
    public static function handle($errorMessage){
        header(self::$defaultErrorHeader);
        die($errorMessage);
    }
}