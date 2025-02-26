import { LitElement, html, css } from "lit";

export class MgFaIcon extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: var(--icon-size, 24px);
        color: var(--icon-color, black);
        transition: color 0.3s ease-in-out, background-color 0.3s;
        /* border: var(--icon-border,1px solid black);  */
         border-radius: 50%;
        padding: 5px;
        background-color: transparent;
      }

      :host(:hover) {
        color: var(--icon-hover-color, var(--icon-color, black));
        background-color: red;
        cursor: pointer;
      }

      i {
        font-size: inherit;
        color: inherit;
      }
    `,
  ];

  static get properties() {
    return {
      icon_name: { type: String },
      icon_variant: { type: String },
    };
  }

  constructor() {
    super();
    this.icon_variant = "fa-solid";
  }

  handleClick(e)
  {
    this.dispatchEvent(new CustomEvent('click'));
  }

  handleFaInString(string)
  {
    if (!this.icon_name.includes("fa-"))
      this.icon_name = "fa-" + this.icon_name;
    if (!this.icon_variant.includes("fa-"))
      this.icon_variant = "fa-" + this.icon_variant;
  }

  // temporary fix for the icon pack until a stable solution is found
  render() {
    this.handleFaInString()

    return html`
      <style>
        @import url("./libs/fontawesome/fontawesome-free-6.5.2-web/fontawesome-free-6.5.2-web/css/all.min.css");
      </style>

      <i @click=${this.handleClick} class="${this.icon_variant + " " + this.icon_name}"></i>
    `;
  }
}
customElements.define("mg-fa-icon", MgFaIcon);
