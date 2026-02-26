document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('menuTrigger');
    const overlay = document.getElementById('menuOverlay');
    const body = document.body;

    if (trigger && overlay) {
        trigger.addEventListener('click', () => {
            overlay.classList.toggle('active');
            
            // Wall Street Effect: Blocca lo scroll quando il menu è aperto
            if (overlay.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });
    }
    
    // Chiudi il menu se clicchi su un link
    const menuLinks = document.querySelectorAll('.menu-content a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            overlay.classList.remove('active');
            body.style.overflow = '';
        });
    });
});
