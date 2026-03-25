// ===============================
// WHATSAPP FUNCTION (HIGH CONVERSION)
// ===============================
function openWhatsApp(serviceName){
  const phone = "+436604831451";
  const text = `Hallo Klarity Web, ich habe Ihre Website gesehen und möchte mehr Kunden gewinnen. Ich interessiere mich für ${serviceName}. Können wir eine kostenlose Demo starten?`;
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}


// ===============================
// SCROLL ANIMATIONS (SAFE VERSION)
// ===============================
document.addEventListener("DOMContentLoaded", function () {

  const elements = document.querySelectorAll('.card, .testimonial, .step');

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target); // evita loop
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });

});


// ===============================
// BUTTON HOVER EFFECT (SMOOTH)
// ===============================
document.querySelectorAll('.cta, button').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = "scale(1)";
  });
});


// ===============================
// HEADER RESIZE ON SCROLL
// ===============================
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if(!header) return;

  if(window.scrollY > 60){
    header.style.padding = "60px 20px";
  } else {
    header.style.padding = "80px 20px";
  }
});


// ===============================
// SMOOTH SCROLL (SAFE)
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    if(targetId === "#") return;

    const target = document.querySelector(targetId);

    if(target){
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
