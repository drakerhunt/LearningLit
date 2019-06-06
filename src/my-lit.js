import {html, render} from 'lit-html'


const hello = (name) => html`<h1>Hello ${name}</h1>`;

render(hello('Drake'), document.getElementById('id1'));