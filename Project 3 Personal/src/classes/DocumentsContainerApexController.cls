public class DocumentsContainerApexController {

    @AuraEnabled
    public static List<Form__c> getContactsForms(ID contactId) {
        List<Form__c> unorderedList = [SELECT
                                      		 Name, Id, RecordTypeId, FirstName__c, PatientSignatureName__c
                                       FROM 
                                      		 Form__c
                                       WHERE Contact__c = :contactId];
        
        Map<String,Form__c> sortingMap = new Map<String,Form__c>();
        
        for(Form__c aForm : unorderedList) {
            sortingMap.put(aForm.Name, aForm);
        }
        
        List<Form__c> orderedList = new List<Form__c>();
        //Add in order
        orderedList.add(sortingMap.get('New Patient Registration'));
        orderedList.add(sortingMap.get('Medical History Form'));
        orderedList.add(sortingMap.get('Consent for Treatment'));
        
        system.debug(orderedList);
        
        return orderedList;
    }
    
}