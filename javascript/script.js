

let thisWeekEvents = [{ name: "FINE ARTS EVENT: Jazz Band Concert", date: "4/28" }, { name: "Baseball Game", date: "4/29" }, { name: "Graduation", date: "5/2" }]

let eventButton = document.getElementById("event-button");
let eventsBox = document.getElementById("events-box");

eventButton.addEventListener("click", function () {
    let image = ""
    eventsBox.innerHTML = ""
    for (let i = 0; i < thisWeekEvents.length; i++) {
        if (thisWeekEvents[i].name.includes("FINE ARTS")) {
            image = "music.jpg"
        } else if (thisWeekEvents[i].name.includes("Baseball")) {
            image = "baseball.jpg"
        }
        else if (thisWeekEvents[i].name.includes("Graduation")) {
            image = "graduation.jpg"
        }
        eventsBox.innerHTML += `
            <div class="event-card">
                <img src="/images/${image}" alt="${thisWeekEvents[i].name}">
                <div class="event-info">
                    <h4>${thisWeekEvents[i].name} ${thisWeekEvents[i].date}</h4>
                    <span>2026</span>
                </div>
            </div>`
    }

});



