({
	myAction : function(component, event, helper) {

	},
    
    handleFormClick : function(component, event, helper) {
        component.set("v.formId", event.getParam("clickedFormId"));
	}
})