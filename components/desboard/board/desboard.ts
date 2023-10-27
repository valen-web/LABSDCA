import "../export"
import { grid } from "../export";

const enum BoardProperties {
  title = "title",
  grid = "grid",
}

export class board_container extends HTMLElement {
  properties: Record<BoardProperties, string> = {
    title: "",
    grid: "",
  };

  static get observedAttributes() {
    const properties: Record<BoardProperties, null> = {
      title: null,
      grid: null,
    };
    return Object.keys(properties);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  attributeChangedCallback(
    propName: BoardProperties,
    oldValue: string,
    newValue: string
  ) {
    switch (propName) {
      case BoardProperties.title:
        this.properties.title = newValue;
        break;
      case BoardProperties.grid:
        this.properties.grid = newValue;
      default:
        break;
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const link = this.ownerDocument.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "/src/components/desboard/board/desboard.css");

    const contenedor = this.ownerDocument.createElement("div");
    contenedor.classList.add("board_container");

    const title = this.ownerDocument.createElement("h1");
    title.textContent = this.properties.title;
   
    const grid = this.ownerDocument.createElement("board-grid")
    grid.setAttribute("grid", `${this.properties.grid}`)

    contenedor.appendChild(title)
    contenedor.appendChild(grid)

    this.shadowRoot?.appendChild(link)
    this.shadowRoot?.appendChild(contenedor)
  }
}

customElements.define("board-board", board_container);
