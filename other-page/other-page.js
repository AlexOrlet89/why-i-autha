// use checkAuth function to redirect is user not authenticated

import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const button = document.getElementById('logout');
button.addEventListener('click', () => {
    logout();
    checkAuth();});
    
// add event listener to the logout button and call logout