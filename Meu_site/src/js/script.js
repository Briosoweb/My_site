// Inicializar o EmailJS (Substitui pela tua Public Key)
(function() {
    emailjs.init("vl1kOtXs0ik4-CyUg"); 
})();

// Controlo do Menu de Navegação para Telemóveis
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Altera o ícone
        const icon = hamburger.querySelector('i');
        if(navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Fechar menu ao clicar num link (em telemóveis)
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Envio Real do formulário com EmailJS
const form = document.getElementById('contactForm');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede a página de recarregar

        // Muda o texto do botão para dar feedback visual ao utilizador
        const btn = form.querySelector('button[type="submit"]');
        const btnOriginalText = btn.innerText;
        btn.innerText = 'A enviar...';

        // Os teus IDs
        const serviceID = 'service_r8qlq6t'; 
        const templateID = 'template_dssz94l'; // Substitui pelo teu Template ID

        // Enviar através do EmailJS
        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                alert('Mensagem enviada com sucesso! Entrarei em contacto em breve.');
                form.reset(); // Limpa o formulário após o sucesso
                btn.innerText = btnOriginalText; // Repõe o texto do botão
            }, (error) => {
                console.error('Erro:', error);
                alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou use o WhatsApp.');
                btn.innerText = btnOriginalText;
            });
    });
}