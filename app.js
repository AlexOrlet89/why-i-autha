import { redirectIfLoggedIn, signInUser, signupUser } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

// Wire up sign in and sign up forms to supabase

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(signUpEmail.value, signUpPassword.value);
    const resp = await signupUser(signUpEmail.value, signUpPassword.value);
    console.log(resp);

});
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const resp = await signInUser(signInEmail.value, signInPassword.value);
    console.log(resp);

    redirectIfLoggedIn();
    // send to signInUser which will take data from our eventListener here and returns user data.
});