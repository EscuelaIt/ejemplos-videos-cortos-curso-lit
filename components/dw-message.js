import {LitElement, html, css} from 'lit';

class DwMessage extends LitElement {
    static styles = css`
        :host {
            display: block;
            border: 1px solid red;
            padding: 10px;
        }
        div {
            display: none;
            background-color: #fcc;
        }
        p {
            margin-bottom: 0;
        }
        :host([show]) div {
           display: block;
        }
    `

    static properties = {
        msg: { 
            type: String,
            attribute: 'message',
            state: false,
        },
        show: { 
            type: Boolean,
            reflect: true,
         },
    }

    constructor() {
        super();
        this.msg = 'Bienvenidos a este componente Lit!!';
        this.show = false;
    }
    
    render() {
        return html`
            <div>${this.msg}</div>
            <button @click=${this.toggle}>${this.show ? "Ocultar" : "Mostrar"}</button>
            `;
    }

    toggle() {
        this.show = !this.show;
    }
}

customElements.define('dw-message', DwMessage);
