function bae()
{
	var audio = new Audio('bae.m4a');
	audio.play();
	Parse.initialize("1PZHUAi25XfTmIw8Drh4jdMrfEMtnL0WFN8jGVEt", "VQgKyXjgS1cAIMw7vUtJmCAGPYirtPzWa2bH5vKI");
	var bae = Parse.Object.Extend("Bae");
	var Bae = new bae();
	var query = new Parse.Query(bae);
	query.get("s9FGPRavRz", {
  		success: function(Bae) {
    		// The object was retrieved successfully.
    		var votes = Bae.get("totalBae");
    		Bae.set("totalBae",votes++);
    		Bae.save();
  		},
  	error: function(object, error) {
	    // The object was not retrieved successfully.
    	// error is a Parse.Error with an error code and message.
  		}
	});
}