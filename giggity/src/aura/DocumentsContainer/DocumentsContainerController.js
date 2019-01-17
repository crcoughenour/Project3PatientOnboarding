({
    onInit : function(component, event, helper) {
        helper.handleInit(component);
    },
	handleFormClick : function(component, event, helper) {
        helper.updateFormId(component, event);
	}
})