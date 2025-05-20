document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var message = document.getElementById('message').value;

        if (name && message) {
            document.getElementById('submitButton').style.display = 'none';
            document.getElementById('messengerButton').style.display = 'inline-block';
        }
    });

    document.getElementById('messengerButton').addEventListener('click', function() {
        var message = document.getElementById('message').value;
        var messengerLink = 'fb-messenger://share/?link=' + encodeURIComponent(window.location.href) + '&app_id=YOUR_APP_ID&text=' + encodeURIComponent("Từ website: " + message);
        window.location.href = messengerLink;
    }); 