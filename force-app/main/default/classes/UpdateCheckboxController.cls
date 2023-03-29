public with sharing class UpdateCheckboxController {
    @AuraEnabled
    public static void updateCheckbox(String whichList, String name, Boolean checkboxValue) {
        try {
            Anime__c anime = new Anime__c();
        if (whichList == 'Favorites') {
            anime = [SELECT Id, Favorite__c FROM Anime__c WHERE Name = :name];
            anime.Favorite__c = checkboxValue;
        } else if (whichList == 'Watchlist') {
            anime = [SELECT Id, Watchlist__c FROM Anime__c WHERE Name = :name];
            anime.Watchlist__c = checkboxValue;
        } else if (whichList == 'Watched') {
            anime = [SELECT Id, Watched__c FROM Anime__c WHERE Name = :name];
            anime.Watched__c = checkboxValue;
        }
        System.debug(anime);
        update anime;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}