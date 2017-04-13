(function () {
    'use strict';

    angular
        .module('App')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$ionicPopover'];
    function AppController($scope, $ionicPopover) {

        $scope.items = [
            {
                color: "#E47500",
                icon: "ion-ionic",
                title: "Release Name 1",
                date: new Date(Date.now()).toLocaleString(),
                dateCountdown: $scope.calculateDateTimeLeft
            },
            {
                color: "#5AD863",
                icon: "ion-ionic",
                title: "Release Name 2",
                date: "11/09/2017"
            },
            {
                color: "#F8E548",
                icon: "ion-ionic",
                title: "Release Name 3",
                date: "12/12/2017"
            },
            {
                color: "#AD5CE9",
                icon: "ion-ionic",
                title: "Release Name 4",
                date: "08/05/2017"
            },
            {
                color: "#3DBEC9",
                icon: "ion-ionic",
                title: "Release Name 5",
                date: "10/12/2017"
            },
            {
                color: "#D86B67",
                icon: "ion-ionic",
                title: "Release Name 6",
                date: "7/19/2017"
            }
        ];
for (let [key, value] of Dict.entries(myObj))
        $scope.calculateDateTimeLeft = function((let [item, date] of items) {
          var oneDay = 24*60*60*1000;
          var currentDate = new Date(Date.now()).toLocaleString();
          var releaseDate = "December 13, 2017 11:13:00";
          return Math.round(Math.abs((currentDate.getTime() - releaseDate.getTime())/(oneDay)));
        };

        $scope.exitApp = function () {
            ionic.Platform.exitApp();
        };

        $ionicPopover.fromTemplateUrl('templates/modals/popover.html', {
            scope: $scope
        }).then(function (popover) {
            $scope.popover = popover;
        });

        $scope.openPopover = function ($event) {
            $scope.popover.show($event);
        };

        $scope.$on('$destroy', function() {
            $scope.popover.remove();
        });
    }
})();
