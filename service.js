var app = angular.module('github-api');

app.service('githubService', function($http, $q){
    var id = "3257a93c96b37cf80ae9";
    var sec = "45becb1dda65f5af435cb81048b8791bd02440f9";
    var param = "?client_id=" + id + "&client_secret=" + sec;

    this.getUser = function(username){
        var dfd = $q.defer();
        $http({
            method: "GET",
            url: 'https://api.github.com/users/' + username
        }).then(function(res){
            console.log(res);
            dfd.resolve(res);
        });
        return dfd.promise;

    }

});