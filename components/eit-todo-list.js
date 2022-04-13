import { LitElement, html, css } from 'lit';
import { icons } from '../libs/icons.js';
import './eit-todo-search.js';

export class EitTodoList extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            h1 {
                font-size: 1.2rem;
                border-bottom: 1px solid #eee;
                padding-bottom: 0.5rem;
            }
            div {
                background-color: #eee;
                padding: 1rem;
            }
        `
    ];

    static properties = {
        loggedIn: { type: Boolean },
        role: { type: String },
    }

    constructor() {
        super();
        this.loggedIn = false;
        this.role = 'premium';
    }

    render() {
        return html`
            <button @click=${this.changeLoggedIn}>cambiar logueado</button>
            ${ this.loggedIn 
                ? html`
                    ${this.headingTemplate}
                    <eit-todo-search></eit-todo-search>
                    ${this.bodyTemplate}
                    ${this.sayHello(this.role)}
                ` 
                : 'no está logueado' 
            }  
        `;
    }

    get headingTemplate() {
        return html`
            <h1>Todo list</h1>
        `;
    }

    get bodyTemplate() {
        return html`
        <div>
            ${icons.done}
        </div>
        `
    }

    changeLoggedIn() {
        this.loggedIn = !this.loggedIn;
    }

    sayHello(role) {
        switch(role) {
            case 'administrator':
                return 'Hola <b>Administrador</b>';
            case 'premium':
                return this.userPremiumTemplate;
            default:
                return 'Hola usuario común';
        }
    }

    get userPremiumTemplate() {
        return html`
            <p>Este es el menú para el usuario premium</p>
            <ul>
                <li>Uno</li>
                <li>Dos</li>
            </ul>
        `
    }
}
customElements.define('eit-todo-list', EitTodoList);
