# Basic Notes Management Web Application

A simple MERN (MongoDB, Express.js, React, Node.js) notes app for managing your notes.

## Introduction

Create a frontend web application that allows users to create, read, update, and delete notes using a 
RESTful Notes API.

## Features

1. User Authentication (Optional): Allow users to sign up and log in to manage their notes securely.
2. Create Note: Users can create a new note by entering a title and content.
3. Read Notes: Users can view a list of their existing notes, including the title and a snippet of the 
content.
4. Update Note: Users can edit the title and content of an existing note.
5. Delete Note: Users can delete a note from their list.
6. Search Notes: Users can search for notes by title or conten.

## Requirements

▪ Frontend Technologies: Use HTML, CSS, and JavaScript (or a framework like React, 
Angular, or Vue.js).
▪ API Integration: Make API calls to the Notes API for CRUD operations.
▪ Responsive Design: Ensure the application is responsive and works on various devices.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PrasamJain/NoteManagementApp.git
   ```
2. Navigate to the repository

    ```bash
    cd NoteManagementApp
    ```
3. Install server dependencies
    ```bash
    cd server
    npm i
    ```
4. Install frontend dependencies
    ```bash
    cd ../frontend
    npm i
    ```
## Usage

1. Setup your MongoDB connection by creating the `.env` file in your `server` directory with your MongoDB URL
   
    ```bash
    cd ../server
    echo 'dbURL="your_mongodb_uri_here"' > .env
    ```
3. Start the server
    ```bash
   npm run dev
   ```
4. Start the frontend (in a separate terminal)
    ```bash
    cd frontend
    npm run dev
    ```
