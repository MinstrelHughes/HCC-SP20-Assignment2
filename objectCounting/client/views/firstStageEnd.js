Template.firstStageEnd.rendered = function(){
	$('html,body').scrollTop(0);
	document.getElementById("templatemo_header_wrapper").style.height = "30px";
	document.getElementById("content").style.fontFamily = "Optima, Segoe, Candara, Calibri, Arial, sans-serif";
	$("p").css({
		fontSize: "120%"
	});
		
	document.getElementById("templatemo_main").style.opacity = "1";
	document.getElementById("templatemo_main").style.height = "500px";
	document.getElementById("templatemo_main_wrapper").style.height = "500px";
	document.getElementById("templatemo_main_wrapper").style.width = "900px";
	document.getElementById("templatemo_main").style.width = "900px";
	document.getElementById("templatemo_main").style.borderStyle = "groove";
	document.getElementById("welcome-btn").className = "button-warning";
	ownAcc = currentSelfCorrect*5;
	document.getElementById("ownAcc").innerHTML = ownAcc+"%";

	// if (actual == "A")
	// {
	// 	document.getElementById("actualAcc").innerHTML = "55%";
	// }
	// else if (actual == "B")
	// {
	// 	//document.getElementById("actualAcc").innerHTML = "100%"; // Part 2
	// 	document.getElementById("actualAcc").innerHTML = "80%";  //Part 3
	// }
	// else
	// {
	// 	//document.getElementById("actualAcc").innerHTML = "80%";  // Part 2
	// 	document.getElementById("actualAcc").innerHTML = "100%";  //Part 3
	// }
	
	if (alg == 0)
	{
		document.getElementById("accBlock").style.display = "none";
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
	try{
		document.getElementById("acc").innerHTML = accuracy;
	}
	catch{
		document.getElementById("acc").innerHTML = 50;
	}
	
	document.getElementById("templatemo_main_wrapper").scrollIntoView();
	document.getElementById("firstStageEnd-instruction").scrollIntoView();

	if (assignment_Id == "ASSIGNMENT_ID_NOT_AVAILABLE")
	{
		document.getElementById("welcome-btn").innerHTML = "Accept HIT first!";
	}
};


Template.info.events={
	'click #welcome-btn': function(event, template){
		event.preventDefault();
		Infos.insert({workerId: worker_Id, assignmentId: assignment_Id, hitId: hit_Id, group: group, selfAccuracy: ownAcc});			
		Router.go('task', {_id: 11});	
	}
};