# Full-stack Property Listing app

This is a full-stack TypeScript MERN app, which lets a user view a list of real estate properties in their web browser, and add new properties.

To avoid confusion with coding concepts of `properties` (e.g. in JavaScript objects), I will call them "houses" from now on (even though you could use it for apartments etc. of course).

<img width="1440" alt="Screenshot 2024-02-21 at 00 15 51" src="https://github.com/0bubbles0/houses/assets/77367593/3cdd6afd-f8f0-400a-981c-f1313bcb9f17">

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
- CSS: plain CSS (would have gone for Styled Components with more time)
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

**I. Without Docker**

1. Start up a MongoDB host
2. Open two terminals, and do these steps for each FE & BE:

```bash
cd # into folder
nvm use
npm i
npm build
npm run dev
```

3. Visit http://localhost:3000/ in your browser

**II. Future feature: With Docker**

```bash
cd # into root
docker compose up --build
docker compose down
```

**Example house schema**:

- If the endpoints/database don't work, you can try inserting this in `server/src/http/handlers/get.ts` to mock the list in the web app:

```ts
const data: ReturnData = Array(10).fill({
  headline: "Big Mansion",
  price: "£200,000",
  imageUrl:
    "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});
```

## UI
<img width="550" alt="Screenshot 2024-02-21 at 00 16 14" src="https://github.com/0bubbles0/houses/assets/77367593/aeda4e03-52e9-48a8-9877-66564d607028">
<img width="1440" alt="Screenshot 2024-02-21 at 00 10 00" src="https://github.com/0bubbles0/houses/assets/77367593/ca3dfd8d-49a2-4fdc-8689-8c871f8837a7">
<img width="1440" alt="Screenshot 2024-02-21 at 00 09 53" src="https://github.com/0bubbles0/houses/assets/77367593/cd83f38d-0324-465e-b212-6d9b634142c2">




## Explaining some technical decisions

### Results

- I was running very short on time, so tried to show my approach to as many of the requirements as possible. That meant that I didn't completely tidy up the code or debug issues with the endpoints (request body issue), correct Jest mocks, fix React rendering, or set up Docker to run this app as intended.
- Requirements I skipped: Front-end state management (would have used Redux store and Apollo queries), Front-end testing, better schema-typing

### Explaining approaches

- MongoDB seemed a good database choice, as such early projects often change their schemas. I find MongoDB has easier forward-compatibility with less rigorous migrations necessary as Postgres.

- I was deciding between saving image files or urls in the database (with multer middleware). In the end I opted for `imageUrls`, as database images would have had a size limitations, and in a real app, I would use a cdn to store assets, e.g. AWS S3 buckets. So with more time, I would have connected AWS in the back-end server, and enabled a file uploader (maybe with drag & drop) UI on the front-end.

## Next 20 hours

Finish the requirements:

- Complete unit tests
- Redux state management
- Queries with Apollo
- Fix React rerenders
- More efficient & resilient types, Schema (perhaps with Typebox, just because I know that already)
- double-check edge cases, error handling. More sophisticated error codes
- Tidy up & refactor code
- Set up Docker
- Devops: GitHub actions for MRs and CI/CD pipelines, set up deployments (Netlify, db, backend), external logging

### Features

- List: enable pagination, sort, filters
- Add: Stricter form validation, formats
- Images: AWS cdn bucket, allow file upload (with drag & drop)
- Add an address finder
- Figure out auth: who is allowed to add new properties? Certain user-permissions
- Check security: CORS, injection
- Webpage basics: meta tags, favicon, page title, layout
- Complete the CRUD: update, delete an item. Page to view 1 item

#### Cool feature idea

- **Problem**: Competitors always show the same set of filters on the list page, but users have very individual tastes on what details are deal breakers or dealmakers (e.g. whether a property has a garden or not, what costs are/aren't included). I'm often opening 20 tabs with flats and then leave annoyed, because the details I care about are not clearly visible. Wastes everyone's time & money.
- **Idea**: on a DetailsPage of a property, users are able to click 🌟 ("important") or 🚫 ("not important") on each detail (e.g. sq footage, parking spaces). Store these decisions, and use to show custom filters on the list page
