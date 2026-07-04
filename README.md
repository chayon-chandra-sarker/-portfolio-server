# Portfolio Backend API

A secure and scalable REST API built with **Node.js**, **Express.js**, **TypeScript**, **Prisma ORM**, and **PostgreSQL** to power a personal portfolio website and admin dashboard.

---

## 🚀 Features

* 🔐 JWT Authentication
* 👤 Admin Authorization
* 📁 Project Management (CRUD)
* 🛠️ Skill Management (CRUD)
* 💼 Experience Management (CRUD)
* 📩 Contact Message Management (CRUD)
* 🌐 Social Links Management (CRUD)
* 🍪 HTTP-Only Cookie Authentication
* ⚡ Prisma ORM
* 🗄️ PostgreSQL Database
* 🛡️ Global Error Handling
* 📦 Modular Folder Structure
* 🔥 TypeScript Support

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* PostgreSQL
* JWT (jsonwebtoken)
* bcrypt
* Cookie Parser
* CORS
* dotenv

---

## 📁 Project Structure

```text
src
│
├── config/
├── middleware/
├── modules/
│   ├── auth/
│   ├── user/
│   ├── project/
│   ├── skill/
│   ├── experience/
│   ├── message/
│   └── socialLink/
│
├── lib/
├── utility/
├── app.ts
└── server.ts
```

---

## 🔑 Authentication

This API uses JWT-based authentication.

Protected routes require a valid Access Token.

Authorization Header:

```text
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | `/api/auth/login`  |
| POST   | `/api/auth/logout` |

---

### Projects

| Method | Endpoint                    |
| ------ | --------------------------- |
| POST   | `/api/projects/create`      |
| GET    | `/api/projects/all-project` |
| GET    | `/api/projects/single/:id`  |
| PATCH  | `/api/projects/update/:id`  |
| DELETE | `/api/projects/delete/:id`  |

---

### Skills

| Method | Endpoint                 |
| ------ | ------------------------ |
| POST   | `/api/skills/create`     |
| GET    | `/api/skills`            |
| GET    | `/api/skills/:id`        |
| PATCH  | `/api/skills/update/:id` |
| DELETE | `/api/skills/delete/:id` |

---

### Experiences

| Method | Endpoint                      |
| ------ | ----------------------------- |
| POST   | `/api/experiences/create`     |
| GET    | `/api/experiences`            |
| GET    | `/api/experiences/:id`        |
| PATCH  | `/api/experiences/update/:id` |
| DELETE | `/api/experiences/delete/:id` |

---

### Messages

| Method | Endpoint            |
| ------ | ------------------- |
| POST   | `/api/messages/create`     |
| GET    | `/api/messages/all-messages`     |
| GET    | `/api/messages/:id` |
| PATCH  | `/api/messages/:id` |
| DELETE | `/api/messages/:id` |

---

### Social Links

| Method | Endpoint                  |
| ------ | ------------------------- |
| POST   | `/api/socials/create`     |
| GET    | `/api/socials/all-socials`            |
| GET    | `/api/socials/single/:id`        |
| PATCH  | `/api/socials/update/:id` |
| DELETE | `/api/socials/delete/:id` |

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/chayon-chandra-sarker/-portfolio-server.git
```

Go to the project directory:

```bash
cd portfolio-backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and configure your environment variables:

```env
PORT=5000

DATABASE_URL=your_database_url

JWT_ACCESS_SECRET=your_access_secret
JWT_ACCESS_EXPIRES_IN=1d

JWT_REFRESH_SECRET=your_refresh_secret
JWT_REFRESH_EXPIRES_IN=365d

APP_URL=http://localhost:3000
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

---

## 📦 Available Scripts

```bash
npm run dev
npm run build
npm start
```

---

## 🔒 Protected Routes

The following routes require **Admin Authentication**:

* Create Project
* Update Project
* Delete Project
* Create Skill
* Update Skill
* Delete Skill
* Create Experience
* Update Experience
* Delete Experience
* View Messages
* Delete Messages
* Update Messages
* Manage Social Links

---

## 📬 Contact

If you have any questions or suggestions, feel free to reach out.

* Email: [chayon438@gmail.com](mailto:your-email@example.com)
* Portfolio: https://your-portfolio.com

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you like this project, don't forget to give it a star on GitHub!
