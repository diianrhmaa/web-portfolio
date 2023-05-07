// select all navbar links
const navLinks = document.querySelectorAll('.navbar-nav a');

// loop through each link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // remove "active" class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // add "active" class to the clicked link
    this.classList.add('active');
  });
});