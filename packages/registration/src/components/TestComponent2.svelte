<!-- src/components/Component2.svelte -->
<script>
    import { formatDate } from '../utils/util2';
    import { MAX_LENGTH } from '../constants/constant2';
    import { text, setText, clearText } from '../stores/store2';
  
    let newText = '';
    let formattedDate = formatDate(new Date());
  
    function clearTextArea() {
      newText = '';
      clearText();
    }
  </script>
  <h1>This is from registration Package</h1>
  <textarea bind:value={newText} placeholder={`Max ${MAX_LENGTH} characters`} rows="4" cols="50"></textarea>
  <p>Formatted Date: {formattedDate}</p>
  <p>Stored Text: {$text}</p>
  
  <button on:click={() => setText(newText)}>Set Text</button>
  <button on:click={clearTextArea}>Clear Text Area</button>
  