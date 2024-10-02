function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active'); // Toggle the visibility of links
}
function createParticles() {
  const particleBackground = document.querySelector('.particle-background');
  
  for (let i = 0; i < 30; i++) { // Adjust the number of particles
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      
      // Add a slight random delay for animations
      particle.style.animationDelay = `${Math.random() * 4}s`;
      
      particleBackground.appendChild(particle);
  }
}

// Call the function on page load
window.onload = createParticles;
