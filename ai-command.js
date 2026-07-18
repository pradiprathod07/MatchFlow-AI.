// =============================================
// MATCHFLOW AI X
// AI COMMAND CENTER
// =============================================

class AICommandCenter {

    constructor(){

        this.history=[];

        this.riskScore=35;

        this.confidence=96;

        this.currentGate="Gate A";

        this.recommendation="System Normal";

        this.countdown=30;

        this.start();

    }

    start(){

        this.update();

        setInterval(()=>{

            this.update();

        },5000);

    }

    update(){

        this.generateRisk();

        this.predict();

        this.render();

    }

    generateRisk(){

        this.riskScore=Math.floor(Math.random()*100);

        if(this.riskScore<25){

            this.level="LOW";

        }

        else if(this.riskScore<50){

            this.level="MEDIUM";

        }

        else if(this.riskScore<75){

            this.level="HIGH";

        }

        else{

            this.level="CRITICAL";

        }

    }

    predict(){

        const gates=[

        "Gate A",

        "Gate B",

        "Gate C",

        "Gate D",

        "Gate E",

        "VIP Entrance"

        ];

        this.currentGate=

        gates[Math.floor(Math.random()*gates.length)];

        const actions=[

        "Deploy Security Team",

        "Open Additional Gates",

        "Increase Medical Staff",

        "Redirect Crowd",

        "Increase CCTV Monitoring",

        "Activate Drone Patrol",

        "Deploy Traffic Police",

        "Open Emergency Exit"

        ];

        this.recommendation=

        actions[Math.floor(Math.random()*actions.length)];

        this.confidence=

        88+Math.floor(Math.random()*12);

        this.countdown=

        10+Math.floor(Math.random()*25);

        this.history.push({

            time:new Date().toLocaleTimeString(),

            score:this.riskScore,

            level:this.level

        });

        if(this.history.length>20){

            this.history.shift();

        }

    }

    render(){

        const risk=document.getElementById("riskScore");

        const level=document.getElementById("riskLevel");

        const gate=document.getElementById("riskGate");

        const action=document.getElementById("recommendation");

        const confidence=document.getElementById("confidence");

        const timer=document.getElementById("countdown");

        if(risk) risk.innerHTML=this.riskScore+"%";

        if(level) level.innerHTML=this.level;

        if(gate) gate.innerHTML=this.currentGate;

        if(action) action.innerHTML=this.recommendation;

        if(confidence) confidence.innerHTML=this.confidence+"%";

        if(timer) timer.innerHTML=this.countdown+" min";

    }

}

const commandCenter=new AICommandCenter();