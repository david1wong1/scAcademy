public with sharing class AnimeSearchComponentController {
@AuraEnabled
    public static List<Anime__c> animeSearch(String animeName, String character, String genre){
        List<Anime__c> searchedAnimes = new List<Anime__c>();
        try {
            if (animeName != null && character != null && genre != null) {
                searchedAnimes = [SELECT Name FROM Anime__c 
                                    WHERE Name LIKE :animeName AND 
                                    Characters__c LIKE :character AND 
                                    Genre__c = :genre];
            } else if (animeName != null && character != null){
                searchedAnimes = [SELECT Name FROM Anime__c 
                                    WHERE Name LIKE :animeName AND 
                                    Characters__c LIKE :character];
            } else if (character != null && genre != null) {
                searchedAnimes = [SELECT Name FROM Anime__c 
                                    WHERE Characters__c LIKE :character AND
                                    Genre__c = :genre];
            } else if (animeName != null) {
                searchedAnimes = [SELECT Name FROM Anime__c 
                                    WHERE Name LIKE :animeName];
            } else if (character != null) {
                searchedAnimes = [SELECT Name FROM Anime__c 
                                    WHERE Characters__c LIKE :character];
            } else {
                searchedAnimes = [SELECT Name FROM Anime__c 
                                    WHERE Genre__c = :genre];
            }
        return searchedAnimes;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}