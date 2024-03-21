<!-- src/components/NewComponent1.svelte -->
<script>
  import { shuffleArray } from '../utils/util1';
  import { MAX_RETRY_ATTEMPTS } from '../constants/constant1';
  import { count, increment } from '../stores/store1';

  let numbers = [1, 2, 3, 4, 5];
  let attemptsLeft = MAX_RETRY_ATTEMPTS;

  function shuffleNumbers() {
    numbers = shuffleArray(numbers);
    attemptsLeft -= 1;
  }
</script>

<main>
  <h2>Random Number Shuffler</h2>
  <p>Attempts Left: {attemptsLeft}</p>
  
  <ul>
    {#each numbers as number}
      <li>{number}</li>
    {/each}
  </ul>
  
  <button on:click={shuffleNumbers}>Shuffle Numbers</button>
  <button on:click={increment}>Increment Count</button>
</main>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 5px;
  }
</style>
