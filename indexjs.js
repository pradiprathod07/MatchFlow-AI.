// ======================================
// MATCHFLOW AI X
// Smart Stadium Digital Twin
// ======================================

// Dashboard State
const dashboard = {
    crowd: 52410,
    waitTime: 4,
    risk: "HIGH",
    weather: 28,
    transport: "Normal"
};

// ============================
// LIVE CLOCK
// ============================

function updateClock(){

    const now = new Date();

    const options = {
        weekday:"long",
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    };

    const clock = document.getElementById("liveClock");

    if(clock){

        clock.innerHTML = now.toLocaleString("en-US",options);

    }

}

setInterval(updateClock,1000);


// ============================
// CROWD COUNTER
// ============================

const crowdElement = document.getElementById("crowdCount");

function updateCrowd(){

    let change = Math.floor(Math.random()*120);

    if(Math.random()>0.5){

        dashboard.crowd += change;

    }else{

        dashboard.crowd -= change;

    }

    crowdElement.innerHTML =
    dashboard.crowd.toLocaleString();

}

setInterval(updateCrowd,3000);


// ============================
// WEATHER
// ============================

function updateWeather(){

    const weather = document.querySelector(".weather-card h1");

    if(!weather) return;

    dashboard.weather =
        26 + Math.floor(Math.random()*5);

    weather.innerHTML =
        dashboard.weather + "°C";

}

setInterval(updateWeather,10000);


// ============================
// WAIT TIME
// ============================

function updateWait(){

    const cards =
    document.querySelectorAll(".card h2");

    if(cards.length<3) return;

    dashboard.waitTime =
    Math.floor(Math.random()*8)+2;

    cards[2].innerHTML =
    dashboard.waitTime + " min";

}

setInterval(updateWait,5000);


// ============================
// TRANSPORT
// ============================

const transportData=[
"Normal",
"Delayed",
"Heavy Traffic",
"Fast",
"Congested"
];

function updateTransport(){

const cards=
document.querySelectorAll(".card h2");

if(cards.length<6) return;

dashboard.transport=

transportData[
Math.floor(Math.random()*transportData.length)
];

cards[5].innerHTML=
dashboard.transport;

}

setInterval(updateTransport,8000);


// ============================
// LIVE NOTIFICATIONS
// ============================

const notifications=[

"Gate C crowd increasing",

"Medical team arrived",

"Parking Zone B full",

"Metro delay reduced",

"Weather updated",

"AI recommends opening Gate D",

"Security patrol completed",

"Drone completed surveillance"

];

function showNotification(){

const panel=document.querySelector(".notification-card h4");

if(!panel) return;

panel.innerHTML=

notifications[

Math.floor(Math.random()*notifications.length)

];

}

setInterval(showNotification,6000);


// ============================
// LIVE ALERTS
// ============================

const alerts=document.querySelectorAll(".alert");

function updateAlerts(){

alerts.forEach(alert=>{

alert.classList.remove(

"red",

"orange",

"green",

"blue"

);

const colors=[

"red",

"orange",

"green",

"blue"

];

alert.classList.add(

colors[

Math.floor(Math.random()*4)

]

);

});

}

setInterval(updateAlerts,4000);


// ============================
// CHART.JS
// ============================

const crowdChart=

document.getElementById("crowdChart");

if(crowdChart){

new Chart(crowdChart,{

type:"line",

data:{

labels:[

"10 AM",

"11",

"12",

"1",

"2",

"3",

"4",

"5"

],

datasets:[{

label:"Crowd Density",

data:[

12000,

18000,

25000,

32000,

41000,

46000,

52000,

54000

],

borderColor:"#3b82f6",

backgroundColor:"rgba(59,130,246,.2)",

fill:true,

tension:.4

}]

},

options:{

responsive:true,

plugins:{

legend:{

labels:{

color:"#fff"

}

}

},

scales:{

x:{

ticks:{color:"#fff"}

},

y:{

ticks:{color:"#fff"}

}

}

}

});

}


// ============================
// GATE CHART
// ============================

const gateChart=

document.getElementById("gateChart");

if(gateChart){

new Chart(gateChart,{

type:"doughnut",

data:{

labels:[

"Gate A",

"Gate B",

"Gate C",

"Gate D"

],

datasets:[{

data:[

20,

35,

28,

17

],

backgroundColor:[

"#2563eb",

"#10b981",

"#ef4444",

"#f59e0b"

]

}]

}

});

}


// ============================
// LEAFLET MAP
// ============================

