# Clutch IIIT Kota - Esports Club Backend

Clutch is the official Esports Club of IIIT Kota, bringing together passionate gamers to compete, learn, and grow. This project powers the backend for the club's website, handling tournament registrations, contact forms, and showcasing past and upcoming events.

## Features
- Home page with club info and media
- Registration forms for BGMI, Valorant, and Free Fire tournaments
- Tournament pages for past and upcoming events
- Contact form for inquiries
- Media assets and tournament highlights

## Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- MongoDB (via Mongoose)
- dotenv (for environment variables)

## Folder Structure
```
├── app.js                # Main server file
├── models/               # Mongoose models for registrations and contacts
├── public/               # Static assets (media, stylesheets, JS)
├── views/                # EJS templates for pages
├── package.json          # Project metadata and dependencies
```

## Setup & Installation
1. Clone the repository:
   ```powershell
   git clone <repo-url>
   cd CLUTCH
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Create a `.env` file in the root directory and add your MongoDB URI:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```powershell
   node app.js
   ```
   The app will run on [http://localhost:3000](http://localhost:3000).

## Usage
- Visit `/` for the home page.
- `/register` for tournament registration options.
- `/tournament/:name` for tournament details (e.g., `/tournament/ignition`).
- Use the contact form on the home page to reach out.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
ISC
