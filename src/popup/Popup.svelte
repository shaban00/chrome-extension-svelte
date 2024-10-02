<script lang="ts">
  import '../app.postcss'
  import { onMount, onDestroy } from 'svelte'

  let count = 0
  const link = 'https://github.com/shaban00/chrome-extension-svelte'

  const decrement = () => {
    if (count > 0) count--
    chrome.storage.sync.set({ count })
  }
  const increment = () => {
    count++
    chrome.storage.sync.set({ count })
  }

  onMount(() => {
    chrome.storage.sync.get(['count'], (result) => {
      count = result.count ?? 0
    })

    return () => {
      chrome.storage.sync.set({ count })
    }
  })

  $: {
    chrome.runtime.sendMessage({ type: 'COUNT', count })
  }
</script>

<main class="flex flex-col justify-center items-center size-96 bg-white p-1">
  <h3 class="text-2xl font-semibold">Popup Page</h3>
  <div class="text-lg mt-3">
    <button
      disabled={count <= 0}
      on:click={decrement}
      class="bg-primary-500 hover:bg-primary-600 h-12 w-28 rounded-lg">-</button
    >
    <label for="count-input">{count}</label>
    <button on:click={increment} class="bg-primary-500 hover:bg-primary-600 h-12 w-28 rounded-lg"
      >+</button
    >
  </div>
  <div class="flex mt-3">
    <a href={link} target="_blank">
      <span class="text-md text-black"> created by Shaban Mohammedsaai Hassan (shaban00) </span>
    </a>
  </div>
</main>
