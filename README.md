# Shortly - A URL Shortener

A robust API designed for URL management and shortening, leveraging Node.js, Express.js, and MongoDB. It offers seamless endpoints for creating and managing URLs, ensures unique short code generation using nanoid, and incorporates real-time analytics for tracking URL access.

---

## Features

- **URL Shortening**: Convert long URLs into shorter, easy-to-share links.
- **History Tracking**: Keep a record of all shortened URLs with details.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Tech Stack

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (as the database)

---

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js**
- **npm** or **yarn**
- **MongoDB**

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/shortly.git
   cd shortly
   ```

2. **Set Up the Backend**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the backend directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
   Start the backend server:
   ```bash
   npm start
   ```

---

## API Endpoints

### Base URL: `http://localhost:8000`

- **POST /api**
  - Description: Creates a short URL ID and returns the result.
  - Request: `{ "url": "https://example.com" }`
  - Response: `{ "shortId": "http://localhost:8000/<shortId>" }`

- **GET /api/:shortId**
  - Description: Redirects to the original long URL.

- **GET /api/analytics/:shortId**
  - Description: Fetches the history of shortened URLs.

---



## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---


