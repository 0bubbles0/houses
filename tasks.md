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
- [x] Tech Spike
  - [x] form: Formik
  - [ ] images
- [x] Decide Tech stack
- [x] System design
- [x] Database schema
- [x] UI design, user flow
- [x] Write Tickets (maybe in ticket-board.md)

## Set up project

- [x] Frontend React project
  - [x] REST API: axios
  - [ ] state management, store: Redux
  - [x] styling: plain CSS or Styled Components
  - [ ] test
  - [ ] HTML & CSS basics: meta tags, favicon, navbar
- [x] Backend Node project
  - [x] database: Mongodb & Mongoose
  - [x] REST API
  - [x] install test
- [x] Both: config files: git, node, TS, ESLint
- [x] Infrastructure: connect FE - BE - Database
- [ ] Jest Test: FE & BE

- Bonus
  - [ ] Security: CORS, injection, auth
  - [ ] Docker, deploy
  - [ ] external logging

## Feature 1: List houses

- [x] Decide schema of a House (for db, api calls)
- [x] BE endpoint: route, input, output, validation/error/edge cases (empty), db interaction
  - Mongo seed data?
  - [ ] test: unit test scenarios, Postman
- [ ] FE:
  - [x] connect to endpoint - print page data, print <p>
  - [ ] avoid rerenders
  - [ ] (state management?, cache)
  - [x] UI Components: Card(li), CardList(ul, responsive, map key)
- [x] Connect
- Bonus:
  - [ ] Filter
  - [ ] Sort
  - [ ] Pagniation

## Feature 2: Add new house

- [x] UI Form
- [x] validation
- [x] handle error & success
- [x] Endppoint
- [x] Connect

- [x] db & endpoint schema (id)
- [x] BE endpoint
  - [x] validation, success, error. auth @todo-comment
  - [ ] test: unit test scenarios, Postman
  - [ ] solve request.body undefined problem
- [x] FE
  - [x] form (formik), validation
  - [x] validation, success, error
  - [x] UI Components: Form, InputField, ErrorMessage, SubmitButton
    - [x] image: url (cdn bucket, eg AWS S3) or file upload? (Multer middleware, store in Mongo)
  - [x] Modal or new page? (react-router)
  - [ ] avoid rerenders on typing
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
