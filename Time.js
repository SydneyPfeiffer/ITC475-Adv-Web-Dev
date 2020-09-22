
import React from "react"
import ReactDOM from "react-dom"
const d = React.createElement;

export default function ShowTime() {

    var date = new Date()
    var hours= new Date().getHours()
    var time = date.toLocaleTimeString();
    let timeOfDay

          if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        } 

    return d(

        React.createElement("h3", {id: "Welcome"}, " Good ", timeOfDay, "! ", React.createElement("p", {id: "WelcomeTime"}), time));
}


// Return sun or moon icon 
export default function Icon() {
    var date = new Date()
    var hours= date.getHours()
    var min =date.getMinutes()

    if ((hours >= 6 && hours < 18) || (hours =18&& min==0))
        return(
            React.createElement("img src: 'sun.png'")
        )

    else{
        return(
            React.createElement("img src: 'moon.png'")
        )
    }
}


// Displays the greeting, time, and icon. Updates the clock 

export default function Tick() {
    ReactDOM.render(React.createElement("div", null, React.createElement(ShowTime, null),React.createElement
    (Icon, null)), document.getElementById("divider"));
}
setInterval(Tick, 1000);  