/* =========================================================
   YOUR SETTINGS — the only file you need to edit.
   index.html (student portal) and print.html (printing tool)
   both read these, so future updates to those files won't
   need you to copy your settings again.
   ========================================================= */
window.PORTAL_CONFIG = {
  // Paste the Web app URL from Apps Script (Deploy > Manage deployments). It ends with /exec
  API_URL:
    "https://script.google.com/macros/s/AKfycbwaNMyg1tOCPanKRly0G8s7d9yPzrhreX5k6_y22HujnBXZBoUHevWLMIN0ZS_MNGcKhw/exec",
  // Name shown at the top of every page and on printed papers.
  SITE_NAME: "goal.physics",
  // Shown to students who forget their PIN.
  SUPPORT_CONTACT: "Contact: 01608370680",
  // Logo file on this website (shown on pages, receipts and ID cards).
  LOGO: "logo.png",
  // EXAM site only: the coaching website's address, e.g. 'https://coaching.goalphysics.com/'.
  // Old student links and ID-card QR codes that point here are forwarded to it. Leave '' on the coaching site.
  COACHING_URL: "",
  // Folder on this website where question pictures live.
  IMAGE_FOLDER: "images/",
};
