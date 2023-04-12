@RestResource(urlMapping = '/DP2Callout/')
global class DP2Callout {
    public class deserializeResponse{
        public String id;
        public String access_token;
    }
    @future(callout=true)
    
    public static void insertContactInfo(String jsonStr) { 
        
        String clientId = '3MVG9ux34Ig8G5erBAIOg7c3mFRtStTUXkOEzYKC0HSTNqlVdHTfk6ZjKVVgFPyFpQI7otup10rqLy3CEbKit';
        
        String clientSecret = '5732BFE315962758C81BD5735C5AD10FA373B318A5BB76946A355431328389FE';
        
        String username = 'yangpatrick97@gmail.com';
        
        String password = 'Password123S8RA5zv5lXnpjlHWdLinaRy5U';
        
        String reqbody = 'grant_type=password&client_id=' + clientId + '&client_secret=' + clientSecret + '&username=' + username + '&password=' + password;
        
        Http h = new Http();
        
        HttpRequest req = new HttpRequest();
        
        req.setBody(reqbody);
        
        req.setMethod('POST');
        
        req.setEndpoint('https://login.salesforce.com/services/oauth2/token');
        
        HttpResponse res = h.send(req);
        
        deserializeResponse resp1 = (deserializeResponse)JSON.deserialize(res.getbody(),deserializeResponse.class);
        System.debug('this is working');
        if(resp1.access_token != null){
            
            String endPoint = 'https://salescraft-f-dev-ed.develop.my.salesforce.com/services/apexrest/DP2receiver/';
            Http h2 = new Http();
            System.debug('this is working1');
            HttpRequest req1 = new HttpRequest();
            req1.setHeader('Authorization','Bearer ' +  resp1.access_token);
            req1.setHeader('Content-Type','application/json');
            req1.setBody(jsonStr);
            req1.setMethod('POST');
            req1.setEndpoint(endPoint);
            HttpResponse res1 = h2.send(req1);
            
        }
        
    }
}