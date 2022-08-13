

function busFare (jatri) {
    const busSeat = 50;
    const microSeat = 11;
    const publicBusFare = 250;
    let busNeeded = jatri % busSeat;
    let microNeeded = busNeeded % microSeat;
    let busFareAmount = parseFloat((microNeeded * publicBusFare).toFixed(2));
    if (typeof jatri !== "number" || jatri < 0) {
        return "Please enter valid Jatri number!"
    }
    else {
        return busFareAmount;
    }
}

const fareIs = busFare(219);
console.log(fareIs);