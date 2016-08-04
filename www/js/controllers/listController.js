angular.module('starter').controller('listController', function ($scope, songService, $routeParams) {
    if($routeParams.name) {
       $scope.songs = songService.query({q:$routeParams.name}); 
    } else {
        $scope.songs = songService.query();
    }
    $scope.find = function (query) {
        $scope.songs = songService.query({q:query});
    }
});