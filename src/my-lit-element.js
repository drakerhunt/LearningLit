import {LitElement, html} from 'lit-element';

export class MyLitElement extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        }
    }

    constructor() {
        super();
        this.name = "Drake";
    }

    render() {
        return html`
            <h1>Hello ${this.name} from lit element!</h1>
            <button @click=${this._changeName}>Press</button>
            `;
    }

    _changeName() {
        if(this.name == "Drake") {
            this.name = "HUNT";
        } else {
            this.name = "Drake";
        }
    }
}

customElements.define('my-lit-element', MyLitElement);