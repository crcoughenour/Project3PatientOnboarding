({
	updateFormId : function(component, event) {
		component.set("v.currentFormId", event.getParam("clickedFormId"));
        component.set("v.currentFormRecordTypeId", event.getParam("clickedFormRecordTypeId"));
	}
})