/**
 * Enterprise Cloud Architect - Interaction Script
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollObserver();
    initNavScroll();
    initSpotlightEffect();
    initTypewriter();
    initCounters();
    initSystemLogs();
    initNetworkAnimation();
});

/**
 * Network Connection Particle Animation
 */
function initNetworkAnimation() {
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    // Configuration
    // Increased particle count for "full" effect
    const particleCount = window.innerWidth < 768 ? 60 : 130;
    const connectionDistance = 180; // Longer connections
    const mouseDistance = 250; // Larger mouse interaction radius

    // Mouse state
    let mouse = { x: null, y: null };

    window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Resize handler
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Particle Class
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.color = Math.random() > 0.5 ? '#2563EB' : '#0EA5E9'; // Brand accent (Royal Blue) or Cyan
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse interaction
            if (mouse.x != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseDistance - distance) / mouseDistance;
                    const directionX = forceDirectionX * force * 0.6;
                    const directionY = forceDirectionY * force * 0.6;

                    this.vx -= directionX;
                    this.vy -= directionY;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            p.update();
            p.draw();

            // Connect particles
            for (let j = i; j < particles.length; j++) {
                let p2 = particles[j];
                let dx = p.x - p2.x;
                let dy = p.y - p2.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(37, 99, 235, ${1 - distance / connectionDistance})`; // Fade out lines (Royal Blue)
                    ctx.lineWidth = 1;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }

            // Connect to mouse
            if (mouse.x != null) {
                let dx = p.x - mouse.x;
                let dy = p.y - mouse.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(6, 182, 212, ${1 - distance / mouseDistance})`; // Cyan for mouse connections
                    ctx.lineWidth = 1;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    animate();
}

/**
 * Mobile Navigation Toggle
 */
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!toggleBtn || !mobileMenu) return;

    const toggleMenu = (isOpen) => {
        mobileMenu.classList.toggle('open', isOpen);
        toggleBtn.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    toggleBtn.addEventListener('click', () => toggleMenu(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
    mobileLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));
}

/**
 * Navbar Scroll Effect (Shrink on scroll)
 */
function initNavScroll() {
    const nav = document.querySelector('.glass-nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled', 'bg-brand-base/90', 'backdrop-blur-md', 'shadow-lg');
            nav.classList.remove('bg-transparent');
        } else {
            nav.classList.remove('scrolled', 'bg-brand-base/90', 'backdrop-blur-md', 'shadow-lg');
            nav.classList.add('bg-transparent');
        }
    });
}

/**
 * Spotlight Mouse Tracking
 */
function initSpotlightEffect() {
    const cards = document.querySelectorAll('.group'); // Applied to cards with 'group' class

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Use CSS variables if they exist, or just rely on hover states
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

/**
 * Intersection Observer for Fade In
 */
function initScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.classList.remove('opacity-0', 'translate-y-4');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section h2, section p, .card-spotlight').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
        observer.observe(el);
    });
}

/**
 * Typewriter Effect for Hero
 */
function initTypewriter() {
    const textElement = document.querySelector('.text-glow');
    if (!textElement) return;

    const phrases = ["IoT Systems", "Edge AI", "Embedded Firmware", "Cloud Architecture"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing loop
    setTimeout(type, 1000);
}

/**
 * Number Counter Animation
 */
function initCounters() {
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.text-4xl');
                counters.forEach(counter => {
                    const targetText = counter.innerText;
                    const targetValue = parseInt(targetText.replace(/\D/g, '')); // Extract number
                    const suffix = targetText.replace(/[0-9]/g, ''); // Extract suffix like % or +

                    let count = 0;
                    const duration = 2000;
                    const increment = targetValue / (duration / 16); // 60fps

                    const updateCount = () => {
                        count += increment;
                        if (count < targetValue) {
                            counter.innerHTML = `${Math.ceil(count)}<span class="text-brand-accent text-lg">${suffix}</span>`;
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.innerHTML = `${targetValue}<span class="text-brand-accent text-lg">${suffix}</span>`;
                        }
                    };
                    updateCount();
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
}

/**
 * System Log Simulation
 */
function initSystemLogs() {
    const logContainer = document.querySelector('.bg-black\\/80 .space-y-4');
    if (!logContainer) return;

    const logs = [
        "[INFO] Connection established to AWS IoT Core",
        "[DEBUG] Sensor data payload: { temp: 24.5, humidity: 60 }",
        "[SUCCESS] Firmware update v2.1.0 depoyed",
        "[WARN] High latency detected on node-04",
        "[INFO] MQTT Keep-alive sent"
    ];

    setInterval(() => {
        const logEntry = document.createElement('div');
        logEntry.className = "pl-4 border-l border-white/10 opacity-0 transition-opacity duration-500";
        const randomLog = logs[Math.floor(Math.random() * logs.length)];
        const timestamp = new Date().toISOString().split('T')[1].split('.')[0];

        logEntry.innerHTML = `
            <span class="text-slate-500">[LOG] ${timestamp}</span><br>
            "${randomLog}"
        `;

        // Insert before the cursor line
        const cursorLine = logContainer.lastElementChild;
        logContainer.insertBefore(logEntry, cursorLine);

        // Fade in
        requestAnimationFrame(() => logEntry.classList.remove('opacity-0'));

        // Keep list short
        if (logContainer.children.length > 6) {
            logContainer.removeChild(logContainer.children[1]); // Remove oldest log (index 0 is header)
        }
    }, 3000);
}

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }
});
