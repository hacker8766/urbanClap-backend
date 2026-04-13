# urbanClap

# 🏙️ UrbanClap - Home Service Platform

## 📌 Overview

UrbanClap is a web-based platform that connects users with local service providers such as salons, cleaning services, repair professionals, and more.
The goal of this project is to make booking urban services **simple, fast, and reliable**.

---

## 🚀 Features

* 🔐 User Authentication (Login/Register using Passport.js)
* 🏠 Browse Services by Category
* 📅 Book Services with Date & Time
* 📊 Admin Panel to View Bookings
* 🔄 Real-time Booking Status (Pending, Confirmed, Completed, Cancelled)
* 📦 MongoDB Database Integration
* 🔗 RESTful API Backend

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Passport.js (Authentication)
* Express Session & Cookies

### Frontend

* React.js (Vite)
* Axios
* Tailwind CSS

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/hacker8766/urbanClap.git
cd urbanClap
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

### 4. Run the server

```bash
npm start
```

---

## 📡 API Endpoints (Backend)

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| POST   | /register        | Register user      |
| POST   | /login           | Login user         |
| GET    | /logout          | Logout user        |
| GET    | /Getcategory     | Get all categories |
| GET    | /GetBusinessList | Get all services   |
| POST   | /create-booking  | Create booking     |
| GET    | /admin-data      | Get all bookings   |

---

## 👨‍💻 My Role

Hi, I’m **Himanshu** 👋

* 🔧 Designed and developed the **Backend Architecture**
* 🔐 Implemented **Authentication using Passport.js**
* 🗄️ Managed **MongoDB Database & Schema Design**
* ⚙️ Built REST APIs for **Users, Services, and Bookings**
* 🔄 Handled session management and security

---
👨‍💻 My Role

Tarun Kumar 


- Developed the user interface for the UrbanClap platform  
- Designed responsive and user-friendly web pages  
- Integrated frontend with backend APIs for seamless booking experience  
- Focused on performance optimization and smooth user experience

## 📂 Project Structure

```
urbanClap/
│── models/
│── routes/
│── controllers/
│── frontend/
│── backend/
│── .env
│── package.json
```

---

## 🔮 Future Improvements

* 💳 Payment Integration
* 📱 Mobile Responsive UI Enhancements
* 🔔 Notifications System
* ⭐ Ratings & Reviews

---

## 🤝 Contributing

Feel free to fork this repository and contribute!

---

## 📜 License

This project is for learning and demonstration purposes.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
