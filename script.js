// Base del número de WhatsApp (reemplazar con el número real del carrito)
const WHATSAPP_NUMBER = "56912345678";

function orderPromo(promoName) {
    const text = `¡Hola! Me gustaría pedir la ${promoName}. ¿Me pueden dar más detalles? 🍔`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    
    // Abrir en nueva pestaña
    window.open(whatsappUrl, '_blank');
}

// Interacción suave para los anclajes de menú (smooth scrolling)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Ignorar enlaces que no sean a secciones internas (como los botones o enlaces externos)
            if (this.getAttribute('href').startsWith('#') && this.getAttribute('href').length > 1) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
