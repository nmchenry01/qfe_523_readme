app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"
        }).when("/home", {
            templateUrl: "home.html"
        })
        .when("/legal", {
            templateUrl: "legal.html"
        });
});