const mapDiv=document.getElementById("map");

if(mapDiv){

const map=L.map("map").setView(

[40.8296,-73.9262],15

);

L.tileLayer(

'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',

{

maxZoom:19

}

).addTo(map);

L.marker(

[40.8296,-73.9262]

)

.addTo(map)

.bindPopup(

"🏟 Smart Stadium"

)

.openPopup();

}


// ============================
// PAGE LOADED
// ============================

console.log(

"MatchFlow AI X Started Successfully"

);
// =====================================
// AI CHATBOT
// =====================================

const aiInput = document.querySelector(".chat-input input");
const aiButton = document.querySelector(".chat-input button");
const chatBox = document.querySelector(".chat-box");

const responses = {
    gate: "🚪 Gate D is recommended. Current wait time is only 2 minutes.",
    crowd: "👥 Crowd density at Gate C is increasing. Open Gate D immediately.",
    weather: "☀️ Weather is clear with a temperature of 28°C.",
    parking: "🅿️ Parking Zone A has 138 spaces available.",
    metro: "🚆 Metro service is running normally.",
    emergency: "🚨 Emergency protocol activated. Medical team has been notified.",
    food: "🍔 Food Court B currently has the shortest queue.",
    default: "🤖 I'm MatchFlow AI. Ask me about gates, crowd, parking, weather, transport, or emergencies."
};

function sendMessage(){

    if(!aiInput.value.trim()) return;

    const user = document.createElement("div");
    user.className = "bot-msg";
    user.style.background = "#2563eb";
    user.innerHTML = aiInput.value;

    chatBox.appendChild(user);

    const question = aiInput.value.toLowerCase();

    aiInput.value = "";

    setTimeout(()=>{

        const reply = document.createElement("div");

        reply.className = "bot-msg";

        let answer = responses.default;

        for(const key in responses){

            if(question.includes(key)){
                answer = responses[key];
            }

        }

        reply.innerHTML = answer;

        chatBox.appendChild(reply);

        chatBox.scrollTop = chatBox.scrollHeight;

    },800);

}

if(aiButton){
    aiButton.onclick = sendMessage;
}

if(aiInput){
    aiInput.addEventListener("keypress",(e)=>{
        if(e.key==="Enter"){
            sendMessage();
        }
    });
}


// =====================================
// VOICE ASSISTANT
// =====================================

if('webkitSpeechRecognition' in window){

const recognition = new webkitSpeechRecognition();

recognition.lang="en-US";

recognition.continuous=false;

recognition.onresult=(event)=>{

aiInput.value=

event.results[0][0].transcript;

sendMessage();

};

window.startVoice=function(){

recognition.start();

}

}


// =====================================
// DARK MODE
// =====================================

function toggleTheme(){

document.body.classList.toggle("light-mode");

}

window.toggleTheme=toggleTheme;


// =====================================
// EMERGENCY MODE
// =====================================

function emergencyMode(){

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.style.border="2px solid red";

});

alert("🚨 Emergency Mode Activated");

}

window.emergencyMode=emergencyMode;


// =====================================
// LIVE RISK SCORE
// =====================================

const riskLevels=[

"LOW",

"MEDIUM",

"HIGH",

"CRITICAL"

];

setInterval(()=>{

const risk=

document.querySelector(".danger");

if(!risk) return;

risk.innerHTML=

riskLevels[

Math.floor(

Math.random()*riskLevels.length

)

];

},7000);


// =====================================
// RANDOM CROWD ALERTS
// =====================================

const alertMessages=[

"East Gate Crowd Rising",

"VIP Entrance Clear",

"Medical Team Deployed",

"Parking Zone Full",

"Heavy Rain Expected",

"Traffic Increasing",

"Drone Monitoring Active"

];

setInterval(()=>{

const liveAlerts=

document.querySelectorAll(".alert");

liveAlerts.forEach(alert=>{

alert.innerHTML=

alertMessages[

Math.floor(Math.random()*alertMessages.length)

];

});

},6000);


// =====================================
// EXPORT REPORT
// =====================================

function exportReport(){

const report=

`
MATCHFLOW AI REPORT

Visitors : ${dashboard.crowd}

Risk : ${dashboard.risk}

Weather : ${dashboard.weather}°C

Transport : ${dashboard.transport}

Generated : ${new Date()}

`;

const blob=

new Blob([report],{

type:"text/plain"

});

const link=

document.createElement("a");

link.href=

URL.createObjectURL(blob);

link.download="MatchFlow_Report.txt";

link.click();

}

