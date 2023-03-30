public with sharing class RandomAnimesController {
    @AuraEnabled
    public static List<Anime__c> randomAnimes() {
        try {
            List<Anime__c> allAnimes = [SELECT Name, Preview__c, Rating__c FROM Anime__c];
            List<Anime__c> randomAnimes = new List<Anime__c>();
            for (Integer i = 0; i < 5; i++) {
            Integer randomIndex = (Integer)(Math.random() * allAnimes.size());
            randomAnimes.add(allAnimes[randomIndex]);
        }
        return randomAnimes;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}