document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('feedbackForm');

  form.addEventListener('submit', function (event) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      event.preventDefault();
      return;
    }

    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      event.preventDefault();
      return;
    }

    alert('Feedback submitted successfully!');
  });
});
