document.addEventListener('DOMContentLoaded', function() {
    // GSAP animations for all sections with the .fade-in-up class
    gsap.utils.toArray('.fade-in-up').forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 30 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 80%", // Start the animation when the element is 80% from the top of the viewport
                toggleActions: "play none none none"
            }
        });
    });

    // Remove preloader when the page content is fully loaded
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            gsap.to(preloader, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => preloader.remove()
            });
        }
    });

    // Animated tech logos logic
    const logos = ['react', 'node', 'nextjs', 'typescript', 'graphql', 'aws'];
    const container = document.getElementById('animated-logos');
    
    // Check if the container exists before proceeding
    if (container) {
        logos.forEach(logo => {
            // Create multiple instances of each logo for a floating effect
            for (let i = 0; i < 3; i++) {
                const img = document.createElement('img');
                // Use a placeholder image to avoid broken links
                img.src = `https://placehold.co/100x100/1E293B/fff?text=${logo}`;
                img.className = 'tech-logo';
                // Randomize size, position, and animation duration for a natural effect
                img.style.width = `${Math.random() * 80 + 40}px`;
                img.style.left = `${Math.random() * 100}%`;
                img.style.animationDuration = `${Math.random() * 20 + 10}s`;
                img.style.animationDelay = `${Math.random() * 5}s`;
                container.appendChild(img);
            }
        });
    }

    // Initialize Particles.js
    // This assumes particles-config.js is loaded before this file
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', particlesConfig);
    }
});
