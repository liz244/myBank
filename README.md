MyBank

MyBank is a personal expense management application developed with React. It allows you to add, display, and filter expenses by category, while storing data in the browser using localStorage. The project is containerized with Docker.

Local installation (without Docker)

Prerequisites:

npm

Getting started:


npm install
npm run dev

The application is available on : http://localhost:5173

Using Docker

Prerequisites:

Docker

Docker Compose

Launch:

docker build -t my_bank .
docker run -d -p 5173:80 my_bank

Then go to: http://localhost:5173

Key Features

Add expenses by amount and category

List of added expenses

Filter expenses by category

Automatically save in browser

Responsive design suitable for all screens

project structure

my_bank/
├── src/
│ ├── components/
│ │ ├── Form.jsx
│ │ ├── Filter.jsx
│ │ └── List.jsx
│ ├── pages/
│ │ ├── HomePage.jsx
│ │ └── ExpensesPage.jsx
│ ├── App.jsx
│ └── main.jsx
├── public/
│ └── video.mp4
├── Dockerfile
├── docker-compose.yml
├── README.md


Author

Project created by Liz Bouka as part of the "Project 2 - Dev 2A" m

