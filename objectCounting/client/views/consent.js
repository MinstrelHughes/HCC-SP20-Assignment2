
Template.consent.rendered = function(){
	
	document.getElementById("templatemo_header_wrapper").style.height = "30px";
	document.getElementById("content").style.fontFamily = "Optima, Segoe, Candara, Calibri, Arial, sans-serif";
	$("p").css({
		fontSize: "120%"
	});
		
	document.getElementById("templatemo_main").style.opacity = "1";
	document.getElementById("templatemo_main").style.height = "1300px";
	document.getElementById("templatemo_main_wrapper").style.height = "1300px";
	document.getElementById("templatemo_main_wrapper").style.width = "900px";
	document.getElementById("templatemo_main").style.width = "900px";
	document.getElementById("templatemo_main").style.borderStyle = "groove";
	document.getElementById("welcome-btn").className = "button-warning";
	document.getElementById("error-block").style.display = "none";
	
	document.getElementById("templatemo_main_wrapper").scrollIntoView();
	document.getElementById("welcome-instruction").scrollIntoView();
	
	if (assignment_Id == "ASSIGNMENT_ID_NOT_AVAILABLE")
	{
		document.getElementById("welcome-btn").innerHTML = "Accept HIT first!";
	}
};


Template.consent.events={
	'click #welcome-btn': function(event, template){
		event.preventDefault();
		var consent = $("input:radio[name ='consent']:checked").val();
		if ($("input:radio[name ='consent']:checked").length == 0)
		{
			document.getElementById("error-block").innerHTML = "<b><i>Please indicate whether you consent to our terms.</i></b>";
			document.getElementById("error-block").style.display = "block";
		}
		else
		{
			if (consent == "no")
			{
				document.getElementById("error-block").innerHTML = "<b><i>Thanks for taking time to read the consent form. If you do not want to do this HIT, please return it.</i></b>";
				document.getElementById("error-block").style.display = "block";
			}
			else
			{
				// Router.go('instruction');
				Router.go('task', {_id: 1});
			}
		}
	}
};