window.exportReport=exportReport;


// =====================================
// SOUND ALERT
// =====================================

function playAlert(){

const audio=new Audio(

"https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"

);

audio.play();

}

window.playAlert=playAlert;


// =====================================
// LOADING
// =====================================

window.onload=()=>{

console.log("Dashboard Ready 🚀");

};
setInterval(()=>{

    const forecast = document.getElementById("forecast");

    if(forecast){

        forecast.innerHTML =

        AI.forecast().toLocaleString();

    }

},5000);
// =========================================
// AI CCTV
// =========================================

const cameraMessages=[

"Normal",

"Safe",

"Monitoring",

"Crowd Rising",

"Suspicious Activity",

"Medical Incident",

"Security Alert",

"Restricted Area",

"Emergency Exit Blocked"

];

const classes=[

"success",

"warning",

"danger"

];

function updateCCTV(){

for(let i=2;i<=4;i++){

const tag=document.getElementById("camStatus"+i);

if(!tag) continue;

const text=

cameraMessages[

Math.floor(Math.random()*cameraMessages.length)

];

tag.innerHTML=text;

tag.className="ai-tag";

if(text==="Crowd Rising")

tag.classList.add("warning");

if(text==="Security Alert")

tag.classList.add("danger");

if(text==="Medical Incident")

tag.classList.add("danger");

if(text==="Safe")

tag.classList.add("success");

}

}

setInterval(updateCCTV,4000);
// ======================================
// AI DRONE SURVEILLANCE
// ======================================

const drone = document.getElementById("droneIcon");

const droneLocation = document.getElementById("droneLocation");

const battery = document.getElementById("batteryLevel");

const droneStatus = document.getElementById("droneStatus");

const observation = document.getElementById("droneObservation");

const patrolPoints=[

{

x:40,

y:40,

gate:"Gate A"

},

{

x:500,

y:40,

gate:"Gate B"

},

{

x:500,

y:320,

gate:"Gate C"

},

{

x:40,

y:320,

gate:"Gate D"

}

];

const aiReports=[

"Normal Crowd Movement",

"Security Personnel Visible",

"No Suspicious Activity",

"Traffic Flow Normal",

"Crowd Increasing",

"Medical Team Available",

"Emergency Exit Clear",

"Queue Length Increasing",

"Parking Occupancy 80%"

];

let point=0;

let batteryLevel=100;

setInterval(()=>{

point++;

if(point>=patrolPoints.length){

point=0;

}

const p=patrolPoints[point];

drone.style.left=p.x+"px";

drone.style.top=p.y+"px";

droneLocation.innerHTML=p.gate;

batteryLevel--;

if(batteryLevel<=15){

droneStatus.innerHTML="Returning to Charging Station";

}

else{

droneStatus.innerHTML="Patrolling";

}

battery.innerHTML=batteryLevel+"%";

observation.innerHTML=

aiReports[Math.floor(Math.random()*aiReports.length)];

if(batteryLevel<=0){

batteryLevel=100;

}

},4000);
// ====================================
// AI CROWD HEATMAP
// ====================================

const zones=[

document.getElementById("zoneA"),

document.getElementById("zoneB"),

document.getElementById("zoneC"),

document.getElementById("zoneD")

];

const gateNames=[

"Gate A",

"Gate B",

"Gate C",

"Gate D"

];

const aiDecisions=[

"Redirect visitors to Gate D.",

"Open emergency lane.",

"Deploy security team.",

"Activate crowd barriers.",

"Increase ticket counters.",

"Open VIP entrance.",

"Deploy medical team."

];

function updateHeatmap(){

let highest=0;

let gate=0;

zones.forEach((zone,index)=>{

const value=Math.floor(Math.random()*100);

zone.className="heat-zone";

if(value<35){

zone.classList.add("green");

}

else if(value<70){

zone.classList.add("yellow");

}

else{

zone.classList.add("red");

}

if(value>highest){

highest=value;

gate=index;

}

});

document.getElementById("busyGate").innerHTML=

gateNames[gate];

document.getElementById("evacRoute").innerHTML=

gateNames[(gate+1)%4];

document.getElementById("clearTime").innerHTML=

(8+Math.floor(Math.random()*10))+" min";

document.getElementById("heatDecision").innerHTML=

aiDecisions[Math.floor(Math.random()*aiDecisions.length)];

}

updateHeatmap();

setInterval(updateHeatmap,5000);