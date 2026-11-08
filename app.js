const express = require("express");
const path = require("node:path");

const app = express();
const port = process.env.PORT || 3000;

const games = [
  {
    id: 1,
    name: "PAC-MAN",
    image: "pacman.jpg",
    alt: "Pac-Man arcade game",
    description:
      "Navigate a maze eating pellets while fleeing four ghosts. A timeless maze-chase classic.",
    category: "MAZE",
    year: 1980,
    developer: "Namco",
  },
  {
    id: 2,
    name: "SPACE INVADERS",
    image: "invaders.jpg",
    alt: "Space Invaders arcade game",
    description:
      "Defend Earth against waves of descending alien invaders in the game that launched a genre.",
    category: "SHOOTER",
    year: 1978,
    developer: "Taito",
  },
  {
    id: 3,
    name: "DONKEY KONG",
    image: "dk.jpg",
    alt: "Donkey Kong arcade game",
    description:
      "Climb the construction site, dodge barrels, and rescue Pauline from the towering ape.",
    category: "PLATFORMER",
    year: 1981,
    developer: "Nintendo",
  },
  {
    id: 4,
    name: "GALAGA",
    image: "galaga.jpg",
    alt: "Galaga arcade game",
    description:
      "Take command of a starfighter and stop the relentless insect-like alien fleet.",
    category: "SHOOTER",
    year: 1981,
    developer: "Namco",
  },
  {
    id: 5,
    name: "STREET FIGHTER II",
    image: "streetfighterII.jpg",
    alt: "Street Fighter II arcade game",
    description:
      "Choose a world warrior and compete in a landmark head-to-head fighting game.",
    category: "FIGHTING",
    year: 1991,
    developer: "Capcom",
  },
  {
    id: 6,
    name: "OUT RUN",
    image: "outrun.jpg",
    alt: "Out Run arcade game",
    description:
      "Race along a branching coastal highway in a defining arcade driving experience.",
    category: "RACING",
    year: 1986,
    developer: "Sega",
  },
  {
    id: 7,
    name: "MR. DO!",
    image: "mrdo.jpg",
    alt: "Mr. Do! arcade game",
    description:
      "Dig through the playfield, collect cherries, and outsmart monsters with a bouncing ball.",
    category: "MAZE",
    year: 1982,
    developer: "Universal",
  },
  {
    id: 8,
    name: "GALAXIAN",
    image: "transarcade.webp",
    alt: "A classic arcade machine",
    description:
      "Defend your ship from colorful alien formations in this influential fixed-screen shooter.",
    category: "SHOOTER",
    year: 1979,
    developer: "Namco",
  },
];

app.use((request, response, next) => {
  response.set("Access-Control-Allow-Origin", "*");
  response.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.set("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") {
    return response.sendStatus(204);
  }

  return next();
});

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "index.html"));
});

app.get("/styles.css", (request, response) => {
  response.sendFile(path.join(__dirname, "styles.css"));
});

app.get("/api/games", (request, response) => {
  response.json(games);
});

app.use((request, response) => {
  response.status(404).json({ error: "Not found" });
});

app.listen(port, () => {
  console.log(`Midnight Arcade API listening on port ${port}`);
});
