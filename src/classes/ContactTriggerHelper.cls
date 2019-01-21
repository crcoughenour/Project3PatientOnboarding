public class ContactTriggerHelper {
    
    //Create new onboarding forms for new patients
    public static void createNewPatientForms(List<Contact> newContacts) {
        List<Form__c> formsToAdd = new List<Form__c>();
        
        //Get record types
        Map<String, Schema.RecordTypeInfo> recordTypes = Schema.SObjectType.Form__c.getRecordTypeInfosByName();
        
        for(Contact c: newContacts) {
            for(String recordTypeName: recordTypes.keySet()) {
                if(recordTypeName != 'Master') {
                    Form__c newForm = new Form__c();
                    newForm.Contact__c = c.Id;
                    newForm.RecordTypeId = recordTypes.get(recordTypeName).getRecordTypeId();
                    newForm.Name = recordTypeName;
                    formsToAdd.add(newForm);
                }
            }
        }
        insert formsToAdd;
    }
    
}