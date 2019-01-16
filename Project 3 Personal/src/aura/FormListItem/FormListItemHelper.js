({
    handleClickForm : function(component) {
        var formId = component.get("v.form.Id");
        var formRecordTypeId = component.get("v.form.RecordTypeId");
        var form = component.get("v.form");
        var clickEvent = component.getEvent("formClick");
        clickEvent.setParams({
            "clickedFormId": formId,
            "clickedFormRecordTypeId": formRecordTypeId
        });
        clickEvent.fire();
    }
})