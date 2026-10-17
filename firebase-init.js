// ============================================
// 🔥 تهيئة Firebase (مشتركة بين كل الصفحات)
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// أسماء الكولكشنات (مركزية)
export const USERS_COLLECTION = "users";
export const SCHEDULE_COLLECTION = "mahraiel_schedule";