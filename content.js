// Hide YouTube Shorts and recommendations

const selectors = [
  "ytd-rich-section-renderer", // Shorts shelf
  "ytd-reel-shelf-renderer",   // Shorts feed
  "#related"                   // Recommended sidebar
];

selectors.forEach(selector => {
  const style = document.createElement("style");
  style.textContent = `${selector} { display: none !important; }`;
  document.head.appendChild(style);
});


