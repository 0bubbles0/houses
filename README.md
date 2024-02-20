# Full-stack Property Listing app

This is a full-stack TypeScript MERN app, which lets a user view a list of real estate properties in their web browser, and add new properties.

To avoid confusion with coding concepts of `properties` (e.g. in JavaScript objects), I will call them "houses" from now on (even though you could use it for apartments etc. of course).

## Requirements: 2-3hrs

### User stories

- User can **view a list** of properties
- User can **add** a new property
- A property has:
  - Postal address
  - Photo
  - Price

### Tech stack

- TypeScript
- Node app
- React app
- Database: MongoDB with Mongoose
- HTTP REST API
- FE State management: Redux
- CSS: plain, preprocessor or CSS-in-JS
- Testing: Jest

### Tasks

#### UI

- List
- Form
- Responsive Design
- State management

#### API

- `GET /properties` () => fullList
- `POST /properties` (newHouse)=> updatedList

#### Tasks

- Error handling
- State management
- Testing: FE components & endpoints
- Readme documentation:
  - How to run
  - Next 20hrs

## How to run this app

### Ports

- Web browser for FE: http://localhost:3000/
- Postman for BE: http://localhost:8080

#### Install & run

**I. With Docker**

```bash
cd # into root
docker compose up --build
docker compose down
```

**II. Without Docker**

1. Start up MongoDB yourself
2. Open two terminals, and do these steps for each FE & BE:

```bash
cd # into folder
nvm use
npm i
npm build
npm run dev
```

3. Visit http://localhost:3000/ in your browser

## UI & API designs

## Explaining some technical decisions

## Next 20 hours
