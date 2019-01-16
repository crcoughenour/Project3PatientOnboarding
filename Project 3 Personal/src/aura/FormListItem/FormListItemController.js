({
	clickForm : function(component, event, helper) {
		var formId = component.get("v.formId");
        var clickEvent = component.getEvent("formClick");
        clickEvent.setParams({
            "clickedFormId": formId
        });
        clickEvent.fire();
	}
})