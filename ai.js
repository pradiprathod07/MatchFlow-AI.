// =========================================
// MATCHFLOW AI X
// AI Prediction Engine
// =========================================

class StadiumAI {

    constructor(){

        this.crowd = 52000;
        this.weather = 28;
        this.waitTime = 4;
        this.gates = 14;
        this.risk = "LOW";

        this.predictionHistory = [];

    }

    // -------------------------
    // Generate Live Data
    // -------------------------

    simulate(){

        this.crowd += Math.floor(Math.random()*800)-400;

        this.weather = 26 + Math.floor(Math.random()*7);

        this.waitTime = 2 + Math.floor(Math.random()*8);

        this.gates = 12 + Math.floor(Math.random()*7);

        this.analyse();

    }

    // -------------------------
    // AI Decision
    // -------------------------

    analyse(){

        let recommendation = "";
        let risk = "LOW";

        if(this.crowd > 60000){

            recommendation =
            "Open all stadium gates immediately.";

            risk = "HIGH";

        }

        if(this.waitTime > 8){

            recommendation =
            "Deploy additional ticket scanners.";

            risk = "MEDIUM";

        }

        if(this.weather > 32){

            recommendation =
            "Increase water stations for visitors.";

        }

        if(this.gates < 13){

            recommendation =
            "Open additional gates.";

            risk = "HIGH";

        }

        if(this.crowd > 70000){

            recommendation =
            "Emergency Crowd Control Required.";

            risk = "CRITICAL";

        }

        this.risk = risk;

        this.updateDashboard(recommendation);

    }

    // -------------------------
    // Update UI
    // -------------------------

    updateDashboard(message){

        const riskElement = document.getElementById("riskLevel");

        if(riskElement){

            riskElement.innerHTML = this.risk;

        }

        const aiBox = document.querySelector(".chat-box");

        if(aiBox){

            const div = document.createElement("div");

            div.className = "bot-msg";

            div.innerHTML = `
                🤖 <b>AI Prediction</b><br>
                Crowd : ${this.crowd.toLocaleString()}<br>
                Risk : <b>${this.risk}</b><br>
                Recommendation : ${message}
            `;

            aiBox.appendChild(div);

            aiBox.scrollTop = aiBox.scrollHeight;

        }

        this.predictionHistory.push({

            time:new Date().toLocaleTimeString(),

            crowd:this.crowd,

            risk:this.risk,

            recommendation:message

        });

    }

    // -------------------------
    // Forecast
    // -------------------------

    forecast(){

        let nextCrowd = this.crowd;

        nextCrowd += Math.floor(Math.random()*5000);

        return nextCrowd;

    }

}

const AI = new StadiumAI();

setInterval(()=>{

    AI.simulate();

},8000);
// =======================================
// AI COMMAND CENTER LIVE UPDATE
// =======================================

const actions = [

"Open Gate D immediately.",

"Deploy 2 security officers.",

"Increase ticket scanners.",

"Redirect visitors to Gate A.",

"Open hydration stations.",

"Increase CCTV monitoring.",

"Dispatch medical response team.",

"Activate drone surveillance."

];

setInterval(()=>{

const score = Math.floor(Math.random()*100);

const future = 52000 + Math.floor(Math.random()*12000);

const confidence = 90 + Math.floor(Math.random()*10);

const timer = 10 + Math.floor(Math.random()*20);

const gates=[

"Gate A",

"Gate B",

"Gate C",

"Gate D",

"VIP",

"North Entry"

];

document.getElementById("riskScore").innerHTML =
score + "%";

document.getElementById("futureCrowd").innerHTML =
future.toLocaleString();

document.getElementById("confidence").innerHTML =
confidence + "%";

document.getElementById("countdown").innerHTML =
timer + " min";

document.getElementById("riskGate").innerHTML =
gates[Math.floor(Math.random()*gates.length)];

let level = "LOW";

let color = "#10b981";

if(score>35){

level="MEDIUM";

color="#f59e0b";

}

if(score>60){

level="HIGH";

color="#ef4444";

}

if(score>85){

level="CRITICAL";

color="#dc2626";

}

const risk = document.getElementById("aiRiskLevel");

risk.innerHTML = level;

risk.style.color = color;

document.getElementById("recommendation").innerHTML =
actions[Math.floor(Math.random()*actions.length)];

},5000);