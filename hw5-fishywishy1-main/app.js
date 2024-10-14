console.log("Hello World!")

function duel() {
    const p1Health = getAttributeValue("p1-health");
    const p1Armor = getAttributeValue("p1-armor");
    const p1DPS = getAttributeValue("p1-attack");

    const p2Health = getAttributeValue("p2-health");
    const p2Armor = getAttributeValue("p2-armor");
    const p2DPS = getAttributeValue("p2-attack");

    // TODO Do the simulation an alert the user of the results!
    if (p1Health === null || p1Armor === null || p1DPS === null || p2Health === null || p2Armor === null || p2DPS === null) {
        alert("Please fill out all fields before contiuning.");
    }

    const p1TimeToDefeat = (p1Health + p1Armor + p1Armor) / p2DPS;
    const p2TimeToDefeat = (p2Health + p2Armor + p2Armor) / p1DPS;
    const comp = p1TimeToDefeat - p2TimeToDefeat;

    if (comp > 0){
        alert("player 1 will win in " + Math.round(p2TimeToDefeat) + "seconds!");
    } if (comp < 0){
        alert("player 2 will win in " + Math.round(p1TimeToDefeat) + "seconds!");
    } else {
        alert("Round ends in a draw");
    }
}

