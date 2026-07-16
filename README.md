# Phonebook

A full stack phonebook application built as part of the **Full Stack Open** course.

The application allows users to manage a phonebook by adding, updating, and deleting contacts. All data is stored in a MongoDB database and served through a REST API built with Express.

## Live application

**Application:** https://phonebook-backend-6ozj.onrender.com

## Features

* View all contacts
* Add new contacts
* Update existing phone numbers
* Delete contacts
* Success and error notifications
* Server-side validation
* Persistent storage with MongoDB Atlas

## Technologies

### Frontend

* React
* Vite
* Axios

### Backend

* Node.js
* Express
* Mongoose
* MongoDB Atlas

## REST API

The backend provides the following endpoints:

| Method | Endpoint           | Description          |
| ------ | ------------------ | -------------------- |
| GET    | `/api/persons`     | Get all contacts     |
| GET    | `/api/persons/:id` | Get a single contact |
| GET    | `info`             | Get phonebook info   |
| POST   | `/api/persons`     | Create a new contact |
| PUT    | `/api/persons/:id` | Update a contact     |
| DELETE | `/api/persons/:id` | Delete a contact     |

## Validation

The backend validates that:

* the name is required
* the name contains at least 3 characters
* names are unique
* the phone number follows the required format

## About

This project was developed while completing the **Full Stack Open** course and demonstrates building and deploying a full stack web application using React, Express, MongoDB, and Render.
