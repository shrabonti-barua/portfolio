class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #f9fafb;
                    border-top: 1px solid #e5e7eb;
                }
                .footer-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 3rem 0;
                }
                .footer-links {
                    display: flex;
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .footer-link {
                    color: #6b7280;
                    transition: color 0.3s ease;
                }
                .footer-link:hover {
                    color: #3b82f6;
                }
                .copyright {
                    color: #9ca3af;
                    font-size: 0.875rem;
                }
            </style>
            <footer>
                <div class="footer-content">
                    <div class="footer-links">
                        <a href="#about" class="footer-link">About</a>
                        <a href="#projects" class="footer-link">Projects</a>
                        <a href="#contact" class="footer-link">Contact</a>
                    </div>
                    <p class="copyright">© ${new Date().getFullYear()} Shrabonti Barua. All rights reserved.</p>
                </div>
            </footer>
`;
    }
}
customElements.define('custom-footer', CustomFooter);