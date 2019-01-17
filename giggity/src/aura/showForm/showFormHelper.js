({
	helperMethod : function() {
		
	},
    
    initialization : function(component) {
        console.log("initilization show form start: ");
        /*
        console.log("initilization show form start: " + component.get("v.formList"));
        component.set("v.newPatientRegistrationForm", component.get("v.formList")[0]);
        component.set("v.medicalHistoryForm", component.get("v.formList")[1]);
        component.set("v.consentForTreatmentForm", component.get("v.formList")[2]);
        component.set("v.consentForTreatmentFormId", component.get("v.formList")[2].Id);
        */
        
        
        /*
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
                
                
            
            }else{
                console.log("Server call failed");
            }                               
                                          })
        $A.enqueueAction(action);
		*/
	},
    
    handleFormIdChange : function(component){
         
        console.log("Form ID Changed! to" + component.get("v.formId"));
        //console.log(component.get("v.formId"));
        //console.log(component.get("v.medicalHistoryForm").Id);
        if(component.get("v.formId") === component.get("v.newPatientRegistrationForm").Id){
            console.log('numbah 1');
            component.set("v.showNewPatientRegistrationForm", true);
            component.set("v.showMedicalHistoryForm", false);
            component.set("v.showConsentForTreatmentForm", false);
            
            component.set("v.showNextButton", true);
            component.set("v.showPreviousButton", false);
        }
        else if (component.get("v.formId") === component.get("v.medicalHistoryForm").Id){
            console.log('numbah 2');
            component.set("v.showNewPatientRegistrationForm", false);
            component.set("v.showMedicalHistoryForm", true);
            component.set("v.showConsentForTreatmentForm", false);
            
            component.set("v.showNextButton", true);
            component.set("v.showPreviousButton", true);
        }
        else if (component.get("v.formId") === component.get("v.consentForTreatmentForm").Id){
            console.log('showFormHelper: change form to numbah 3');
            component.set("v.showNewPatientRegistrationForm", false);
            component.set("v.showMedicalHistoryForm", false);
            component.set("v.showConsentForTreatmentForm", true);
            
            component.set("v.showNextButton", false);
            component.set("v.showPreviousButton", true);
        }
        else
            console.log('something worng in the if else statement helper change form id');
    }
    
    
})