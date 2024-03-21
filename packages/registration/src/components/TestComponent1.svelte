<!-- src/components/Component1.svelte -->
<script>
	import { capitalizeFirstLetter } from '../utils/util1';
	import { API_URL } from '../constants/constant1';
	import { count, increment, decrement } from '../stores/store1';
	import { TestComponent1 as CommonTestComponent1 } from '@repo/common/components';

	let name = 'world';
	let greeting = 'Hello';
	let age = 25;

	function changeGreeting() {
		greeting = greeting === 'Hello' ? 'Hola' : 'Hello';
	}

	let formattedName = capitalizeFirstLetter(name);

	function doubleAge() {
		age *= 2;
	}
</script>

<h1>This is from registration Package</h1>
<h1>{greeting}, {formattedName}!</h1>
<p>API URL: {API_URL}</p>
<p>Count from store: {$count}</p>
<p>Age: {age}</p>

<button on:click={changeGreeting}>Toggle Greeting</button>
<button on:click={increment}>Increment Count</button>
<button on:click={decrement}>Decrement Count</button>
<button on:click={doubleAge}>Double Age</button>

<h3>
	Coming from Common component:
</h3>
<CommonTestComponent1/>
