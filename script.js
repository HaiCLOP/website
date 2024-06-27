import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAzF7BjgfcfysOhc8QOkDGW42RepnXyZwQ",
    authDomain: "azure-bot-d18ed.firebaseapp.com",
    projectId: "azure-bot-d18ed",
    storageBucket: "azure-bot-d18ed.appspot.com",
    messagingSenderId: "261662257326",
    appId: "1:261662257326:web:a4654bf3c69c83cda4fd3f",
    measurementId: "G-2PLD4VK7NS"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Elements
const loginBtn = document.getElementById('login-btn');
const authModal = document.getElementById('auth-modal');
const closeBtn = document.querySelector('.close-btn');
const loginForm = document.getElementById('login-form');

// Show login modal
loginBtn.addEventListener('click', () => {
    authModal.style.display = 'block';
});

// Close login modal
closeBtn.addEventListener('click', () => {
    authModal.style.display = 'none';
});

// Close modal if clicked outside of content
window.addEventListener('click', (e) => {
    if (e.target == authModal) {
        authModal.style.display = 'none';
    }
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successful login
            console.log('User logged in:', userCredential.user);
            authModal.style.display = 'none';
        })
        .catch((error) => {
            // Handle errors
            console.error('Error logging in:', error);
        });
});
