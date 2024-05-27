<h1 style="text-align: center">Codecademy Dark Mode</h1>

<h2>An unofficial skin for the Codecademy learning platform</h2>

![Codecademy Dark](https://github.com/Jamesllllllllll/codecademy-darkmode/assets/125431058/5034f8b7-7e56-49ba-88ce-3314944f3b67)

## What is this?

It is a Chrome Browser Extension & Firefox Addon containing custom CSS (and a little JS) that changes the appearance of Codecademy.com

## Why?

I like to learn at night!

## How to use this in your browser

### Option 1: Install the latest official release in your browser:

Chrome: https://chromewebstore.google.com/detail/ohlfgacenaijhkaikejikkhgnipofpnh

Firefox: https://addons.mozilla.org/en-CA/firefox/addon/codecademy-dark-mode/

### Option 2: Install from this repo:

#### Chrome:

1. Clone this repository to your local drive
2. Open Chrome and visit [chrome://extensions/](chrome://extensions/)
3. Click "Load Unpacked" 
4. Select the folder containing the cloned files
5. Visit [Codecademy.com](https://codecademy.com) to confirm it is working!

You may unintstall the extension by visiting [chrome://extensions/](chrome://extensions/), find the extension and click the "Remove" button.

#### Firefox:

1. Clone this repository to your local drive
2. Locate the `manifest.json` file and add the following:
```json
{
  "manifest_version": 3,
  
  // add this:
   "browser_specific_settings": {
    "gecko": {
      "id": "any_random_id",
      "strict_min_version": "42.0"
    }
  }
  // rest of the file  
}
```
3. Open Firefox and visit [about:debugging](about:debugging)
4. Click "This Firefox" (or "This Nightly" if you use the Nightly build)
5. Click the "Load Temporary Add-on..." button
6. Locate and open `manifest.json`


## Modify for your own use

You can modify your copy of `styles.css`. After making changes, remember to click the reload ↻ button on the [chrome://extensions/](chrome://extensions/) page.

## Contributing

Contributions are welcome! This is a very early version, so there are lots of kinks to be ironed out. Please open an issue if you want to discuss any changes or request fixes. Feel free to open a PR.

Currently the majority of the CSS modifies the colours and not much more.

The CSS uses variables for ease of use and future extensibility (ie. colours could be changed on-the-fly, only needing to change the variables).

See the variables in the `:root` element.

## Roadmap

- [ ] Add toggle to turn dark mode on and off (will require background.js and managing state)
- [ ] Add more themes
- [ ] Create a popup when the browser extension icon is clicked to choose a theme
- [ ] Possibly add the ability to manually change colours


## Licence

MIT Licence - feel free to copy, modify & distribute.
