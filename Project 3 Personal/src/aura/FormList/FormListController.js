({
	doInit : function(component, event, helper) {
		
        var getContactsFormsMethod = component.get("c.getContactsForms");
        var contactID = component.get("v.contactId");
        console.log(contactID);
        
        getContactsFormsMethod.setParams({
            "contactID": contactID
        });

        getContactsFormsMethod.setCallback(this, function(response) {
            
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS") {
                console.log("Server call succeeded");
                console.log(response.getReturnValue());
                component.set("v.forms", response.getReturnValue());
            }
            else {
                console.log("Server call failed.")
            }
        });
        
        $A.enqueueAction(getContactsFormsMethod);
        
	},
})