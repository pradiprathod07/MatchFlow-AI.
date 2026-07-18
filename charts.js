// ==========================================
// MATCHFLOW AI X
// CHARTS MODULE
// ==========================================

Chart.defaults.color = "#ffffff";
Chart.defaults.font.family = "Poppins";

// ==========================
// Crowd Density Chart
// ==========================

const crowdCtx = document.getElementById("crowdChart");

if(crowdCtx){

const crowdChart = new Chart(crowdCtx,{

type:"line",

data:{

labels:["10AM","11AM","12PM","1PM","2PM","3PM","4PM"],

datasets:[{

label:"Visitors",

data:[12000,18000,25000,34000,42000,50000,54000],

borderColor:"#3b82f6",

backgroundColor:"rgba(59,130,246,.25)",

fill:true,

tension:.4,

borderWidth:3,

pointRadius:5

}]

},

options:{

responsive:true,

plugins:{

legend:{

display:true

}

}

}

});

setInterval(()=>{

crowdChart.data.datasets[0].data.shift();

crowdChart.data.datasets[0].data.push(

48000+Math.floor(Math.random()*7000)

);

crowdChart.update();

},3000);

}

// ==========================
// Gate Occupancy
// ==========================

const gateCtx=document.getElementById("gateChart");

if(gateCtx){

const gateChart=new Chart(gateCtx,{

type:"doughnut",

data:{

labels:[

"Gate A",

"Gate B",

"Gate C",

"Gate D",

"Gate E"

],

datasets:[{

data:[

20,

25,

30,

15,

10

],

backgroundColor:[

"#2563eb",

"#10b981",

"#ef4444",

"#f59e0b",

"#8b5cf6"

],

borderWidth:2

}]

}

});

setInterval(()=>{

gateChart.data.datasets[0].data=[

Math.random()*30,

Math.random()*30,

Math.random()*30,

Math.random()*30,

Math.random()*30

];

gateChart.update();

},5000);

}

// ==========================
// Risk Meter
// ==========================

const riskCanvas=document.getElementById("riskChart");

if(riskCanvas){

const riskChart=new Chart(riskCanvas,{

type:"bar",

data:{

labels:["Risk"],

datasets:[{

label:"Risk Score",

data:[72],

backgroundColor:"#ef4444"

}]

}

});

setInterval(()=>{

riskChart.data.datasets[0].data=[

Math.floor(Math.random()*100)

];

riskChart.update();

},4000);

}

// ==========================
// Weather Chart
// ==========================

const weatherCanvas=document.getElementById("weatherChart");

if(weatherCanvas){

const weatherChart=new Chart(weatherCanvas,{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri"],

datasets:[{

label:"Temperature",

data:[28,30,29,27,31],

borderColor:"#f59e0b",

fill:false

}]

}

});

}

// ==========================
// Transport Chart
// ==========================

const transportCanvas=document.getElementById("transportChart");

if(transportCanvas){

new Chart(transportCanvas,{

type:"bar",

data:{

labels:["Metro","Bus","Taxi","Parking"],

datasets:[{

data:[95,82,75,66],

backgroundColor:[

"#2563eb",

"#10b981",

"#8b5cf6",

"#f59e0b"

]

}]

}

});

}

// ==========================
// Sustainability Chart
// ==========================

const ecoCanvas=document.getElementById("ecoChart");

if(ecoCanvas){

new Chart(ecoCanvas,{

type:"radar",

data:{

labels:[

"Solar",

"Water",

"Energy",

"Carbon",

"Recycling"

],

datasets:[{

label:"Efficiency",

data:[

90,

82,

75,

68,

95

],

backgroundColor:"rgba(16,185,129,.25)",

borderColor:"#10b981"

}]

}

});

}

// ==========================
// AI Prediction
// ==========================

const aiCanvas=document.getElementById("predictionChart");

if(aiCanvas){

new Chart(aiCanvas,{

type:"line",

data:{

labels:["Now","+15","+30","+45","+60"],

datasets:[{

label:"Crowd Prediction",

data:[

52000,

55000,

59000,

61000,

64000

],

borderColor:"#8b5cf6",

backgroundColor:"rgba(139,92,246,.2)",

fill:true

}]

}

});

}

console.log("Charts Loaded Successfully");