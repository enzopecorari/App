<?php
/**
 * Dispatches request.
 *
 * @author Alberto Miranda <alberto@nextive.com>
 */
class Dispatcher {
    private $service = null;
    private $method = null;
    private $params = null;
    private $servicesPath = 'services';
    
    public function getService() {
        return ucfirst(strtolower($this->service));
    }

    public function setService($service) {
        if(!preg_match("/^(.*)\./", $service, $matches)) ErrorHandler::handle(__CLASS__ . ": Invalid Service: $service");
        $this->service = $matches[1];
    }
    
    public function getMethod() {
        return $this->method;
    }

    public function setMethod($service) {
        if(!preg_match("/\.(.*)$/", $service, $matches)) ErrorHandler::handle(__CLASS__ . ": Invalid Service Method: $service");
        $this->method = $matches[1];
    }

    public function getParams() {
        return $this->params;
    }

    public function setParams($params) {
        $this->params = $params;
    }
    
    public function getServicesPath() {
        return $this->servicesPath;
    }

    public function setServicesPath($servicesPath) {
        $this->servicesPath = $servicesPath;
    }

    /**
     * Constructor.
     * 
     * @author Alberto Miranda <alberto@nextive.com>
     * @param array $request 
     */    
    public function __construct($request) {
        $this->validateRequest($request);
        $this->setService($request['service']);
        $this->setMethod($request['service']);
        $this->setParams($request['params']);
    }
    
    /**
     * Returns true if passed request is valid.
     * False if not.
     * 
     * @author Alberto Miranda <alberto@nextive.com>
     * @param array $request 
     */
    private function validateRequest($request){
        if(empty($request)) ErrorHandler::handle(__CLASS__ . ": Oops! You didn't send me a Request!");
        if(!is_array($request)) ErrorHandler::handle(__CLASS__ . ": Invalid Request, not an array: " . print_r($request, true));
        $requiredKeys = array('service');
        foreach($requiredKeys as $key){
            if(!array_key_exists($key, $request)){
                ErrorHandler::handle(__CLASS__ . ": Required key not found: '$key'. Invalid Request: " . print_r($request, true));
            }
        }
    }
    
    /**
     * Actual Dispatcher method.
     * Calls service passing params.
     * 
     * @author Alberto Miranda <alberto@nextive.com>
     */
    public function dispatch(){
        $service = $this->getService();
        $serviceClass = "{$service}Service";
        $localPath = dirname(__FILE__) . '/..';
        $servicesPath = $this->getServicesPath();
        $serviceFile = "$localPath/$servicesPath/$serviceClass.class.php";
        if(!file_exists($serviceFile)) ErrorHandler::handle(__CLASS__ . ": Oops! Service '$service' not found! Service file: $serviceFile");
        
        //require, call and return
        require $serviceFile;
        if(!class_exists($serviceClass)) ErrorHandler::handle(__CLASS__ . ": Service class '$serviceClass' not exists!");
        $service = new $serviceClass($this->getParams());
        $method = $this->getMethod();
        if(!method_exists($service, $method)) ErrorHandler::handle(__CLASS__ . ": Service method '$method' not exists!");
        return $service->$method($this->getParams());
    }
}