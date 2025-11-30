🎬 Netflix Clone — Full Stack (Spring Boot + React + MySQL)

A fully functional Netflix Clone built end-to-end with:

Backend: Spring Boot, Spring Security, JWT, MySQL, JPA

Frontend: React (Vite), Context API, Axios

Features: Authentication, Watchlist, Movie Details, Admin Movie Management

🚀 Features
👤 User Features

Register & Login (JWT Authentication)

Search movies

Watch trailers (YouTube embed)

Add/remove movies from My List

View complete movie details

👨‍💻 Admin Features

Add Movies

Delete Movies

Manage Movie Catalog

🔐 Authentication

Secure JWT login

Role-based access (USER / ADMIN)

Protected routes in frontend

Token sent via Authorization header

🛠 Tech Stack
Backend (Spring Boot)

Spring Boot

Spring Security

JWT Authentication

JPA + Hibernate

MySQL

Maven

Frontend (React)

React + Vite

Axios

React Router DOM

Context API

Custom CSS

📁 Project Structure
netflix-clone-fullstack/
│
├── backend/
│   ├── src/main/java/com/adithya/netflixclone/
│   ├── src/main/resources/application.properties
│   └── pom.xml
│
└── frontend/
    ├── src/pages/
    ├── src/components/
    ├── App.jsx
    ├── package.json
    └── vite.config.js

⚙️ Run the Project Locally
1️⃣ Backend Setup
Requirements:

Java 17+

Maven

MySQL installed & running

Commands
cd backend
mvn clean install
mvn spring-boot:run


Backend will run at:

👉 http://localhost:8080

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run at:

👉 http://localhost:5173

🔥 API Documentation (Postman)
1️⃣ Login → Get JWT Token

POST
http://localhost:8080/auth/login

Body (JSON)
{
  "email": "test@gmail.com",
  "password": "1234"
}

Response
{
  "token": "eyJhbGciOiJIUzI1NiJ9....",
  "message": "Login successful"
}

2️⃣ Get All Movies (Protected)

GET
http://localhost:8080/movies

Headers
Authorization: Bearer <your_token>

3️⃣ Admin – Add Movie

POST
http://localhost:8080/admin/movies/add

Headers
Authorization: Bearer <admin_token>
Content-Type: application/json

Body
{
  "title": "Dunkirk",
  "description": "War drama",
  "genre": "Action",
  "rating": 7.9,
  "year": 2017,
  "thumbnailUrl": "https://dummyimage.com/600x400/dunkirk",
  "videoUrl": "https://youtube.com/dunkirk_trailer"
}

4️⃣ Add Movie to My List

POST
http://localhost:8080/mylist/add/{movieId}

Headers:

Authorization: Bearer <token>

5️⃣ Get My List

GET
http://localhost:8080/mylist

Headers:

Authorization: Bearer <token>

📸 Screenshots


🔐 Login Page  <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/1ab07b30-9d9a-468a-80a9-99126a668406" /> <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/b73248f3-8e0f-4b05-9ae6-3db611f8bb9c" />



📝 Register Page <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/6793841b-c9b9-4a27-9263-eec69ee3107a" /> <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/d54d439a-1240-4648-955b-9d248b97c6ed" />



🏠 Home Page <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/232496db-e70c-4326-804b-a97c64eb1d7a" />


🎬 Movie Details Page <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/d852526a-a4e7-491c-bd16-b6122f8c9acb" />


⭐ My Watchlist <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/0569ed95-9b04-405c-8d03-b7be643305fe" />


🎥 Backend Running (Spring Boot Console) <img width="1817" height="615" alt="image" src="https://github.com/user-attachments/assets/8111e9e9-c560-4570-9261-cce2300f7893" />

  Frontend Running <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/ca9446d2-bea0-49d7-9b7f-73bd7d373da5" />

👨‍🎓 Author

Adithya Rao
Student & Java Developer

🔗 GitHub: https://github.com/AdithyaRao07

🔗 Project Repo: https://github.com/AdithyaRao07/netflix-clone-fullstack
