import "../export"
import { addObserver, global_state } from "../../../store/index";
import { Function } from "../../../types/funtion";

const enum grid_propieties {
  grid = "grid",
}

export class grid extends HTMLElement {
  grid?: string;

  static get observedAttributes() {
    const properties: Record<grid_propieties, null> = {
      grid: null,
    };
    return Object.keys(properties);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  attributeChangedCallback(
    propName: grid_propieties,
    oldValue: string,
    newValue: string
  ) {
    switch (propName) {
      case grid_propieties.grid:
        this.grid = newValue;
      default:
        break;
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = "";
      const link = this.ownerDocument.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", "/src/components/desboard/grid/grid.css");

      const pixelContainer = this.ownerDocument.createElement("div");
      pixelContainer.classList.add("grid_container");

      const pixels = Function(global_state.selected);
      pixels?.map((element) => {
        pixelContainer.appendChild(element);
      });

      this.shadowRoot?.appendChild(link);
      this.shadowRoot?.appendChild(pixelContainer);
      console.log(pixelContainer);
    }
  }
}

customElements.define("board-grid", grid);



