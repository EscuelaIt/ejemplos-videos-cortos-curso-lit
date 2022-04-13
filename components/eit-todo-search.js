import { LitElement, html, css } from 'lit';
import { icons } from '../libs/icons.js';

export class EitTodoSearch extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            div {
                display: flex;
                align-items: center;
                border: 1px solid #eee;
                padding: 1rem;
                margin-bottom: 1rem;
            }
            input {
                flex-grow: 1;
                margin-right: 1rem;
            }
        `
    ];

    render() {
        return html`
        <div>
            <input type="text" id="searchinput">
            <span>${icons.search}</span>
        </div>
        `;
    }
}
customElements.define('eit-todo-search', EitTodoSearch);
