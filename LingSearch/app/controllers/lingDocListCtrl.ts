///<reference path="../../scripts/typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" /> 
var app = angular.module('lingSearchApp');

class LingDocListCtrl {
    private $scope: Interfaces.ILingDocListScope;
    private $routeParams: Interfaces.ILingSearchRouteParams;
    private dataSvc: Interfaces.ILingDataSvc;
    private $modal: ng.ui.bootstrap.IModalService;

    constructor($modal,$scope: Interfaces.ILingDocListScope, $routeParams: Interfaces.ILingSearchRouteParams, dataSvc: Interfaces.ILingDataSvc) {
        var self = this;
        self.dataSvc = dataSvc;
        self.$scope = $scope;
        self.$routeParams = $routeParams;
        self.$modal = $modal;
        self.$scope.delete = (function (doc: Model.LingDoc) {
            return self.dataSvc.delete(doc);
        });
        self.$scope.documents = this.dataSvc.all();
        self.$scope.openUpdate = (function (doc:Model.LingDoc) {
            var updateModal = self.$modal.open({
                templateUrl: '/app/templates/LingDocCreateOrUpdate.html',
                
                windowClass: 'modal',
                controller: 'lingDocCreateOrUpdateCtrl',
                backdrop: true,
                resolve: {
                    createMode: function () {
                        return false;
                    },
                    doc: function () {
                        return doc;
                    }
                }
            });
            updateModal.result.then(function (document) {}, function (document) {});
        });
        self.$scope.openCreate = (function () {
            var createModal = self.$modal.open({
                templateUrl: '/app/templates/LingDocCreateOrUpdate.html',
                
                windowClass: 'modal',
                controller: 'lingDocCreateOrUpdateCtrl',
                backdrop: true,
                resolve: {
                    createMode: function () {
                        return true;
                    },
                    doc: function () {
                        return new Model.LingDoc();
                    }
                }     
            });
            createModal.result.then(function (document) {}, function (document) {});
        });
    }
}
       
LingDocListCtrl.$inject = ['$modal','$scope','$routeParams', 'lingDataSvc'];
app.controller('lingDocListCtrl', ["$modal","$scope", "$routeParams","lingDataSvc", LingDocListCtrl]);