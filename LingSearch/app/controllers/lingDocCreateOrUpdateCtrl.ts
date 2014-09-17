class LingDocCreateOrUpdateCtrl  {
    private $scope: Interfaces.ILingDocCreateOrUpdateScope;
    private dataSvc: Interfaces.ILingDataSvc;
    private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;

    constructor($scope: Interfaces.ILingDocCreateOrUpdateScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
        lingDataSvc: Interfaces.ILingDataSvc, doc: Model.LingDoc, createMode: boolean) {
        var self = this;
        self.dataSvc = lingDataSvc;
        self.$scope = $scope;
        self.$modalInstance = $modalInstance;
        self.$scope.createMode = createMode;
        self.$scope.document = doc;

        self.$scope.create = function () {    
            var result = self.dataSvc.create(self.$scope.document);
            self.$modalInstance.close(result);
        };

        self.$scope.update = function () {
            var result = self.dataSvc.update(self.$scope.document);
            self.$modalInstance.close(result);
        };

        self.$scope.cancel = function () {
            self.$modalInstance.dismiss('cancel');
        };
    }
};
LingDocCreateOrUpdateCtrl.$inject = ['$scope', '$modalInstance', 'lingDataSvc','doc','createMode'];
app.controller('lingDocCreateOrUpdateCtrl', ["$scope", "$modalInstance", "lingDataSvc", 'doc', 'createMode', LingDocCreateOrUpdateCtrl]);