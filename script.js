document.addEventListener('DOMContentLoaded', function() {
    // Select all links in the navigation and the main CTA button
    const navLinks = document.querySelectorAll('header nav ul li a');
    const ctaButton = document.querySelector('.cta-button');

    // Combine all scroll links into one array
    const allScrollLinks = [...navLinks, ctaButton];

    // Function to handle smooth scrolling
    const smoothScroll = (e) => {
        // Prevent default anchor click behavior
        e.preventDefault(); 
        
        // Get the target section's ID from the href (e.g., '#work')
        const targetId = e.target.getAttribute('href');
        
        // Select the target element
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Use the scrollIntoView method for smooth scrolling
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    // Attach the smoothScroll function to every scroll link
    allScrollLinks.forEach(link => {
        // Check if the link href starts with '#' to ensure it's an internal link
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', smoothScroll);
        }
    });
});