<script>
	import { routeData } from '$lib/store';
	import { generateRandomString } from '$lib/util';
	import { API_URL } from '$lib/constant';
	import Component1 from '@repo/common/src/components/Component1.svelte';
	import CoreComponent from '@repo/core/src/components/CoreComponent.svelte';
	import { goto } from '$app/navigation';
   
	let data;
	$: {
	  routeData.subscribe(value => {
		data = value;
	  });
	}
   
	function login() {
	  // Perform login logic
	  routeData.update(data => ({ ...data, isLoggedIn: true }));
	}
   
	function logout() {
	  // Perform logout logic
	  routeData.update(data => ({ ...data, isLoggedIn: false }));
	}
   
	const randomString = generateRandomString(10);
  </script>
   
  <main>
  <h1>Welcome to the Home Page</h1>
  <p>API URL: {API_URL}</p>
	{#if $routeData.isLoggedIn}
  <button on:click={logout}>Logout</button>
	{:else}
  <button on:click={login}>Login</button>
	{/if}
  <p>Random String: {randomString}</p>
  </main>

  <Component1 />
  <CoreComponent />

  <button on:click={() => goto('/home')}>Home</button>
  <button on:click={() => goto('/registration')}>Registration</button>