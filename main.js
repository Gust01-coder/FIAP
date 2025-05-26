/**
 * AgroTech - JavaScript principal
 * Projeto Acadêmico - PBL Engenharia de Software
 */

document.addEventListener('DOMContentLoaded', function() {
    // Ativar tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Ativar popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Efeito de scroll na navbar
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow');
                navbar.style.padding = '0.5rem 0';
            } else {
                navbar.classList.remove('shadow');
                navbar.style.padding = '1rem 0';
            }
        });
    }

    // Efeito de scroll suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação de contador para números
    const animateCounters = () => {
        const counters = document.querySelectorAll('.display-4, .h4.fw-bold.text-success');
        
        counters.forEach(counter => {
            const value = counter.innerText;
            const numericValue = parseFloat(value);
            
            if (!isNaN(numericValue)) {
                counter.innerText = '0';
                
                const updateCounter = () => {
                    const target = +value;
                    const count = +counter.innerText;
                    const increment = target / 100;
                    
                    if (count < target) {
                        counter.innerText = `${Math.ceil(count + increment)}`;
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.innerText = value;
                    }
                };
                
                // Iniciar animação apenas quando o elemento estiver visível
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            updateCounter();
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 });
                
                observer.observe(counter);
            }
        });
    };

    // Iniciar animação de contadores se existirem na página
    if (document.querySelector('.display-4, .h4.fw-bold.text-success')) {
        animateCounters();
    }

    // Galeria de imagens modal (para casos de sucesso)
    const caseImages = document.querySelectorAll('.case-image');
    
    if (caseImages.length > 0) {
        caseImages.forEach(image => {
            image.addEventListener('click', function() {
                const src = this.getAttribute('src');
                const alt = this.getAttribute('alt');
                
                const modal = new bootstrap.Modal(document.getElementById('imageModal'));
                document.getElementById('modalImage').setAttribute('src', src);
                document.getElementById('modalTitle').innerText = alt;
                modal.show();
            });
        });
    }

    // Filtro de casos de sucesso (se existir na página)
    const successFilter = document.getElementById('successFilter');
    
    if (successFilter) {
        successFilter.addEventListener('change', function() {
            const category = this.value;
            const caseCards = document.querySelectorAll('.case-card');
            
            caseCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Newsletter subscription
    const newsletterForm = document.querySelector('footer .input-group');
    
    if (newsletterForm) {
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const subscribeButton = newsletterForm.querySelector('button');
        
        subscribeButton.addEventListener('click', function() {
            const email = emailInput.value.trim();
            
            if (email && validateEmail(email)) {
                // Simular envio do formulário
                emailInput.value = '';
                
                // Exibir mensagem de sucesso
                const successAlert = document.createElement('div');
                successAlert.className = 'alert alert-success mt-2';
                successAlert.innerText = 'Obrigado pela inscrição!';
                
                newsletterForm.parentNode.appendChild(successAlert);
                
                // Remover a mensagem após 3 segundos
                setTimeout(() => {
                    successAlert.remove();
                }, 3000);
            } else {
                // Exibir mensagem de erro
                const errorAlert = document.createElement('div');
                errorAlert.className = 'alert alert-danger mt-2';
                errorAlert.innerText = 'Por favor, insira um e-mail válido.';
                
                newsletterForm.parentNode.appendChild(errorAlert);
                
                // Remover a mensagem após 3 segundos
                setTimeout(() => {
                    errorAlert.remove();
                }, 3000);
            }
        });
    }
});

// Validação de email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
} 
