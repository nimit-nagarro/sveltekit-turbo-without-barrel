<!-- src/components/NewComponent2.svelte -->
<script>
  import { generateRandomNumber } from '../utils/util2';
  import { MIN_LENGTH } from '../constants/constant2';
  import { text, setText } from '../stores/store2';

  let randomNumber = generateRandomNumber(1, 100);
  let inputValue = '';

  function generateNewRandomNumber() {
    randomNumber = generateRandomNumber(1, 100);
  }

  function handleInputChange(event) {
    inputValue = event.target.value;
  }

  function saveText() {
    if (inputValue.length >= MIN_LENGTH) {
      setText(inputValue);
    } else {
      alert(`Minimum length should be ${MIN_LENGTH}`);
    }
  }
</script>

<main>
  <h2>Random Number Generator</h2>
  <p>Generated Number: {randomNumber}</p>
  
  <input type="text" placeholder="Enter text" bind:value={inputValue} on:input={handleInputChange}>
  
  <button on:click={generateNewRandomNumber}>Generate New Random Number</button>
  <button on:click={saveText}>Save Text</button>
</main>

<style>
  input {
    width: 100%;
    margin-bottom: 10px;
  }
</style>
