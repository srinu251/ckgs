angular.module('ckgsPWA.constants', [])
    .constant('CONSTANTS', (function() {
    	var baseUrl  =  "http://devnic.ckgs.us";
    	return {
        	getStatus:baseUrl+"/api/getStatus"
	    }
    })());
