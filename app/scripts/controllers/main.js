'use strict';

angular.module('angularBareApp')
    .controller('MainCtrl', function ($scope, $http) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        var url = "http://formhub.org";
        $http.get(url, {})
            .success(function(){
                console.log("---------Success--------");
            })
            .error(function(){
                console.log("---------Success--------");
            });
    });
