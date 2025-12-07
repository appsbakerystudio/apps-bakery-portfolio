document.getElementById('notifyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from reloading/submitting normally
    
    const emailInput = document.getElementById('emailInput');
    const message = document.getElementById('message');
    
    // Check if the input value looks like an email (simple check)
    if (emailInput.value && emailInput.checkValidity()) {
        
        // --- IMPORTANT: This is where you would integrate with a backend service ---
        // e.g., using fetch() to send the email to a serverless function or email service (Mailchimp, ConvertKit, etc.)
        
        // Success Message Display
        message.textContent = `Success! ${emailInput.value} is now on our pre-launch recipe list.`;
        message.style.color = '#90EE90'; // Light green
        emailInput.value = ''; // Clear the input field
    } else {
        // Error Message Display
        message.textContent = 'Please enter a valid email to get on the recipe list!';
        message.style.color = '#FF69B4'; // Neon Pink for error
    }
});