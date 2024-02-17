window.addEventListener('DOMContentLoaded', (event) => {
  // Function to fetch and inject HTML content
  const fetchAndInjectHTML = (url, targetId) => {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        // Inject the fetched HTML into the designated target
        document.getElementById(targetId).innerHTML = html;
      })
      .catch(error => {
        console.error(`Error fetching ${url}:`, error);
      });
  };

  // Load navigation
  fetchAndInjectHTML('nav.html', 'navigation');

  // Load footer
  fetchAndInjectHTML('footer.html', 'footer');
});