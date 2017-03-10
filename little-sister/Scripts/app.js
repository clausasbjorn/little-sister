(function () {
    //var app = angular.module('evilApp', ['SignalR']).factory('Tracking', ['$rootScope', 'Hub', '$timeout', function ($rootScope, Hub, $timeout) {
    var app = angular.module('evilApp', []);

    //    var callbacks = [];

        //declaring the hub connection
        //var hub = new Hub('TrackerHub', {

        //    //client side methods
        //    listeners: {
        //        'seen': function (data) {
        //            for (var i = 0; i < callbacks.length; i++) {
        //                callbacks[i](data);
        //            }
        //        }
        //    },

        //    //server side methods
        //    methods: [],

        //    //query params sent on initial connection
        //    queryParams: {},

        //    //handle connection error
        //    errorHandler: function (error) {
        //        console.error(error);
        //    },

        //    //specify a non default root
        //    //rootPath: '/api

        //    stateChanged: function (state) {
        //        switch (state.newState) {
        //            case $.signalR.connectionState.connecting:
        //                //your code here
        //                break;
        //            case $.signalR.connectionState.connected:
        //                //your code here
        //                break;
        //            case $.signalR.connectionState.reconnecting:
        //                //your code here
        //                break;
        //            case $.signalR.connectionState.disconnected:
        //                //your code here
        //                break;
        //        }
        //    }
        //});

    //    return {
    //        registerOnSeen: function (callback) {
    //            callbacks.push(callback);
    //        }
    //    };
    //}]);

    //app.controller('DashboardController', ['$scope', 'Tracking', '$timeout', function ($scope, Tracking) {
    app.controller('DashboardController', ['$scope', '$timeout', function ($scope) {

        $scope.title = "Little Sister";

                

    }]);

})();