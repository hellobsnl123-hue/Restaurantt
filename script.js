function showSection(sectionId) {
    // 1. Get all sections and hide them
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active-section');
        
        // Optional: Reset display property specifically for logic
        if(section.id !== 'home') {
             section.style.display = 'none';
        } else {
             section.style.display = 'none'; // Home also needs reset before flex apply
        }
    });

    // 2. Remove active class from nav links
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 3. Show the selected section
    const activeSection = document.getElementById(sectionId);
    
    // Special handling for Home because it uses Flexbox, others use Block
    if (sectionId === 'home') {
        activeSection.style.display = 'flex';
    } else {
        activeSection.style.display = 'block';
    }
    
    // Add animation class trigger (small timeout to ensure CSS transition works if needed)
    setTimeout(() => {
        activeSection.classList.add('active-section');
    }, 10);

    // 4. Highlight the clicked nav link
    // Find the li that has the onclick matching the sectionId
    // Simple way: Loop through nav items and check text or index. 
    // Here we assume order matches or we can map it.
    
    const navItems = ['home', 'starter', 'main', 'dessert'];
    const index = navItems.indexOf(sectionId);
    if(index !== -1) {
        navLinks[index].classList.add('active');
    }
}

// Initialize: Ensure Home is visible on load
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
