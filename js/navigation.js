// navigation.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the placeholder element
    var navigationPlaceholder = document.getElementById('navigation-placeholder');
  
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Configure it to fetch the navigation.html file
    xhr.open('GET', 'navigation.html', true);
  
    // Set the callback function to handle the response
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Insert the navigation HTML into the placeholder
        navigationPlaceholder.innerHTML = xhr.responseText;
      }
    };
  
    // Send the request
    xhr.send();
  });