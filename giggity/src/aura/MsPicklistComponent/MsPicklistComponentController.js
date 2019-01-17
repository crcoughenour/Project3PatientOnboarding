({
    doInit : function(component) {
        console.log("doInit for MsPick start");
        var action = component.get("c.getPickValuesToOptions");
        action.setParams({
            sObjectName: component.get("v.sObjectName"),
            field: component.get("v.field")
        });
        action.setCallback(this, function(response) {
            console.log("doInit for MsPick set callback");
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("doInit for MsPick success");
                var result = response.getReturnValue();
                var options = [];
                for (var i = 0; i < result.length; i++) {
                    options.push({
                        label: result[i],
                        value: result[i]
                    });
                }
            }
            component.set("v.msPicklistOptions", options);
        })
        $A.enqueueAction(action);
    }
})