var typed= new Typed(".text",{
    strings:["Web Designer","Web Developer","Video Editor","YouTuber",],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});



// script.js for toggle function 

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}




// ----------------------about-----------------------

var tab_links = document.getElementsByClassName("tab-links");
var tab_contents = document.getElementsByClassName("tab-contents");


function open_tab(tab_name){
    for(tab_link of tab_links){
        tab_link.classList.remove("active-link");
    }
    for(tab_content of tab_contents){
        tab_content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tab_name).classList.add("active-tab");
}

//------------------------skills---------------------

document.querySelectorAll('.box').forEach(box => {
    const percentage = box.getAttribute('data-percentage');
    const circle = box.querySelector('.circle');
    const percentageText = box.querySelector('.percentage');

    // Set CSS variable to control rotation angle based on percentage
    const rotationDegree = 0 * percentage;
    circle.style.setProperty('--percentage', rotationDegree);

    // Trigger the rotation animation after a slight delay
    setTimeout(() => {
        circle.style.transform = `rotate(${rotationDegree}deg)`;
    }, 100); // Delay to allow transition to apply

    // Animate the text from 0 to the target percentage
    let progress = 0;
    const updateProgress = setInterval(() => {
        if (progress <= percentage) {
            percentageText.innerText = progress + '%';
            progress++;
        } else {
            clearInterval(updateProgress);
        }
    }, 35);
});


//----------------------contact-----------------------


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show a loading message or disable the button
    const button = event.target.querySelector('button');
    button.textContent = "Sending...";
    button.disabled = true;

    // Send email using EmailJS
    emailjs.sendForm('service_dz3ubwa', 'template_o4h2kbf', '#contactForm')
      .then(function() {
        alert('Your message has been sent successfully!');

        // Clear form and reset button
        document.getElementById('contactForm').reset();
        button.textContent = "Send Message";
        button.disabled = false;
      }, function(error) {
        alert('Oops, something went wrong. Please try again!');
        console.error('Error:', error);

        // Reset button
        button.textContent = "Send Message";
        button.disabled = false;
      });
  });


  //------------------active_navbar _color-------------

  // Select all links in the navigation menu
const navLinks = document.querySelectorAll('.navbar a');

// Loop through the links and add a click event listener to each
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove 'active' class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});
