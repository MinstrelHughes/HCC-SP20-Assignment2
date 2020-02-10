Template.instructionCtnd.rendered = function(){
	$('html,body').scrollTop(0);
	
	document.getElementById("templatemo_header_wrapper").style.height = "30px";
	document.getElementById("content").style.fontFamily = "Optima, Segoe, Candara, Calibri, Arial, sans-serif";
	$("p").css({
		fontSize: "120%"
	});
		
	document.getElementById("templatemo_main").style.opacity = "1";
	document.getElementById("templatemo_main").style.height = "550px";
	document.getElementById("templatemo_main_wrapper").style.height = "550px";
	document.getElementById("templatemo_main_wrapper").style.width = "900px";
	document.getElementById("templatemo_main").style.width = "900px";
	document.getElementById("templatemo_main").style.borderStyle = "groove";
	document.getElementById("welcome-btn").className = "button-warning";
	//document.getElementById("accuracyBlock").style.borderStyle = "double";
	
	if (alg == 0)
	{
		document.getElementById("accuracyBlock").style.display = "none";
	}
	else if (alg == 1)
	{
		accuracy = '55%';
	}
	else if (alg == 2)
	{
		accuracy = '60%';
	}
	else if (alg == 3)
	{
		accuracy = '70%';
	}
	else if (alg == 4)
	{
		accuracy = '80%';
	}
	else if (alg == 5)
	{
		accuracy = '90%';
	}
	else if (alg == 6)
	{
		accuracy = '95%';
	}
	else
	{
		accuracy = '50%';
	}

	if (alg != 0)
	{
		document.getElementById("acc").innerHTML = accuracy;
		document.getElementById("acc2").innerHTML = accuracy;
	}
	
	if (bonusLevel == "1")
	{
		document.getElementById("bonus").innerHTML="2 cents";
		document.getElementById("bonusStatement").style.display="none";
	}
	else
	{
		document.getElementById("bonus").innerHTML="10 cents";
		document.getElementById("bonusStatement").style.display="block";
	}
	
	document.getElementById("templatemo_main_wrapper").scrollIntoView();
	document.getElementById("welcome-instruction").scrollIntoView();
	
	if (assignment_Id == "ASSIGNMENT_ID_NOT_AVAILABLE")
	{
		document.getElementById("welcome-btn").innerHTML = "Accept HIT first!";
	}
};


Template.instructionCtnd.events={
	'click #welcome-btn': function(event, template){
		event.preventDefault();
		//Router.go('consent');
		Router.go('task', {_id: 1});
	}
};