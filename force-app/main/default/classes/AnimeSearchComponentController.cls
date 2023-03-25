public with sharing class AnimeSearchComponentController {
    public AnimeSearchComponentController() {
        @AuraEnabled
        public static List<Anime__c> animeSearch(String animeName, String character, String genre){
            try {
                if (animeName && character && genre) {
                    return [SELECT Name, ]
                }
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
        }
    }
}