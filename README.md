# chrome-extension-svelte

A chrome extension built with Vite + Svelte, Tailwindcss and Manifest v3

## Installing

1. Check if your `node.js` version is >= **14**.
2. Change or configurate the name of your extension on `src/manifest`.
3. Run `pnpm install` to install the dependencies.

## Developing

```shell
git clone https://github.com/shaban00/chrome-extension-svelte.git
```

```shell
cd chrome-extension-svelte
```

```shell
pnpm run dev
```

## Packing

After the development of your extension run the command

```shell
pnpm run build
```

Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

### Chrome Extension Developer Mode

1. Set your Chrome browser 'Developer mode' up
2. Click 'Load unpacked', and select `chrome-extension-svelte/build` folder

---

Created by [Shaban Mohammedsaani Hassan (shaban00)](https://github.com/shaban00/chrome-extension-svelte)
