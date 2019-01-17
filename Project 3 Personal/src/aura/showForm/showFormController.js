({
	doInit : function(component, event, helper) {
		helper.initialization(component);
       
	},
    
    handleFormIdChange : function(component, event, helper){
        //var recordId = component.get("v.recordId");
        console.log("going to helper");
        helper.handleFormIdChange(component);
    },
    
    
    previousClick : function(component){
        
        if(component.get("v.consentForTreatmentForm").Id === component.get("v.formId")){
            var formId = component.get("v.medicalHistoryForm").Id;
    		var clickEvent = component.getEvent("formClick");
    		clickEvent.setParams({
                "clickedFormId": formId
            });
            clickEvent.fire();
            component.set("v.showNextButton", true);
            component.set("v.showPreviousButton", true);
        }
            
        else if(component.get("v.medicalHistoryForm").Id === component.get("v.formId")){
            var formId = component.get("v.newPatientRegistrationForm").Id;
    		var clickEvent = component.getEvent("formClick");
    		clickEvent.setParams({
                "clickedFormId": formId
            });
            clickEvent.fire();
            component.set("v.showNextButton", true);
            component.set("v.showPreviousButton", false);
        }
        	
    },
    
    
    
    nextClick : function(component){
        
        console.log(component.get("v.formId"));
        console.log(component.get("v.newPatientRegistrationForm").Id);
        if(component.get("v.newPatientRegistrationForm").Id === component.get("v.formId")){
            
            console.log("click first next id:" + component.get("v.medicalHistoryForm").Id);
            var formId = component.get("v.medicalHistoryForm").Id;
            console.log("Medical History Id: " + formId);
    		var clickEvent = component.getEvent("formClick");
            
    		clickEvent.setParams({
                "clickedFormId": formId
            });
            clickEvent.fire();
            component.set("v.showNextButton", true);
            component.set("v.showPreviousButton", true);
        }
            
        else if(component.get("v.medicalHistoryForm").Id === component.get("v.formId")){
            var formId = component.get("v.consentForTreatmentForm").Id;
    		var clickEvent = component.getEvent("formClick");
    		clickEvent.setParams({
                "clickedFormId": formId
            });
            clickEvent.fire();
            component.set("v.showNextButton", false);
            component.set("v.showPreviousButton", true);
        }
         	
    }
   
    
    
})