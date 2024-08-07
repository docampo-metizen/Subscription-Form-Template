function handleFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
    }).then(response => {
        if (response.ok) {
            window.location.href = "splash.html"; // Redirect to splash page on successful submission
        } else {
            alert('There was a problem with your submission.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
}