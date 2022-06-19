"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],

  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players[0];
const players2 = game.players[1];

const gk1 = players1[0];
const fieldPlayers1 = players1.slice(1, players1.length);

const allPlayers = players1.concat(players2);

const players1Final = players1.concat(["Thiago", "Coutinho", "Perisic"]);

const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;

function printGoals() {
    // console.log(arguments)
  const result = {};
  const scoreRecord = game.scored;
  for (let i = 0; i < arguments.length; i++) {
    result[arguments[i]] = 0;

    for (let j = 0; j < scoreRecord.length; j++) {
      if (arguments[i] === scoreRecord[j]) {
        result[arguments[i]]++
      }
    }
    
  }
  return result
}
console.log()

console.log(printGoals('Davies', 'Muller', 'Lewandowski','Kimmich'));
