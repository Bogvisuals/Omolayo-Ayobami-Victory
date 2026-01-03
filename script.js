// Typewriter Effect for Header Title and Description
const typewriterElement = document.getElementById('typewriter');
const descElement = document.getElementById('typewriter-desc');
const titleText = "Omolayo Ayobami Victory"; // Replace with your actual name
const descText = "Computer Science Student, Web Developer in Training - CSC/2023/81129"; // Replace with your actual description

let titleIndex = 0;
let descIndex = 0;

function typeTitle() {
    if (titleIndex < titleText.length) {
        typewriterElement.textContent += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 100); // Typing speed
    } else {
        // After title, start description
        descElement.style.opacity = '1';
        typeDesc();
    }
}

function typeDesc() {
    if (descIndex < descText.length) {
        descElement.textContent += descText.charAt(descIndex);
        descIndex++;
        setTimeout(typeDesc, 50); // Faster for description
    }
}

// Start typewriter on page load
window.addEventListener('load', typeTitle);

// Animate Skill Progress Bars on Scroll
const progressBars = document.querySelectorAll('.progress');

function animateProgress() {
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

// Trigger animation when skills section is in view
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgress();
            observer.unobserve(entry.target); // Animate only once
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);

// Modal Functionality for Picture
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const profilePic = document.getElementById('profile-pic');
const closeBtn = document.getElementsByClassName('close')[0];

// Open modal when picture is clicked
profilePic.onclick = function() {
    modal.style.display = 'block';
    modalImg.src = this.src; // Set modal image to the clicked picture
}

// Close modal when close button or outside is clicked
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}