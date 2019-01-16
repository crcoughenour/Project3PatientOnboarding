({
    handleInit : function(component) {
      var action = component.get("c.getContactsForms");
        action.setParams({
            contactId: component.get("v.contactId")
        });
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                console.log("Server call succeeeded");
                component.set("v.forms", response.getReturnValue());
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