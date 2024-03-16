const express = require('express');

const app = express();

app.use(express.json());

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const jokes = [
  "Why did the programmer quit his job? He didn't get arrays.",
  "Why do Java developers wear glasses? Because they can't C#.",
  "What's a programmer's favorite place in the house? The living room.",
  "Why don't programmers like nature? It has too many bugs.",
  "How do you comfort a JavaScript bug? You console it.",
  "Why did the CSS selector break up with the HTML element? It wasn't his type.",
  "Why did the database administrator leave his wife? She had one too many relationships.",
  "How many programmers does it take to change a light bulb? None. It's a hardware issue.",
  "Why was the JavaScript developer sad? Because he didn't 'null' his feelings.",
  "What did the server say to the client? 'You've got mail!'",
  "Why did the computer take up gardening? It wanted to improve its root system.",
  "Why do programmers prefer dark mode? Light attracts bugs.",
  "What's a computer's favorite snack? Microchips.",
  "Why did the developer go broke? He used up all his cache.",
  "How do you comfort a JavaScript bug? You console it.",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
  "What's a pirate's favorite programming language? Rrrr!",
  "Why did the software go to therapy? It had too many issues.",
  "Why did the AI go to therapy? It had too many neural issues.",
  "Why do programmers prefer iOS development? Because it's a piece of cake."
];
const poetryVerses = [
  "In moonlit dreams, whispers weave a serenade.",
  "Stars paint tales on the canvas of the night.",
  "Silent echoes linger in the poet's pen.",
  "Petals of hope bloom in the garden of time.",
  "Raindrops dance, a liquid symphony.",
  "Heartbeats sync with the rhythm of a forgotten song.",
  "Sunset hues kiss the day goodbye.",
  "Butterflies carry wishes on delicate wings.",
  "In the library of silence, books of solitude unfold.",
  "Eternal love, a flame that time can't smolder.",
  "Footprints in the sand, memories etched in time.",
  "Whispers of autumn weave a tapestry of rust.",
  "Moonlight weaves tales of a silver-lit sea.",
  "Dawn's palette strokes the sky with gentle fire.",
  "Laughter, a melody that lingers in the heart.",
  "Hope is the compass in life's endless sea.",
  "Echoes of a sigh paint the evening breeze.",
  "Midnight's symphony, a hush in the cosmic sea.",
  "Waves of grace embrace the shore of destiny.",
  "Stars sprinkle stardust on the dreams of the night."
];

app.get('/joke',(req,res) => {
  const ourIndex=getRandomInt(20)
  res.send(jokes[ourIndex]);
})

app.get('/all-jokes',(req,res) => {
  res.send(jokes);
})

app.get('/poetry', (req,res) => {
  const ourIndex = getRandomInt(20);
  res.send(poetryVerses[ourIndex])
})

app.post('/poetry', (req,res) => {
  const newPoetry= req.body.poetry;
  res.send(poetryVerses[ourIndex])
})

app.get('/all-poetry', (req,res) => {
  res.send(poetryVerses)
})

app.listen(8000)