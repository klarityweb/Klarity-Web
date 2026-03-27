/**
 * KLARITY WEB - OFFICIAL SITE SCRIPT 2026
 * Core Logic: Navigation, Search, WhatsApp, and Contact Form
 */

document.addEventListener("DOMContentLoaded", () => {
    initScrollAnimations();
    initNavbarEffect();
    initFormHandler();
});

// ===============================================
// 1. WHATSAPP ENGINE (CONVERSION OPTIMIZED)
// ===============================================
function openWhatsApp(serviceName) {
    const phone = "+436604831451";
    const text = `Hallo Klarity Web, ich habe Ihre Website gesehen e vorrei informazioni su: ${serviceName}. Können wir eine kostenlose Demo starten?`;
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
}

// ===============================================
// 2. SEARCH BAR LOGIC (SMART REDIRECT)
// ===============================================
function executeSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) return;

    // Mappatura parole chiave -> Pagine
    const routes = {
        "design": "webdesign.html",
        "web": "webdesign.html",
        "landing": "webdesign.html",
        "seo": "seo-marketing.html",
        "marketing": "seo-marketing.html",
        "google": "seo-marketing.html",
        "leads": "seo-marketing.html",
        "support": "support.html",
        "hilfe": "support.html",
        "kontakt": "index.html#contact-form"
    };

    // Controllo se la query corrisponde a una rotta
    let target = "index.html"; // Default
    for (let key in routes) {
        if (query.includes(key)) {
            target = routes[key];
            break;
        }
    }

    if (target !== "index.html" || query === "home") {
        window.location.href = target;
    } else {
        // Feedback visivo se non trova nulla
        searchInput.style.border = "1px solid red";
        setTimeout(() => searchInput.style.border = "none", 2000);
        console.log("No specific page found for: " + query);
    }
}

// Listener per il tasto "Enter" nella barra di ricerca
document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') executeSearch();
});

// ===============================================
// 3. CONTACT FORM & POP-UP (AJAX)
// ===============================================
function initFormHandler() {
    const contactForm = document.getElementById("contact-form");
    const modal = document.getElementById("thankYouModal");

    if (!contactForm) return;

    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const btn = document.getElementById("submit-btn");
        const originalText = btn.innerHTML;
        
        btn.innerHTML = "Wird gesendet... ⏳";
        btn.disabled = true;

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                modal.style.display = "flex";
                contactForm.reset();
            } else {
                throw new Error("Server Error");
            }
        } catch (error) {
            alert("Fehler! Bitte versuchen Sie es später erneut oder kontaktieren Sie uns per WhatsApp.");
        } finally {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    });
}

function closeModal() {
    document.getElementById("thankYouModal").style.display = "none";
}

// ===============================================
// 4. ANIMATIONS & UI EFFECTS
// ===============================================
function initScrollAnimations() {
    const observerOptions = { threshold: 0.1 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Assicurati di avere .visible nel CSS se vuoi animazioni extra
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Seleziona elementi da animare (Service Cards, Feedback, Titoli)
    document.querySelectorAll('.service, .feedback, .form-section, h2').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)";
        observer.observe(el);
    });
}

function initNavbarEffect() {
    window.addEventListener("scroll", () => {
        const nav = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            nav.style.padding = "5px 0";
            nav.style.background = "rgba(0, 0, 0, 0.95)";
        } else {
            nav.style.padding = "15px 0";
            nav.style.background = "rgba(0, 0, 0, 0.85)";
        }
    });
}
