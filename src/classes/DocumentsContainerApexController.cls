public class DocumentsContainerApexController {

    @AuraEnabled
    public static List<Form__c> getContactsForms() {
        
        
        id currentUserContactId = getCurrentUserContactId();
        system.debug('getContactId' + currentUserContactId);
        
        List<Form__c> unorderedList = [SELECT
                                      		 Name, Id, RecordTypeId, FirstName__c, PatientSignatureName__c, isComplete__c
                                       FROM 
                                      		 Form__c
                                       WHERE Contact__c = :currentUserContactId];
        
        Map<String,Form__c> sortingMap = new Map<String,Form__c>();
        
        for(Form__c aForm : unorderedList) {
            sortingMap.put(aForm.Name, aForm);
        }
        
        List<Form__c> orderedList = new List<Form__c>();
        //Add in order
        orderedList.add(sortingMap.get('New Patient Registration'));
        orderedList.add(sortingMap.get('Medical History Form'));
        orderedList.add(sortingMap.get('Consent for Treatment'));
        orderedList.add(sortingMap.get('HIPAA Compliance Patient Consent'));
        orderedList.add(sortingMap.get('Hippa Release Form'));
        
        system.debug(orderedList);
        
        return orderedList;
    }
    
    
    @AuraEnabled
    public static Id getCurrentUserContactId(){
        Id currentUserId = UserInfo.getUserId();
        User currentUser = [select id, contactId from User where id = : currentUserId];
        
        id currentUserContactId = currentUser.contactId;
        if(currentuserContactId == null){
            system.debug('admin ty');
            return '0031U0000070mqQQAQ';
        }
        else    
        	return currentUserContactId;
    }
    
    @AuraEnabled
    public static Contact getCurrentUserContact(){
    	Id currentUserId = UserInfo.getUserId();
        User currentUser = [select id, contactId from User where id = : currentUserId];
        if(currentUser.contactId == null){
            Contact c = [select id, HIPAA__c from contact where id = '0031U0000070mqQQAQ'];
            return c;
        }
        else{
            Contact c = [select id, HIPAA__c from contact where id = : currentUser.contactId];
            return c;
        }
        
    }
    
    @AuraEnabled
    public static void setHipaaTrue(ID contactId){
        Contact c = [select id, HIPAA__c from contact where id = : contactId];
        c.HIPAA__c = true;
        update c;
    }
    
}