# Elective I MERN Stack

My work for the Mern Stack (Elective I) course at Pokhara University as a part of my bachelor's program powered by Deerwalk Institute of Technology.

This repository contains class and practice work for JavaScript, backend development, frontend development, and a MERN-style React application.

## Repository Navigation

| Folder             | Purpose                                                     |
| ------------------ | ----------------------------------------------------------- |
| `01-javascript`    | JavaScript basics and module practice files.                |
| `02-backend`       | Express, MongoDB, and Mongoose backend API.                 |
| `03-frontend`      | React/Vite frontend practice project.                       |
| `04-react-project` | Main React/Vite CRUD frontend that connects to the backend. |
| `term-test-i`      | Term test/practice backend project.                         |

## Main Application

The main working app uses:

- Backend: `02-backend`
- Frontend: `04-react-project`
- API base URL: `http://localhost:8000`
- MongoDB database: `mongodb://localhost:27017/mern-stack`

Start MongoDB locally before running the backend.

## Running The Backend

```bash
cd 02-backend
npm install
npm run dev
```

The backend starts on:

```text
http://localhost:8000
```

If PowerShell blocks `npm`, use:

```bash
npm.cmd run dev
```

## Running The React App

```bash
cd 04-react-project
npm install
npm run dev
```

Vite will print the local frontend URL, usually:

```text
http://localhost:5173
```

## Frontend Navigation

The React navigation is defined in `04-react-project/src/components/Navbar.jsx`, and the page routes are defined in `04-react-project/src/components/AppRoute.jsx`.

| Navbar Link    | Route             | Page                                                                        |
| -------------- | ----------------- | --------------------------------------------------------------------------- |
| Product        | `/product`        | Shows all products. Product cards include View, Update, and Delete actions. |
| Create Product | `/product/create` | Form for creating a product.                                                |
| User           | `/user`           | User list page.                                                             |
| Create User    | `/user/create`    | Form for creating a user.                                                   |
| School         | `/school`         | School list page.                                                           |
| Create School  | `/school/create`  | Form for creating a school.                                                 |

Additional routes are available from the app:

| Route                 | Purpose              |
| --------------------- | -------------------- |
| `/product/:id`        | Shows one product.   |
| `/product/update/:id` | Updates one product. |
| `/user/:id`           | Shows one user.      |
| `/user/update/:id`    | Updates one user.    |
| `/school/:id`         | Shows one school.    |
| `/school/update/:id`  | Updates one school.  |

## Backend API Routes

### Product

| Method   | Endpoint       | Purpose             |
| -------- | -------------- | ------------------- |
| `POST`   | `/product`     | Create a product.   |
| `GET`    | `/product`     | Read all products.  |
| `GET`    | `/product/:id` | Read one product.   |
| `PATCH`  | `/product/:id` | Update one product. |
| `DELETE` | `/product/:id` | Delete one product. |

Product fields:

```json
{
  "name": "Laptop",
  "price": 1000,
  "quantity": 10,
  "description": "A high-performance laptop"
}
```

### User

| Method   | Endpoint    | Purpose          |
| -------- | ----------- | ---------------- |
| `POST`   | `/user`     | Create a user.   |
| `GET`    | `/user`     | Read all users.  |
| `GET`    | `/user/:id` | Read one user.   |
| `PATCH`  | `/user/:id` | Update one user. |
| `DELETE` | `/user/:id` | Delete one user. |

User fields:

```json
{
  "name": "Ram",
  "address": "Kathmandu",
  "email": "ram@example.com",
  "password": "password123",
  "phone": 9800000000
}
```

### School

| Method   | Endpoint      | Purpose            |
| -------- | ------------- | ------------------ |
| `POST`   | `/school`     | Create a school.   |
| `GET`    | `/school`     | Read all schools.  |
| `GET`    | `/school/:id` | Read one school.   |
| `PATCH`  | `/school/:id` | Update one school. |
| `DELETE` | `/school/:id` | Delete one school. |

School fields:

```json
{
  "name": "Everest School",
  "address": "Kathmandu",
  "phone": 9800000000,
  "email": "school@example.com",
  "noOfRooms": 20
}
```

## Important Files

| File                                              | Purpose                                                                        |
| ------------------------------------------------- | ------------------------------------------------------------------------------ |
| `02-backend/index.js`                             | Express app setup, CORS, JSON parsing, MongoDB connection, and route mounting. |
| `02-backend/src/routes/05-productRoutes.js`       | Product CRUD routes.                                                           |
| `02-backend/src/routes/06-userRoutes.js`          | User CRUD routes.                                                              |
| `02-backend/src/routes/07-schoolRoutes.js`        | School CRUD routes.                                                            |
| `04-react-project/src/components/Navbar.jsx`      | Main app navigation menu.                                                      |
| `04-react-project/src/components/AppRoute.jsx`    | React Router route definitions.                                                |
| `04-react-project/src/product/ReadAllProduct.jsx` | Product listing with view, update, and delete actions.                         |
| `04-react-project/src/styles/Navbar.css`          | Navbar styling.                                                                |
| `04-react-project/src/styles/Read.css`            | Product read/listing page styling.                                             |

## Useful Scripts

Backend scripts in `02-backend`:

```bash
npm run dev
npm start
```

Frontend scripts in `04-react-project`:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Notes

- The frontend expects the backend to be available at `http://localhost:8000`.
- CORS is enabled in the backend so the Vite frontend can call the API.
- Product and user API responses use `result`; the school route currently returns `reuslt` in the response body.

---

_Happy Learning!_
