class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: white;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                    border-bottom: 1px solid #e5e7eb;
                }
                .nav-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 1.5rem;
                    max-width: 1280px;
                    margin: 0 auto;
                }
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                }
                .nav-link {
                    color: #4b5563;
                    font-weight: 500;
                    transition: color 0.2s ease;
                    font-size: 0.95rem;
                }
                .nav-link:hover {
                    color: #4f46e5;
                }
                .logo {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #111827;
                    letter-spacing: -0.5px;
                }
.mobile-menu-btn {
                    display: none;
                }
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <nav class="navbar">
                <div class="nav-container">
                    <a href="#" class="logo">Shrabonti</a>
                    <div class="nav-links">
                        <a href="#about" class="nav-link">About</a>
                        <a href="#education" class="nav-link">Education</a>
                        <a href="#skills" class="nav-link">Skills</a>
                        <a href="#projects" class="nav-link">Projects</a>
                        <a href="#contact" class="nav-link">Contact</a>
</div>
                    <button class="mobile-menu-btn">
                        <i data-feather="menu"></i>
                    </button>
                </div>
</div>
            </nav>
`;
    }
}
customElements.define('custom-navbar', CustomNavbar);