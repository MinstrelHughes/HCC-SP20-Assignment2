Template.finalPage.rendered = function(){
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
	document.getElementById("warning").style.display = "none";

	document.getElementById("templatemo_main_wrapper").scrollIntoView();
	document.getElementById("welcome-instruction").scrollIntoView();

	document.getElementById("usefulness").style.display = (markerGroup==1)? "block":"none";
		if (assignment_Id == "ASSIGNMENT_ID_NOT_AVAILABLE")
		{
			document.geElementById("welcome-btn").innerHTML = "Accept HIT first!";
	}


};

	// const previous_test = PilotStudyBackUp.find().fetch();
	// console.log(previous_test)







Template.finalPage.events={

	'click #welcome-btn': function(event, template){

		event.preventDefault();

		var existedWorker = FinishedWorkers.find({"workerId": worker_Id});
		if (existedWorker.count()>0)
		{
			window.alert("Every HIT can only be submitted once. It seems like you have submitted to the HIT previously. Please return this HIT.");
			// document.getElementById("error-block").style.display = "block";
			$("#welcome-btn").addClass("disable");
		}else{

			var tempUseful = $("input[type='radio'][name=useful]:checked").val();


			if (((tempUseful == "") || (typeof tempUseful === "undefined") || (tempUseful == null)) && markerGroup==1)
			{
				document.getElementById("warning").style.display = "block";
			}else{

				var today = new Date();

				FinishedWorkers.insert({workerId: worker_Id, assignmentId: assignment_Id, hitId: hit_Id, markerGroup:markerGroup,useful:tempUseful, time: today.toString()});

				var str= "https://www.mturk.com/mturk/externalSubmit?assignmentId="+assignment_Id.toString()+"&Finished=Submit";
				Meteor.setTimeout(function(){window.location.href = str;},500);
			}





		}

	}
};