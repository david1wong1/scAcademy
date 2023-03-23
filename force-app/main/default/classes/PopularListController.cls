public with sharing class PopularListController {
    @AuraEnabled
    public static Map<Integer, Anime__c> popularList(Integer numOfAnimes) {
        try {
            List<Anime__c> topAnimes = new List<Anime__c>([SELECT Name, Rating__c, Preview__c, Id FROM Anime__c ORDER BY Rating__c DESC LIMIT :numOfAnimes]);
            Map<Integer, Anime__c> topAnimeMap = new Map<Integer,Anime__c>();
            for (Integer i = 0; i < numOfAnimes; ++i) {
                topAnimeMap.put(i+1, topAnimes[i]);
            }
        return topAnimeMap;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    }