document.addEventListener("DOMContentLoaded", function() {
    // Fetch the footer HTML file
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            // Inject the footer HTML into the designated div
            document.getElementById('footer').innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching footer:', error);
        });
});