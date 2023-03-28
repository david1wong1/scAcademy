public with sharing class DisplayListComponentController {
@AuraEnabled
public static List<Anime__c> displayList(String whichList){
    try {
        List<Anime__c> chosenList = new List <Anime__c>();
        if (whichList == 'Favorites') {
            chosenList = [SELECT Name, Id, Preview__c, Rating__c FROM Anime__c WHERE Favorite__c = true];
        } else if (whichList == 'Watchlist') {
            chosenList = [SELECT Name, Id, Preview__c, Rating__c FROM Anime__c WHERE Watchlist__c = true];
        } else if (whichList == 'Watched') {
            chosenList = [SELECT Name, Id, Preview__c, Rating__c FROM Anime__c WHERE Watched__c = true];
        } else {

        }
        return chosenList;
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}
}