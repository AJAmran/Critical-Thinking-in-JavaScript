const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const BestScrorer = players.reduce((bestScroer, player) => {
  if (bestScroer.score > player.score) {
    return bestScroer;
  }
  return player;
}, players[0]);

console.log(BestScrorer)