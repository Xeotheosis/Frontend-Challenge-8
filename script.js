// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get the input element, submit button, and other required elements
    var emailInput = document.querySelector('input[type="email"]');
    var submitButton = document.querySelector('button#submit');
    var mainSection = document.querySelector('main');
    var successSection = document.querySelector('#card-success');
    var dismissButton = document.querySelector('#dismiss');
    var errorParagraph = document.querySelector('#paragraph-error');
  
    // Email validation function
    function validateEmail() {
      var email = emailInput.value.trim();
  
      // Regular expression for email validation
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (email === '' || !emailRegex.test(email)) {
        // Invalid email, set placeholder styles
        emailInput.style.backgroundColor = 'rgb(255, 226, 224)';
        emailInput.style.color = 'rgb(210, 111, 106)';
        errorParagraph.style.display = 'block';
      } else {
        // Valid email, clear placeholder styles
        emailInput.style.backgroundColor = '';
        emailInput.style.color = '';
        errorParagraph.style.display = 'none';
      }
    }
  
    // Submit button click event
    submitButton.addEventListener('click', function (event) {
      event.preventDefault();
      validateEmail();
  
      // Check if email is valid before showing success section
      if (emailInput.style.backgroundColor !== 'rgb(255, 226, 224)') {
        // Hide the main section and show the success section
        mainSection.style.display = 'none';
        successSection.style.display = 'flex';
      }
    });
  
    // Dismiss button click event
    dismissButton.addEventListener('click', function () {
      // Hide the success section
      successSection.style.display = 'none';
    });
  });
  