Meteor.publish('allFinishedWorkers',function(){
	return FinishedWorkers.find({},{fields:{assignmentId:false, hitId:false, submitTime:false, time: false, totalBonus: false}});
});
Meteor.publish('pilotStudyBackUp', function(){
	return PilotStudyBackUp.find({},{fields:{confidenceList:false,profileList:false,workerId:false}});
});


/*Meteor.publish('allRTs', function(){
	return averageRTs.find({}, {fields:{workerId:false}});
});

Meteor.publish('allFinishedWorkers',function(){
	return Surveys.find({},{fields:{assignmentId:false, hitId:false, MTurkYears:false, MTurkHours:false, MTurkIncome:false, time:false}});
});*/

/*Meteor.publish('allFinishedWorkers',function(){
	return Surveys.find({},{fields:{assignmentId:false, hitId:false, MTurkHours:false, MTurkGoal:false, time:false}});
});*/

/*Meteor.publish('allValueSurveyWorkers',function(){
	return valueSurveys.find({},{fields:{assignmentId:false, hitId:false, Q1:false, Q2:false, Q3:false, Q4:false, Q5:false, time:false}});
});*/

/*Meteor.publish('allFinishedWorkers',function(){
	return recruitmentSurveys.find({},{fields:{assignmentId:false, hitId:false, MTurkYears:false, MTurkHours:false, MTurkIncome:false, time:false}});
});*/

