Template.transit.rendered=function(){
	// if (taskId == 1)
	// {
	// 	Router.go('firstStageEnd');
	// }
	// else if (taskId == 20)
	// {
	// 	Router.go('info')
	// }
	// else if (taskId == 40)
	// {
	// 	Router.go('survey');
	// }
	if (taskId === 6){
		Router.go('finalPage')
	} else {
		taskId = taskId + 1;
		Router.go('task', {_id: taskId});
	}
}