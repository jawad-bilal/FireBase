import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAbXBZQrGNnzd1Mk0hN-JqNGTGl5cu0d0c",
  authDomain: "microlending-analytics.firebaseapp.com",
  projectId: "microlending-analytics",
  storageBucket: "microlending-analytics.firebasestorage.app",
  messagingSenderId: "977371402716",
  appId: "1:977371402716:web:8c4bbf8312d6d8ed7bbf19",
  measurementId: "G-1GKQ7MNSCY"
};

const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
  console.log("🔥 Firebase Analytics Initialized:", analytics);
}

export { analytics };
