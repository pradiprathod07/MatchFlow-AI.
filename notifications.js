// ======================================
// MATCHFLOW AI X
// Notification System
// ======================================

class NotificationCenter {

    constructor() {

        this.container = document.createElement("div");
        this.container.className = "notification-center";

        document.body.appendChild(this.container);

    }

    show(title, message, type = "info") {

        const card = document.createElement("div");

        card.className = `notify ${type}`;

        card.innerHTML = `
            <div class="notify-icon">${this.icon(type)}</div>

            <div class="notify-content">

                <h4>${title}</h4>

                <p>${message}</p>

            </div>

            <span class="close">&times;</span>
        `;

        this.container.appendChild(card);

        card.querySelector(".close").onclick = () => {

            card.remove();

        };

        setTimeout(() => {

            card.style.opacity = "0";

            card.style.transform = "translateX(350px)";

            setTimeout(() => card.remove(), 500);

        }, 5000);

    }

    icon(type) {

        switch(type){

            case "success": return "✅";

            case "warning": return "⚠";

            case "error": return "🚨";

            default: return "ℹ";

        }

    }

}

const notifier = new NotificationCenter();

// ======================================
// Automatic Notifications
// ======================================

const messages = [

{
title:"Gate C",
text:"Crowd density increasing.",
type:"warning"
},

{
title:"Medical Team",
text:"Emergency handled successfully.",
type:"success"
},

{
title:"Metro",
text:"Metro running on schedule.",
type:"info"
},

{
title:"Parking",
text:"Parking Zone A is almost full.",
type:"warning"
},

{
title:"Security",
text:"Drone surveillance completed.",
type:"success"
},

{
title:"Fire Alarm",
text:"False alarm detected.",
type:"error"
}

];

function randomNotification(){

const data=

messages[Math.floor(Math.random()*messages.length)];

notifier.show(

data.title,

data.text,

data.type

);

}

setInterval(randomNotification,10000);

// ======================================
// Manual Notifications
// ======================================

window.notifySuccess=(msg)=>{

notifier.show(

"Success",

msg,

"success"

);

};

window.notifyWarning=(msg)=>{

notifier.show(

"Warning",

msg,

"warning"

);

};

window.notifyError=(msg)=>{

notifier.show(

"Emergency",

msg,

"error"

);

};

window.notifyInfo=(msg)=>{

notifier.show(

"Information",

msg,

"info"

);

};

// ======================================
// Match Start Countdown
// ======================================

let minutes=30;

setInterval(()=>{

minutes--;

if(minutes===20){

notifyInfo("Match begins in 20 minutes.");

}

if(minutes===10){

notifyWarning("Security teams prepare.");

}

if(minutes===5){

notifyWarning("Open all gates.");

}

if(minutes===1){

notifyError("Match starts in one minute!");

}

if(minutes<=0){

notifySuccess("Match has started!");

minutes=30;

}

},60000);

// ======================================
// Keyboard Shortcuts
// ======================================

document.addEventListener("keydown",(e)=>{

switch(e.key){

case "1":

notifySuccess("System Online");

break;

case "2":

notifyWarning("Crowd Increasing");

break;

case "3":

notifyError("Emergency Mode");

break;

case "4":

notifyInfo("Transport Updated");

break;

}

});

console.log("Notification Center Loaded");