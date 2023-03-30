public with sharing class MyComponentController {
    @AuraEnabled
    public static void sendEmail(String toAddress, String subject, String body) {
        try {
            Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
            email.SetToAddresses(new List<String>{toAddress});
            email.setSubject(subject);
            email.setHtmlBody(body);
            Messaging.sendEmail(new Messaging.SingleEmailMessage[] {email});
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}