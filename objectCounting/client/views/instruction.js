Template.instruction.rendered = function(){
	
	document.getElementById("templatemo_header_wrapper").style.height = "30px";
	document.getElementById("content").style.fontFamily = "Optima, Segoe, Candara, Calibri, Arial, sans-serif";
	$("p").css({
		fontSize: "120%"
	});
		
	document.getElementById("templatemo_main").style.opacity = "1";
	document.getElementById("templatemo_main").style.height = "1100px";
	document.getElementById("templatemo_main_wrapper").style.height = "1100px";
	document.getElementById("templatemo_main_wrapper").style.width = "900px";
	document.getElementById("templatemo_main").style.width = "900px";
	document.getElementById("templatemo_main").style.borderStyle = "groove";
	document.getElementById("welcome-btn").className = "button-warning";
	document.getElementById("buttonArea").style.display = "none";

	document.getElementById("templatemo_main_wrapper").scrollIntoView();
	document.getElementById("welcome-instruction").scrollIntoView();

	var chart1 = AmCharts.makeChart( "pie1", {
		  "type": "pie",
		  "theme": "light",
		  "dataProvider": [ {
		    "dim": "Attractive",
		    "value": 30
		  }, {
		    "dim": "Sincere",
		    "value": 25
		  }, {
		    "dim": "Intelligent",
		    "value": 18
		  }, {
		    "dim": "Funny",
		    "value": 18
		  }, {
		    "dim": "Ambitious",
		    "value": 4
		  }, {
		    "dim": "Shared Interests",
		    "value": 5
		  }],
		  "valueField": "value",
		  "titleField": "dim",
		   "balloon":{
		   "fixedPosition":true
		  },
		  "export": {
		    "enabled": false
		  }
		} );

	var chart2 = AmCharts.makeChart( "pie2", {
		  "type": "pie",
		  "theme": "light",
		  "dataProvider": [ {
		    "dim": "Attractive",
		    "value": 25
		  }, {
		    "dim": "Sincere",
		    "value": 30
		  }, {
		    "dim": "Intelligent",
		    "value": 10
		  }, {
		    "dim": "Funny",
		    "value": 10
		  }, {
		    "dim": "Ambitious",
		    "value": 5
		  }, {
		    "dim": "Shared Interests",
		    "value": 20
		  }],
		  "valueField": "value",
		  "titleField": "dim",
		   "balloon":{
		   "fixedPosition":true
		  },
		  "export": {
		    "enabled": false
		  }
		} );

	var chart3 = AmCharts.makeChart("bar1", {
			"theme": "light",
		    "type": "serial",
		    "dataProvider": [{
		        "dim": "Attractiveness",
		        "value": 1,
		    }, {
		        "dim": "Sincerity",
		        "value": 7,
		        "color": "#fdd400"
		    }, {
		        "dim": "Intelligence",
		        "value": 8,
		        "color": "#84b761"
		    }, {
		        "dim": "Fun",
		        "value": 5,
		        "color": "#cc4748"
		    }, {
		        "dim": "Ambition",
		        "value": 7,
		        "color": "#cd82ad"
		    }, {
		        "dim": "Shared Interests",
		        "value": 4,
		        "color": "#2f4074"
		    }],
		    "valueAxes": [{
		        "axisAlpha": 0,
		        "gridAlpha": 0.1
		    }],
		    "startDuration": 1,
		    "graphs": [{
		        "balloonText": "<b>[[dim]]</b>: [[value]]",
		        "colorField": "color",
		        "fillAlphas": 0.8,
		        "lineAlpha": 0.2,
		        "type": "column",
		        "valueField": "value"
		    }],
		    "valueAxes": [
				{
					"id": "ValueAxis-1",
					"position": "top",
					"axisAlpha": 0,
					"title": "Rating",
					"maximum": 10
				}
			],
			"allLabels": [],
		    "rotate": true,
		    "columnWidth": 0.8,
		    "categoryField": "dim",
		    "categoryAxis": {
		        "gridPosition": "start",
		        "position": "left"
		    },
		    "export": {
		    	"enabled": false
		     }
	});
	

	if (assignment_Id == "ASSIGNMENT_ID_NOT_AVAILABLE")
	{
		document.getElementById("welcome-btn").innerHTML = "Accept HIT first!";
	}
};


Template.instruction.events={
	'click #start-btn': function(event, template){
		event.preventDefault();
		var intro = introJs();
		intro.setOptions({
			"showButtons": true,
			"showBullets": false,
			"hidePrev": true,
			"hideNext": true,
			'tooltipPosition': 'right' ,
			'exitOnOverlayClick': false
		});
		intro.oncomplete(function(){
			document.getElementById("buttonArea").style.display = "block";
		});
		intro.start();	
	},

	'click #welcome-btn': function(event, template){
		event.preventDefault();
		Router.go('task', {_id: 1});
	}
};