public class FormListApexController {
    
    @AuraEnabled
    public static List<Form__c> getContactsForms(ID contactID) {
        return [SELECT
               		Id, Name
                FROM
               		Form__c
                WHERE
               		Contact__c = :contactID];
    }
    
}