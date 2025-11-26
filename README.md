Fritz!Box Auto Login
=====================

Firefox extension that automatically logs into a Fritz!Box router's web interface.

Add-on page
- https://addons.mozilla.org/en-GB/firefox/addon/fritz-box-auto-login/

Overview
- This extension detects the Fritz!Box login page and will click the login button when the username and password fields are already filled (for example by you or by a browser password manager). The extension does not supply or store credentials itself.

Features
- Auto-login behaviour: when username and password fields on the Fritz!Box login page are already populated, the extension will automatically click the login button.
- Options page to view hostnames and IP addresses that the extension matches against (`options.html`, `options.js`).
- Lightweight content script approach (`content.js`) that detects the login form and triggers the submit action; it does not fill credentials.

Installation
- Recommended: Install from the official Mozilla Add-ons page above.
- For development/testing locally:
  - Open `about:debugging` in Firefox → "This Firefox" → "Load Temporary Add-on..." and select the `manifest.json` from this repository.
  - Or use `web-ext` to run and test locally.

Usage
- Open your Fritz!Box web interface (typically `http://fritz.box` or its IP).
- The extension does not store or fill credentials. If username/password fields are already filled (manually or by your browser/OS password manager), the extension will click the login button automatically.
- To view the hostnames and IP addresses the extension will act on, open `options.html` (Options) from the add-ons page or via the extension toolbar menu. Manage or change saved credentials using your browser or OS password manager.

Files of interest
- `manifest.json` — extension manifest and permissions.
- `content.js` — logic that runs on the router login page to detect the filled form and click login.
- `options.html`, `options.js` — UI to view hostnames and IP address lists used by the extension.

Privacy & Security
- Credentials: this extension does NOT store or transmit your username/password. It only automates the login action when the page fields are already populated. Manage credentials with your browser or OS password manager for best security.
- Permissions note: the manifest currently declares the `storage` permission but this version does not use it to persist credentials.
- No external servers: the extension operates locally in the browser and does not send credentials to remote servers (unless you intentionally modify the code to do so).
- Review `content.js` and `options.js` to audit exactly what is read from the page and what is displayed in the options UI.

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
