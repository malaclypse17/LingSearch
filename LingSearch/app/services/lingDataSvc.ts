///<reference path="../../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../../scripts/typings/angularfire/angularfire.d.ts" />
class LingDataSvc implements Interfaces.ILingDataSvc {
    private fireBaseUrl: string;
    private allDocs;

    constructor($firebase) {
        this.fireBaseUrl = "https://lingsearch.firebaseio.com/";
        var fireBaseLingDocsRef = new Firebase(this.fireBaseUrl + 'documents');
        this.allDocs = $firebase(fireBaseLingDocsRef).$asArray();
    }

    public static LingDataSvc($firebase): LingDataSvc {
        return new LingDataSvc($firebase);
    }

    all(){ return this.allDocs; }
    create(newDoc: Model.LingDoc) { return this.allDocs.$add(newDoc); }
    update(doc: Model.LingDoc) { return this.allDocs.$save(doc); }
    delete(doc) { return this.allDocs.$remove(doc); }
}
var app = angular.module('lingSearchApp');
LingDataSvc.$inject = ['$firebase'];
app.service('lingDataSvc', ["$firebase",LingDataSvc]);