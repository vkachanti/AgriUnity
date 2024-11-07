
(function(){
    emailjs.init({
      publicKey: "DayMGJi1W5vMS_Xg9",
    });
 })();


$(document).ready(function() {
    // Form submission handler
    $('.contact1-form').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        
        // Collect form data
        const name = $('input[name="name"]').val().trim();
        const email = $('input[name="email"]').val().trim();
        const subject = $('input[name="subject"]').val().trim();
        const message = $('textarea[name="message"]').val().trim();

        // Validate form fields
        if (!name || !email || !subject || !message) {
            showModal('Error', 'Please fill out all fields correctly.');
            return;
        }

        // Prepare EmailJS parameters with 'reply_to' for email
        const templateParams = {
            from_name: name,      // Sender's name
            reply_to: email,      // Sender's email
            subject: subject,     // Email subject
            message: message      // Email message
        };

        // Send email using EmailJS
        emailjs.send('service_e5mx87o', 'template_xhe2jti', templateParams)
            .then(function(response) {
                showModal('Success', 'Your message has been sent successfully!');
                $('.contact1-form')[0].reset(); // Reset form fields
            }, function(error) {
                showModal('Error', 'Failed to send the message. Please try again later.');
            });
    });

    // Function to display modal with custom title and message
    function showModal(title, message) {
        $('#statusModalLabel').text(title);
        $('#modalMessage').text(message);
        $('#statusModal').modal('show');
    }
});
