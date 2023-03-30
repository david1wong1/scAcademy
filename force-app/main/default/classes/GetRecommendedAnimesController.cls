public with sharing class GetRecommendedAnimesController {
    @AuraEnabled
    public static List<Anime__c> getRecommendedAnimes() {
        try {
            Map<String, Integer> genreCountMap = new Map<String, Integer> {
                'Action' => 0, 'Adventure' => 0, 'Comedy' => 0,
                'Drama' => 0, 'Fantasy' => 0, 'Gourmet' => 0,
                'Horror' => 0, 'Mystery' => 0, 'Romance' => 0,
                'Sci-Fi' => 0, 'Slice of Life' => 0, 'Sports' => 0,
                'Supernatural' => 0, 'Suspense' => 0
            };
            List<Anime__c> favoriteAnimes = [SELECT Name, Preview__c, Rating__c, Genre__c 
                                            FROM Anime__c
                                            WHERE Favorite__c = true];
            for (Anime__c anime : favoriteAnimes) {
                List<String> splitList = anime.Genre__c.split(';');
                for (String genre : splitList) {
                    genreCountMap.put(genre, genreCountMap.get(genre) + 1);
                }
            }
            List<Integer> sortedValues = genreCountMap.values();
            sortedValues.sort();
            List<Integer> finalSortedValues = new List<Integer>();
            for(Integer i = sortedValues.size() - 1; i >= 0; i--) {
                    finalSortedValues.add(sortedValues.get(i));
                }
            Set<Integer> setValues = new Set<Integer>(finalSortedValues);
            List<String> topGenres = new List<String>();
            for(String genre : genreCountMap.keySet()) {
                for (Integer genreCount : setValues) {
                    if (genreCountMap.get(genre) == genreCount && topGenres.size() < 3) {
                        topGenres.add(genre);
                    }
                }
            }
            String genre1 = topGenres[0];
            String genre2 = topGenres[1];
            String genre3 = topGenres[2];
            List<Anime__c> recommendedAnimes = [SELECT Name, Preview__c, Rating__c 
                                                FROM Anime__c
                                                WHERE Genre__c INCLUDES (:genre1) 
                                                AND (Genre__c INCLUDES (:genre2)
                                                OR Genre__c INCLUDES (:genre3))
                                                ORDER BY Rating__c DESC
                                                LIMIT 5];
        return recommendedAnimes;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}