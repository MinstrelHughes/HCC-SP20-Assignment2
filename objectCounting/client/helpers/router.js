
worker_Id = '';
assignment_Id = '';
hit_Id = '';
group = '';
bonusLevel = '';
totalBonus = 0;
alg = '';
taskId = 0;
currentCorrect = 0;
currentSelfCorrect = 0;
correctList = [];
confidenceList = [];
attentionCheck = 13;
selfPredictionCheck = 0;
selfConfidencenCheck = 0;
image_urls = [
    "http://ichef.bbci.co.uk/images/ic/640x360/p033tw9j.jpg",
    "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg,",
    "https://img.futurecar.com/201701/13/l_5878e3570753f.jpg",
    "https://anotherimg-dazedgroup.netdna-ssl.com/1024/azure/another-prod/170/7/177354.jpg",
    "https://www.readersbooks.com/sites/readersbooks.com/files/mbooks.jpg",
    "https://ja3ga476chj1nc6csy2j81c7-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/press-610x407.jpg"
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
markerGroup = getRandomInt(2);
console.log(markerGroup)

// use regex to deal with the HIT id
gup = function(path, name){
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec(path);
    if( results == null )
      return "";
    else
      return results[1];
 }

Router.route('/lzr/welcome', function(){




    // var promise = new Promise(function(resolve){
    //     HTTP.get(Meteor.absoluteUrl('/phase_1_0126.json'),function(err,result){
    //         resolve(result.data);
    //         console.log("??",result.data);
    //     });
    // });
    objectDict = {}
    objectDict[0] = "people";
    objectDict[1] = "cats";
    objectDict[2] = "cars";
    objectDict[3] = "flowers";
    objectDict[4] = "books";
    objectDict[5] = "cameras";

    taskOrder = [0,1,2,3,4,5]
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    shuffle(taskOrder)

      path = window.location.href;
      worker_Id = gup(path, 'workerId');
      assignment_Id = gup(path, 'assignmentId');
      hit_Id = gup(path, 'hitId');


    Meteor.subscribe('allFinishedWorkers');
    Meteor.subscribe('pilotStudyBackUp');

    this.layout('MainLayout');
    this.render('welcome');

});


Router.route('/task/:_id', function(){
   taskId = parseInt(this.params._id);
   this.layout('MainLayout');
   this.render('Task');
}, {
  name: 'task'
});

Router.route('/instruction', function(){
      path = window.location.href;
      this.layout('MainLayout');
      this.render('instruction');
   });



Router.route('/transit', function(){
      path = window.location.href;
      this.layout('MainLayout');
      this.render('transit');
   });



Router.route('/finalPage', function(){
      path = window.location.href;
      Meteor.subscribe('allFinishedWorkers');

      this.layout('MainLayout');
      this.render('finalPage');
   });

