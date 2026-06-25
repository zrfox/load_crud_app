# Load CRUD App

A full-stack load management application for tracking freight loads, drivers, trucks, shippers, and products. Built with a modern cloud-native stack as a portfolio project.

> **Work in progress** — actively developing.

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Backend:** Node.js, Express, TypeScript
- **Database:** Firestore (Google Cloud)
- **Deployment:** Cloud Run (Google Cloud)
- **Containerization:** Docker

## Features

- Create, view, update, and delete freight loads
- Manage drivers, trucks, shippers, and products
- Assign drivers and trucks to loads
- Track load status through the delivery lifecycle (pending → assigned → in transit → delivered)

## Planned

- BigQuery integration for operational analytics and reporting
- AI-powered natural language load creation and ops summaries

## Getting Started

### Prerequisites
- Node.js 18+
- Docker
- Google Cloud project with Firestore enabled
- Firebase service account credentials

### Installation

```bash
# Clone the repo
git clone https://github.com/zrfox/load_crud_app.git
cd load_crud_app

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### Environment Setup

Create a `server/.env` file:

PORT=3001

FIREBASE_SERVICE_ACCOUNT_PATH=./fb.json

PORT=3001

FIREBASE_SERVICE_ACCOUNT_PATH=./fb.json

```markdown
# Load CRUD App

A full-stack load management application for tracking freight loads, drivers, trucks, shippers, and products. Built with a modern cloud-native stack as a portfolio project.

> **Work in progress** — actively developing.

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Backend:** Node.js, Express, TypeScript
- **Database:** Firestore (Google Cloud)
- **Deployment:** Cloud Run (Google Cloud)
- **Containerization:** Docker

## Features

- Create, view, update, and delete freight loads
- Manage drivers, trucks, shippers, and products
- Assign drivers and trucks to loads
- Track load status through the delivery lifecycle (pending → assigned → in transit → delivered)

## Planned

- BigQuery integration for operational analytics and reporting
- AI-powered natural language load creation and ops summaries

## Getting Started

### Prerequisites
- Node.js 18+
- Docker
- Google Cloud project with Firestore enabled
- Firebase service account credentials

### Installation

```bash
# Clone the repo
git clone https://github.com/zrfox/load_crud_app.git
cd load_crud_app

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### Environment Setup

Create a `server/.env` file:

```
PORT=3001
FIREBASE_SERVICE_ACCOUNT_PATH=./fb.json
```

Add your Firebase service account JSON as `server/fb.json` (do not commit this file).

### Running Locally

```bash
# Start the backend (from /server)
npm run dev

# Start the frontend (from /client)
npm run dev
```

### Seed the Database

```bash
# From /server
npm run seed
```

## Project Structure

```
load_crud_app/
├── client/         # React frontend
└── server/         # Node/Express backend
    ├── src/
    │   ├── seed/   # Firestore seed scripts
    │   └── index.ts
    └── fb.json     # Firebase credentials (gitignored)
```
```
