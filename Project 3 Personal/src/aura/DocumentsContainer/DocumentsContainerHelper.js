({
	updateFormId : function(component, event) {
        console.log(event.getParam("clickedFormId"));
		component.set("v.currentFormId", event.getParam("clickedFormId"));
	}
})