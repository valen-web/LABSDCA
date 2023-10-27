import "./components/desboard/export";
import data from "./components/desboard/data";
import { global_state } from "./store/index";
import { Function } from "./types/funtion";
import { addObserver } from "./store/index";

export class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ""

        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/index.css")
        
        const mainContainer = this.ownerDocument.createElement("section")
        mainContainer.classList.add("boardContainer")

        data.map((dataElement) => {
            const board = this.ownerDocument.createElement("board-board")
            board.setAttribute("title", `${dataElement.title}`)
            board.setAttribute("grid", `${dataElement.grid}`)
            mainContainer.appendChild(board)
        })

        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(mainContainer);
       
    }
  }
}

customElements.define("app-container", AppContainer);
