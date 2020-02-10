Template.welcome.rendered = function(){
	
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
	document.getElementById("error-block").style.display = "none";
	document.getElementById("markerGroup").style.display = "none";


	if(markerGroup==1){
		document.getElementById("markerGroup").style.display = "block";
	}

	if (assignment_Id == "ASSIGNMENT_ID_NOT_AVAILABLE")
	{
		document.getElementById("welcome-btn").innerHTML = "Accept HIT first!";
		$("#welcome-btn").addClass("disable");
	}
};


Template.welcome.events={
	'click #welcome-btn': function(event, template){
		event.preventDefault();
		var existedWorker = FinishedWorkers.find({"workerId": worker_Id});
		if (existedWorker.count()>0)
		{
			document.getElementById("error-block").style.display = "block";
			$("#welcome-btn").addClass("disable");
		}
		else
		{
			// Router.go("instruction")
			Router.go('task',{_id:1});
		}
			
	}
};