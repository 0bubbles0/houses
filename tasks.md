# Tasks (instead of a Kanban board)

To keep this quick, to keep track of my tasks I opted for this Markdown file instead of setting up Issues and a Kanban board

## Plan

1. 30min Plan & Design
2. 30min Set up project
3. 50min Feature 1: List houses
4. 50min Feature 2: Add new house
5. 20min Test & Document

## Plan & Design (30min)

- [x] Understand Requirements
- [ ] Tech Spike
  - [ ] form: Formik
  - [ ] images
- [x] Decide Tech stack
- [ ] System design
- [ ] Database schema
- [ ] UI design, user flow
- [ ] Write Tickets (maybe in ticket-board.md)

## Set up project

- [x] Frontend React project
  - [x] REST API: axios
  - [ ] state management, store: Redux
  - [ ] styling: plain CSS or Styled Components
  - [ ] test
  - [ ] HTML & CSS basics: meta tags, favicon, navbar
- [x] Backend Node project
  - [x] database: Mongodb & Mongoose
  - [x] REST API
  - [x] test
- [x] Both: config files: git, node, TS, ESLint
- [x] Infrastructure: connect FE - BE - Database
- [ ] Jest Test: FE & BE

- Bonus
  - [ ] Security: CORS, injection, auth
  - [ ] Docker, deploy
  - [ ] external logging

## Feature 1: List houses

- [x] Decide schema of a House (for db, api calls)
- [ ] BE endpoint: route, input, output, validation/error/edge cases (empty), db interaction
  - Mongo seed data?
  - [ ] test: unit test scenarios, Postman
- [ ] FE:
  - [x] connect to endpoint - print page data, print <p>
  - [ ] avoid rerenders
  - [ ] (state management?, cache)
  - [ ] UI Components: Card(li), CardList(ul, responsive, key)
- [ ] Connect
- Bonus:
  - [ ] Filter
  - [ ] Sort
  - [ ] Pagniation

## Feature 2: Add new house

- [ ] UI Form
- [ ] validation
- [ ] handle error & success
- [ ] Endppoint
- [ ] Connect

- [ ] db & endpoint schema (id)
- [ ] BE endpoint
  - [ ] validation, success, error. auth @todo-comment
  - [ ] test: unit test scenarios, Postman
- [ ] FE
  - [ ] form (formik), validation
  - [ ] validation, success, error
  - [ ] UI Components: Form, InputField, ErrorMessage, SubmitButton
    - [ ] image: url (cdn bucket, eg AWS S3) or file upload? (Multer middleware, store in Mongo)
  - [ ] Modal or new page? (react-router)
- Bonus:
  - [ ] address finder
  - [ ] image drag & drop
  - [ ] auth

## Test

- [ ] FE: components
  - Storybook, Jest
- [ ] BE: Endpoints
  - Jest

## Document

- [ ] How to install & run, ports
- [ ] Technical decisions
- [ ] Next 20hrs
