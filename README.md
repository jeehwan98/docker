# docker-project

A simple containerized full-stack application demonstrating how Docker Compose orchestrates multiple services together.

## Project Structure

```
docker-project/
├── docker-compose.yml
├── backend/           # Spring Boot (Java 21) — echo server
├── frontend/          # Next.js (TypeScript) — echo form UI
├── nginx-proxy/       # nginx — reverse proxy
└── lambda/
    └── echo/          # AWS Lambda (TypeScript) — SQS echo handler
```

## How It Works

- **Frontend** sends a message via `POST /api/echo`
- **nginx-proxy** routes `/api/*` to the backend and `/*` to the frontend
- **Backend** echoes the request body back as a JSON response
- **Lambda** logs any SQS message it receives (for testing async processing)

## Running Locally

```bash
docker compose up --build
```

| Service     | URL                   |
|-------------|-----------------------|
| Frontend    | http://localhost:3000 |
| Backend     | http://localhost:8080 |
| nginx-proxy | http://localhost:80   |
