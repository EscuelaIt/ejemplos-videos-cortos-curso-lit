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
            ul {
                margin: 1rem 0;
                padding: 0;
            }
            li {
                display: flex;
                align-items: center;
                list-style-type: none;
                margin-bottom: 0.8rem;
            }
            li span {
                margin-left: 0.5rem;
            }
        `
    ];

    static properties = {
        todos: { type: Array },
    }

    constructor() {
        super();
        this.todos = [
            { 
                title: 'Comprar en el super',
                completed: false,
            },
            { 
                title: 'Llamar a mamá',
                completed: false,
            },
            { 
                title: 'Descongelar la lasaña',
                completed: true,
            },
        ];
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
        <ul>
            ${this.todos.map( (todo) => html`
                <li>
                    ${todo.completed
                        ? icons.done
                        : icons.fiber_manual_record
                    }
                    <span>${todo.title}</span>
                </li>
            ` )}
        </ul>
        `
    }
}
customElements.define('eit-todo-list', EitTodoList);
