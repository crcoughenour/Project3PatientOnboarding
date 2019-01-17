({
	helperMethod : function() {
		
	},
    
    initialization : function(component) {
		var action = component.get("c.showFormInitialization");
        
        action.setParams({ contactId: component.get("v.contactId")});
        
        action.setCallback(this, function(response){
        	var state = response.getState();                                  
            if (component.isValid() && state === "SUCCESS") {
                console.log('getting forms' + component.get("v.contactId"));
 				component.set("v.formList", response.getReturnValue());
               
                component.set("v.newPatientRegistrationForm", response.getReturnValue()[0]);
                component.set("v.medicalHistoryForm", response.getReturnValue()[1]);
                component.set("v.consentForTreatmentForm", response.getReturnValue()[2]);
                component.set("v.consentForTreatmentFormId", response.getReturnValue()[2].Id);
                
                /*var ret = response.getReturnValue();
                console.log(ret[0].Name);*/
                
                
                
            
            }else{
                console.log("Server call failed");
            }                               
                                          })
        $A.enqueueAction(action);
	},
    
    handleFormIdChange : function(component){
         
        console.log("Form ID Changed!");
        //console.log(component.get("v.formId"));
        //console.log(component.get("v.medicalHistoryForm").Id);
        if(component.get("v.formId") == component.get("v.newPatientRegistrationForm").Id){
            console.log('numbah 1');
            component.set("v.showNewPatientRegistrationForm", true);
            component.set("v.showMedicalHistoryForm", false);
            component.set("v.showConsentForTreatmentForm", false);
        }
        else if (component.get("v.formId") == component.get("v.medicalHistoryForm").Id){
            console.log('numbah 2');
            component.set("v.showNewPatientRegistrationForm", false);
            component.set("v.showMedicalHistoryForm", true);
            component.set("v.showConsentForTreatmentForm", false);
        }
        else if (component.get("v.formId") == component.get("v.consentForTreatmentForm").Id){
            console.log('showFormHelper: change form to numbah 3');
            component.set("v.showNewPatientRegistrationForm", false);
            component.set("v.showMedicalHistoryForm", false);
            component.set("v.showConsentForTreatmentForm", true);
        }
        else
            console.log('something worng in the if else statement helper change form id');
    }
    
    
})