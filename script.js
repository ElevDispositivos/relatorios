document.addEventListener('DOMContentLoaded', function() {
    // Animate sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0s';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Add hover effects to metric cards
    const metricCards = document.querySelectorAll('.metric');
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add click-to-copy functionality for metrics
    const metricValues = document.querySelectorAll('.metric-value');
    metricValues.forEach(value => {
        value.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                // Show feedback
                const originalText = this.textContent;
                this.textContent = 'Copiado!';
                this.style.color = '#16a34a';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.color = '';
                }, 1000);
            });
        });
    });

    // Smooth scrolling for internal links
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

    // Add print functionality
    const printButton = document.createElement('button');
    printButton.textContent = '🖨️ Imprimir Relatório';
    printButton.className = 'print-button';
    printButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #2563eb, #1d4ed8);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
    `;

    printButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
    });

    printButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
    });

    printButton.addEventListener('click', function() {
        window.print();
    });

    document.body.appendChild(printButton);

    // Add loading animation for platform cards
    const platformCards = document.querySelectorAll('.platform-card');
    platformCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Add progress indicator for scroll
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #1d4ed8);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // Lead data
    const leadsData = {
        cold: [
            {
                id: '7e1a8c90-a7f5-4eaa-bd44-01f10f1f01a1',
                nome: 'Carlos Henrique',
                telefone: '(11) 99876-1234',
                mensagem: 'Gostaria de saber se vocês têm macaco hidráulico elétrico para carros SUV.',
                dados: { tipo_dispositivo: "macaco elétrico", modelo_carro: "SUV" },
                contatado: false,
                foi_atendido: false,
                recebido_em: '2025-06-27T10:00:00Z'
            },
            {
                id: 'd2fbe5fc-5f18-4a2d-81b2-1e2c56189012',
                nome: 'Ana Paula',
                telefone: '(21) 91234-5678',
                mensagem: 'Qual o peso máximo suportado pelo macaco hidráulico elétrico?',
                dados: { tipo_dispositivo: "macaco elétrico", peso_veiculo: "até 2 toneladas" },
                contatado: false,
                foi_atendido: true,
                recebido_em: '2025-06-27T10:01:00Z'
            },
            {
                id: '4a6e0410-1ecb-44b0-92ea-d1f6fcae0f61',
                nome: 'José da Silva',
                telefone: '(31) 98765-4321',
                mensagem: 'Vocês entregam macaco hidráulico para região de Belo Horizonte?',
                dados: { regiao_entrega: "BH", tipo_dispositivo: "macaco hidráulico" },
                contatado: true,
                foi_atendido: true,
                recebido_em: '2025-06-27T10:02:00Z'
            },
            {
                id: '1b7e4c3c-91cb-41d2-b50c-0f178e1f3ae9',
                nome: 'Renata Moura',
                telefone: '(85) 99912-3045',
                mensagem: 'Tem algum modelo de macaco hidráulico com acionamento automático?',
                dados: { tipo_dispositivo: "macaco hidráulico", funcionalidade: "acionamento automático" },
                contatado: false,
                foi_atendido: false,
                recebido_em: '2025-06-27T10:03:00Z'
            },
            {
                id: 'cf2fdf0f-b9a2-497f-a7db-3a70c9c5dca5',
                nome: 'Paulo Nogueira',
                telefone: '(47) 99876-3311',
                mensagem: 'Quanto tempo de garantia tem o macaco elétrico para sedan?',
                dados: { tipo_dispositivo: "macaco elétrico", tipo_carro: "sedan", garantia: "consultar" },
                contatado: true,
                foi_atendido: false,
                recebido_em: '2025-06-27T10:04:00Z'
            },
            {
                id: '56ef914c-f10d-4d1b-85c5-b10a2b1f4721',
                nome: 'Márcia Lopes',
                telefone: '(67) 99345-1233',
                mensagem: 'Qual a voltagem do macaco elétrico?',
                dados: { tipo_dispositivo: "macaco elétrico", voltagem: "12V" },
                contatado: false,
                foi_atendido: true,
                recebido_em: '2025-06-27T10:05:00Z'
            },
            {
                id: 'a5dcdba3-6a0a-4dbe-97a2-248e9dc7c2c3',
                nome: 'João Pedro',
                telefone: '(31) 91234-4444',
                mensagem: 'Tem diferença entre o macaco elétrico e o hidráulico para veículos leves?',
                dados: { comparacao: "elétrico vs hidráulico", aplicacao: "veículos leves" },
                contatado: false,
                foi_atendido: false,
                recebido_em: '2025-06-27T10:06:00Z'
            },
            {
                id: '5ae6211e-bd0a-4a09-bf91-d3c7f4170911',
                nome: 'Luciana Alves',
                telefone: '(41) 99810-2299',
                mensagem: 'Vocês vendem macaco hidráulico com nota fiscal?',
                dados: { tipo_dispositivo: "macaco hidráulico", nota_fiscal: true },
                contatado: true,
                foi_atendido: true,
                recebido_em: '2025-06-27T10:07:00Z'
            },
            {
                id: 'b3e2c8dd-73b0-4373-a9d1-f43093c88d41',
                nome: 'Henrique Souza',
                telefone: '(34) 99111-5678',
                mensagem: 'Tem suporte para caminhonete?',
                dados: { tipo_dispositivo: "macaco hidráulico", tipo_veiculo: "caminhonete" },
                contatado: false,
                foi_atendido: false,
                recebido_em: '2025-06-27T10:08:00Z'
            },
            {
                id: '2dbfb76f-fdf9-4d77-a9bc-917b1c019276',
                nome: 'Fernanda Lima',
                telefone: '(61) 98888-3344',
                mensagem: 'Tem vídeo explicativo de uso do macaco elétrico?',
                dados: { video_demonstrativo: true, tipo_dispositivo: "macaco elétrico" },
                contatado: true,
                foi_atendido: true,
                recebido_em: '2025-06-27T10:09:00Z'
            },
            {
                id: 'c81a9816-57a4-41c2-a3b2-369c3d4cb45a',
                nome: 'Bruno Farias',
                telefone: '(62) 99002-1122',
                mensagem: 'O macaco elétrico funciona no acendedor do carro?',
                dados: { tipo_dispositivo: "macaco elétrico", conector: "acendedor de cigarros" },
                contatado: false,
                foi_atendido: false,
                recebido_em: '2025-06-27T10:10:00Z'
            },
            {
                id: '79f1b25c-cb35-41b4-a234-6f2b03bca73d',
                nome: 'Suelen Rocha',
                telefone: '(91) 98700-9988',
                mensagem: 'Qual o tempo estimado para levantar um carro com o macaco elétrico?',
                dados: { tempo_operacao: "consultar", tipo_dispositivo: "macaco elétrico" },
                contatado: true,
                foi_atendido: false,
                recebido_em: '2025-06-27T10:11:00Z'
            },
            {
                id: 'db19f126-e2ef-4ae4-98e0-0344fc82dd34',
                nome: 'Diego Martins',
                telefone: '(51) 99666-7777',
                mensagem: 'Vocês têm suporte técnico caso o macaco hidráulico dê problema?',
                dados: { suporte_tecnico: true, tipo_dispositivo: "macaco hidráulico" },
                contatado: true,
                foi_atendido: true,
                recebido_em: '2025-06-27T10:12:00Z'
            },
            {
                id: '6d0b14f6-1746-43f7-8b17-fb8c3057b7e0',
                nome: 'Elisa Barros',
                telefone: '(92) 98754-3333',
                mensagem: 'Quero saber se é possível usar o macaco hidráulico na estrada com segurança.',
                dados: { tipo_dispositivo: "macaco hidráulico", uso_estrada: true },
                contatado: false,
                foi_atendido: false,
                recebido_em: '2025-06-27T10:13:00Z'
            },
            {
                id: '48d3c1ea-9f5f-4b1d-9a41-93e4c681e0d5',
                nome: 'Valter Lima',
                telefone: '(82) 99123-7777',
                mensagem: 'Tem frete grátis para compra do macaco elétrico?',
                dados: { tipo_dispositivo: "macaco elétrico", frete: "grátis" },
                contatado: false,
                foi_atendido: true,
                recebido_em: '2025-06-27T10:14:00Z'
            },
            {
                id: '33247657-7c88-48fc-9f5f-4210e91fc3a1',
                nome: 'Oficina do Zé',
                telefone: '(19) 99123-0000',
                mensagem: 'Somos uma oficina mecânica e estamos buscando fornecedor de macacos hidráulicos elétricos em volume.',
                dados: { tipo_cliente: "oficina", quantidade: 10 },
                contatado: false,
                foi_atendido: false,
                recebido_em: '2025-06-27T10:15:00Z'
            },
            {
                id: 'f56ef05e-d2dc-4b84-a8e9-99e8f6e8bb41',
                nome: 'Auto Mecânica Rápida',
                telefone: '(85) 99800-1234',
                mensagem: 'Gostaria de saber valores para compra de macacos hidráulicos para revenda em nossa loja.',
                dados: { tipo_cliente: "revenda", quantidade_estimativa: 20 },
                contatado: true,
                foi_atendido: true,
                recebido_em: '2025-06-27T10:16:00Z'
            }
        ],
        hot: [
            {
                id: 'hot-lead-1',
                nome: 'Lead Quente',
                telefone: 'A definir',
                mensagem: 'Informações em análise',
                dados: { status: "em_negociacao" },
                contatado: false,
                foi_atendido: false,
                recebido_em: '2025-06-27T12:00:00Z'
            }
        ]
    };

    // Lead toggle functionality
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const leadsSections = document.querySelectorAll('.leads-section');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetType = this.getAttribute('data-type');
            
            // Remove active class from all buttons
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all sections
            leadsSections.forEach(section => section.classList.remove('active'));
            // Show target section
            const targetSection = document.getElementById(targetType + '-leads');
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Keywords toggle functionality
    const keywordsToggleButtons = document.querySelectorAll('.keywords-toggle-btn');
    const keywordsSections = document.querySelectorAll('.keywords-section');

    keywordsToggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetType = this.getAttribute('data-keywords');
            
            // Remove active class from all buttons
            keywordsToggleButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all sections
            keywordsSections.forEach(section => section.classList.remove('active'));
            // Show target section
            const targetSection = document.getElementById(targetType + '-keywords');
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Modal functionality
    const modal = document.getElementById('leadModal');
    const closeBtn = document.querySelector('.close-btn');
    const leadDetails = document.getElementById('leadDetails');

    function openLeadModal(leadData) {
        const receivedDate = new Date(leadData.recebido_em).toLocaleString('pt-BR');
        
        leadDetails.innerHTML = `
            <div class="lead-field">
                <div class="lead-field-label">Nome</div>
                <div class="lead-field-value">${leadData.nome}</div>
            </div>
            <div class="lead-field">
                <div class="lead-field-label">Telefone</div>
                <div class="lead-field-value phone">${leadData.telefone}</div>
            </div>
            <div class="lead-field">
                <div class="lead-field-label">Mensagem</div>
                <div class="lead-field-value message">${leadData.mensagem}</div>
            </div>
            <div class="lead-field">
                <div class="lead-field-label">Recebido em</div>
                <div class="lead-field-value">${receivedDate}</div>
            </div>
            <div class="lead-status">
                <div class="status-item ${leadData.contatado ? 'contacted' : 'not-contacted'}">
                    ${leadData.contatado ? '✓ Contatado' : '⏳ Não contatado'}
                </div>
                <div class="status-item ${leadData.foi_atendido ? 'attended' : 'not-attended'}">
                    ${leadData.foi_atendido ? '✓ Atendido' : '⏳ Não atendido'}
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Add click functionality to lead items
    const leadItems = document.querySelectorAll('.lead-item');
    leadItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Determine if it's cold or hot lead based on current active section
            const activeTabs = document.querySelector('.toggle-btn.active');
            const leadType = activeTabs.getAttribute('data-type');
            
            if (leadType === 'cold' && index < leadsData.cold.length) {
                openLeadModal(leadsData.cold[index]);
            } else if (leadType === 'hot' && index < leadsData.hot.length) {
                openLeadModal(leadsData.hot[index]);
            }
        });
    });
});