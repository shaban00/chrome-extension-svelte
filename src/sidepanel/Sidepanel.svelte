<script lang="ts">
  import "../app.postcss"
  import { onMount } from 'svelte'

  let countSync = 0
  const link = 'https://github.com/shaban00/chrome-extension-svelte'

  onMount(() => {
    chrome.storage.sync.get(['count'], (result) => {
      countSync = result.count || 0
    })

    chrome.runtime.onMessage.addListener((request) => {
      if (request.type === 'COUNT') {
        countSync = request?.count ?? 0
      }
    })
  })
</script>

<main>
  <h3>SidePanel Page</h3>

  <h4>Count from Popup: {countSync}</h4>

  <div class="flex mt-3">
    <a href={link} target="_blank">
      <span class="text-md text-black"> created by Shaban Mohammedsaai Hassan (shaban00) </span>
    </a>
  </div>
</main>
