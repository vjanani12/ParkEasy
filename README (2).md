# 🚗 ParkEasy – Parking Management System

ParkEasy is a responsive web-based parking management application that helps users find available parking locations and book parking easily through a simple and user-friendly interface.

## 📌 Project Overview

ParkEasy is a frontend web application developed to simplify the parking reservation process. Users can explore available parking locations, enter their vehicle and booking details, view their bookings, and cancel bookings when required.

The application stores booking information in the browser using **LocalStorage**, so users can manage their bookings without a backend database.

## ✨ Features

- 🏠 Responsive Home page
- 📍 View available parking locations
- 🅿️ Parking booking form
- 🚗 Enter vehicle and booking details
- 📋 View saved bookings
- ❌ Cancel bookings
- 💾 Store booking data using LocalStorage
- 📩 Contact form
- 📱 Responsive design for different screen sizes
- 🧭 Easy navigation between pages

## 🛠️ Technologies Used

- **HTML5** – Web page structure
- **CSS3** – Styling and layout
- **JavaScript** – Dynamic functionality and booking operations
- **Bootstrap 5.3.3** – Responsive UI components and layout
- **LocalStorage** – Client-side booking data storage

## 📂 Project Structure

```text
ParkEasy/
│
├── index.html
├── parking.html
├── booking.html
├── mybookings.html
├── contact.html
│
├── css/
│   └── style.css
│
└── js/
    └── script.js
```

## 📄 Pages

### 🏠 Home Page
The home page introduces ParkEasy and provides navigation to the main features of the application.

### 📍 Parking Page
Displays available parking locations and allows users to select a location for booking.

### 📝 Booking Page
Users can enter their name, vehicle number, parking location, date, and time to create a parking booking.

### 📋 My Bookings Page
Displays the bookings saved by the user. Users can also cancel an existing booking.

### 📩 Contact Page
Provides a contact form through which users can submit their name, email, and message.

## 🔄 Application Workflow

```text
Open ParkEasy
      ↓
   Home Page
      ↓
Find Parking / Book Now
      ↓
Select Parking Location
      ↓
Enter Booking Details
      ↓
Confirm Booking
      ↓
Save Data in LocalStorage
      ↓
View My Bookings
      ↓
View / Cancel Booking
```

## 💾 LocalStorage

ParkEasy uses browser **LocalStorage** to save booking information.

When a user confirms a booking, the booking details are stored in the browser. The My Bookings page retrieves this information and displays it to the user.

This project does not currently use a backend server or database.

## ▶️ How to Run

1. Download or clone this repository.
2. Open the project folder in **Visual Studio Code**.
3. Open `index.html`.
4. Run the project using a browser or the **Live Server** extension.
5. Navigate through the pages and test the booking functionality.

### Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

## 🎯 Project Objectives

- To create a simple parking management interface.
- To provide an easy way to find parking locations.
- To implement a basic parking booking process.
- To understand JavaScript form handling and DOM manipulation.
- To use LocalStorage for client-side data management.
- To develop a responsive website using Bootstrap.

## 🧠 Learning Outcomes

Through this project, I gained practical experience in:

- HTML page structure
- CSS styling
- Bootstrap responsive design
- JavaScript
- DOM manipulation
- Event handling
- Form handling
- LocalStorage
- JSON data handling
- Multi-page website development
- Git and GitHub

## 🚀 Future Enhancements

- User registration and login
- Backend integration
- MySQL database
- Real-time parking slot availability
- Online payment
- Email/SMS booking confirmation
- Admin dashboard
- Google Maps integration
- Secure user authentication

## 👩‍💻 Developer

**Janani**

Computer Science and Engineering

## 📌 Project Information

| Item | Details |
|---|---|
| Project Name | ParkEasy |
| Project Type | Web Application |
| Domain | Parking Management |
| Frontend | HTML, CSS, JavaScript |
| UI Framework | Bootstrap 5.3.3 |
| Data Storage | Browser LocalStorage |
| Backend | Not Used |
| Database | Not Used |
| IDE | Visual Studio Code |

## 📄 License

This project is developed for educational and academic purposes.
