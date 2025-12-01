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


🔐 Login Page  <img width="1920" height="1020" alt="LoginPage" src="https://github.com/user-attachments/assets/53f0c045-71d6-4e24-ada2-ff774d799577" />



📝 Register Page <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/09a495b4-b712-425b-b371-8d7bbda22e83" />




🏠 Home Page <img width="1920" height="1020" alt="HomePage" src="https://github.com/user-attachments/assets/90c62f57-1553-48b3-b5e4-b3202838ddb1" />



🎬 Movie Details <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/4f5068ba-2b52-4ec4-9257-1ce0d34c8ebc" />


⭐ My Watchlist <img width="1920" height="1020" alt="Watchlist" src="https://github.com/user-attachments/assets/3fe8cf1f-6c37-4feb-bda2-c3d751326b5c" />



🎥 Backend Running (Spring Boot Console) <img width="1817" height="615" alt="BackendConsole" src="https://github.com/user-attachments/assets/a794d5cf-8607-4460-b20d-fabb3e475886" />


  Frontend Running <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/ffd42dca-c505-47dc-8347-bcd6246e7cb4" />

👨‍🎓 Author

Adithya Rao
Student & Java Developer

🔗 GitHub: https://github.com/AdithyaRao07

🔗 Project Repo: https://github.com/AdithyaRao07/netflix-clone-fullstack
