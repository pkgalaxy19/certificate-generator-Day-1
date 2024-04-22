E-Certificate Generator
This project is a web application for generating and sending e-certificates to users. It uses React for the frontend, Express and Node.js for the backend, and Firebase as the database. The application allows users to submit their data, including name, email, and mobile number, and then generates and sends e-certificates to them using Nodemailer.

Features
User-friendly interface for submitting data
Automated e-certificate generation and sending
Secure storage of user data in Firebase
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/e-certificate-generator.git
Install dependencies for both frontend and backend:
bash
Copy code
cd e-certificate-generator
cd frontend
npm install
cd ..
cd backend
npm install
Configure Firebase:
Create a Firebase project and enable Firestore.
Set up Firebase authentication and obtain the necessary credentials.
Update the Firebase configuration in the backend (/backend/config/firebase.js) and frontend (/frontend/src/firebase.js) files.
Start the frontend and backend servers:
bash
Copy code
cd frontend
npm start
bash
Copy code
cd backend
npm start
Access the application at http://localhost:3000 in your browser.
Usage
Open the application in your browser.
Fill in the required fields (name, email, mobile number) and submit the form.
The application will generate an e-certificate and send it to the provided email address using Nodemailer.
Technologies Used
React
Express
Node.js
Firebase
Nodemailer
Contributing
Contributions are welcome! Fork the repository and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.
