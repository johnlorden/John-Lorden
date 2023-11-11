// Include the SendGrid library
sendgrid.init({ apiKey: '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' });

// Function to send the email and redirect to the thank-you page with a query parameter
function sendEmailAndRedirect() {
  const form = document.getElementById("myForm");
  const formData = new FormData(form);
  
  let emailContent = '';
  for (const pair of formData.entries()) {
    emailContent += `${pair[0]}: ${pair[1]}\n`;
  }

  // Replace with the actual sender and recipient email addresses
  sendgrid.send({
    to: 'denden101807@gmail.com',   // Recipient's email address
    from: 'formsjlo@mail.com',      // Sender's email address
    subject: 'Form Submission',
    text: emailContent,
  }, function(success, message) {
    if (!success) {
      console.error(message);
    } else {
      console.log('Email sent successfully');
      // Redirect to the thank-you page with a query parameter
      window.location.href = 'thank-you.html?status=success'; // Replace with the correct URL and query parameter
    }
  });
}

// Event listener for form submission
document.getElementById("submitButton").addEventListener("click", sendEmailAndRedirect);
