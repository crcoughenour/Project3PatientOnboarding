trigger ContactTrigger on Contact (after insert) {
	
    //Before Insert
    if (trigger.isAfter && trigger.isInsert ) {
        ContactTriggerHelper.createNewPatientForms(trigger.new);
    }
}