angular.module('starter').factory('songService', ['$resource', 
    function($resource) {
            return $resource('http://192.168.86.132:3000/songs?q=:q', {  });
    }
]);