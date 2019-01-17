public class showFormApexController {
    
	@AuraEnabled
    public static List<Form__c> showFormInitialization(ID contactId){
        
        Map<String,Schema.RecordTypeInfo> rtMapByName = Schema.SObjectType.Form__c.getRecordTypeInfosByName();
		//Schema.RecordTypeInfo rtByName =  rtMapByName.get('Business');
		List<Id> rt = new List<Id>();
        rt.add(rtMapByName.get('New Patient Registration').getRecordTypeId());
        rt.add(rtMapByName.get('Medical History Form').getRecordTypeId());
        rt.add(rtMapByName.get('Consent for Treatment').getRecordTypeId());
        
        /*
        List<Form__c> formList = [select contact__c, id, RecordTypeId, name, firstName__c from form__c WHERE contact__c = :contactId];
        
        List<Form__c> formList2 = new List<Form__c>();
        
        for(Integer i = 0; i<3; i++){
            for(Integer j=0; j<formList.size(); j++){
                if(formList[j].RecordTypeId == rt[i])
                    formList2.add(formList[j]);
            }
        }
        //system.debug(formList2);
        return formList2;
		*/
        
        List<Form__c> formList = new List<Form__c>();
        formList.add([select contact__c, id, RecordTypeId, name, firstName__c from form__c WHERE contact__c = :contactId and recordtypeId = :rt[0]]);
        formList.add([select contact__c, id, RecordTypeId, name, OtherHistoryItem__c from form__c WHERE contact__c = :contactId and recordtypeId = :rt[1]]);
        formList.add([select contact__c, id, RecordTypeId, name, patientSignatureName__c, witnessSignatureName__c from form__c WHERE contact__c = :contactId and recordtypeId = :rt[2]]);
        
        return formList;
    }
    
   
    
}