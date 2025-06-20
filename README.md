# healthcare-backend

A Node.js backend for managing healthcare data, including users, patients, doctors, and their mappings. Built with Express, Sequelize, and PostgreSQL.

## Features

- User registration and authentication (JWT)
- CRUD operations for patients and doctors
- Assign doctors to patients
- Secure API endpoints with authentication middleware

## Project Structure

```
healthcare-backend/
  app.js
  package.json
  .env
  config/
    db.js
  controllers/
    authController.js
    doctorController.js
    mappingController.js
    patientController.js
  middleware/
    authMiddleware.js
  models/
    doctor.js
    index.js
    mapping.js
    patient.js
    user.js
  routes/
    authRoutes.js
    doctorRoutes.js
    mappingRoutes.js
    patientRoutes.js
```

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Setup

1. Clone the repository.
2. Install dependencies:

   ```sh
   npm install
   npm init -y
   npm install express sequelize pg pg-hstore jsonwebtoken bcrypt dotenv cors
   npm install --save-dev nodemon
   ```

3. Create a `.env` file in the root directory:

   ```
   PORT=5000
   DATABASE_URL=postgres://<username>:<password>@localhost:5432/healthcare_db
   JWT_SECRET=your_jwt_secret
   ```

4. Start the PostgreSQL server and create the `healthcare_db` database.

5. Run the server:

   ```sh
   npm run dev
   ||| OR |||
   npx nodemon app.js
   ```

   The server will start on the port specified in `.env` (default: 5000).

## API Endpoints

### Auth

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive a JWT

### Patients

- `POST /api/patients` — Create patient (auth required)
- `GET /api/patients` — Get all patients for user (auth required)
- `GET /api/patients/:id` — Get patient by ID (auth required)
- `PUT /api/patients/:id` — Update patient (auth required)
- `DELETE /api/patients/:id` — Delete patient (auth required)

### Doctors

- `POST /api/doctors` — Create doctor (auth required)
- `GET /api/doctors` — Get all doctors
- `GET /api/doctors/:id` — Get doctor by ID
- `PUT /api/doctors/:id` — Update doctor (auth required)
- `DELETE /api/doctors/:id` — Delete doctor (auth required)

### Mappings

- `POST /api/mappings` — Assign doctor to patient
- `GET /api/mappings` — Get all mappings
- `GET /api/mappings/:patientId` — Get doctors for a patient
- `DELETE /api/mappings/:id` — Remove mapping

## License

ISC
