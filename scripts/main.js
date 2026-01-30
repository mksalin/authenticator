// scripts/main.js

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.sidebar a');
  const content = document.getElementById('main-content');

  function loadPage(page) {
    fetch(page)
      .then(response => response.text())
      .then(html => {
        content.innerHTML = html;
      })
      .catch(() => {
        content.innerHTML = '<h2>Page not found</h2>';
      });
  }

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      loadPage(this.getAttribute('data-page'));
    });
  });

  // Load the first page by default
  if (links.length > 0) {
    links[0].classList.add('active');
    loadPage(links[0].getAttribute('data-page'));
  }
});
