//Modell
let eightBallResponses = [
    // Affirmative answers
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    // Non-committal answers
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    // Negative answers
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
];

let eightBallIndex = 0;
let EightBallText = "";
let textColor = "black";

//View
updateView();

function updateView() {

    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="center">
        <div class="black ball center" onclick="shake8Ball()">
            <div class="white ball center">
                <div class="eightBallNumber">
                8
                </div>
            </div>
        </div>
        <div id="eightBallTextDiv" style="color:${textColor}">${EightBallText}</div>   
    </div>
    `;
}

//Controller
function shake8Ball() {
    random8BallNumber();
    EightBallText = eightBallResponses[eightBallIndex];
    change8BallAnswerColor();
    updateView();
}

function change8BallAnswerColor() {
    if (eightBallIndex <= 9) {
        textColor = 'green';
    }
    else if (eightBallIndex >= 15) {
        textColor = 'red';
    }
    else if (eightBallIndex > 9 && eightBallIndex < 15) {
        textColor = 'yellow';
    }
}

function random8BallNumber() {
    //Minste den kan være er 0
    let min = Math.ceil(0);

    //Høyeste den kan være er 20 
    let max = Math.floor(20);

    let last8BallNumber = eightBallIndex;

    /*  Dette gjøre at tallet kan være mellom 0 og 19, 
     siden math.floor runder ned tallet så kan det aldri bli 20.
     Fordi math.random kan aldri bli 1 og den kommer til å runde ned alt,
     så til og med 19.99 kommer til å blir 19*/
    eightBallIndex = Math.floor(Math.random() * (max + min) - min);

    /* Sjekker om tallet er likt det gamle tallet og hvis det er det
    så lager det tilfeldig tall helt til de ikke er like */
    while (last8BallNumber == eightBallIndex) {
        eightBallIndex = Math.floor(Math.random() * (max + min) - min);
    }
}