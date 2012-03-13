<?php
/**
 * Test Service for practicing communication with backend.
 *
 * @author Alberto Miranda <alberto@nextive.com>
 */
class WelcomeService {
    private $params = null;
    
    public function getParams() {
        return $this->params;
    }

    public function setParams($params) {
        $this->params = $params;
    }
    
    /**
     * Constructor.
     * 
     * @author Alberto Miranda <alberto@nextive.com>
     * @param array $params 
     */
    public function __construct($params) {
        $this->validateParams($params);
        $this->setParams($params);
    }
    
    /**
     * Validate params.
     * 
     * @author Alberto Miranda <alberto@nextive.com>
     * @param array $params
     */
    private function validateParams($params){
        if(empty($params)) ErrorHandler::handle(__CLASS__ . ": Empty params!");
        if(!is_array($params)) ErrorHandler::handle(__CLASS__ . ": Invalid params, not array: " . print_r($params, true));
        
        $requiredKeys = array('name');
        foreach($requiredKeys as $key){
            if(!array_key_exists($key, $params)){
                ErrorHandler::handle(__CLASS__ . ": Required param not found: '$key'. Invalid params: " . print_r($params, true));
            }
        }
    }
    
    /**
     * Returns hello string.
     * 
     * @author Alberto Miranda <alberto@nextive.com>
     * @return string
     */
    public function hello(){
        $params = $this->getParams();
        $name = $params['name'];
        if(empty($name)) die("Hi! I'm Welcome Service! What's your name?");
        $helloString = "Hello $name!";
        return $helloString;
    }
}
