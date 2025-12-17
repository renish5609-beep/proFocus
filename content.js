{
  "manifest_version": 3,
  "name": "proFocus",
  "version": "0.1.0",
  "description": "Remove distracting UI elements without blocking entire websites.",
  "content_scripts": [
    {
      "matches": ["*://*.youtube.com/*"],
      "js": ["content.js"]
    }
  ]
}

