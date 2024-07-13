# House of the Dragon API

The House of the Dragon API provides endpoints to retrieve information about characters from the fictional universe.

## Endpoints

### Get all characters

Returns a JSON array of all characters.

- **URL:** `/characters`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** JSON array of character objects.
- **Error Response:**
  - **Code:** 404 Not Found
  - **Content:** `"Character not found"`

### Get a character by ID

Returns a JSON object of a character by their ID.

- **URL:** `/characters/:id`
- **Method:** `GET`
- **URL Params:** `id=[integer]` (Character ID)
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** JSON object of the character.
- **Error Response:**
  - **Code:** 404 Not Found
  - **Content:** `"Character not found"`

## Sample Characters

Here are some sample characters included in the API:

- Daemon Targaryen
- Rhaenyra Targaryen
- Alicent Hightower
- Viserys Targaryen
- Otto Hightower
- Corlys Velaryon
- Rhaenys Targaryen
- Laenor Velaryon
- Laena Velaryon
- Criston Cole
- Harwin Strong
- Larys Strong
- Jacaerys Velaryon
- Lucerys Velaryon
- Joffrey Velaryon
- Aegon II Targaryen
- Helaena Targaryen
- Aemond Targaryen
- Jaehaerys I Targaryen
- Baela Targaryen
- Rhaena Targaryen
- Mysaria
- Hobert Hightower
- Gwayne Hightower
- Meleys (Dragon)
- Caraxes (Dragon)
- Syrax (Dragon)
- Seasmoke (Dragon)
- Vermax (Dragon)
- Arrax (Dragon)
- Vhagar (Dragon)
- Sunfyre (Dragon)
- Balerion (Dragon)
- Cheese (Ratcatcher)
- Blood (City Watch)
- Borros Baratheon
- Arryk Cargyll (Knight)
- Erryk Cargyll (Knight)
- Cregan Stark
- Aemma Arryn (Queen)

## Technologies Used

- Express.js
- Node.js
- CORS (Cross-Origin Resource Sharing)
