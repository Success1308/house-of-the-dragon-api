import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
const characters = [
  {
    id: 1,
    name: "Daemon Targaryen",
    house: "Targaryen",
    title: "Prince",
    img: "/images/daemon_targaryen.jpg",
  },
  {
    id: 2,
    name: "Rhaenyra Targaryen",
    house: "Targaryen",
    title: "Princess",
    img: "/images/rhaenyra_targaryen.jpg",
  },
  {
    id: 3,
    name: "Alicent Hightower",
    house: "Hightower",
    title: "Queen",
    img: "/images/alicent_hightower.jpg",
  },
  {
    id: 4,
    name: "Viserys Targaryen",
    house: "Targaryen",
    title: "King",
    img: "/images/viserys_targaryen.jpg",
  },
  {
    id: 5,
    name: "Otto Hightower",
    house: "Hightower",
    title: "Hand of the King",
    img: "/images/otto_hightower.jpg",
  },
  {
    id: 6,
    name: "Corlys Velaryon",
    house: "Velaryon",
    title: "Lord",
    img: "/images/corlys_velaryon.jpg",
  },
  {
    id: 7,
    name: "Rhaenys Targaryen",
    house: "Targaryen",
    title: "Princess",
    img: "/images/rhaenys_targaryen.jpg",
  },
  {
    id: 8,
    name: "Laenor Velaryon",
    house: "Velaryon",
    title: "Lord",
    img: "/images/laenor_velaryon.jpg",
  },
  {
    id: 9,
    name: "Laena Velaryon",
    house: "Velaryon",
    title: "Lady",
    img: "/images/laena_velaryon.jpg",
  },
  {
    id: 10,
    name: "Criston Cole",
    house: "Cole",
    title: "Ser",
    img: "/images/criston_cole.jpg",
  },
  {
    id: 11,
    name: "Harwin Strong",
    house: "Strong",
    title: "Ser",
    img: "/images/harwin_strong.jpg",
  },
  {
    id: 12,
    name: "Larys Strong",
    house: "Strong",
    title: "Lord",
    img: "/images/larys_strong.jpg",
  },
  {
    id: 13,
    name: "Jacaerys Velaryon",
    house: "Velaryon",
    title: "Prince",
    img: "/images/jacaerys_velaryon.jpg",
  },
  {
    id: 14,
    name: "Lucerys Velaryon",
    house: "Velaryon",
    title: "Prince",
    img: "/images/lucerys_velaryon.jpg",
  },
  {
    id: 15,
    name: "Joffrey Velaryon",
    house: "Velaryon",
    title: "Prince",
    img: "/images/joffrey_velaryon.jpg",
  },
  {
    id: 16,
    name: "Aegon II Targaryen",
    house: "Targaryen",
    title: "Prince",
    img: "/images/aegon_targaryen.jpg",
  },
  {
    id: 17,
    name: "Helaena Targaryen",
    house: "Targaryen",
    title: "Princess",
    img: "/images/helaena_targaryen.jpg",
  },
  {
    id: 18,
    name: "Aemond Targaryen",
    house: "Targaryen",
    title: "Prince",
    img: "/images/aemond_targaryen.jpg",
  },
  {
    id: 19,
    name: "Daeron Targaryen",
    house: "Targaryen",
    title: "Prince",
    img: "/images/daeron_targaryen.jpg",
  },
  {
    id: 20,
    name: "Baela Targaryen",
    house: "Targaryen",
    title: "Lady",
    img: "/images/baela_targaryen.jpg",
  },
  {
    id: 21,
    name: "Rhaena Targaryen",
    house: "Targaryen",
    title: "Lady",
    img: "/images/rhaena_targaryen.jpg",
  },
  {
    id: 22,
    name: "Mysaria",
    house: "None",
    title: "Mistress",
    img: "/images/mysaria.jpg",
  },
  {
    id: 23,
    name: "Hobert Hightower",
    house: "Hightower",
    title: "Lord",
    img: "/images/hobert_hightower.jpg",
  },
  {
    id: 24,
    name: "Gwayne Hightower",
    house: "Hightower",
    title: "Ser",
    img: "/images/gwayne_hightower.jpg",
  },
  {
    id: 25,
    name: "Meleys",
    house: "None",
    title: "Dragon",
    img: "/images/meleys.jpg",
  },
  {
    id: 26,
    name: "Caraxes",
    house: "None",
    title: "Dragon",
    img: "/images/caraxes.jpg",
  },
  {
    id: 27,
    name: "Syrax",
    house: "None",
    title: "Dragon",
    img: "/images/syrax.jpg",
  },
  {
    id: 28,
    name: "Seasmoke",
    house: "None",
    title: "Dragon",
    img: "/images/seasmoke.jpg",
  },
  {
    id: 29,
    name: "Vermax",
    house: "None",
    title: "Dragon",
    img: "/images/vermax.jpg",
  },
  {
    id: 30,
    name: "Arrax",
    house: "None",
    title: "Dragon",
    img: "/images/arrax.jpg",
  },
  {
    id: 31,
    name: "Vhagar",
    house: "None",
    title: "Dragon",
    img: "/images/vhagar.jpg",
  },
  {
    id: 32,
    name: "Sunfyre",
    house: "None",
    title: "Dragon",
    img: "/images/sunfyre.jpg",
  },
  {
    id: 33,
    name: "Dreamfyre",
    house: "None",
    title: "Dragon",
    img: "/images/dreamfyre.jpg",
  },
  {
    id: 34,
    name: "Tessarion",
    house: "None",
    title: "Dragon",
    img: "/images/tessarion.jpg",
  },
  {
    id: 35,
    name: "Moondancer",
    house: "None",
    title: "Dragon",
    img: "/images/moondancer.jpg",
  },
  {
    id: 36,
    name: "Borros Baratheon",
    house: "Baratheon",
    title: "Lord",
    img: "/images/borros_baratheon.jpg",
  },
  {
    id: 37,
    name: "Roderick Dustin",
    house: "Dustin",
    title: "Lord",
    img: "/images/roderick_dustin.jpg",
  },
  {
    id: 38,
    name: "Lord Beesbury",
    house: "Beesbury",
    title: "Lord",
    img: "/images/lord_beesbury.jpg",
  },
  {
    id: 39,
    name: "Cregan Stark",
    house: "Stark",
    title: "Lord",
    img: "/images/cregan_stark.jpg",
  },
  {
    id: 40,
    name: "Jeyne Arryn",
    house: "Arryn",
    title: "Lady",
    img: "/images/jeyne_arryn.jpg",
  },
];
// Endpoint to get all characters
app.get("/characters", (req, res) => {
  res.json(characters);
});

// Endpoint to get a character by ID
app.get("/characters/:id", (req, res) => {
  const characterId = parseInt(req.params.id, 10);
  const character = characters.find((char) => char.id === characterId);

  if (character) {
    res.json(character);
  } else {
    res.status(404).send("Character not found");
  }
});

app.listen(port, () => {
  console.log(`House of the Dragon API is running on http://localhost:${port}`);
});
