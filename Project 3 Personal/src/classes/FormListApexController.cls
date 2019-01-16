public class FormListApexController {
    
    @AuraEnabled
    public static List<Form__c> getContactsForms(ID contactID) {
        return [SELECT
               		Id, Name, RecordTypeId
                FROM
               		Form__c
                WHERE
               		Contact__c = :contactID];
    }
    
}