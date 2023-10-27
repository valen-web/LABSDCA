import { dispatch, global_state } from "../../../store/index";
import { change_pixel } from "../../../store/action";

enum pixel_props {
  "color" = "color",
  "id" = "id",
}

export class Pixel extends HTMLElement {
  properties: Record<pixel_props, string> = {
    color: "",
    id: "",
  };

  static get observedAttributes() {
    const properties: Record<pixel_props, null> = {
      color: null,
      id: null,
    };
    return Object.keys(properties);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  attributeChangedCallback(
    propName: pixel_props,
    oldValue: string,
    newValue: string
  ) {
    switch (propName) {
      case pixel_props.color:
        this.properties.color = newValue;
        break;
      case pixel_props.id:
        this.properties.id = newValue;
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
    link.setAttribute("href", "/src/components/desboard/pixel/pixesl.css");

    const pixel = this.ownerDocument.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.backgroundColor = `#${this.properties.color}`;

    this.shadowRoot?.appendChild(link);
    this.shadowRoot?.appendChild(pixel);

    pixel.addEventListener("click", () => {
      dispatch(change_pixel(`${this.id}`));
    });
  }
}

customElements.define("grid-pixel", Pixel);
