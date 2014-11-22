var myservices = angular.module('myservices', [])

.factory('MyServices', function ($http, $location) {

    return {
        enqsubmit: function (enq) {
            return $http.get("http://localhost/skodaadmin/index.php/site/enqsubmit", {
                params: enq
            });
        },
        tdsubmit: function (td) {
            return $http.get("http://localhost/skodaadmin/index.php/site/tdsubmit", {
                params: td
            });
        },
        sasubmit: function (sa) {
            return $http.get("http://localhost/skodaadmin/index.php/site/sasubmit", {
                params: sa
            });
        }
    }
});