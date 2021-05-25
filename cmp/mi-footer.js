class MiFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = /* html */
        `Copyright &copy; 2021 Kymberly Decena Escorsa.`;

    }
}
customElements.define("mi-footer",MiFooter);
