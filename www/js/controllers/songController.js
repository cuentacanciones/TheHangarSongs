angular.module('starter').controller('songController', function ($scope, $routeParams,songService) {
    
    $scope.song = songService.query({q:$routeParams.id});
});