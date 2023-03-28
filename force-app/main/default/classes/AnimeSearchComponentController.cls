public with sharing class AnimeSearchComponentController {
@AuraEnabled
public static List<Anime__c> animeSearch(String animeName, String character, String genre){
    try {
        List<Anime__c> searchedAnimes = new List<Anime__c>();
        if (animeName != null && character != null && genre != null) {
            animeName = '%' + animeName + '%';
            character = '%' + character + '%';
            searchedAnimes = [SELECT Name, Rating__c, Genre__c, Id, Characters__c, Preview__c FROM Anime__c 
                                WHERE Name LIKE :animeName AND 
                                Characters__c LIKE :character AND 
                                Genre__c INCLUDES (:genre)];
        } else if (animeName != null && character != null) {
            animeName = '%' + animeName + '%';
            character = '%' + character + '%';
            searchedAnimes = [SELECT Name, Rating__c, Genre__c, Id, Characters__c, Preview__c FROM Anime__c 
                                WHERE Name LIKE :animeName AND 
                                Characters__c LIKE :character];
        } else if (character != null && genre != null) {
            character = '%' + character + '%';
            searchedAnimes = [SELECT Name, Rating__c, Genre__c, Id, Characters__c, Preview__c FROM Anime__c 
                                WHERE Characters__c LIKE :character AND
                                Genre__c INCLUDES (:genre)];
        } else if (animeName != null) {
            animeName = '%' + animeName + '%';
            searchedAnimes = [SELECT Name, Rating__c, Genre__c, Id, Characters__c, Preview__c FROM Anime__c 
                                WHERE Name LIKE :animeName];
        } else if (character != null) {
            character = '%' + character + '%';
            searchedAnimes = [SELECT Name, Rating__c, Genre__c, Id, Characters__c, Preview__c FROM Anime__c 
                                WHERE Characters__c LIKE :character];
        } else {
            searchedAnimes = [SELECT Name, Rating__c, Genre__c, Id, Characters__c, Preview__c FROM Anime__c 
                                WHERE Genre__c INCLUDES (:genre)];
        }
    return searchedAnimes;
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}
}