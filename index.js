import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
const characters = [
  {
    id: 1,
    name: "Daemon Targaryen",
    house: "Targaryen",
    title: "Prince",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/daemon_targaryen.jpg",
  },
  {
    id: 2,
    name: "Rhaenyra Targaryen",
    house: "Targaryen",
    title: "Princess",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Rhaenyra_Targaryen.webp",
  },
  {
    id: 3,
    name: "Alicent Hightower",
    house: "Hightower",
    title: "Queen",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/alicent_hightower.webp",
  },
  {
    id: 4,
    name: "Viserys Targaryen",
    house: "Targaryen",
    title: "King",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/viserys_targaryen.webp",
  },
  {
    id: 5,
    name: "Otto Hightower",
    house: "Hightower",
    title: "Hand of the King",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/otto_hightower.webp",
  },
  {
    id: 6,
    name: "Corlys Velaryon",
    house: "Velaryon",
    title: "Lord",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/corlys_velaryon.webp",
  },
  {
    id: 7,
    name: "Rhaenys Targaryen",
    house: "Targaryen",
    title: "Princess",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/rhaenys_targaryen.webp",
  },
  {
    id: 8,
    name: "Laenor Velaryon",
    house: "Velaryon",
    title: "Lord",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/laenor_velaryon.webp",
  },
  {
    id: 9,
    name: "Laena Velaryon",
    house: "Velaryon",
    title: "Lady",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Laena_Velaryon.webp",
  },
  {
    id: 10,
    name: "Criston Cole",
    house: "Cole",
    title: "Ser",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/criston_cole.webp",
  },
  {
    id: 11,
    name: "Harwin Strong",
    house: "Strong",
    title: "Ser",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Harwin_Strong.webp",
  },
  {
    id: 12,
    name: "Larys Strong",
    house: "Strong",
    title: "Lord",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Larys_Strong.webp",
  },
  {
    id: 13,
    name: "Jacaerys Velaryon",
    house: "Velaryon",
    title: "Prince",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Jacaerys_Velaryon.webp",
  },
  {
    id: 14,
    name: "Lucerys Velaryon",
    house: "Velaryon",
    title: "Prince",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Lucerys_Velaryon.webp",
  },
  {
    id: 15,
    name: "Joffrey Velaryon",
    house: "Velaryon",
    title: "Prince",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Joffrey_Velaryon.webp",
  },
  {
    id: 16,
    name: "Aegon II Targaryen",
    house: "Targaryen",
    title: "Prince",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Aegon_II_Targaryen.webp",
  },
  {
    id: 17,
    name: "Helaena Targaryen",
    house: "Targaryen",
    title: "Princess",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/helaena_targaryen.webp",
  },
  {
    id: 18,
    name: "Aemond Targaryen",
    house: "Targaryen",
    title: "Prince",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Aemond_Targaryen.webp",
  },
  {
    id: 19,
    name: "Jaehaerys I Targaryen",
    house: "Targaryen",
    title: "King",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Jaehaerys_I_Targaryen.webp",
  },
  {
    id: 20,
    name: "Baela Targaryen",
    house: "Targaryen",
    title: "Lady",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Baela_Targaryen.webp",
  },
  {
    id: 21,
    name: "Rhaena Targaryen",
    house: "Targaryen",
    title: "Lady",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Rhaena_Targaryen.webp",
  },
  {
    id: 22,
    name: "Mysaria",
    house: "None",
    title: "Mistress",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Mysaria.webp",
  },
  {
    id: 23,
    name: "Hobert Hightower",
    house: "Hightower",
    title: "Lord",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Hobert_Hightower.webp",
  },
  {
    id: 24,
    name: "Gwayne Hightower",
    house: "Hightower",
    title: "Ser",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Gwayne_Hightower.webp",
  },
  {
    id: 25,
    name: "Meleys",
    house: "None",
    title: "Dragon",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Meleys.webp",
  },
  {
    id: 26,
    name: "Caraxes",
    house: "None",
    title: "Dragon",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Caraxes.webp",
  },
  {
    id: 27,
    name: "Syrax",
    house: "None",
    title: "Dragon",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Syrax.webp",
  },
  {
    id: 28,
    name: "Seasmoke",
    house: "None",
    title: "Dragon",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/seasmoke.webp",
  },
  {
    id: 29,
    name: "Vermax",
    house: "None",
    title: "Dragon",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Vermax.webp",
  },
  {
    id: 30,
    name: "Arrax",
    house: "None",
    title: "Dragon",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Arrax.webp",
  },
  {
    id: 31,
    name: "Vhagar",
    house: "None",
    title: "Dragon",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Vhagar.webp",
  },
  {
    id: 32,
    name: "Sunfyre",
    house: "None",
    title: "Dragon",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Sunfyre.webp",
  },
  {
    id: 33,
    name: "Balerion",
    house: "None",
    title: "Dragon",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Balerion.webp",
  },
  {
    id: 34,
    name: "Cheese",
    house: "None",
    title: "Ratcatcher ",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Cheese.webp",
  },
  {
    id: 35,
    name: "Blood",
    house: "None",
    title: "City Watch ",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Blood.webp",
  },
  {
    id: 36,
    name: "Borros Baratheon",
    house: "Baratheon",
    title: "Lord",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Borros_Baratheon.webp",
  },
  {
    id: 37,
    name: "Arryk Cargyll",
    house: "Cargyll",
    title: " knight",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Arryk_Cargy.webp",
  },
  {
    id: 38,
    name: "Erryk Cargyll",
    house: "Cargyll",
    title: " knight",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Erryk_Cargyll.webp",
  },
  {
    id: 39,
    name: "Cregan Stark",
    house: "Stark",
    title: "Lord",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Cregan_Stark.webp",
  },
  {
    id: 40,
    name: "Aemma Arryn",
    house: "Arryn",
    title: "Queen ",
    img: "https://raw.githubusercontent.com/Success1308/house-of-the-dragon-api/main/public/images/Aemma_Arryn.webp",
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
