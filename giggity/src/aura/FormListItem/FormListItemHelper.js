({
    handleClickForm : function(component) {
        var formId = component.get("v.form.Id");
        var clickEvent = component.getEvent("formClick");
        clickEvent.setParams({
            "clickedFormId": formId,
        });
        clickEvent.fire();
    }
})