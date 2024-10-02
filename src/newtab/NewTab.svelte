<script lang="ts">
  import "../app.postcss"
  import { onMount } from 'svelte'

  const getTime = () => {
    const date = new Date()
    const hour = String(date.getHours()).padStart(2, '0')
    const minute = String(date.getMinutes()).padStart(2, '0')
    return `${hour}:${minute}`
  }

  let time = getTime()
  const link = 'https://github.com/shaban00/chrome-extension-svelte'

  onMount(() => {
    let intervalor = setInterval(() => {
      time = getTime()
    }, 1000)

    return () => clearInterval(intervalor)
  })
</script>

<section>
  <span></span>
  <h1>{time}</h1>
  <div class="flex mt-3">
    <a href={link} target="_blank">
      <span class="text-md text-black"> created by Shaban Mohammedsaai Hassan (shaban00) </span>
    </a>
  </div>
</section>
