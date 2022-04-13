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
        completed: { type: Boolean },
    }

    constructor() {
        super();
        this.completed = false;
    }

    render() {
        return html`
            <button @click=${this.changeCompleted}>cambiar completado</button>
            ${this.headingTemplate}
            <eit-todo-search></eit-todo-search>
            ${this.bodyTemplate}
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
            ${this.completed
                ? icons.done
                : icons.fiber_manual_record
            }
        </div>
        `
    }

    changeCompleted() {
        this.completed = !this.completed;
    }
}
customElements.define('eit-todo-list', EitTodoList);
