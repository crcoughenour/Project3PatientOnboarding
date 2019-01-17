({
	handleMedicalChange : function(component, event, helper) {
        //Get the Selected values   
        var selectedValues = event.getParam("value");

        //Update the Selected Values on the Form component
        //component.set("v.selectedMedicalHistoryPicklistValues", selectedValues);
        component.set("v.values", selectedValues);
        
        //console.log("Set selected values to: " + component.get("v.values"));
       
	}
})