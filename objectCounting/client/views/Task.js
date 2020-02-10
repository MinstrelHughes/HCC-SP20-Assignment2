

console.log("taskId:", taskId);
marker=0
// Template.Task.onCreated(function helloOnCreated() {
//     // counter starts at 0
//     this.counter = new ReactiveVar(0);
// });

Template.Task.rendered = function () {


    $('html,body').scrollTop(0);
    document.getElementById("number").innerHTML = taskId;
    console.log(taskId)
    document.getElementById("templatemo_main").style.opacity = "1";
    document.getElementById("templatemo_main").style.height = "1000px";
    document.getElementById("templatemo_main_wrapper").style.height = "1000px";
    document.getElementById("templatemo_main").style.width = "1000px";
    document.getElementById("templatemo_main_wrapper").style.width = "1000px";
    document.getElementById("templatemo_header_wrapper").style.height = "30px";
    document.getElementById("content").style.fontFamily = "Optima, Segoe, Candara, Calibri, Arial, sans-serif";
    $("p").css({
        fontSize: "120%"
    });

    idx = taskOrder[taskId - 1];


    document.getElementById("buttonArea").style.display = "block";
    document.getElementById("templatemo_main_wrapper").scrollIntoView();
    document.getElementById("welcome-instruction").scrollIntoView();
    document.getElementById("markerPic").src = image_urls[idx]
    document.getElementById("markers").innerHTML = marker;
    document.getElementById("objects").innerHTML = objectDict[idx];

    document.getElementById("currentMarkers").style.display = "none";
    document.getElementById("errorBlock").style.display = "none";
    document.getElementById("clearButton").style.display = "none";


    if(markerGroup==1){
        document.getElementById("currentMarkers").style.display = "block";
        document.getElementById("clearButton").style.display = "block";

    }

    if (assignment_Id == "ASSIGNMENT_ID_NOT_AVAILABLE") {
        document.getElementById("welcome-btn").innerHTML = "Accept HIT first!";
    }
};
// var previous_test = PilotStudy.find().fetch();
// console.log(previous_test)


Template.Task.events = {
    "click #markerPic": function (event, template) {
      marker = marker+1;
        document.getElementById("markers").innerHTML = marker;
        },

    'change input[type=radio][name=self-predict]': function (event, template) {
        event.preventDefault();
    },
    'click #clearButton':function () {
      $('.ball').remove();
      marker = 0;
      document.getElementById("markers").innerHTML = marker;


    },
    'click #welcome-btn': function (event, template) {
        event.preventDefault();

        var tempAnswer = $("#answer").val();
        console.log("answer,",tempAnswer)

        if(tempAnswer=== "" || tempAnswer==="undefined" || tempAnswer===null){
            document.getElementById("errorBlock").style.display = "block";
        }else{
            var today = new Date();
            marker = 0;
        if(markerGroup==1){
            Answers.insert({
                workerId: worker_Id,
                assignmentId: assignment_Id,
                hitId: hit_Id,
                markerGroup: markerGroup,
                taskId: taskId,
                image: idx,
                answer: tempAnswer,
                marker:marker,
                time: today.toString()});
        }else{
            Answers.insert({
                workerId: worker_Id,
                assignmentId: assignment_Id,
                hitId: hit_Id,
                markerGroup: markerGroup,
                taskId: taskId,
                image: idx,
                answer: tempAnswer,
                time: today.toString()});
        }
            Router.go('transit')

        }
    }
};