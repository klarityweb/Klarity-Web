/**
 * Klarity Web - Custom JavaScript
 * Ottimizzato per performance e UX
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. NAVBAR DINAMICA ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
            navbar.style.padding = '10px 0'; // Si restringe leggermente
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '15px 0';
        }
    });

    // --- 2. SMOOTH SCROLL PER LINK INTERNI ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- 3. ANIMAZIONE REVEAL AL SCROLL ---
    // Fa apparire gli elementi con un fade-in quando entrano nel viewport
    const revealElements = document.querySelectorAll('.service, .solution-box, .contact-card, .faq-item');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Set iniziale per l'animazione
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Esegui subito al caricamento

    // --- 4. GESTIONE RICERCA (SEARCH BOX) ---
    window.executeSearch = () => {
        const query = document.getElementById('searchInput').value.trim();
        if (query) {
            // Logica di ricerca base: avvisa l'utente o reindirizza
            console.log("Ricerca per:", query);
            alert("Suche nach: " + query + "... (Funktion wird implementiert)");
        } else {
            document.getElementById('searchInput').focus();
        }
    };

    // Permetti l'invio della ricerca con il tasto "Invio"
    document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            executeSearch();
        }
    });

});

// --- 5. LOG PER DEBUG (OPZIONALE) ---
console.log("Klarity Web JS loaded successfully 🚀");
