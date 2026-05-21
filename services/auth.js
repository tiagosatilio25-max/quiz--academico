import { auth } from "./firebase.js";

import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// ======================
// PROVIDERS
// ======================

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();


// ======================
// GOOGLE
// ======================

const googleBtn = document.getElementById("googleLogin");

if (googleBtn) {

  googleBtn.addEventListener("click", async () => {

    try {

      const result = await signInWithPopup(auth, googleProvider);

      console.log(result.user);

      alert("Login Google realizado!");

      window.location.href = "quiz.html";

    } catch (error) {

      console.log(error);

      alert("Erro no login Google");

    }

  });

}





