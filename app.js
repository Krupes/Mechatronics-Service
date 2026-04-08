const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('header-menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
});
menu.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('open');
        menu.classList.remove('open');
    });
});






const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "2377128f-b0c8-41c9-bd50-6419ecbb1c41");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});