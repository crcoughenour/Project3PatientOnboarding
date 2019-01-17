({
    handleInit : function(component) {
      var action = component.get("c.getContactsForms");
        action.setParams({
            contactId: component.get("v.contactId")
        });
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                console.log("Document Container Server call succeeeded");
                
                component.set("v.forms", response.getReturnValue());
                ///////////////////////////////////////////////////////////////////////////////////////
                component.set("v.newPatientRegistrationForm", response.getReturnValue()[0]);
                component.set("v.medicalHistoryForm", response.getReturnValue()[1]);
                component.set("v.consentForTreatmentForm", response.getReturnValue()[2]);
                component.set("v.consentForTreatmentFormId", response.getReturnValue()[2].Id);
                ///////////////////////////////////////////////////////////////////////////////////////
         
                component.set("v.currentFormId", response.getReturnValue()[0].Id);
                
                
            }
            else{
                console.log("Server call failed");
            }
            
        });
        
        $A.enqueueAction(action);
    },
	updateFormId : function(component, event) {
		component.set("v.currentFormId", event.getParam("clickedFormId"));
	}
})