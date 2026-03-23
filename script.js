
document.addEventListener("DOMContentLoaded", function () {
    const words = ["Web Developer", "Web Designer", "Java programmer"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const newWordDelay = 2000;

function type() {
    if (charIndex < words[wordIndex].length) {
        currentWord += words[wordIndex].charAt(charIndex);
        document.querySelector('.typing-animation').textContent = currentWord;
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, newWordDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        currentWord = currentWord.slice(0, -1);
        document.querySelector('.typing-animation').textContent = currentWord;
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingSpeed + 1100);
    }
}

type();
});



// Animate progress bars
const progressBars = document.querySelectorAll('.progress-done');

progressBars.forEach(bar => {
    setTimeout(() => {
        bar.style.width = bar.getAttribute('data-done') + '%';
        bar.style.opacity = 1;
    }, 500);
});

// Animate circular skills
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    let percent = circle.getAttribute('data-percent');
    circle.style.setProperty('--percent', percent);
});

// Contact form submission
function sendToWhatsApp() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var phoneNumber = "919049474774"; // replace with your WhatsApp number

    var url = "https://wa.me/" + phoneNumber + "?text="
        + "Name: " + encodeURIComponent(name) + "%0a"
        + "Email: " + encodeURIComponent(email) + "%0a"
        + "Subject: " + encodeURIComponent(subject) + "%0a"
        + "Message: " + encodeURIComponent(message);

    window.open(url, "_blank");
}