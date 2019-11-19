//load JQuery ui
window.onload=function(){
  document.getElementById('input-file').addEventListener('change', getFile)
  $( "#tabs" ).tabs();
  $(".spinner").spinner();
  loadMap();
}

//load log file
//load file
function getFile(event) {
  const input = event.target
  if ('files' in input && input.files.length > 0) {
    placeFileContent(
      document.getElementById('content-target'),
      input.files[0])
  }
}

//display log file
var contentNewLineSplitArray = [];
function placeFileContent(target, file) {
  readFileContent(file).then(content => {
    target.value = content
    $(".filterBtn").click(

    //parse log files
    function parseLog() {
      console.log(content)
      contentNewLineSplitArray = content.split('\n');
      console.log('contentNewLineSplitArray array object')
      console.log(contentNewLineSplitArray)

      var contentWithOnlyAssoc = []
      //var substring;
      var substring = this.id;
      //var substring = "Deauth";

      for (var i = 0; i < contentNewLineSplitArray.length; i++) {
        console.log('contentNewLineSplitArray of 1')
        console.log(contentNewLineSplitArray[i])
        if (contentNewLineSplitArray[i].includes(substring)) {
          contentWithOnlyAssoc.push(contentNewLineSplitArray[i])
        }
      }
      console.log('making the new lines with the array')
      console.log(contentWithOnlyAssoc.join("\r\n"))

      target.value = contentWithOnlyAssoc.join("\r\n")

      //VERY IMPORTANT
      //how to get ARRAY to print each element on new line
      //target.value = printedArray.join("\r\n\n")
    })
  }).catch(error => console.log(error))
  updateData();
}



//Update Data
function updateData(){
  getAllPops();
  loadMap();
  //TODO: add graph and table reload
}

//get populations
function calcPop(location){
  var population = 0;
  for(var i = 0; i < contentNewLineSplitArray.length; i++)
  {
    if(contentNewLineSplitArray[i].includes(location))
    {
      population++;
    }
  }
  return population;
}


//count Population
//count Population
var atkinsPop = 10;
var woodwardPop = 2;
var unionPop = 6;
var epicPop = 2;
var coedPop = 2;
var fretwelPop = 3;
var colvardPop = 2;
var conePop = 1;
var dukePop = 1;
var robinsonPop = 1;
var rowePop = 1;
var belkPop = 0;
var gagePop = 0;
var huntPop = 0;

function getAllPops(){
  atkinsPop = calcPop("Atki");
  console.log("Atkins Population: "+atkinsPop)
  //TODO: add all other locations
}

function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}




function loadMap(){
  var uncc = new google.maps.LatLng(35.307564, -80.735759);

  var woodward = new google.maps.LatLng(35.307345, -80.735652);
  var union = new google.maps.LatLng(35.308906, -80.733758);
  var atkins = new google.maps.LatLng(35.305850, -80.732149);
  var epic = new google.maps.LatLng(35.309097, -80.741713);
  var fretwell = new google.maps.LatLng(35.306057, -80.729141);
  var colvard = new google.maps.LatLng(35.304845, -80.731715);
  var cone = new google.maps.LatLng(35.305122, -80.733254);
  var duke = new google.maps.LatLng(35.312063, -80.741291);
  var robinson = new google.maps.LatLng(35.303894, -80.729934);
  var rowe = new google.maps.LatLng(35.304644, -80.730759);
  var belk = new google.maps.LatLng(35.306394, -80.729969);
  var gage = new google.maps.LatLng(35.300717, -80.734088);
  var hunt = new google.maps.LatLng(35.301420, -80.736445);

  var heatMapData = [
      {location: woodward, weight: woodwardPop},
      {location: union, weight: unionPop},
      {location: atkins, weight: atkinsPop},
      {location: epic, weight: epicPop},
      {location: fretwell, weight: fretwelPop},
  	{location: colvard, weight: colvardPop},
  	{location: cone, weight: conePop},
  	{location: duke, weight: dukePop},
  	{location: robinson, weight: robinsonPop},
  	{location: rowe, weight: rowePop},
  	{location: belk, weight: belkPop},
  	{location: gage, weight: gagePop},
  	{location: hunt, weight: huntPop},
    ]

  var map = new google.maps.Map(document.getElementById('map'), {
    center: uncc,
    zoom: 16,
    dissipating: false
  });

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatMapData,
	radius: 30
  });
  heatmap.setMap(map);
}

//GRAPHS

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.

      $("#tab-2").click(drawChart());

      function drawChart() {

      }
