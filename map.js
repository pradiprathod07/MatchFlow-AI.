// ==========================================
// MATCHFLOW AI X
// Interactive Stadium Map
// ==========================================

const stadiumLocation = [19.9975, 73.7898]; // Example location (change if needed)

const stadiumMap = L.map("map", {
    zoomControl: true
}).setView(stadiumLocation, 17);

// ==========================================
// Tile Layer
// ==========================================

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20,
    attribution: "© OpenStreetMap"
}).addTo(stadiumMap);

// ==========================================
// Stadium Marker
// ==========================================

const stadiumMarker = L.marker(stadiumLocation).addTo(stadiumMap);

stadiumMarker.bindPopup(`
<h3>🏟 MatchFlow AI Stadium</h3>
<p>Digital Twin Control Center</p>
`).openPopup();

// ==========================================
// Gates
// ==========================================

const gates = [

{
name:"Gate A",
coords:[19.9979,73.7892],
crowd:65
},

{
name:"Gate B",
coords:[19.9983,73.7897],
crowd:40
},

{
name:"Gate C",
coords:[19.9976,73.7904],
crowd:90
},

{
name:"Gate D",
coords:[19.9970,73.7900],
crowd:35
}

];

// ==========================================
// Gate Colors
// ==========================================

function gateColor(crowd){

if(crowd<40) return "green";

if(crowd<70) return "orange";

return "red";

}

gates.forEach(gate=>{

L.circleMarker(gate.coords,{

radius:12,

color:gateColor(gate.crowd),

fillOpacity:.8

})

.addTo(stadiumMap)

.bindPopup(`

<h3>${gate.name}</h3>

<p>Crowd Density : ${gate.crowd}%</p>

`);

});

// ==========================================
// Parking
// ==========================================

L.marker([19.9968,73.7890])

.addTo(stadiumMap)

.bindPopup("🅿 Parking Zone");

// ==========================================
// Medical Center
// ==========================================

L.marker([19.9988,73.7895])

.addTo(stadiumMap)

.bindPopup("🏥 Medical Center");

// ==========================================
// Food Court
// ==========================================

L.marker([19.9985,73.7905])

.addTo(stadiumMap)

.bindPopup("🍔 Food Court");

// ==========================================
// Security Office
// ==========================================

L.marker([19.9971,73.7888])

.addTo(stadiumMap)

.bindPopup("🛡 Security Control");

// ==========================================
// Live Crowd Simulation
// ==========================================

function updateCrowd(){

gates.forEach(gate=>{

gate.crowd=Math.floor(Math.random()*100);

});

console.clear();

console.table(gates);

}

setInterval(updateCrowd,5000);

// ==========================================
// Emergency Zone
// ==========================================

const emergency=L.circle(

[19.9976,73.7904],

{

radius:40,

color:"red",

fillColor:"red",

fillOpacity:.25

}

).addTo(stadiumMap);

emergency.bindPopup("🚨 Emergency Zone");

// ==========================================
// Drone Simulation
// ==========================================

const drone=L.marker(stadiumLocation).addTo(stadiumMap);

let angle=0;

setInterval(()=>{

angle+=0.05;

const lat=stadiumLocation[0]+0.0005*Math.cos(angle);

const lng=stadiumLocation[1]+0.0005*Math.sin(angle);

drone.setLatLng([lat,lng]);

},100);

// ==========================================
// Heat Zones
// ==========================================

const heatZones=[

{
coords:[19.9977,73.7903],
radius:30
},

{
coords:[19.9982,73.7896],
radius:25
},

{
coords:[19.9972,73.7892],
radius:35
}

];

heatZones.forEach(zone=>{

L.circle(zone.coords,{

radius:zone.radius,

color:"orange",

fillColor:"orange",

fillOpacity:.2

})

.addTo(stadiumMap);

});

// ==========================================
// Auto Zoom
// ==========================================

document.addEventListener("keydown",(e)=>{

if(e.key==="z"){

stadiumMap.setZoom(19);

}

if(e.key==="x"){

stadiumMap.setZoom(17);

}

});

console.log("Map Loaded Successfully");