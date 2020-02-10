Template.survey.rendered = function(){
	$('html,body').scrollTop(0);
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
	
	document.getElementById("templatemo_main_wrapper").scrollIntoView();
	document.getElementById("welcome-instruction").scrollIntoView();
	document.getElementById("error-block").style.display = "none";

	if (assignment_Id == "ASSIGNMENT_ID_NOT_AVAILABLE")
	{
		document.getElementById("welcome-btn").innerHTML = "Accept HIT first!";
	}
};


Template.survey.events={
	'click #welcome-btn': function(event, template){
		event.preventDefault();
		var predictionFactors = $('textarea#predictionFactors').val();
		var conflict = $('textarea#conflict').val();
		var trustFactors = $('textarea#trustFactors').val();
		var comment = $('textarea#comment').val();
		var confidenceBefore = $("#confidenceBefore").val();
		var confidenceAfter = $("#confidenceAfter").val();
		var trustBefore = $("#trustBefore").val();
		var trustAfter = $("#trustAfter").val();
		var gender = $("#gender").val();
		var age = document.getElementById("age").value;
		var edu = $("#education").val();
		if ((confidenceBefore == "") || (typeof confidenceBefore === "undefined") || (confidenceBefore == null))
		{
			document.getElementById("error-block").style.display = "block";
		}
		else if ((confidenceAfter == "") || (typeof confidenceAfter === "undefined") || (confidenceAfter == null))
		{
			document.getElementById("error-block").style.display = "block";
		}
		else if ((trustBefore == "") || (typeof trustBefore === "undefined") || (trustBefore == null))
		{
			document.getElementById("error-block").style.display = "block";
		}
		else if ((trustAfter == "") || (typeof trustAfter === "undefined") || (trustAfter == null))
		{
			document.getElementById("error-block").style.display = "block";
		}
		else if ((gender == "") || (typeof gender === "undefined") || (gender == null))
		{
			document.getElementById("error-block").style.display = "block";
		}
		else if ((edu == "") || (typeof edu === "undefined") || (edu == null))
		{
			document.getElementById("error-block").style.display = "block";
		}
		else if ((age == "") || (typeof age === "undefined") || (age == null))
		{
			document.getElementById("error-block").style.display = "block";
		}
		else if (isNaN(age))
		{
			document.getElementById("error-block").style.display = "block";
		}
		else
		{
			Surveys.insert({group: group, workerId: worker_Id, assignmentId: assignment_Id, hitId: hit_Id, gender:gender, age: age, education:edu, predictionFactors: predictionFactors, conflict: conflict, trustFactors: trustFactors, comment: comment, confidenceBefore: confidenceBefore, confidenceAfter: confidenceAfter, trustBefore: trustBefore, trustAfter: trustAfter});
			Router.go('finalPage');
		}		
	}
};