public with sharing class GetCheckboxValue {
    @AuraEnabled
    public static Anime__c getCheckboxValue(String whichList, String animeName){
        try {
            Anime__c selectedAnime = new Anime__c();
            if (whichList == 'Favorites') {
                selectedAnime = [SELECT Name, Favorite__c FROM Anime__c WHERE Name = :animeName];
            } else if (whichList == 'Watchlist') {
                selectedAnime = [SELECT Name, Watchlist__c FROM Anime__c WHERE Name = :animeName];
            } else if (whichList == 'Watched') {
                selectedAnime = [SELECT Name, Watched__c FROM Anime__c WHERE Name = :animeName];
            } else {

            }
        return selectedAnime;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}