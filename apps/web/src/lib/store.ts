import { writable } from 'svelte/store';
 
export const routeData = writable({
  currentRoute: '/',
  isLoggedIn: false,
  user: null
});