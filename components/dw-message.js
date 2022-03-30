import {LitElement, html, css} from 'lit';

class DwMessage extends LitElement {
    static styles = css`
        :host {
            display: block;
            border: 1px solid red;
            padding: 10px;
        }
        div {
            background-color: #fcc;
        }
        p {
            margin-bottom: 0;
        }
    `

    static properties = {
        msg: { type: String },
    }

    constructor() {
        super();
        this.msg = 'Bienvenidos a este componente Lit!!';
    }
    
    render() {
        return html`
            <div>${this.msg}</div>
            <p><b>Esto también va aquí!!!</b></p>
            <button @click=${this.changeMsg}>Clic!!</button>
            `;
    }

    changeMsg() {
        this.msg = "He cambiado el mensaje";
    }
}

customElements.define('dw-message', DwMessage);
