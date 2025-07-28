/*
  Simple script for the portfolio site
  - Inserts the current year into the footer
*/
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    const year = new Date().getFullYear();
    yearEl.textContent = year;
  }
})();