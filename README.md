Fritz!Box Auto Login
=====================

Firefox extension that automatically logs into a Fritz!Box router's web interface.

Add-on page
- https://addons.mozilla.org/en-GB/firefox/addon/fritz-box-auto-login/

Overview
- This extension detects the Fritz!Box login page and submits stored credentials automatically to streamline access to your router's web interface.

Features
- Auto-login on the Fritz!Box web UI when credentials are configured.
- Simple options page to configure credentials and settings.
- Lightweight content script approach (`content.js`) to detect and interact with the login form.

Installation
- Recommended: Install from the official Mozilla Add-ons page above.
- For development/testing locally:
  - Open `about:debugging` in Firefox → "This Firefox" → "Load Temporary Add-on..." and select the `manifest.json` from this repository.
  - Or use `web-ext` to run and test locally.

Usage
- Open your Fritz!Box web interface (typically `http://fritz.box` or its IP).
- If credentials are configured in the extension options, the extension will attempt to auto-fill and submit the login form.
- To change credentials or settings open `options.html` (Options) from the add-ons page or via the extension toolbar menu.

Files of interest
- `manifest.json` — extension manifest and permissions.
- `content.js` — logic that runs on the router login page to auto-fill/submit.
- `options.html`, `options.js` — UI to configure username/password and preferences.

Privacy & Security
- Credentials: this extension stores credentials in the extension storage. Treat local stored credentials like other saved passwords — protect your user profile and machine.
- No external servers: the extension operates locally in the browser and does not send credentials to remote servers (unless you modify the code to do so).
- Review `content.js` and `options.js` if you need to confirm exactly where/how credentials are stored and used.

Development
- Clone or open this folder in your editor.
- Use Firefox `about:debugging` → Load Temporary Add-on for quick iteration.
- For automated development with `web-ext`:
  - Install `web-ext` (nodejs required): `npm install --global web-ext`
  - Run: `web-ext run --source-dir .`

Contributing & Support
- Open an issue in the repository for bugs or feature requests.
- When reporting an issue, include Firefox version, steps to reproduce, and whether the router is an official Fritz!Box model.

License
- Check repository or accompanying license file for licensing details.

Notes
- This README is a high-level summary. Check the source files in this repo for exact implementation details and to audit storage/behaviour.
