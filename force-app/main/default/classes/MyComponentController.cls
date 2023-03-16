public with sharing class MyComponentController {
@AuraEnabled
public static List<Anime__c> popularList(Integer numOfAnimes) {
try {
    return [SELECT Name, Rating__c FROM Anime__c ];
} catch (Exception e) {
    throw new AuraHandledException(e.getMessage());
}
}

}