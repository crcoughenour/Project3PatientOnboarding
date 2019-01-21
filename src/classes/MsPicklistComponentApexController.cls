public class MsPicklistComponentApexController {
    
    @AuraEnabled
    public static List<String> getPickValuesToOptions(String sObjectName, String field) {
        List<String> options = new List<String>();
        Schema.SObjectType objType = Schema.getGlobalDescribe().get(sObjectName);
        Schema.DescribeSObjectResult objDescribe = objType.getDescribe();
        Schema.DescribeFieldResult objFieldInfo = objDescribe.fields.getMap().get(field).getDescribe();
        List<Schema.PicklistEntry> picklistvalues = objFieldInfo.getPicklistValues();
        for(Schema.PicklistEntry plv: picklistvalues) {
            options.add(plv.getValue());
        }
        options.sort();
        return options;
    }
}