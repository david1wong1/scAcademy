public with sharing class UpdateCheckboxController {
    @AuraEnabled
    public static void updateCheckbox(String whichList, String recordId, Boolean checkboxValue) {
        try {
            Anime__c anime = new Anime__c();
        if (whichList == 'Favorites') {
            anime = [SELECT Id, Favorite__c FROM Anime__c WHERE Id = :recordId];
            anime.Favorite__c = checkboxValue;
        } else if (whichList == 'Watchlist') {
            anime = [SELECT Id, Watchlist__c FROM Anime__c WHERE Id = :recordId];
            anime.Watchlist__c = checkboxValue;
        } else if (whichList == 'Watched') {
            anime = [SELECT Id, Watched__c FROM Anime__c WHERE Id = :recordId];
            anime.Watched__c = checkboxValue;
        } else {

        }
        update anime;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}