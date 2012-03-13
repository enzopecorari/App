<?php
/**
 * Test Service for practicing communication with backend.
 *
 * @author Alberto Miranda <alberto@nextive.com>
 */
class MovieService {
    private $params = null;
    private $movies = array(
        
    );
    
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
        $this->setParams($params);
    }
    
    /**
     * Returns some movies.
     * 
     * @author Alberto Miranda <alberto@nextive.com>
     * @return array
     */
    public function getTop(){
        $url = 'http://odata.netflix.com/Catalog/Titles?$filter=ReleaseYear%20le%201989%20and%20ReleaseYear%20ge%201980%20and%20AverageRating%20gt%204&$expand=Awards&$format=json';
        $results = json_decode(file_get_contents($url));
        $movies = $results->d->results;
        
        header('Content-type: application/json');
        return json_encode($movies);
    }
}
