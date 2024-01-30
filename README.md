# Stream SpOTT

Stream SpOTT is a simple React application that allows users to stream videos from Firebase Storage. It provides a clean user interface with a dark and light mode toggle.

## Features

- Login Page for logging / creating a new user (linked with Firebase DB) .
- View a collection of videos stored in Firebase Storage.
- Toggle between Dark Mode and Light Mode.

## Technologies Used

- React
- Firebase (for storage)

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/RajveerNarang/Stream-SpOTT.gits
   ```

- Install dependencies:
  cd Stream-SpOTT
  npm install

- Create a .env file in the project root and add your Firebase configuration:

  REACT_APP_FIREBASE_API_KEY=<Your API Key>
  REACT_APP_FIREBASE_AUTH_DOMAIN=<Your Auth Domain>
  REACT_APP_FIREBASE_PROJECT_ID=<Your Project ID>
  REACT_APP_FIREBASE_STORAGE_BUCKET=<Your Storage Bucket>
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<Your Messaging Sender ID>
  REACT_APP_FIREBASE_APP_ID=<Your App ID>

- Start the development server:
  npm start

- Folder Structure

  src/: Contains the React source code.
  components/: Reusable React components.
  assets/: Firebase configuration and other assets.
  pages/: Different pages of the application.

  - Contributing
    Contributions are welcome! Please create a new branch for your changes and submit a pull request.
